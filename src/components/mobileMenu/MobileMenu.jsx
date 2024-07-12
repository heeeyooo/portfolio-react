import { Outlet, Link } from "react-router-dom";
import "./MobileMenu.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function MobileMenu() {
  const closeBtn = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "auto";
  };

  const closeMenu = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display = "none";
    document.body.style.overflowY = "auto";
  };

  addEventListener("scroll", () => {
    const links1 = document.querySelectorAll(".menu-link1");
    const links2 = document.querySelectorAll(".menu-link2");
    const links3 = document.querySelectorAll(".menu-link3");
    const links4 = document.querySelectorAll(".menu-link4");

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
    } else if (window.scrollY < 1500) {
      links1.forEach((link) => {
        link.classList.remove("active-link");
      });
      links2.forEach((link) => {
        link.classList.add("active-link");
      });
      links3.forEach((link) => {
        link.classList.remove("active-link");
      });
    } else if (window.scrollY < 4500) {
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
    } else if (window.scrollY > 4500) {
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
      <div id="mobile-menu" className="menu-container">
        <button
          className="exit-menu-button icon-color"
          onClick={closeBtn}
          id="closeBtn"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="link-menu-container">
          <Link
            onClick={closeMenu}
            className="link1 js-text menu-link1 active-link"
            to="/"
          >
            Home
          </Link>
          {/* <a
            onClick={closeMenu}
            className="link1 js-text menu-link1 active-link"
            href="#section1"
          >
            Home
          </a> */}
          <Link
            onClick={closeMenu}
            className="link2 js-text menu-link2"
            to="/skills"
          >
            Skills
          </Link>
          {/* <a
            onClick={closeMenu}
            className="link2 js-text menu-link2"
            href="#section2"
          >
            Skills
          </a> */}
          <Link
            onClick={closeMenu}
            className="link3 js-text menu-link3"
            to="/portfolio"
          >
            Projects
          </Link>
          {/* <a
            onClick={closeMenu}
            className="link3 js-text menu-link3"
            href="#section3"
          >
            Projects
          </a> */}
          <Link
            onClick={closeMenu}
            className="link4 js-text menu-link4"
            to="/contact"
          >
            Contact me
          </Link>
          {/* <a
            onClick={closeMenu}
            className="link4 js-text menu-link4"
            href="#section4"
          >
            Contact me
          </a> */}
          <a className="link5 js-text" href={Resume} target="_blank">
            Resume
          </a>
        </div>

        <div className="menu-socials-icons">
          <a
            className="icon-color"
            href="https://github.com/heeeyooo"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="icon-color"
            href="https://www.instagram.com/heeeyooo_?igsh=N2ZreTdicmF1dDlk&utm_source=qr"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="icon-color"
            href="https://www.facebook.com/stepan.dordyay.5"
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            className="icon-color"
            href="https://twitter.com/Heeeyooo_"
            target="_blank"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className="icon-color"
            href="https://www.twitch.tv/heeeyooo_"
            target="_blank"
          >
            <i className="fa-brands fa-twitch"></i>
          </a>
          <a
            className="icon-color"
            href="https://www.linkedin.com/in/stepan-dordiai-245715310"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
