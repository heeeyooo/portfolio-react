import Header from "./components/header/Header";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Contact from "./pages/contact/Contact";
import ToTopBtn from "./components/toTopBtn/ToTopBtn";
import Footer from "./components/footer/Footer";
import DayNight from "./components/dayNight/DayNight";
import "./App.css";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ToTopBtn />
      <DayNight />
    </>
  );
}

export default App;
