import "./About.css";
import Resume from "./../../pdf/heeeyooo-resume.pdf";

function About() {
  function changeChars() {
    let chars = document.querySelectorAll(".main-info-about-me span");
    let mainInfo = document.querySelector(".main-info-about-me");

    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add("active");
        // mainInfo.classList.add("gradient");
        // char.classList.replace("active", "to-reveal");
      }, index * 100);
      // setInterval(() => {
      //   char.classList.remove("active");
      // }, 4000);
    });
  }

  addEventListener("animationstart", () => {
    changeChars();
  });
  // function changeBackground() {
  //   let mainInfo = document.querySelector(".main-info-about-me");
  //   mainInfo.classList.add("gradient");
  // }
  // changeBackground();

  return (
    <div className="about-me-container section" id="section1">
      <h1 className="main-info-about-me">
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
      </h1>
      <p className="info-about-me">
        I create high quality minimalistic projects that will charm the
        <br />
        viewer with their transitions and ease of use. Currently looking for
        <br />a job and learning by myself. Gym enjoyer
        {/* I like to integrate new interesting ideas for websites and applications
        I'm always excited to learn something new
        In my free time I work out at the gym */}
      </p>
      <a className="resume-button" href={Resume} download="">
        Download CV
      </a>
      <a className="show-more-btn" href="#section2">
        Show more
      </a>
    </div>
  );
}

export default About;
