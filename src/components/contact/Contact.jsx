import "./Contact.css";

function Contact() {
  function changeColor() {
    let inp = document.getElementById("email");

    if (inp.value.includes("@")) {
      inp.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
    } else if (!inp.value) {
      inp.style.backgroundColor = "rgba(200, 200, 200, 0.2)";
    } else {
      inp.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    }
  }
  return (
    <div className="form-container section" id="section4">
      <h3 className="info-contact-me">Contact me</h3>
      <form
        action="mailto:hokageow@icloud.com"
        method="post"
        encType="text/plain"
      >
        <div className="contact1-container">
          <input
            className="input-info"
            type="text"
            id="first-name"
            name="First Name"
            placeholder="First Name *"
          />
          <input
            className="input-info"
            type="text"
            id="last-name"
            name="Last Name"
            placeholder="Last Name *"
          />
        </div>
        <div className="contact2-container">
          <input
            className="input-info"
            type="email"
            id="email"
            name="Email"
            placeholder="Email *"
            onInput={() => changeColor()}
          />
          <input
            className="input-info"
            type="tel"
            id="phone-number"
            name="Phone Number"
            placeholder="Phone Number *"
          />
        </div>
        <input
          type="text"
          className="input-subject-info"
          id="subject"
          name="Subject"
          placeholder="Subject"
        />
        <br />
        <textarea
          className="input-message-info"
          name="Message"
          id="message"
          placeholder="Message *"
          minLength="10"
          rows="5"
        ></textarea>
        <br />
        <input className="form-submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
