import "./Portfolio.css";
import img1 from "./../portfolio/img/gym-site.jpg";
import img2 from "./../portfolio/img/gallery.png";

function Portfolio() {
  return (
    <div className="portfolio-container section" id="section3">
      <h3 className="main-portfolio-info">Projects</h3>
      <div className="portfolio-grid-container">
        <div className="project1-container">
          <div className="project1-img-container">
            <img className="img-title" src={img1} alt="" />
          </div>
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
          <div className="project1-img-container">
            <img className="img-title" src={img2} alt="" />
          </div>
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
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <a href="#">Coming soon</a>
          </div>
        </div>
        <div className="project4-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <a href="#">Coming soon</a>
          </div>
        </div>
        <div className="project5-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <a href="#">Coming soon</a>
          </div>
        </div>
        <div className="project6-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <a href="#">Coming soon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
