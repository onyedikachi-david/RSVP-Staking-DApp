import React from 'react';
import './components/home.css';
// import { useState } from 'react';


import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';
const stdlib = loadStdlib('ALGO');

stdlib.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect })); 

const {standardUnit} = stdlib;
const defaultPrice = '20';
const defaultDeadline = '50';



//       }
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {mode: 'Connect', first: true}
    }

    

    changeColor = () => {
        this.setState({first: !this.state.first});
      }

    asyncCallCreate = async () => {
        const acc = await stdlib.getDefaultAccount();
        try {
          const faucet = await stdlib.getFaucet();
          stdlib.transfer(faucet, acc, stdlib.parseCurrency(100));
        } catch (e) {
          console.error(e);
        }
        this.setState({mode: 'Select', acc });
      }


    asyncCallEvent = async () => {
        const acc = await stdlib.getDefaultAccount();
        try {
          const faucet = await stdlib.getFaucet();
          stdlib.transfer(faucet, acc, stdlib.parseCurrency(100));
        } catch (e) {
          console.error(e);
        }
        this.setState({mode: 'SelectEvent', acc });
    }
    
    selectRole(role) { this.setState({mode: 'RunRole', role}); }
    doCreate()  { this.selectRole(<Create  acc={this.state.acc} />); }
    doRSVP()    { this.selectRole(<RSVP    acc={this.state.acc} />); }
    doCheckin() { this.selectRole(<Checkin acc={this.state.acc} />); }
    doClose()   { this.selectRole(<Close   acc={this.state.acc} />); }
    render() {
      const {mode, addr, bal, role} = this.state;
      const parent = this;
      let app = null;
      if (mode === 'Connect') {
        app = (
            <section className="hero">
            <div className="main-width">
              <header>
                <div className="logo">
                  <i className="fa-brands fa-weebly"></i>
                </div>
      
                <nav>
                  <div className="hamb" onClick={this.changeColor}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
      
                  <ul className={this.state.first ? "nav-list" : "nav-list open"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li className="btn"><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
              </header>
      
              <div className="container">
                <div className="hero-text">
                  <h3>Hi, There!</h3>
                  <h1>Welcome <span className="input">To Umoja RSVP hub.</span></h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
                    quisquam repellendus, enim dolorem dignissimos recusandae fugit
                    perspiciatis exercitationem deleniti ut illum quos necessitatibus
                    asperiores vero ipsum dolore? Vitae, ipsam ea.
                  </p>
                  <div className="social">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-behance-square"></i></a>
                    <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                  </div>
                  <div class="forbuttons">
                    <button type="button" onClick={this.asyncCallCreate}>Create Events</button>
                    <button type="button" onClick={this.asyncCallEvent}>Events</button>
                  </div>
                </div>
      
                <div className="bottom">
                  <p>@ 2022 RSVP app - All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </section>
        )
      } else if (mode === 'Select') {
        app = (
            <section class="hero">
            <div class="main-width">
              <header>
                <div class="logo">
                  <i class="fa-brands fa-weebly"></i>
                </div>
      
                <nav>
                  <div class="hamb" onClick={this.changeColor}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
      
                  <ul class={this.state.first ? "nav-list" : "nav-list open"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li class="btn"><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
              </header>
      
              <div class="container">
                <div class="hero-text">
                  
                  <div class="forbuttons">
                    <button type="button" onClick={() => parent.doCreate()}>Schedule Events</button>
                    <button type="button" onClick={() => parent.doClose()}>Close an Event</button>
                  </div>
                </div>
      
                <div class="bottom">
                  <p>@ 2022 RSVP app - All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </section>
          //comment off
          
        );
      }else if (mode === 'SelectEvent') {
        app = (

            <section class="hero">
            <div class="main-width">
              <header>
                <div class="logo">
                  <i class="fa-brands fa-weebly"></i>
                </div>
      
                <nav>
                  <div class="hamb" onClick={this.changeColor}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
      
                  <ul class={this.state.first ? "nav-list" : "nav-list open"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li class="btn"><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
              </header>
      
              <div class="container">
                <div class="hero-text">
                  
                  <div class="forbuttons">
                    <button type="button" onClick={() => parent.doRSVP()}>Rsvp an Event</button>
                    <button type="button" onClick={() => parent.doCheckin()}>Checkin Into an Event</button>
                  </div>
                </div>
      
                <div class="bottom">
                  <p>@ 2022 RSVP app - All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </section>
          //comment off


          
        );
      } else { // 'RunRole'
        app = role;
      }
      return (
        <div className="App">
            {app}
        </div>
      );
    }
  }
  
  class Create extends React.Component {
    constructor(props) {
      super(props);
      this.setState({mode: 'EnterInfo'});
    }
    async enterInfo(priceStandard, deadline) {
      const ctc = this.props.acc.contract(backend);
      this.setState({mode: 'Wait', priceStandard, deadline, ctc});
      console.log({priceStandard, deadline});
      try {
        await ctc.p.Admin({
          price: stdlib.parseCurrency(priceStandard),
          deadline: stdlib.bigNumberify(deadline),
          ready: () => {
            throw 42;
          }
        });
      } catch (e) {
        if ( e !== 42 ) {
          throw e;
        }
      }
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      this.setState({mode: 'Done', ctcInfoStr});
    }
    render() {
      let me = null;
      const parent = this;
      const mode = this.state?.mode || 'EnterInfo';
      if (mode === 'EnterInfo') {
        const priceStandard = this.state?.priceStandard || defaultPrice;
        const deadline = this.state?.deadline || defaultDeadline;
        me = (
          <div className="hero">

            <div className="rsvp_part">
                What is the RSVP fee?
            <br />
            <textarea
              onChange={(e) => this.setState({
                priceStandard: e.currentTarget.value})}
              placeholder={defaultPrice}
            />
            <br />
            What is the deadline?
            <br />
            <textarea
              onChange={(e) => this.setState({
                deadline: e.currentTarget.value})}
              placeholder={defaultDeadline}
            />
            <br />
            <button onClick={() => parent.enterInfo(
              priceStandard,
              deadline,
            )}
            >Launch</button>
            </div>
            
          </div>
        );
      } else if (mode === 'Wait') {
        me = (
          <div>
            Please wait while your event is initialized.
          </div>
        );
      } else { // 'Done'
        const ctcInfoStr = this.state?.ctcInfoStr || '';
        me = (
          <div>
            Your event is ready for users to RSVP to!
            <br />
  
            Please share the following contract info with them:
  
            <pre className='ContractInfo'>
              {ctcInfoStr}
            </pre>
          </div>
        );
      }
      return (
        <div className="Create">
          {me}
        </div>
      );
    }
  }
  
  class RSVP extends React.Component {
    constructor(props) {
      super(props);
      this.setState({mode: 'EnterInfo'});
    }
    async doRSVP(ctcInfoStr) {
      const ctcInfo = JSON.parse(ctcInfoStr);
      const ctc = this.props.acc.contract(backend, ctcInfo);
      this.setState({mode: 'Wait', ctc});
      await ctc.apis.Attendee.iWillGo();
      this.setState({mode: 'Done'});
    }
    render() {
      let me = null;
      const parent = this;
      const mode = this.state?.mode || 'EnterInfo';
      if (mode === 'EnterInfo') {
        const ctcInfoStr = this.state?.ctcInfoStr || '';
        me = (
          <div className="hero">
              <div className="rsvp_part">
                What is the event info?
                <br />
                <textarea
                className='ContractInfo'
                spellCheck='false'
                onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
                placeholder='{}'
                />
                <br />
                <button
                disabled={!ctcInfoStr}
                onClick={() => parent.doRSVP(ctcInfoStr)}
                >RSVP</button>
              </div>
            
          </div>
        );
      } else if (mode === 'Wait') {
        me = (
          <div>
            Please wait while your RSVP is confirmed.
          </div>
        );
      } else { // 'Done'
        const {acc} = this.props;
        me = (
          <div>
            You have RSVP'd.
            <br />
  
            Your address is:
  
            <pre className='ContractInfo'>
              {stdlib.formatAddress(acc)}
            </pre>
          </div>
        );
      }
      return (
        <div className="RSVP">
          {me}
        </div>
      );
    }
  }
  
  class Checkin extends React.Component {
    constructor(props) {
      super(props);
      this.setState({mode: 'EnterInfo'});
    }
    async doCheckin(ctcInfoStr, who) {
      const ctcInfo = JSON.parse(ctcInfoStr);
      const ctc = this.props.acc.contract(backend, ctcInfo);
      this.setState({mode: 'Wait', ctc, who});
      await ctc.apis.Checkin.theyCame(who);
      this.setState({mode: 'Done'});
    }
    render() {
      let me = null;
      const parent = this;
      const mode = this.state?.mode || 'EnterInfo'
      if (mode === 'EnterInfo') {
        const ctcInfoStr = this.state?.ctcInfoStr || '';
        const who = this.state?.who || '';
        me = (
          <div className="hero">
              <div className="rsvp_part">
                    What is the event info?
            <br />
            <textarea
              className='ContractInfo'
              spellCheck='false'
              onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
              placeholder='{}'
            />
            <br />
            Who is checking in?
            <br />
            <textarea
              onChange={(e) => this.setState({
                who: e.currentTarget.value})}
            />
            <br />
            <button
              disabled={!ctcInfoStr}
              onClick={() => parent.doCheckin(ctcInfoStr, who)}
            >RSVP</button>
              </div>
            
          </div>
        );
      } else if (mode === 'Wait') {
        me = (
          <div>
            Please wait while your checkin is confirmed.
          </div>
        );
      } else { // 'Done'
        const who = this.state?.who || '';
        me = (
          <div>
            Done! You have checked in {who}.
            <br />
          </div>
        );
      }
      return (
        <div className="Checkin">
          {me}
        </div>
      );
    }
  }
  
  class Close extends React.Component {
    constructor(props) {
      super(props);
      this.setState({mode: 'EnterInfo'});
    }
    async doClose(ctcInfoStr) {
      const ctcInfo = JSON.parse(ctcInfoStr);
      const ctc = this.props.acc.contract(backend, ctcInfo);
      this.setState({mode: 'Wait', ctc});
      await ctc.apis.Checkin.timesUp();
      this.setState({mode: 'Done'});
    }
    render() {
      let me = null;
      const parent = this;
      const mode = this.state?.mode || 'EnterInfo';
      if (mode === 'EnterInfo') {
        const ctcInfoStr = this.state?.ctcInfoStr || '';
        me = (
          <div className='hero'>
            What is the event info?
            <br />
            <textarea
              className='ContractInfo'
              spellCheck='false'
              onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
              placeholder='{}'
            />
            <br />
            <button
              disabled={!ctcInfoStr}
              onClick={() => parent.doClose(ctcInfoStr)}
            >Close</button>
          </div>
        );
      } else if (mode === 'Wait') {
        me = (
          <div>
            Please wait while your close is confirmed.
          </div>
        );
      } else { // 'Done'
        me = (
          <div>
            You have closed the event.
          </div>
        );
      }
      return (
        <div className="Close">
          {me}
        </div>
      );
    }
  }

  export default App;


  