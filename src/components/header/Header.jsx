import "./Header.css";
import logo from "./../../img/logo-black.png";
import logo2 from "./../../img/my-logo-white.png";
import MobileMenu from "../mobileMenu/MobileMenu";

function Header() {
  const openBtn = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
  };

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("js-scroll").style.top = "0";
    } else {
      document.getElementById("js-scroll").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  addEventListener("scroll", () => {
    let navbar1 = document.getElementById("js-scroll");
    if (window.pageYOffset <= 0 || window.pageYOffset <= 100) {
      navbar1.style.top = "0";
    }
  });

  return (
    <>
      <MobileMenu />
      {/* <audio
        src="Bloody-Mary(PagalWorld).mp3"
        type="audio/mpeg"
        id="music"
      ></audio> */}
      <header id="js-scroll" className="header">
        <a href="index.html">
          <img className="logo-header js-logo" src={logo} alt="heeeyooo" />
        </a>
        {/* <div className="new-features">
          <button className="day-night-style icon-color" id="day-night-button">
            <i className="fa-solid fa-moon"></i>
          </button>
          <button className="song-button icon-color" id="music-button">
            <i className="fa-solid fa-play"></i>
          </button>
        </div> */}

        <button
          onClick={openBtn}
          id="openBtn"
          className="burger-button icon-color"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className="nav">
          <ul>
            <li>
              <a className="link1 js-text" href="#section1">
                Home
              </a>
            </li>
            <li>
              <a className="link2 js-text" href="#section3">
                Skills
              </a>
            </li>
            <li>
              <a className="link3 js-text" href="#section2">
                Portfolio
              </a>
            </li>
            <li>
              <a className="link4 js-text" href="#section4">
                Contact me
              </a>
            </li>
            <li>
              <a
                className="link5 js-text"
                href="pdf/heeeyooo-resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
