import "./Skills.css";

function Skills() {
  function move(percent, color) {
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo").style.display = "block";
        document.getElementById("demo").innerHTML = width * 1 + "%";
      }
    }
  }
  function move1(percent, color) {
    let elem = document.getElementById("myBar1");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo1").style.display = "block";
        document.getElementById("demo1").innerHTML = width * 1 + "%";
      }
    }
  }
  function move2(percent, color) {
    let elem = document.getElementById("myBar2");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo2").style.display = "block";
        document.getElementById("demo2").innerHTML = width * 1 + "%";
      }
    }
  }
  function move3(percent, color) {
    let elem = document.getElementById("myBar3");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo3").style.display = "block";
        document.getElementById("demo3").innerHTML = width * 1 + "%";
      }
    }
  }
  function move4(percent, color) {
    let elem = document.getElementById("myBar4");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo4").style.display = "block";
        document.getElementById("demo4").innerHTML = width * 1 + "%";
      }
    }
  }
  function move5(percent, color) {
    let elem = document.getElementById("myBar5");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo5").style.display = "block";
        document.getElementById("demo5").innerHTML = width * 1 + "%";
      }
    }
  }
  function move6(percent, color) {
    let elem = document.getElementById("myBar6");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo6").style.display = "block";
        document.getElementById("demo6").innerHTML = width * 1 + "%";
      }
    }
  }
  function move7(percent, color) {
    let elem = document.getElementById("myBar7");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.style.backgroundColor = color;
        document.getElementById("demo7").style.display = "block";
        document.getElementById("demo7").innerHTML = width * 1 + "%";
      }
    }
  }

  return (
    <div className="skills-container" id="section2">
      <p className="skills-info">Skills</p>
      <div className="skills-grid-container">
        <div className="icon-container js-skills1">
          <div className="skills-progress-container" id="myBar"></div>
          <i
            onClick={() => move(75, "green")}
            className="fa-brands fa-python skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo"></p>
        </div>
        <div className="icon-container js-skills2">
          <div className="skills-progress-container" id="myBar1"></div>
          <i
            onClick={() => move1(65, "skyblue")}
            className="fa-brands fa-css3-alt skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo1"></p>
        </div>
        <div className="icon-container js-skills3">
          <div className="skills-progress-container" id="myBar2"></div>
          <i
            onClick={() => move2(92, "tomato")}
            className="fa-brands fa-html5 skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo2"></p>
        </div>
        <div className="icon-container js-skills4">
          <div className="skills-progress-container" id="myBar3"></div>
          <i
            onClick={() => move3(52, "orange")}
            className="fa-brands fa-git-alt skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo3"></p>
        </div>
        <div className="icon-container js-skills5">
          <div className="skills-progress-container" id="myBar4"></div>
          <i
            onClick={() => move4(52, "orange")}
            className="fa-brands fa-github skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo4"></p>
        </div>
        <div className="icon-container js-skills6">
          <div className="skills-progress-container" id="myBar5"></div>
          <i
            onClick={() => move5(87, "gold")}
            className="fa-brands fa-square-js skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo5"></p>
        </div>
        <div className="icon-container js-skills7">
          <div className="skills-progress-container" id="myBar6"></div>
          <i
            onClick={() => move6(87, "fuchsia")}
            className="fa-brands fa-sass skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo6"></p>
        </div>
      </div>
      <p>Currently learning</p>
      <div className="current-grid">
        <div className="icon-container-current js-skills8">
          <div className="skills-progress-container" id="myBar7"></div>
          <i
            onClick={() => move7(1, "turquoise")}
            className="fa-brands fa-react skills-icon"
          ></i>
          <p className="skills-progress-percent" id="demo7"></p>
        </div>
      </div>
      <p className="skills-progress-info">
        Click the icon to see my skill progress based on{" "}
        <img
          width="30px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/150px-W3Schools_logo.svg.png"
          alt="W3Schools_logo"
        />
      </p>
    </div>
  );
}

export default Skills;
