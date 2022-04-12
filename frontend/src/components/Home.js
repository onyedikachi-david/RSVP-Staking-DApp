import shape from '../img/shape.png';
import person from '../img/person.png';

function Home () {
    return (
        <main>
      <div className="big-wrapper light">
        <img src={shape} alt="" className="shape" />

        <header>
          <div className="container">
            <div className="logo">
              <img src="https://www.clipartmax.com/png/middle/69-694407_rsvp-logo.png" alt="Logo" />
              <h3>RSVP</h3>
            </div>

            <div className="links">
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#" className="btn">Connect</a></li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger-menu">
              <div className="bar"></div>
            </div>
          </div>
        </header>

        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="big-title">
                <h1>Future is here,</h1>
                <h1>Don't forget to RSVP..</h1>
              </div>
              <p className="text">
              Not showing up to a wedding post-RSVP guarantees expulsion from the couple's A list in the future.
              </p>
              <div className="cta">
                <a href="#" className="btn">Connect Wallet</a>
              </div>
            </div>

            <div className="right">
              <img src={person} alt="Person Image" className="person" />
            </div>
          </div>
        </div>

        <div className="bottom-area">
          <div className="container">
            <button className="toggle-btn">
              <i className="far fa-moon"></i>
              <i className="far fa-sun"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
    )
}


export default Home;