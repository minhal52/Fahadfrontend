import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Define subcategories with their respective IDs
  const subcategories = {
    Equipments: [
      { id: 1, name: "JCB", brand: "Caterpillar", year: "2022", image: "/images/excavator.jpg" },
      { id: 2, name: "WHEEL LOADER", brand: "Lonking", year: "2023,2024", image: "/Wheelloader.jpg" },
      { id: 3, name: "BULL, SKID LOADER", brand: "Cat", year: "2022,2023,2024", image: "/bull_skidloader-removebg-preview - Copy (2).png" },
      { id: 4, name: "BACKHOE LOADER", brand: "Bull", year: "2023,2024", image: "/Backholeloader-removebg-preview - Copy (2).png" },
      { id: 5, name: "ROLLER COMPACTOR", brand: "Lonking", year: "2024", image: "/Rollercompacter.jpg" },
      { id: 6, name: "7 TON FORKLIFT", brand: "Heli", year: "2024", image: "/7tonforklift.jpg" },
    ],
    Transportation: [
      { id: 1, name: "BUS", brand: "Ashok Leyland(Falcon)", year: "2022,2024", image: "/ashokleylandbus.jpg" },
      { id: 2, name: "DYNA TRUCK", brand: "Ashok Leyland", year: "2022", image: "/dynatruck.jpg" },
      { id: 3, name: "PICKUP", brand: "Hillux MG Mistubushi", year: "2021,2022", image: "/pickup.jpg" },
      { id: 4, name: "DIESEL TANKER", brand: "Ashok Leyland", year: "2022,2024", image: "/dieseltanker.jpg" },
      { id: 5, name: "GMC", brand: "GMC", year: "2020", image: "/gmc.jpg" },
    ],
  };

  const categorySubcategories = subcategories[categoryId] || [];

  return (
    <div className="subcategory-page">
      <div className="subcategory-banner">
        <h2>{categoryId.toUpperCase()}</h2>
      </div>
      <div className="subcategory-list">
        {categorySubcategories.map((subcategory) => (
          <div key={subcategory.id} className="subcategory-card">
            <img src={subcategory.image} alt={subcategory.name} className="subcategory-image" />
            <h3 className="subcategory-title">{subcategory.name}</h3>
            <p className="subcategory-description">Brand: {subcategory.brand} | Year: {subcategory.year}</p>
            <button 
              className="view-details-btn" 
              onClick={() => navigate(`/models/${categoryId}/${subcategory.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
