import React from 'react';

const AboutUs = () => {
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
    <section className="about-us-section1">
      <div className="about-us-banner1">
        <h1 className="about-us-title1">About Us</h1>
      </div>

      {/* About Section Below Banner */}
      <div className="about-us-details1">
        <h2 className="about-us-heading1">Who We Are</h2>
        <div className="about-us-content1">
          <div className="about-us-image1">
            <img src="/Fahad_EngineeringLogo-.png" alt="About Us" className="about-us-img1" />
          </div>
          <div className="about-us-text1">
          <p>Fahad Engineering is a Saudi-owned company operating from Jubail city, established in 2006, under Commercial Registration No: 2057007979.
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental,
            Manpower supply, Trading and material supply, Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
            <br /><br />
            As a result of our continuous pursuit of recognition and devoted customer service during the past ten years, we have secured the confidence and appreciation
            of our clients. Our highly qualified and technically skilled staff in the field of Civil, Mechanical, Electrical, and Instrumentation is our company's biggest asset.
            Fahad Engineering maintains an excellent Customer Service network, guaranteeing each client fast & comprehensive service. Customers' needs are always
            given priority, understanding their requirements, coming up with immediate & effective responses, delivering the most reliable solution & optimum services.</p>
          </div>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <div className="founder-section">
        <h2 className="founder-heading">Meet the Founder</h2>
        <div className="founder-content">
          <div className="founder-image">
            <img src="/founder-image.jpg" alt="Founder" className="founder-img" />
          </div>
          <div className="founder-text">
            <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus natus dolores, repellendus eos obcaecati libero, cumque harum odio dolorum asperiores corrupti est earum consequuntur distinctio, recusandae suscipit ipsa autem cupiditate.
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ut rem, inventore cupiditate ea commodi illum debitis, ex porro qui incidunt? Nobis asperiores ad minima recusandae tempora molestias quia perspiciatis.
            </p>
          </div>
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

      {/* Our Clients Section */}
      <div className="our-clients-section">
        <h2 className="our-clients-heading">Our Satisfied Clients</h2>
        <div className="our-clients-container">
          {clientLogos.map((logo, index) => (
            <div key={index} className="client">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
