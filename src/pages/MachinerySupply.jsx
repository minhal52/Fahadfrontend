import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MachinerySupply = () => {
  const machineries = [
    { id: 1, name: "Generator", image: "/generator.jpg" },
    { id: 2, name: "Air Compressor", image: "/aircompresseor.jpg" },
    { id: 3, name: "Welding Machine", image: "/weldingmachine.jpg" },
    { id: 4, name: "Air Container", image: "/aircontainer.jpg" },

  ];

  return (
    <section className="machinery-supply">
      {/* Banner */}
      <div className="banner">
        <h1 className="banner-heading">Machinery Supply</h1>
      </div>

      {/* Intro Section */}
      <div className="machinery-intro">
        <img
          src="/machinariesimg.jpg"
          alt="Machinery Supply"
          className="intro-image"
        />
        <div className="intro-content">
          <h2>Reliable & High-Performance Machinery</h2>
          <p>
            At Fahad Engineering, we supply a wide range of high-quality 
            industrial and construction machinery, including Generators, air compressors, 
            welding machines, and shipping containers. Our equipment is sourced from top manufacturers, 
            ensuring durability, efficiency, and safety for all industrial applications.
          </p>
          <button className="inquiry-button">
            <FaWhatsapp /> Make an Inquiry
          </button>
        </div>
      </div>

      {/* Machinery Grid */}
      <div className="machinery-list">
        {machineries.map((item) => (
          <div key={item.id} className="machinery-card">
            <img
              src={item.image}
              alt={item.name}
              className="machinery-image"
            />
            <h3 className="machinery-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MachinerySupply;
