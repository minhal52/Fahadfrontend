import React from "react";
import { motion } from "framer-motion"; // For scroll animations
import CountUp from "react-countup"; // For Counter
import { FaTools, FaBus, FaIndustry, FaBoxes, FaUsersCog, FaTruck } from "react-icons/fa"; // Icons for Service Section
import { useNavigate } from "react-router-dom"; // For navigation
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
// Hero Section
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
         "Engineering Solutions, Empowering Success!"
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
         Fahad Engineering, a Saudi-owned company based in Jubail since 2006, specializes in delivering top-quality engineering solutions. From equipment rental and manpower supply to instrumentation, electrical construction, and material trading, we provide comprehensive support to drive efficiency and success in industrial projects.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button 
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.6 }}
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
// Service Section
const services = [
  { id: 1, icon: <FaTruck />, title: "Equipment Rentals", description: "Providing a wide range of high-quality construction equipment for short and long-term rental." },
  { id: 2, icon: <FaBus />, title: "Vehicle Rentals", description: "Offering well-maintained buses for workforce transportation and construction site logistics." },
  { id: 3, icon: <FaIndustry />, title: "Machinery", description: "Supplying heavy-duty machinery and tools to enhance construction efficiency and productivity." },
  { id: 4, icon: <FaBoxes />, title: "Material Supply", description: "Delivering top-quality construction materials, ensuring durability and reliability in every project." },
  { id: 5, icon: <FaUsersCog />, title: "Manpower Supply", description: "Providing skilled and experienced workforce to meet project demands efficiently and effectively." },
  { id: 6, icon: <FaTools />, title: "Instrumentation", description: "Offering precise instrumentation solutions for monitoring and controlling industrial operations." }
];

const ServiceSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <motion.div 
            className="service-card"
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: service.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


// Category Section
const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    { id: "Equipments", title: "Equipment Rentals", img: "/bull_skidloader-removebg-preview - Copy (2).png" },
    { id: "Transportation", title: "Vehicle Rentals", img: "/dynatruck.jpg" },
    // { id: "Machinaries", title: "Machinaries Rental", img: "/images/safety.jpg" },
  ];

  return (
    <section className="category-section">
      <h2>Explore Our Categories</h2>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.img} alt={category.title} className="category-image" />
            <h3>{category.title}</h3>
            <button className="explore-btn" onClick={() => navigate(`/subcategory/${category.id}`)}>
              Explore
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
        <motion.div
          className="about-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <motion.div
            className="about-image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
           <img src="/Fahad_EngineeringLogo-.png" alt="Company" />
          </motion.div>
  
          {/* Text Section */}
          <motion.div
            className="about-text"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Us</h2>
            <p>
            Fahad Engineering is a Saudi-owned company operating from Jubail city, established over 2006, under Commercial Registration No: 2057007979.
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental,
            Manpower supply, Trading and material supply, Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
            <br /><br />
               As a result of our continuous pursuit of recognition and devoted customer service during the past ten years, we have secured the confidence and appreciation
            of our clients. Our highly qualified and technically skilled staff in the field of Civil, Mechanical, Electrical, and Instrumentation is our company's biggest asset.
            Fahad Engineering maintains an excellent Customer Service network, guaranteeing each client fast & comprehensive service.
            </p>
          </motion.div>
        </motion.div>
      </section>
    );
  };
  

  // const ClientsSection = () => {
  //   const clientLogos = [
  //     "/images/client1.png",
  //     "/images/client2.png",
  //     "/images/client3.png",
  //     "/images/client4.png",
  //     "/images/client5.png",
  //     "/images/client6.png",
  //     "/images/client7.png",
  //     "/images/client8.png",
  //     "/images/client9.png",
  //     "/images/client10.png"
  //   ];
  
  //   return (
  //     <section className="clients-section">
  //       <h2>Our Clients</h2>
  //       <div className="clients-container">
  //         {clientLogos.map((logo, index) => (
  //           <motion.div
  //             className="client-logo"
  //             key={index}
  //             initial={{ opacity: 0 }}
  //             whileInView={{ opacity: 1 }}
  //             transition={{ duration: 0.6, delay: index * 0.1 }}
  //             viewport={{ once: true }}
  //           >
  //             <img src={logo} alt={`Client ${index + 1}`} className="client-logo-img" />
  //           </motion.div>
  //         ))}
  //       </div>
  //     </section>
  //   );
  // };
  
  const ClientsSection = () => {
    const clientLogos = [
      "/anabeeblogo-removebg-preview - Copy (2).png",
      "/aytblogo-removebg-preview - Copy (2).png",
      "/cc-7logo-removebg-preview - Copy (2).png",
      "/cnceclogo-removebg-preview - Copy (2).png",
      "/gs_eclogo-removebg-preview - Copy (2).png",
      "/honeywelllogo-removebg-preview - Copy (2).png",
      "/kbrlogo-removebg-preview - Copy (2).png",
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
      <section className="clients-section">
        <h2>Our Clients</h2>
        <div className="clients-container">
          {clientLogos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} className="client-logo-img" />
            </div>
          ))}
        </div>
      </section>
    );
  };


  const ContactSection = () => {
    return (
      <section className="contact-section">
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Left Side: Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <h2>Get in Touch</h2>
            <p>We’d love to hear from you! Reach out to us anytime.</p>
  
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>  Office No: 203, Abed Al Misehal Business Centre, Al Madinah Street, P.O. Box 4550, 
              Al-jubail Industrial City-3514, Kingdom of Saudi Arabia</span>
            </div>
  
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+966-562449061 </span>
            </div>
  
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <span>+966-505678910</span>
            </div>
  
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@fahadeng.com</span>
            </div>
          </motion.div>
  
          {/* Right Side: Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
  
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Type your message..." required></textarea>
              </div>
  
              <button type="submit" className="cta-btn">Send Message</button>
            </form>
          </motion.div>
  
        </motion.div>
      </section>
    );
  };
     

export default function HomePage() {
  return (
    <div>
      <Home />
      <CounterSection />
      <ServiceSection />
      <CategorySection /> {/* Category Section added here */}
      <AboutSection /> {/* About Section added here */}
      <ClientsSection /> {/* Added Our Clients Section */}
      <ContactSection />
    </div>
  );
}
