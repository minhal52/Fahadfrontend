import React from "react";
import { useLocation } from "react-router-dom";
// Machinery Section Component
const MachinerySection = () => {
  return (
    <section className="machinery-section" id="machinery">
      <h2 className="machinery-heading">Machinery</h2>
      <div className="machinery-cards-container">
        {/* Generator Card */}
        <div className="machinery-card">
          <img src="/path-to-generator-image.jpg" alt="Generator" className="machinery-image" />
          <div className="machinery-content">
            <h3 className="machinery-name">Generator</h3>
            <p className="machinery-description">
              Powerful generators for various industrial needs, ensuring consistent and reliable power supply on-site.
            </p>
            <a href="mailto:info@fahadeng.com?subject=Rent%20Generator" className="buy-now-btn">
              Rent Now
            </a>
          </div>
        </div>

        {/* Welding Machine Card */}
        <div className="machinery-card">
          <img src="/path-to-welding-machine-image.jpg" alt="Welding Machine" className="machinery-image" />
          <div className="machinery-content">
            <h3 className="machinery-name">Welding Machine</h3>
            <p className="machinery-description">
              High-performance welding machines suitable for a wide range of construction and industrial welding tasks.
            </p>
            <a href="mailto:info@fahadeng.com?subject=Rent%20Welding%20Machine" className="buy-now-btn">
              Rent Now
            </a>
          </div>
        </div>

        {/* Air Compressor Card */}
        <div className="machinery-card">
          <img src="/path-to-air-compressor-image.jpg" alt="Air Compressor" className="machinery-image" />
          <div className="machinery-content">
            <h3 className="machinery-name">Air Compressor</h3>
            <p className="machinery-description">
              Reliable air compressors for powering pneumatic tools and equipment, offering high efficiency and performance.
            </p>
            <a href="mailto:info@fahadeng.com?subject=Rent%20Air%20Compressor" className="buy-now-btn">
              Rent Now
            </a>
          </div>
        </div>

        {/* Container with AC Units Card */}
        <div className="machinery-card">
          <img src="/path-to-container-ac-image.jpg" alt="Container with AC Units" className="machinery-image" />
          <div className="machinery-content">
            <h3 className="machinery-name">Container with AC Units</h3>
            <p className="machinery-description">
              Fully equipped containers with air conditioning units, providing comfortable and secure working environments on-site.
            </p>
            <a href="mailto:info@fahadeng.com?subject=Rent%20Container%20with%20AC%20Units" className="buy-now-btn">
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


const Services = () => {
  const location = useLocation();

  // Highlight the current section in the URL
  const isManpowerSupply = location.hash === "#manpower-supply";
  const isInstrumentation = location.hash === "#instrumentation";
  const isMachinery = location.hash === "#machinery"; // Machinery Section

  return (
    <div className="services-page">
      {/* Navigation */}
      {/* <nav>
        <ul>
          <li><a href="#manpower-supply">Manpower Supply</a></li>
          <li><a href="#instrumentation">Instrumentation</a></li>
          <li><a href="#machinery">Machinery</a></li>
        </ul>
      </nav> */}

      {/* Manpower Supply Section */}
      {isManpowerSupply && (
        <section className="manpower-supply-section" id="manpower-supply">
          <h2 className="manpower-heading">Manpower Supply</h2>
          <div className="manpower-container">
            <div className="manpower-left">
              <img
                src="/manpower-supply.jpg"
                alt="Manpower Supply"
                className="manpower-image"
              />
            </div>
            <div className="manpower-right">
              <p className="manpower-description">
                Engineering rapidly expanding organization offering a wide range
                of engineering and technical support in the field of construction
                maintenance and manpower supply services. As a result of our
                continuous pursuit for recognition and devoted customer service
                over the past ten years, we have highly qualified and technically
                skilled staff in various categories such as Civil, Mechanical,
                Electrical, and Instrumentation.
                <br />
                <br />
                Before we provide the required manpower or labor to our customers,
                we check the candidates on the following basis:
                <ul>
                  <li>Exact Documentation</li>
                  <li>Behavioral Interviews</li>
                  <li>Training</li>
                  <li>Reference Checking</li>
                  <li>Police Verification</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Instrumentation Section */}
      {isInstrumentation && (
        <section className="instrumentation-section" id="instrumentation">
          <h2 className="instrumentation-heading">Instrumentation</h2>
          <div className="instrumentation-container">
            <div className="instrumentation-left">
              <p className="instrumentation-description">
                Fahad Instrumentations specializes in instrumentation and control
                system projects with the latest technology. We handle integration and
                assembly of various types of cabinets, site installation, cable distribution,
                commissioning, and control systems, ensuring seamless operation. Our expertise
                covers process automation systems, technical support, pre-commissioning,
                and troubleshooting.
                <br /><br />
                We have extensive experience working with advanced process automation
                systems such as SCADA/DCS/ESD, RTU (Yokogawa, Emerson, ABB, Siemens, etc.),
                Turbine Control Systems (CCS/Woodward), Vibration Monitoring Systems (VMS/GE),
                and Temperature Monitoring Systems. Our knowledge extends to protocols like
                OPC, MODBUS, PROFIBUS, ensuring seamless system communication and integration.
              </p>
            </div>
            <div className="instrumentation-right">
              <img
                src="/instrumentation-erection.png"
                alt="Instrumentation"
                className="instrumentation-image"
              />
            </div>
          </div>
        </section>
      )}

      {/* Machinery Section */}
      {isMachinery && <MachinerySection />}
    </div>
  );
};

export default Services;
