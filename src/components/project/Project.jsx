import "./Project.css";
import img1 from "./../portfolio/img/gym-site.jpg";
import img2 from "./../portfolio/img/gallery.png";

function Project() {
  const DATA = [
    {
      id: 1,
      link: "https://heeeyooo-fate.netlify.app",
      title: "fate.com",
      img: img1,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
    },
    {
      id: 2,
      link: "https://heeeyooo-gallery.netlify.app",
      title: "gallery.com",
      img: img2,
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
        <i className="fa-brands fa-sass"></i>,
      ],
    },
    {
      id: 3,
      link: "https://heeeyooo-theatre.netlify.app",
      title: "theatre.com",
      img: "",
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
    },
    {
      id: 4,
      link: "https://deft-wisp-053bdd.netlify.app",
      title: "amazon-clone",
      img: "",
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
    },
    {
      id: 5,
      link: "https://graceful-beijinho-d8cc5c.netlify.app/",
      title: "yagoda-karpat.com",
      img: "",
      skills: [
        <i className="fa-brands fa-html5"></i>,
        <i className="fa-brands fa-css3-alt"></i>,
        <i className="fa-brands fa-square-js"></i>,
      ],
    },
    {
      id: 6,
      link: "https://heeeyooo-react.netlify.app/",
      title: "heeeyooo.com",
      img: "",
      skills: [<i className="fa-brands fa-react"></i>],
    },
  ];

  return (
    <>
      {DATA.map((elem) => {
        return (
          <div className="project1-container" key={elem.id}>
            <div className="project1-img-container">
              <img className="img-title" src={elem.img} alt="" />
            </div>
            <div className="project-content-container">
              <a href={elem.link} target="_blank">
                {elem.title}
              </a>
              <div className="project-skills">{elem.skills}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Project;
