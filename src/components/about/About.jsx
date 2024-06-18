import "./About.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function About() {
  function changeChars() {
    let chars = document.querySelectorAll(".main-info-about-me span");
    chars.forEach((char) => {
      char.classList.add("active");
    });
  }
  addEventListener("animationstart", () => {
    changeChars();
  });
  return (
    <div className="about-me-container" id="section1">
      <p className="main-info-about-me">
        <span>H</span>
        <span>i</span>
        <span>,</span>
        <span> I</span>
        <span>'</span>
        <span>m </span>
        <span>S</span>
        <span>t</span>
        <span>e</span>
        <span>p</span>
        <span>a</span>
        <span>n </span>
        <span>D</span>
        <span>o</span>
        <span>r</span>
        <span>d</span>
        <span>i</span>
        <span>a</span>
        <span>i</span>
        <br />
        <span>F</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t </span>
        <span>e</span>
        <span>n</span>
        <span>d </span>
        <span>D</span>
        <span>e</span>
        <span>v</span>
        <span>e</span>
        <span>l</span>
        <span>o</span>
        <span>p</span>
        <span>e</span>
        <span>r</span>
      </p>
      <p className="info-about-me">
        I spend my time as a front end developer
        <br />
        <span className="opac1">
          I like to integrate new interesting ideas for websites and
          applications
        </span>
        <br />
        <span className="opac2">I'm always excited to learn something new</span>
        <br />
        <span className="opac3">In my free time I work out at the gym</span>
      </p>
      <a href={Resume} download="">
        <button className="resume-button">Download CV</button>
      </a>
      <a href="#section2">
        <button className="show-more-btn">Show more</button>
      </a>
    </div>
  );
}

export default About;
