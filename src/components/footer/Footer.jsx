import "./Footer.css";
import logo from "./../../img/logo-black.png";

function Footer() {
  setInterval(() => {
    const changeText = document.getElementById("js-quote");

    if (changeText.textContent === "effectively") {
      changeText.textContent = "wisely";
    } else if (changeText.textContent === "wisely") {
      changeText.textContent = "correctly";
    } else {
      changeText.textContent = "effectively";
    }
  }, 2000);
  return (
    <footer className="footer-section js-footer">
      <a className="link-logo-footer" href="index.html">
        <img className="logo-footer js-logo" src={logo} alt="" />
      </a>
      <q className="main-quote">
        Time is the most precious asset in this world, use it
        <span className="only-word" id="js-quote">
          effectively
        </span>
      </q>
      <div className="info-icon">
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
    </footer>
  );
}

export default Footer;
