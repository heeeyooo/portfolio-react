import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container" id="section3">
      <div className="portfolio-info-container">
        <p className="main-portfolio-info">Projects</p>
        {/* <p className="portfolio-info">
          Here are a few past design projects I've worked on.
        </p> */}
      </div>
      <div className="portfolio-grid-container">
        <div className="project1-container">
          <div className="project1-img-container"></div>
          <div className="project-content-container">
            <a href="https://heeeyooo-fate.netlify.app" target="_blank">
              fate.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        <div className="project2-container">
          <div className="project2-img-container"></div>
          <div className="project-content-container">
            <a href="https://heeeyooo-gallery.netlify.app" target="_blank">
              Gray.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        <div className="project3-container">
          <div className="project3-img-container"></div>
          <div className="project-content-container">
            <a href="https://heeeyooo-theatre.netlify.app" target="_blank">
              theatre.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        <div className="project4-container">
          <div className="project4-img-container"></div>
          <div className="project-content-container">
            <a href="https://deft-wisp-053bdd.netlify.app" target="_blank">
              amazon-clone.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        <div className="project5-container">
          <div className="project5-img-container"></div>
          <div className="project-content-container">
            <a
              href="https://graceful-beijinho-d8cc5c.netlify.app"
              target="_blank"
            >
              yagoda-karpat.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        <div className="project6-container">
          <div className="project6-img-container"></div>
          <div className="project-content-container">
            <a href="https://heeeyooo-react.netlify.app" target="_blank">
              heeeyooo.com
            </a>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
