import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquipmentRentals = () => {
  const navigate = useNavigate();

  const equipmentList = [
    {
      id: 1,
      name: "JCB",
      brand: "Caterpillar",
      year: "2022",
      image: "/jcb.jpg",
      images: ["/jcbn1-removebg-preview.png", "/jcbn2-preview.png", "/jcbn3-removebg-preview.png"], // Extra images for thumbnails
      models: ["JCB 3DX", "JCB 4CX", "JCB 5DX"]
    },
    {
      id: 2,
      name: "WHEEL LOADER",
      brand: "Lonking",
      year: "2023,2024",
      image: "/Screenshot_2025-03-27_092236-removebg-preview.png",
      images: ["/Screenshot_2025-03-27_092003-removebg-preview.png", "/lonkingwheelloader.jpg", "/Screenshot_2025-03-27_092257-removebg-preview.png"],
      models: ["Lonking LG855", "Lonking LG833", "Lonking CDM"]
    },
    {
      id: 3,
      name: "BULL, SKID LOADER",
      brand: "Cat",
      year: "2022,2023,2024",
      image: "/skidloader.jpg",
      images: ["/skidloadern3-removebg-preview.png", "/skidloadern1-removebg-preview.png"],
      models: ["Cat 226D", "Cat 232D", "Cat 262D"]
    },
    {
      id: 4,
      name: "BACKHOE LOADER",
      brand: "Bull",
      year: "2023,2024",
      image: "/backhoeloadern5-removebg-preview.png",
      images: ["/backhoeloadern1-removebg-preview.png", "/backhoeloadern2-removebg-preview.png", "/backhoeloadern3-removebg-preview.png"],
      models: ["Bull HD76", "Bull Smart60", "Bull HD100"]
    },
    {
      id: 5,
      name: "ROLLER COMPACTOR",
      brand: "Lonking",
      year: "2024",
      image: "/rollercompactor.jpg",
      images: ["/rollern1-removebg-preview.png", "/rollern2-removebg-preview.png", "/rollern3-removebg-preview.png"],
      models: ["Lonking RC100", "Lonking RC200"]
    },
    {
      id: 6,
      name: "7 TON FORKLIFT",
      brand: "Heli",
      year: "2024",
      image: "/7tonforkliftheli.jpg",
      images: ["/7tonn1-removebg-preview.png", "/7tonn2-removebg-preview.png", "/7tonn3-removebg-preview.png"],
      models: ["Heli CPCD70", "Heli CPCD80"]
    }
  ];

 
  return (
    <section className="equipment-rentals">
      <div className="equipment-banner">
        <h1 className="equipment-banner-heading">Equipment Rentals</h1>
      </div>

      <div className="equipment-list">
        {equipmentList.map((item) => (
          <div key={item.id} className="equipment-card">
            <img src={item.image} alt={item.name} className="equipment-image" />
            <h3 className="equipment-name">{item.name}</h3>
            <p className="equipment-brand">Brand: {item.brand}</p>
            <p className="equipment-year">Year: {item.year}</p>
            
            <button
              className="view-models-button"
              onClick={() => navigate(`/product-details/${item.id}`, { state: { product: item } })}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentRentals;
