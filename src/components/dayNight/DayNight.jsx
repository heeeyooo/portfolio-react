import "./DayNight.css";
import logo from "./../../img/Logo-white.svg";
import { useEffect } from "react";

function DayNight() {
  useEffect(() => {
    changeBackground();
  }, []);

  function changeBackground() {
    const styles = document.querySelector(":root");
    const menuBack = document.querySelector("#mobile-menu");
    const myLogo = document.querySelectorAll(".js-logo");

    switch (new Date().getHours()) {
      case 0:
        document.body.classList.add("h0");
        menuBack.classList.add("h0");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 1:
        document.body.classList.add("h1");
        menuBack.classList.add("h1");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 2:
        document.body.classList.add("h2");
        menuBack.classList.add("h2");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 3:
        document.body.classList.add("h3");
        menuBack.classList.add("h3");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 4:
        document.body.classList.add("h4");
        menuBack.classList.add("h4");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 5:
        document.body.classList.add("h5");
        menuBack.classList.add("h5");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 6:
        document.body.classList.add("h6");
        menuBack.classList.add("h6");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 7:
        document.body.classList.add("h7");
        menuBack.classList.add("h7");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 8:
        document.body.classList.add("h8");
        menuBack.classList.add("h8");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 9:
        document.body.classList.add("h9");
        menuBack.classList.add("h9");

        break;
      case 10:
        document.body.classList.add("h10");
        menuBack.classList.add("h10");

        break;
      case 11:
        document.body.classList.add("h11");
        menuBack.classList.add("h11");

        break;
      case 12:
        document.body.classList.add("h12");
        menuBack.classList.add("h12");

        break;
      case 13:
        document.body.classList.add("h13");
        menuBack.classList.add("h13");
        break;
      case 14:
        document.body.classList.add("h14");
        menuBack.classList.add("h14");

        break;
      case 15:
        document.body.classList.add("h15");
        menuBack.classList.add("h15");

        break;
      case 16:
        document.body.classList.add("h16");
        menuBack.classList.add("h16");

        break;
      case 17:
        document.body.classList.add("h17");
        menuBack.classList.add("h17");

        break;
      case 18:
        document.body.classList.add("h18");
        menuBack.classList.add("h18");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 19:
        document.body.classList.add("h19");
        menuBack.classList.add("h19");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 20:
        document.body.classList.add("h20");
        menuBack.classList.add("h20");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 21:
        document.body.classList.add("h21");
        menuBack.classList.add("h21");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 22:
        document.body.classList.add("h22");
        menuBack.classList.add("h22");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        break;
      case 23:
        document.body.classList.add("h23");
        menuBack.classList.add("h23");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
    }
  }

  // addEventListener("", () => {
  // });
  return <></>;
}

export default DayNight;
