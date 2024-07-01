import Project from "../project/Project";
import "./Projects.css";

function Projects() {
  return (
    <div className="portfolio-container section" id="section3">
      <div className="portfolio-info-container">
        <p className="main-portfolio-info">Projects</p>
        {/* <p className="portfolio-info">
          Here are a few past design projects I've worked on.
        </p> */}
      </div>
      <div className="portfolio-grid-container">
        <Project />
      </div>
    </div>
  );
}

export default Projects;
