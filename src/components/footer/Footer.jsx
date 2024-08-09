import "./Footer.css";
import logo from "./../../img/Logo-black.svg";
import logoWhite from "./../../img/Logo-white.svg";

import { useEffect } from "react";

function Footer() {
  useEffect(() => {
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
  }, []);

  function forceChangeBack(props) {
    let menuBack = document.querySelector("#mobile-menu");
    document.body.className = props;
    menuBack.classList.remove(
      "h0",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "h7",
      "h8",
      "h9",
      "h10",
      "h11",
      "h12",
      "h13",
      "h14",
      "h15",
      "h16",
      "h17",
      "h18",
      "h19",
      "h20",
      "h21",
      "h22",
      "h23"
    );
    menuBack.classList.add(props);
  }

  const BLACK = {
    color: "#000",
    linkColor: "rgba(0, 0, 0, 0.5)",
    projectBackground: "rgba(255, 255, 255, 0.5)",
    icon: logo,
  };

  const WHITE = {
    color: "#fff",
    linkColor: "rgba(255, 255, 255, 0.5)",
    projectBackground: "rgba(0, 0, 0, 0.5)",
    icon: logoWhite,
  };

  function forceChangeColor(props) {
    const myLogo = document.querySelectorAll(".js-logo");
    const styles = document.querySelector(":root");
    myLogo.forEach((elem) => {
      elem.src = props.icon;
    });
    styles.style.setProperty("--text-color", props.color);
    styles.style.setProperty("--link-color", props.linkColor);
    styles.style.setProperty("--project-background", props.projectBackground);
  }

  return (
    <footer className="footer js-footer">
      <a className="link-logo-footer" href="#section1">
        <img className="logo-footer js-logo" src={logo} alt="heeeyooo" />
      </a>
      <q className="main-quote">
        Time is the most precious asset in this world, use it
        <span className="only-word" id="js-quote">
          effectively
        </span>
      </q>
      <div className="scroll-pick">
        <div className="info-input">Daytime</div>
        <div className="container">
          <div className="input-section">
            <input type="text" readOnly />
            <input type="text" readOnly />
            <input
              onClick={() => forceChangeBack("h0")}
              type="text"
              name=""
              defaultValue="0"
              id="1"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h1")}
              type="text"
              name=""
              defaultValue="1"
              id="2"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h2")}
              type="text"
              name=""
              defaultValue="2"
              id="3"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h3")}
              type="text"
              name=""
              defaultValue="3"
              id="4"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h4")}
              type="text"
              name=""
              defaultValue="4"
              id="5"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h5")}
              type="text"
              name=""
              defaultValue="5"
              id="6"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h6")}
              type="text"
              name=""
              defaultValue="6"
              id="7"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h7")}
              type="text"
              name=""
              defaultValue="7"
              id="8"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h8")}
              type="text"
              name=""
              defaultValue="8"
              id="9"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h9")}
              type="text"
              name=""
              defaultValue="9"
              id="10"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h10")}
              type="text"
              name=""
              defaultValue="10"
              id="11"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h11")}
              type="text"
              name=""
              defaultValue="11"
              id="12"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h12")}
              type="text"
              name=""
              defaultValue="12"
              id="13"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h13")}
              type="text"
              name=""
              defaultValue="13"
              id="14"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h14")}
              type="text"
              name=""
              defaultValue="14"
              id="15"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h15")}
              type="text"
              name=""
              defaultValue="15"
              id="16"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h16")}
              type="text"
              name=""
              defaultValue="16"
              id="17"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h17")}
              type="text"
              name=""
              defaultValue="17"
              id="18"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h18")}
              type="text"
              name=""
              defaultValue="18"
              id="19"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h19")}
              type="text"
              name=""
              defaultValue="19"
              id="20"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h20")}
              type="text"
              name=""
              defaultValue="20"
              id="21"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h21")}
              type="text"
              name=""
              defaultValue="21"
              id="22"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h22")}
              type="text"
              name=""
              defaultValue="22"
              id="23"
              readOnly
            />
            <input
              onClick={() => forceChangeBack("h23")}
              type="text"
              name=""
              defaultValue="23"
              id="24"
              readOnly
            />
            <input type="text" readOnly />
            <input type="text" readOnly />
          </div>
        </div>
        <div className="info-input2">Color</div>
        <div className="container2">
          <div className="input-section2">
            <input className="empty-input" type="text" readOnly />
            <input
              onClick={() => forceChangeColor(BLACK)}
              type="text"
              defaultValue="black"
              readOnly
            />
            <input
              onClick={() => forceChangeColor(WHITE)}
              type="text"
              defaultValue="white"
              readOnly
            />
            <input className="empty-input" type="text" readOnly />
          </div>
        </div>
      </div>
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
      <p className="copyright">
        © heeeyooo | Stepan Dordiai {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
