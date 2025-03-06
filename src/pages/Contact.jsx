import React from "react";

const ContactForm = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h2>Feel free to get in touch with us</h2>
          <p>
            Innovate with us and let's grow in a technology-driven world. Contact
            us today to know more.
          </p>
          <div className="social-icons">
            <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
            {/* <a href="#" className="social-link"><i className="fa-brands fa-google"></i></a> */}
            <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email Address" className="form-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone Number" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <textarea placeholder="Drop Your Message" className="form-textarea"></textarea>
            <button className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
