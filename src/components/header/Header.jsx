import MobileMenu from "../mobileMenu/MobileMenu";
import "./Header.css";
import logo from "./../../img/Logo-black.svg";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function Header() {
  const openBtn = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "flex";
    document.body.style.overflowY = "hidden";
  };

  // let prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   let currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("js-scroll").style.top = "0";
  //     document.getElementById("js-scroll").style.boxShadow =
  //       "0 8px 15px rgba(0, 0, 0, 0.1)";
  //   } else {
  //     document.getElementById("js-scroll").style.top = "-100px";
  //     document.getElementById("js-scroll").style.boxShadow = "none";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  // addEventListener("scroll", () => {
  //   if (window.pageYOffset <= 0 || window.pageYOffset <= 100) {
  //     document.getElementById("js-scroll").style.top = "0";
  //     document.getElementById("js-scroll").style.boxShadow =
  //       "0 8px 15px rgba(0, 0, 0, 0.1)";
  //   }
  // });

  addEventListener("scroll", () => {
    const links1 = document.querySelectorAll(".head-link1");
    const links2 = document.querySelectorAll(".head-link2");
    const links3 = document.querySelectorAll(".head-link3");
    const links4 = document.querySelectorAll(".head-link4");

    if (window.scrollY < 700) {
      links1.forEach((link) => {
        link.classList.add("active-link");
      });
      links2.forEach((link) => {
        link.classList.remove("active-link");
      });
      links3.forEach((link) => {
        link.classList.remove("active-link");
      });
    } else if (window.scrollY < 1900) {
      links1.forEach((link) => {
        link.classList.remove("active-link");
      });
      links2.forEach((link) => {
        link.classList.add("active-link");
      });
      links3.forEach((link) => {
        link.classList.remove("active-link");
      });
    } else if (window.scrollY < 3000) {
      links3.forEach((link) => {
        link.classList.add("active-link");
      });
      links2.forEach((link) => {
        link.classList.remove("active-link");
      });

      links4.forEach((link) => {
        link.classList.remove("active-link");
      });
      links1.forEach((link) => {
        link.classList.remove("active-link");
      });
    } else if (window.scrollY > 3000) {
      links4.forEach((link) => {
        link.classList.add("active-link");
      });
      links2.forEach((link) => {
        link.classList.remove("active-link");
      });
      links3.forEach((link) => {
        link.classList.remove("active-link");
      });
      links1.forEach((link) => {
        link.classList.remove("active-link");
      });
    }
  });

  return (
    <>
      <MobileMenu />
      <header id="js-scroll" className="header">
        <a href="index.html">
          <img className="logo-header js-logo" src={logo} alt="heeeyooo" />
        </a>
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
              <a
                className="link1 js-text head-link1 active-link"
                href="#section1"
              >
                Home
              </a>
            </li>
            <li>
              <a className="link2 js-text head-link2" href="#section2">
                Skills
              </a>
            </li>
            <li>
              <a className="link3 js-text head-link3" href="#section3">
                Projects
              </a>
            </li>
            <li>
              <a className="link4 js-text head-link4" href="#section4">
                Contact me
              </a>
            </li>
            <li>
              <a className="link5 js-text" href={Resume} target="_blank">
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
