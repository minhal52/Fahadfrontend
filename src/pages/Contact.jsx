import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation here if necessary
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Handle the form submission logic (e.g., send data to an API)
    console.log(formData);
    setIsSubmitted(true);

    // Optionally, reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="contact-section1">
      {/* New Heading for "Connect with Us" */}
      <motion.h1
        className="connect-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Connect with Us */}
      </motion.h1>

      <motion.div
        className="contact-container1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Left Side: Contact Info */}
        <motion.div
          className="contact-info1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you! Reach out to us anytime.</p>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>
              Office No: 203, Abed Al Misehal Business Centre, Al Madinah Street, P.O. Box 4550, Al-jubail Industrial City-3514, Kingdom of Saudi Arabia
            </span>
          </div>

          <div className="contact-item1">
            <FaPhone className="contact-icon" />
            <span>+966-562449061</span>
          </div>

          <div className="contact-item1">
            <FaWhatsapp className="contact-icon" />
            <span>+966-505678910</span>
          </div>

          <div className="contact-item1">
            <FaEnvelope className="contact-icon" />
            <span>info@fahadeng.com</span>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="contact-form1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <h2>Send Us a Message</h2>
          {isSubmitted ? (
            <p>Thank you for contacting us! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group1">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group1">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group1">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="cta-btn">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
