import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to send an email with prefilled message
  const sendEmailMessage = (e) => {
    e.preventDefault(); // Prevent form submission

    const { name, email, phone, subject, message } = formData;

    // Ensure all values are present
    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill in all fields before sending the message.");
      return;
    }

    // Construct the email message
    const emailRecipient = "info@fahadeng.com"; // Updated email
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello, I would like to get in touch!\n\n` +
      `🔹 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📞 Phone: ${phone}\n` +
      `📌 Subject: ${subject}\n` +
      `✉️ Message: ${message}`
    );

    // Construct the mailto link
    const mailtoLink = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;
  };

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
            <a href="https://www.linkedin.com/company/fahad-eng/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/fahadengineering/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:info@fahadeng.com" className="social-link">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="contact-form">
          <form onSubmit={sendEmailMessage}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" className="form-input" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" className="form-input" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" placeholder="Phone Number" className="form-input" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="subject" placeholder="Subject" className="form-input" value={formData.subject} onChange={handleChange} required />
            </div>
            <textarea name="message" placeholder="Drop Your Message" className="form-textarea" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="submit-btn">SEND EMAIL</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
