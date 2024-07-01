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
  return (
    <div id="mobile-menu" className="menu-container">
      <button
        className="exit-menu-button icon-color"
        onClick={closeBtn}
        id="closeBtn"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="link-menu-container">
        <a onClick={closeMenu} className="link1 js-text" href="#section1">
          Home
        </a>
        <a onClick={closeMenu} className="link2 js-text" href="#section2">
          Skills
        </a>
        <a onClick={closeMenu} className="link3 js-text" href="#section3">
          Projects
        </a>
        <a onClick={closeMenu} className="link4 js-text" href="#section4">
          Contact me
        </a>
        <a className="link5 js-text" href={Resume}>
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
  );
}

export default MobileMenu;
