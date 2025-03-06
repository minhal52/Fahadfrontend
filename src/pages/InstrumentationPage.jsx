import React from "react";

const InstrumentationPage = () => {
  return (
    <div className="instrumentation-page">
      {/* Banner Section */}
      <section className="instrumentation-banner">
        <img src="/instrumnttnbnnr.jpg" alt="Instrumentation Banner" className="banner-img" />
        <div className="banner-overlay">
          <h1>Instrumentation & Control Systems</h1>
        </div>
      </section>

      {/* First Section - Image Left, Content Right */}
      <section className="instrumentation-section">
        <div className="image-container">
          <img src="/instrumenttn3.jpg" alt="Instrumentation Work" className="instrumentation-img" />
        </div>
        <div className="content-container">
          <h2>Instrumentation & Control System Capabilities</h2>
          <p>
            Fahad Instrumentations has the capabilities of handling <strong>Instrumentation & Control System</strong> projects 
            with state-of-the-art technology. We specialize in instrumentation works, including the integration and assembly 
            of all types of cabinets, on-site installations, and construction work such as cable distribution from transmitters 
            and valve points to control systems via JB and marshaling cabinets. Additionally, we provide <strong>Process Control 
            System Technical Support, Pre-Commissioning, and Commissioning</strong> services, ensuring project completion on time 
            with the highest standards of efficiency and accuracy.
          </p>
        </div>
      </section>

      {/* Second Section - Heading & Content Left, Two Images Right */}
      <section className="system-integration-section">
        <div className="content-container">
          <h2>System Integration & Instrumentation Erection</h2>
          <p>
            Our team has extensive experience working with <strong>Process Automation Systems</strong> such as SCADA, DCS, ESD, and RTU 
            from leading brands like <strong>Yokogawa, Honeywell, Emerson, ABB, Siemens, and Triconex</strong>. We specialize in <strong>Auxiliary Systems</strong> 
            such as Vibration Monitoring Systems (VMS) by GE, Temperature Monitoring, Compressor Control Systems (CCS) by Woodward, 
            Turbine Control, and Tank Gauging Systems. Our expertise extends to interfacing automation systems with auxiliary 
            systems using communication protocols like <strong>OPC, MODBUS, PROFIBUS, Serial Communication, and Foundation Fieldbus</strong>.
          </p>
        </div>
        <div className="images-container">
          <img src="/instrumentation2.jpg" alt="System Integration Work" className="instrumentation-img" />
          {/* <img src="/instrumentation3.jpg" alt="Instrumentation Erection" className="instrumentation-img" /> */}
        </div>
      </section>
    </div>
  );
};

export default InstrumentationPage;
