import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const MaterialSupply = () => {
  const materials = [
    { id: 1, name: "", image: "/material1.jpg" },
    { id: 2, name: "", image: "/material2.jpg" },
    { id: 3, name: "", image: "/material3.jpg" },
    { id: 4, name: "", image: "/material4.jpg" },
    { id: 5, name: "", image: "/material5.jpg" },
    { id: 5, name: "", image: "/material6.jpg" },
    { id: 5, name: "", image: "/material7.jpg" },
    { id: 5, name: "", image: "/material8.jpg" },
    { id: 5, name: "", image: "/material9.jpg" },
    { id: 5, name: "", image: "/material10.jpg" },
    { id: 5, name: "", image: "/material12.jpg" },
    { id: 5, name: "", image: "/material13.jpg" },
    { id: 5, name: "", image: "/material14.jpg" },
    { id: 5, name: "", image: "/material15.jpg" },
    { id: 5, name: "", image: "/material16.jpg" },
    { id: 5, name: "", image: "/material17.jpg" },
    { id: 5, name: "", image: "/material18.jpg" },
    { id: 5, name: "", image: "/material19.jpg" },
    { id: 5, name: "", image: "/material20.jpg" },
    { id: 5, name: "", image: "/material21.jpg" },
    { id: 5, name: "", image: "/material22.jpg" },
    { id: 5, name: "", image: "/material23.jpg" },
    { id: 5, name: "", image: "/material24.jpg" },
    { id: 5, name: "", image: "/material25.jpg" },
    { id: 5, name: "", image: "/material26.jpg" },
    { id: 5, name: "", image: "/material27.jpg" },
    { id: 5, name: "", image: "/material28.jpg" },
    { id: 5, name: "", image: "/material29.jpg" },
    { id: 5, name: "", image: "/material30.jpg" },
    // { id: 5, name: "", image: "/material31.jpg" },
    // { id: 5, name: "", image: "/material32.jpg" },
// 


  ];

  return (
    <section className="material-supply">
      {/* Banner */}
      <div className="banner">

        <h1 className="banner-heading">Material Supply</h1>
      </div>

      {/* Intro Section */}
      <div className="material-intro">
        <img
          src="/materialsupply.jpg"
          alt="Material Supply"
          className="intro-image"
        />
      <div className="intro-content">
  <h2>High-Quality Construction Materials</h2>
  <p>
  At Fahad Engineering, we provide a comprehensive range of industrial and electrical supplies, including high-quality power tools, 
  lubricants, cables, circuit breakers, and essential equipment. Our products are carefully sourced to meet the demands of construction, 
  electrical installations, and maintenance projects, ensuring efficiency, durability, and safety. Whether you need advanced wiring solutions 
  or heavy-duty tools, 
  Fahad Engineering is committed to delivering reliable equipment for all your industrial and technical needs.
  </p>
  <button className="inquiry-button">
    <FaWhatsapp /> Make an Inquiry
  </button>
</div>
</div>

      {/* Materials Grid */}
      <div className="material-list">
        {materials.map((item) => (
          <div key={item.id} className="material-card">
            <img src={item.image} alt={item.name} className="material-image" />
            <h3 className="material-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialSupply;
