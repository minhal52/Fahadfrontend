import React from "react";
import { motion } from "framer-motion"; // For scroll animations
import CountUp from "react-countup"; // For Counter
import { FaTools, FaBus, FaIndustry, FaBoxes, FaUsersCog, FaTruck } from "react-icons/fa"; // Icons for Service Section
import { useNavigate } from "react-router-dom"; // For navigation
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";


// Hero Section
const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          "Engineering Solutions, Empowering Success!"
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fahad Engineering, a Saudi-owned company based in Jubail since 2006, specializes in delivering top-quality engineering solutions. From equipment rental and manpower supply to instrumentation, electrical construction, and material trading, we provide comprehensive support to drive efficiency and success in industrial projects.
        </motion.p>

        {/* Button with navigation */}
        <motion.button 
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => navigate("/services")} // 👈 Navigate to Services Page
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

// Counter Section
const CounterSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  };

  return (
    <section className="counter-section">
      <motion.div className="counter-container" {...fadeIn}>
        <div className="counter-box">
          <h2><CountUp start={0} end={10} duration={3} />+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="counter-box">
          <h2><CountUp start={0} end={500} duration={3} />+</h2>
          <p>Employees</p>
        </div>

        <div className="counter-box">
          <h2><CountUp start={0} end={100} duration={3} />+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="counter-box">
          <h2><CountUp start={0} end={50} duration={3} />+</h2>
          <p>Ongoing Works</p>
        </div>
      </motion.div>
    </section>
  );
};

const servicesData = [
  {
    id: 1,
    image: "/equipmentrental.jpg",
    name: "Equipment Rentals",
    description: "A brief description of Equipment Rentals.",
    route: "/services/equipment-rental",
  },
  {
    id: 2,
    image: "/transportation.jpg",
    name: "Transportation",
    description: "A brief description of Transportation.",
    route: "/services/transportation",
  },
  {
    id: 3,
    image: "/materialsupply.jpg",
    name: "Material Supply",
    description: "A brief description of Material Supply.",
    route: "/services/material-supply",
  },
  {
    id: 4,
    image: "/machinariesimg.jpg",
    name: "Machineries",
    description: "A brief description of Machineries.",
    route: "/services/machinery-supply",
  },
];

const ServiceSection = () => {
  const navigate = useNavigate(); // React Router hook

  return (
    <section className="our-services">
      <h2 className="services-heading">
        Transforming Industries with Our Expert Services
      </h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-img" />
            <h3 className="service-name">{service.name}</h3>
            <button
              className="read-more-btn"
              onClick={() => navigate(service.route)}
            >
              View Products
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="/Fahad_EngineeringLogo-.png" alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Fahad Engineering is a Saudi-owned company operating from Jubail city, established over 2006, under Commercial Registration No: 2057007979. 
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental, Manpower supply, Trading and material supply,
            Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
          </p>
          <a href="/about" className="read-more-btn">Read More</a>
        </div>
      </div>


      
      {/* Mission & Vision Section */}
      <div className="mission-vision-section">
        {/* <h2 className="mission-vision-heading">Our Mission & Vision</h2> */}
        <div className="mission-vision-cards">
          <div className="mission-card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">
            At Fahad Engineering, quality, performance, a customer-oriented approach, 
            and a relentless pursuit of excellence are our top priorities. Our mission
             is to be the leading contracting service provider in the Kingdom of Saudi Arabia, 
             delivering industrial projects and services with passion, precision, and innovation
             .Our goal is to maximize value for our clients, ensuring efficiency, 
            reliability, and sustainable success in every project we undertake.
            </p>
          </div>
          <div className="vision-card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-description">
            We are committed to upholding the highest standards of business integrity and ethics, fostering trust and respect with our clients through transparency and excellence. Our goal is to consistently deliver outstanding services, ensuring reliability and satisfaction at every step.

We cultivate a passionate and fulfilling work environment,
 where employees are inspired to take ownership of their responsibilities 
 and thrive both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const OurClients = () => {
  // Array of client logos
  const clientLogos = [
    "/anabeeblogo-removebg-preview - Copy (2).png",
    "/aytblogo-removebg-preview - Copy (2).png",
    "/cc-7logo-removebg-preview - Copy (2).png",
    "/cnceclogo-removebg-preview - Copy (2).png",
    "/gs_eclogo-removebg-preview - Copy (2).png",
    "/honeywelllogo-removebg-preview - Copy (2).png",
    "/kbrlogo.jpg",
    "/l_tlogo-removebg-preview - Copy (2).png",
    "/mcclogo-removebg-preview - Copy (2).png",
    "/nesmalogo-removebg-preview - Copy (2).png",
    "/sabiclogo-removebg-preview - Copy (2).png",
    "/samsunglogo-removebg-preview - Copy (2).png",
"/Saudiaramco_logo-removebg-preview - Copy (2).png",
    "/saudielectricitylogo-removebg-preview.png",
    "/sinopeclogo-removebg-preview.png",
    "/tecnimontlogo-removebg-preview.png",
    "/yokogamalogo-removebg-preview.png",
  ];

  return (
    <section className="our-clients-section">
      <h2 className="our-clients-heading">Our Satisfied Clients</h2>
      <div className="our-clients-container">
        {clientLogos.map((logo, index) => (
          <div key={index} className="client">
            <img src={logo} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};



const ContactSection  = () => {
  return (
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
  );
};

export default function HomePage() {
  return (
    <div>
      <Home />
      <CounterSection />
     
      {/* <CategorySection /> Category Section added here */}
      <AboutSection /> {/* About Section added here */}
      <ServiceSection />
      <OurClients/>
      {/* <ClientsSection /> Added Our Clients Section */}
      <ContactSection />
    </div>
  );
}
