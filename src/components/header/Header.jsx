import "./Header.css";
import logo from "./../../img/logo-black.png";
import MobileMenu from "../mobileMenu/MobileMenu";
// import { useEffect, useState } from "react";
// import useLocalStorage from "use-local-storage";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function Header() {
  // const [count, setCount] = useLocalStorage("count", 0);
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
  //   } else {
  //     document.getElementById("js-scroll").style.top = "-100px";
  //   }
  //   prevScrollpos = currentScrollPos;
  // };

  // addEventListener("scroll", () => {
  //   let navbar1 = document.getElementById("js-scroll");
  //   if (window.pageYOffset <= 0 || window.pageYOffset <= 100) {
  //     navbar1.style.top = "0";
  //   }
  // });

  // const navLinkEls = document.querySelectorAll(".js-text");
  // const sectionEls = document.querySelectorAll(".section");

  // let currentSection = "section1";
  // window.addEventListener("scroll", () => {
  //   sectionEls.forEach((sectionEl) => {
  //     if (window.scrollY >= sectionEl.offsetTop) {
  //       currentSection = sectionEl.id;
  //     }
  //   });
  //   navLinkEls.forEach((navLinksEl) => {
  //     if (navLinksEl.href.includes(currentSection)) {
  //       document.querySelector(".active").classList.remove("active");
  //       navLinksEl.classList.add("active");
  //     }
  //   });
  // });

  return (
    <>
      <MobileMenu />
      <header id="js-scroll" className="header">
        <a href="index.html">
          <img className="logo-header js-logo" src={logo} alt="heeeyooo" />
        </a>
        {/* <div className="counter-container">
          <button
            className="decrease"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <p>{count}</p>
          <button
            className="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <i className="fa-solid fa-plus"></i>
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
              <a className="link2 js-text" href="#section2">
                Skills
              </a>
            </li>
            <li>
              <a className="link3 js-text" href="#section3">
                Projects
              </a>
            </li>
            <li>
              <a className="link4 js-text" href="#section4">
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
