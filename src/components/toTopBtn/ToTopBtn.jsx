import "./ToTopBtn.css";

function ToTopBtn() {
  // Get the button:

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    const mybutton = document.getElementById("toTopBtn");
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      mybutton.style.display = "block";
      mybutton.style.animation = "toTopButton 0.5s forwards";
    } else {
      mybutton.style.animation = "toDownButton 0.5s forwards";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  addEventListener("scroll", () => {
    scrollFunction();
  });
  return (
    <button id="toTopBtn" className="style-to-top-btn" onClick={topFunction}>
      <i className="fa-solid fa-arrow-up icon-color"></i>
    </button>
  );
}

export default ToTopBtn;
