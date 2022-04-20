'reach 0.1';
'use strict';
/* eslint-disable */

export const main = Reach.App(() => {
  const D = Participant('Admin', {
    price: UInt,
    deadline: UInt,
    ready: Fun([], Null),
    description: Bytes(256),
  });
  const A = API('Attendee', {
    viewDescription: Fun([], Bytes(256)),
    iWillGo: Fun([], Bool),
  });
  const C = API('Checkin', {
    theyCame: Fun([Address], Bool),
    timesUp: Fun([], Bool),
  });
  init();

  D.only(() => {
    const price = declassify(interact.price);
    const deadline = declassify(interact.deadline);
    const description = declassify(interact.description);
  });
  D.publish(price, deadline, description);
  commit();
  D.publish();
  D.interact.ready();

  commit();

  const [ _, k2 ] =
  call(A.viewDescription)
    // .pay((a) => a)
    k2(description);

  // commit();

  const deadlineBlock = relativeTime(deadline);
  const RSVPs = new Set();

  const [ keepGoing, howMany ] =
    parallelReduce([true, 0])
    .define(() => {
      const checkIWillGo = (who) => {
        check( ! RSVPs.member(who), "not yet" );
        return () => {
          RSVPs.insert(who);
          return [ keepGoing, howMany + 1 ];
        };
      };
      const checkTheyCame = (actor, who) => {
        check( actor == D, "you are the boss");
        check( RSVPs.member(who), "yep" );
        return () => {
          transfer(price).to(who);
          RSVPs.remove(who);
          return [ keepGoing, howMany - 1 ];
        };
      };
    })
    .invariant(
      balance() == howMany * price
      && RSVPs.Map.size() == howMany
    )
    .while( keepGoing )
    .api(A.iWillGo,
      () => { const _ = checkIWillGo(this); },
      () => price,
      (k) => {
        k(true);
        return checkIWillGo(this)();
    })
    // .api(A.viewDescription,
    //   () => 0,
    //   (k) => {
    //     k(description);
        // return checkIWillGo(this)();
    // })
    .api(C.theyCame,
      (who) => { const _ = checkTheyCame(this, who); },
      (_) => 0,
      (who, k) => {
        k(true);
        return checkTheyCame(this, who)();
    })
    .timeout( deadlineBlock, () => {
      const [ [], k ] = call(C.timesUp);
      k(true);
      return [ false, howMany ]
    });
  const leftovers = howMany;
  transfer(leftovers * price).to(D);
  commit();
  exit();
});