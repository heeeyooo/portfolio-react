import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ToTopBtn from "./components/toTopBtn/ToTopBtn";
import Footer from "./components/footer/Footer";
import DayNight from "./components/dayNight/DayNight";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <ToTopBtn />
      <DayNight />
    </>
  );
}

export default App;
