import './home.css'
import { useState } from 'react';


function Home () {
    const [first, setFirst] = useState(true);
    return (
        <section class="hero">
      <div class="main-width">
        <header>
          <div class="logo">
            <i class="fa-brands fa-weebly"></i>
          </div>

          <nav>
            <div class="hamb" onClick={() => setFirst(!first)}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul class="nav-list open">
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
            <h3>Hi, There!</h3>
            <h1>Welcome <span class="input">To RSVP DApp Using Reach.sh.</span></h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              quisquam repellendus, enim dolorem dignissimos recusandae fugit
              perspiciatis exercitationem deleniti ut illum quos necessitatibus
              asperiores vero ipsum dolore? Vitae, ipsam ea.
            </p>
            <div class="social">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-behance-square"></i></a>
              <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest"></i></a>
            </div>
            <div class="forbuttons">
              <button type="button">Create Events</button>
              <button type="button">Events</button>
            </div>
          </div>

          <div class="bottom">
            <p>@ 2022 RSVP app - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
    )
}


export default Home;