import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ModelPage = () => {
  const { categoryId, subcategoryId } = useParams();
  const navigate = useNavigate();

  // Define models for each subcategory
  const models = {
    1: [ // JCB
      { id: "M1", name: "JCB 3DX Backhoe Loader", image: "/images/jcb_3dx.jpg" },
      { id: "M2", name: "JCB 4CX Super Backhoe", image: "/images/jcb_4cx.jpg" }
    ],
    2: [ // WHEEL LOADER
      { id: "M3", name: "Lonking Wheel Loader ZL50", image: "/images/wheel_loader_ZL50.jpg" },
      { id: "M4", name: "Lonking Wheel Loader ZL40", image: "/images/wheel_loader_ZL40.jpg" }
    ],
    3: [ // BULL, SKID LOADER
      { id: "M5", name: "Bull Skid Loader 320", image: "/images/bull_skid_320.jpg" },
      { id: "M6", name: "Bull Skid Loader 450", image: "/images/bull_skid_450.jpg" }
    ],
    4: [ // BACKHOE LOADER
      { id: "M7", name: "Bull Backhoe Loader", image: "/images/bull_backhoe_loader.jpg" },
      { id: "M8", name: "Cat 420F Backhoe Loader", image: "/images/cat_420f_backhoe.jpg" }
    ],
    5: [ // ROLLER COMPACTOR
      { id: "M9", name: "Lonking Roller LKD420", image: "/images/roller_LKD420.jpg" },
      { id: "M10", name: "Lonking Roller LKD520", image: "/images/roller_LKD520.jpg" }
    ],
    6: [ // 7 TON FORKLIFT
      { id: "M11", name: "Heli 7 Ton Forklift", image: "/images/heli_7ton_forklift.jpg" }
    ],
    7: [ // TRANSPORTATION - BUSES
      { id: "M12", name: "Mercedes-Benz Bus", image: "/images/mercedes_bus.jpg" },
      { id: "M13", name: "Volvo Luxury Coach", image: "/images/volvo_coach.jpg" }
    ],
    8: [ // DIESEL TANKER
      { id: "M14", name: "Ashok Leyland Diesel Tanker", image: "/images/ashok_leyland_tanker.jpg" },
      { id: "M15", name: "Tata Motors Diesel Tanker", image: "/images/tata_motors_tanker.jpg" }
    ],
    9: [ // GMC
      { id: "M16", name: "GMC Sierra 1500", image: "/images/gmc_sierra.jpg" },
      { id: "M17", name: "GMC Yukon XL", image: "/images/gmc_yukon.jpg" }
    ],
    10: [ // PICKUP
      { id: "M18", name: "Toyota Hilux Pickup", image: "/images/toyota_hilux.jpg" },
      { id: "M19", name: "Mitsubishi L200 Pickup", image: "/images/mitsubishi_l200.jpg" }
    ],
  };

  // Convert subcategoryId to a number to match the object keys
  const subcategoryModels = models[Number(subcategoryId)] || [];

  return (
    <div className="model-page">
      <h2>Models for Subcategory {subcategoryId}</h2>
      <div className="model-list">
        {subcategoryModels.length > 0 ? (
          subcategoryModels.map((model) => (
            <div key={model.id} className="model-card">
              <img src={model.image} alt={model.name} className="model-image" />
              <h3 className="model-title">{model.name}</h3>
              <button 
                className="view-details-btn" 
                onClick={() => navigate(`/product-details/${model.id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="no-models">No models available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ModelPage;
