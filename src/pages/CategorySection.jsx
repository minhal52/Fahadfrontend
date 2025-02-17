import React from "react";
import { motion } from "framer-motion"; // For scroll animations
import CountUp from "react-countup"; // For Counter
import { FaTools, FaBuilding, FaHardHat, FaCogs, FaDraftingCompass, FaWrench } from "react-icons/fa"; // Icons for Service Section
import { useNavigate } from "react-router-dom"; // For navigation

// Hero Section
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Welcome to Our World!
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We create amazing digital experiences. Join us in building the future!
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

      {/* Hero Image with Animation */}
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <img src="/Backholeloader.jpg" alt="Hero Section" />
      </motion.div>
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
  { id: 1, icon: <FaTools />, title: "General Construction", description: "Providing top-quality construction services for all projects." },
  { id: 2, icon: <FaBuilding />, title: "Industrial Buildings", description: "Designing and constructing durable industrial structures." },
  { id: 3, icon: <FaHardHat />, title: "Safety Management", description: "Ensuring workplace safety with expert supervision." },
  { id: 4, icon: <FaCogs />, title: "Mechanical Work", description: "High-quality mechanical installations and maintenance." },
  { id: 5, icon: <FaDraftingCompass />, title: "Architecture & Design", description: "Creative and efficient building designs tailored to needs." },
  { id: 6, icon: <FaWrench />, title: "Repair & Maintenance", description: "Reliable and timely maintenance services for buildings." }
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
    { id: "construction", title: "Construction Equipment", img: "/images/construction.jpg" },
    { id: "electrical", title: "Electrical Tools", img: "/images/electrical.jpg" },
    { id: "safety", title: "Safety Gear", img: "/images/safety.jpg" },
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
              Explore {category.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div>
      <Home />
      <CounterSection />
      <ServiceSection />
      <CategorySection />
    </div>
  );
}
