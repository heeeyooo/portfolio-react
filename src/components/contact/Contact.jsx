import "./Contact.css";

function Contact() {
  return (
    <div className="form-container" id="section4">
      <p className="info-contact-me">Contact me</p>
      <form
        action="mailto:hokageow@icloud.com"
        method="post"
        encType="text/plain"
      >
        <div className="contact1-container">
          <div className="input-first-name">
            <input
              className="input-info input-color"
              type="text"
              id="first-name"
              name="First Name"
              placeholder="First Name *"
            />
          </div>
          <div className="input-second-name">
            <input
              className="input-info input-color"
              type="text"
              id="last-name"
              name="Last Name"
              placeholder="Last Name *"
            />
          </div>
        </div>
        <div className="contact2-container">
          <div className="input-first-name">
            <input
              className="input-info input-color"
              type="email"
              id="email"
              name="Email"
              placeholder="Email *"
            />
          </div>
          <div className="input-second-name">
            <input
              className="input-info input-color"
              type="tel"
              id="phone-number"
              name="Phone Number"
              placeholder="Phone Number *"
            />
          </div>
        </div>
        <div className="subject-container">
          <div>
            <input
              type="text"
              className="input-subject-info input-color"
              id="subject"
              name="Subject"
              placeholder="Subject *"
            />
          </div>
        </div>
        <div className="text-area-container">
          <div>
            <textarea
              className="input-message-info input-color"
              name="Message"
              id="message"
              placeholder="Message *"
              minLength="10"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="btn-center">
          <input className="form-submit-button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
