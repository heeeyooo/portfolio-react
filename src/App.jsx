import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
export const ThemeContext = createContext(null);
import logo from "./img/logo-black.png";
import logo2 from "./img/my-logo-white.png";
import ReactSwitch from "react-switch";
import ToTopBtn from "./components/toTopBtn/ToTopBtn";
import useLocalStorage from "use-local-storage";
import Projects from "./components/projects/Projects";

function App() {
  const [theme, setTheme] = useLocalStorage("", "light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    changeLogo();
  };
  // ISSUE WITH ICON DON'T KNOW HOW TO FIGURE IT OUT
  function changeLogo() {
    const mainLogo = document.querySelectorAll(".js-logo");
    if (theme === "light") {
      mainLogo.forEach((elem) => {
        elem.src = `${logo2}`;
      });
    } else {
      mainLogo.forEach((elem) => {
        elem.src = `${logo}`;
      });
    }
  }

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <div className="App" id={theme}>
        <div className="switch">
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            onColor="#000"
            offColor="#fff"
            offHandleColor="#000"
            onHandleColor="#fff"
            checkedIcon={
              <i
                style={{ marginTop: 6, marginLeft: 7, color: "white" }}
                className="fa-solid fa-sun"
              ></i>
            }
            uncheckedIcon={
              <span className="moon">
                <i
                  style={{ marginTop: 6, marginLeft: 7, color: "black" }}
                  className="fa-solid fa-moon"
                ></i>
              </span>
            }
          />
        </div>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        {/* <Projects /> */}
        <Contact />
        <Footer />
        <ToTopBtn />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
