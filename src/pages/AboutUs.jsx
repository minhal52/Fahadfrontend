import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaWrench } from "react-icons/fa"; // Imported icons

const AboutUs = () => {
  return (
    <section className="about-us-page">
      {/* About Us Banner (No motion now) */}
      <div className="about-page-banner">
        <h1>About Us</h1>
      </div>

      {/* About Us Section */}
      <motion.div 
        className="about-us-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src="/images/about.jpg" alt="About Us" className="about-us-image" />
        <div className="about-us-content">
          <h2>Who We Are</h2>
          <p>Fahad Engineering is a Saudi-owned company operating from Jubail city, established in 2006, under Commercial Registration No: 2057007979.
            Fahad Engineering is a rapidly expanding organization offering a wide range of Engineering support and services in the field of Equipment rental,
            Manpower supply, Trading and material supply, Instrumentation & Control System Engineering works, and Electrical & Power Construction works.
            <br /><br />
            As a result of our continuous pursuit of recognition and devoted customer service during the past ten years, we have secured the confidence and appreciation
            of our clients. Our highly qualified and technically skilled staff in the field of Civil, Mechanical, Electrical, and Instrumentation is our company's biggest asset.
            Fahad Engineering maintains an excellent Customer Service network, guaranteeing each client fast & comprehensive service. Customers' needs are always
            given priority, understanding their requirements, coming up with immediate & effective responses, delivering the most reliable solution & optimum services.</p>
        </div>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        className="about-founder"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-founder-content">
          <h2>Meet Our Founder</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut, obcaecati et soluta quisquam ex ipsam omnis impedit tenetur, dignissimos eaque mollitia vel, debitis iure. Deleniti ullam neque ut ab.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime est voluptas quaerat nostrum quos id excepturi, eius corporis, blanditiis quo pariatur voluptatum consequatur eveniet autem! Dolores rerum accusantium perferendis doloribus.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, quas cum obcaecati similique voluptatem optio consequatur veniam provident debitis iusto repudiandae sunt quaerat iure voluptas cupiditate, repellendus, molestiae aliquid soluta.
          </p>
        </div>
        <img src="/images/founder.jpg" alt="Founder" className="about-founder-image" />
      </motion.div>

      {/* Our Team Section */}
      <motion.div 
        className="about-team"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src="/images/team.jpg" alt="Our Team" className="about-team-image" />
        <div className="about-team-content">
          <h2>Meet Our Team</h2>
          <p>Our team consists of experienced professionals...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tenetur adipisci debitis cum illo sapiente vel porro soluta dicta, itaque quaerat magni velit animi non blanditiis in sunt iure dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et asperiores error quae iusto architecto laudantium adipisci impedit, rem, perferendis provident velit quod unde necessitatibus alias perspiciatis nihil magni. Molestiae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod iste quaerat est rerum obcaecati molestiae, ex qui, voluptatum accusantium aperiam ipsum officia vel perspiciatis natus eaque eveniet nisi doloribus.
          </p>
        </div>
      </motion.div>

      {/* Mission, Vision, Scope Cards */}
      <motion.div 
        className="about-cards"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <FaBullseye size={25} color="#fff" /> {/* Icon for Mission */}
          <h3>Our Mission</h3>
          <p>Quality, Performance, Customer Oriented Attitude and Quest for Excellence are of paramount importance to Fahad Engineering.
              <br />Our mission is to become the premier service provider contracting company in the Kingdom of Saudi Arabia, delivering and accomplishing industrial projects and services with the state of passion of art.
              <br />Through teamwork and partnership, achieving excellence while continuously striving for the highest quality and cost-effectiveness, maximizing profits for our clients.</p>
        </div>
        <div className="about-card">
          <FaLightbulb size={25} color="#fff" /> {/* Icon for Vision */}
          <h3>Our Vision</h3>
          <p>Adhere to the highest standards of business integrity & ethics, building respect and trust with our clients, delivering the best of our services. 
              <br />
              Create a passionate and enjoyable working environment for our employees, encouraging them to work responsibly. 
              <br />
              Comply with the laws of the country in which we conduct our business.</p>
        </div>
        <div className="about-card">
          <FaWrench size={25} color="#fff" /> {/* Icon for Scope */}
        <h3>Scope of Business</h3>
          <ul>
            <li>Heavy & light equipment rental</li>
            <li>Manpower Resource</li>
            <li>Instrumentation & Electrical pre-commissioning / commissioning work</li>
            <li>Machinery & Vehicle rentals</li>
            <li>Field Instrumentation & Control System Engineering Projects & Services</li>
          </ul>
        </div>
      </motion.div>

      {/* Our Clients */}
      <motion.div 
        className="about-clients"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Our Clients</h2>
        <div className="about-clients-logos">
          <img src="/anabeeblogo-removebg-preview - Copy (2).png" alt="Client 1" />
          <img src= "/aytblogo-removebg-preview - Copy (2).png" alt="Client 2" />
          <img src=  "/cc-7logo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src=  "/cnceclogo-removebg-preview - Copy (2).png" />
          <img src= "/gs_eclogo-removebg-preview - Copy (2).png" />
          <img src="/honeywelllogo-removebg-preview - Copy (2).png" />
          <img src="/kbrlogo-removebg-preview - Copy (2).png" />
          <img src="/l_tlogo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src="/mcclogo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src="/nesmalogo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src="/sabiclogo-removebg-preview - Copy (2).png"alt="Client 3" />
          <img src="/samsunglogo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src= "/Saudiaramco_logo-removebg-preview - Copy (2).png" alt="Client 3" />
          <img src= "/saudielectricitylogo-removebg-preview.png" alt="Client 3" />
          <img src= "/sinopeclogo-removebg-preview.png" alt="Client 3" />
          <img src="/tecnimontlogo-removebg-preview.png" alt="Client 3" />
          <img src= "/yokogamalogo-removebg-preview.png" alt="Client 3" />
        


        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
