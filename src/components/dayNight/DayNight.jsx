import { useEffect } from "react";
import "./DayNight.css";
import logo from "./../../img/Logo-white.svg";

function DayNight() {
  useEffect(() => {
    changeBackground();
  }, []);

  function changeBackground() {
    const styles = document.querySelector(":root");
    const myLogo = document.querySelectorAll(".js-logo");

    switch (new Date().getHours()) {
      case 0:
        document.querySelector(".loading-container").classList.add("h0");
        document.body.classList.add("h0");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 1:
        document.querySelector(".loading-container").classList.add("h1");

        document.body.classList.add("h1");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 2:
        document.querySelector(".loading-container").classList.add("h2");

        document.body.classList.add("h2");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 3:
        document.querySelector(".loading-container").classList.add("h3");

        document.body.classList.add("h3");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 4:
        document.querySelector(".loading-container").classList.add("h4");

        document.body.classList.add("h4");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 5:
        document.querySelector(".loading-container").classList.add("h5");

        document.body.classList.add("h5");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 6:
        document.querySelector(".loading-container").classList.add("h6");

        document.body.classList.add("h6");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 7:
        document.querySelector(".loading-container").classList.add("h7");

        document.body.classList.add("h7");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 8:
        document.querySelector(".loading-container").classList.add("h8");

        document.body.classList.add("h8");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 9:
        document.querySelector(".loading-container").classList.add("h9");

        document.body.classList.add("h9");
        break;
      case 10:
        document.querySelector(".loading-container").classList.add("h10");

        document.body.classList.add("h10");
        break;
      case 11:
        document.querySelector(".loading-container").classList.add("h11");

        document.body.classList.add("h11");
        break;
      case 12:
        document.querySelector(".loading-container").classList.add("h12");

        document.body.classList.add("h12");
        break;
      case 13:
        document.querySelector(".loading-container").classList.add("h13");

        document.body.classList.add("h13");
        break;
      case 14:
        document.querySelector(".loading-container").classList.add("h14");

        document.body.classList.add("h14");
        break;
      case 15:
        document.querySelector(".loading-container").classList.add("h15");

        document.body.classList.add("h15");
        break;
      case 16:
        document.querySelector(".loading-container").classList.add("h16");

        document.body.classList.add("h16");
        break;
      case 17:
        document.querySelector(".loading-container").classList.add("h17");

        document.body.classList.add("h17");
        break;
      case 18:
        document.querySelector(".loading-container").classList.add("h18");

        document.body.classList.add("h18");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 19:
        document.querySelector(".loading-container").classList.add("h19");

        document.body.classList.add("h19");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 20:
        document.querySelector(".loading-container").classList.add("h20");

        document.body.classList.add("h20");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 21:
        document.querySelector(".loading-container").classList.add("h21");

        document.body.classList.add("h21");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 22:
        document.querySelector(".loading-container").classList.add("h22");

        document.body.classList.add("h22");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
        break;
      case 23:
        document.querySelector(".loading-container").classList.add("h23");
        document.body.classList.add("h23");
        myLogo.forEach((elem) => {
          elem.src = logo;
        });
        styles.style.setProperty("--text-color", "#fff");
        styles.style.setProperty("--link-color", "rgba(255, 255, 255, 0.5)");
        styles.style.setProperty("--project-background", "rgba(0, 0, 0, 0.5)");
    }
  }

  return <></>;
}

export default DayNight;
