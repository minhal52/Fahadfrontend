import React from "react";
import { useNavigate } from "react-router-dom";

const Transportation = () => {
  const navigate = useNavigate(); // React Router navigation hook

  // Updated transportation data
  const transportationList = [
    {
      id: 7,
      name: "BUS",
      brand: "Ashok Leyland (Falcon)",
      year: "2022, 2024",
      image: "/ashokleylandbus1.jpg", // Main image
      images: ["/ashokleylandbus2.jpg", "/ashokleylandbus3.jpg", "/ashokleylandbus4.jpg"], // Extra images
      models: ["Model 1", "Model 2", "Model 3"], // Models
      description: "Description of the bus model here...",
    },
    {
      id: 8,
      name: "DYNA TRUCK",
      brand: "Ashok Leyland",
      year: "2022",
      image: "/dynatruck.jpg", // Main image
      images: ["/dynatruck2.jpg", "/dynatruck3.jpg", "/dynatruck4.jpg"], // Extra images
      models: ["Dyna Model A", "Dyna Model B"], // Models
      description: "Description of the Dyna Truck here...",
    },
    {
      id: 9,
      name: "PICKUP",
      brand: "Hilux MG Mitsubishi",
      year: "2021, 2022",
      image: "/pickup1.jpg", // Main image
      images: ["/pickup2.jpg", "/pickup3.jpg", "/pickup4.jpg"], // Extra images
      models: ["Pickup Model X", "Pickup Model Y"], // Models
      description: "Description of the Pickup truck here...",
    },
    {
      id: 10,
      name: "DIESEL TANKER",
      brand: "Ashok Leyland",
      year: "2022, 2024",
      image: "/ashokdieseltanker.jpg", // Main image
      images: ["/dieseltanker2.jpg", "/dieseltanker3.jpg", "/dieseltanker4.jpg"], // Extra images
      models: ["Model A", "Model B"], // Models
      description: "Description of the Diesel Tanker here...",
    },
    {
      id: 11,
      name: "GMC",
      brand: "GMC",
      year: "2020",
      image: "/GMC1.jpg", // Main image
      images: ["/GMC2.jpg", "/GMC3.jpg", "/GMC4.jpg"], // Extra images
      models: ["GMC Model X", "GMC Model Y"], // Models
      description: "Description of the GMC model here...",
    },
  ];

  return (
    <section className="transportation">
      {/* Banner Section */}
      <div className="transport-banner">
        <h1 className="banner-heading">Transportation</h1>
      </div>

      {/* Equipment List */}
      <div className="equipment-list">
        {transportationList.map((item) => (
          <div key={item.id} className="equipment-card">
            <img src={item.image} alt={item.name} className="equipment-image" />
            <h3 className="equipment-name">{item.name}</h3>
            <p className="equipment-brand">
              <strong>Brand:</strong> {item.brand}
            </p>
            <p className="equipment-year">
              <strong>Year:</strong> {item.year}
            </p>

            {/* View Details Button */}
            <button
              className="view-models-button"
              onClick={() =>
                navigate(`/product-details/${item.id}`, {
                  state: { product: item },
                })
              }
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Transportation;
