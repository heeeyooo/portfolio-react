import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import ToTopBtn from "./components/toTopBtn/ToTopBtn";
import Footer from "./components/footer/Footer";
import DayNight from "./components/dayNight/DayNight";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          {/* <Projects /> */}
        </Routes>
        <Footer />
        <ToTopBtn />
        <DayNight />
      </BrowserRouter>
    </>
  );
}

export default App;
