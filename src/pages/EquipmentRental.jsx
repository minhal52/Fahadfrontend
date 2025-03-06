import React from 'react';
import { useNavigate } from 'react-router-dom';

const EquipmentRentals = () => {
  const navigate = useNavigate(); // React Router navigation hook

  const equipmentList = [
    {
      id: 1,
      name: "JCB",
      brand: "Caterpillar",
      year: "2022",
      image: "/jcb.jpg",
      images: ["/jcb1.jpg", "/jcb2.jpg", "/jcb3.jpg"], // Extra images for thumbnails
      models: ["JCB 3DX", "JCB 4CX", "JCB 5DX"]
    },
    {
      id: 2,
      name: "WHEEL LOADER",
      brand: "Lonking",
      year: "2023,2024",
      image: "/lonkingwheelloader.jpg",
      images: ["/lonking1.jpg", "/lonking2.jpg", "/lonking3.jpg"],
      models: ["Lonking LG855", "Lonking LG833", "Lonking CDM"]
    },
    {
      id: 3,
      name: "BULL, SKID LOADER",
      brand: "Cat",
      year: "2022,2023,2024",
      image: "/skidloader.jpg",
      images: ["/skid1.jpg", "/skid2.jpg", "/skid3.jpg"],
      models: ["Cat 226D", "Cat 232D", "Cat 262D"]
    },
    {
      id: 4,
      name: "BACKHOE LOADER",
      brand: "Bull",
      year: "2023,2024",
      image: "/backhoeloader.jpg",
      images: ["/backhoe1.jpg", "/backhoe2.jpg", "/backhoe3.jpg"],
      models: ["Bull HD76", "Bull Smart60", "Bull HD100"]
    },
    {
      id: 5,
      name: "ROLLER COMPACTOR",
      brand: "Lonking",
      year: "2024",
      image: "/rollercompactor.jpg",
      images: ["/roller1.jpg", "/roller2.jpg", "/roller3.jpg"],
      models: ["Lonking RC100", "Lonking RC200"]
    },
    {
      id: 6,
      name: "7 TON FORKLIFT",
      brand: "Heli",
      year: "2024",
      image: "/7tonforkliftheli.jpg",
      images: ["/forklift1.jpg", "/forklift2.jpg", "/forklift3.jpg"],
      models: ["Heli CPCD70", "Heli CPCD80"]
    }
  ];

  return (
    <section className="equipment-rentals">
      {/* Banner Section */}
      <div className="equipment-banner">
        <h1 className="equipment-banner-heading">Equipment Rentals</h1>
      </div>

      {/* Equipment List Section */}
      <div className="equipment-list">
        {equipmentList.map((item) => (
          <div key={item.id} className="equipment-card">
            <img src={item.image} alt={item.name} className="equipment-image" />
            <h3 className="equipment-name">{item.name}</h3>
            <p className="equipment-brand">Brand: {item.brand}</p>
            <p className="equipment-year">Year: {item.year}</p>
            
            {/* View Details Button - Redirects to Product Details Page */}
            <button
              className="view-models-button"
              onClick={() =>
                navigate(`/product-details/${item.id}`, { state: { product: item } })
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

export default EquipmentRentals;
