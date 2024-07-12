import "./Portfolio.css";
import img1 from "./../portfolio/img/gym-site.jpg";
import img2 from "./../portfolio/img/gallery.png";
import img3 from "./../portfolio/img/cloud.png";

function Portfolio() {
  return (
    <div className="portfolio-container section" id="section3">
      <h3 className="main-portfolio-info">Projects</h3>
      <div className="portfolio-grid-container">
        {/* PROJECT */}
        <div className="project1-container">
          <div className="project1-img-container">
            <img className="img-title" src={img1} alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">fate</h4>
            <p className="project-info"></p>
            <div className="link-project-container">
              <a href="https://heeeyooo-fate.netlify.app/" target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href="#" target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        {/* PROJECT */}
        <div className="project2-container">
          <div className="project1-img-container">
            <img className="img-title" src={img2} alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">gray</h4>
            <p className="project-info"></p>
            <div className="link-project-container">
              <a href="https://heeeyooo-gray.netlify.app/" target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href="#" target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        {/* PROJECT */}
        <div className="project3-container">
          <div className="project1-img-container-full">
            <img className="img-title-full" src={img3} alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">cloud</h4>
            <p className="project-info">
              A weather app made using <abbr title="OpenWeatherMap">OWM</abbr>{" "}
              API in JS. The app tells the current temperature and some
              addtional info like Wind Speed and Humidity
            </p>
            <div className="link-project-container">
              <a href="https://heeeyooo-cloud.netlify.app/" target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href="https://github.com/heeeyooo/weather-app" target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
            <div className="project-skills">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
        </div>
        {/* PROJECT */}
        <div className="project4-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">Coming soon</h4>
            <p className="project-info"></p>
            <div className="link-project-container">
              <a href={void 0} target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href={void 0} target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        {/* PROJECT */}
        <div className="project5-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">Coming soon</h4>
            <p className="project-info"></p>
            <div className="link-project-container">
              <a href={void 0} target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href={void 0} target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        {/* PROJECT */}
        <div className="project6-container">
          <div className="project1-img-container">
            <img className="img-title" src="" alt="" />
          </div>
          <div className="project-content-container">
            <h4 className="project-name">Coming soon</h4>
            <p className="project-info"></p>
            <div className="link-project-container">
              <a href={void 0} target="_blank">
                demo <i class="fa-solid fa-link"></i>
              </a>
              <a href={void 0} target="_blank">
                github <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
