import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Dummy Product Data (Replace with real API data)
  const productData = {
    M1: {
      name: "Bull Skid Loader 320",
      description: "A powerful Bull Skid Loader for heavy-duty work.",
      modelYear: "2023",
      quantityAvailable: 5,
      imageUrl: "/bull_skid_320.jpg",
    },
    M2: {
      name: "Bull Skid Loader 450",
      description: "A high-performance Bull Skid Loader for all-terrain jobs.",
      modelYear: "2024",
      quantityAvailable: 3,
      imageUrl: "/bull_skid_450.jpg",
    },
    M3: {
      name: "Lonking Roller LKD420",
      description: "A reliable roller compactor for large construction projects.",
      modelYear: "2023",
      quantityAvailable: 2,
      imageUrl: "/roller_LKD420.jpg",
    },
    M4: {
      name: "Lonking Roller LKD520",
      description: "Advanced roller compactor with enhanced features.",
      modelYear: "2024",
      quantityAvailable: 4,
      imageUrl: "/roller_LKD520.jpg",
    },
    // Add more models here...
  };

  // Fetch the product data based on productId
  const product = productData[productId];

  // Dummy Related Products
  const relatedProducts = [
    { id: "M2", name: "Bulldozer B500", imageUrl: "/bulldozer_b500.jpg" },
    { id: "M3", name: "Crane C750", imageUrl: "/crane_c750.jpg" },
    { id: "M4", name: "Concrete Mixer CM300", imageUrl: "/concrete_mixer_cm300.jpg" },
  ];

  // State for quantity selection
  const [quantity, setQuantity] = useState(1);

  // Function to send a message to WhatsApp
  const handleRentNow = () => {
    const message = `Hello, I want to rent the product: ${product.name} (Model: ${product.modelYear}). Quantity: ${quantity}`;
    const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`; // Replace with your WhatsApp number
    window.open(whatsappURL, "_blank");
  };

  // Function to navigate to a related product's details page
  const handleRelatedProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="product-details-container">
      {/* Left Side - Product Image */}
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      {/* Right Side - Product Details */}
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Model Year:</strong> {product.modelYear}</p>
        <p><strong>Available Quantity:</strong> {product.quantityAvailable}</p>

        {/* Quantity Selection */}
        <div className="quantity-section">
          <label>Quantity:</label>
          <input 
            type="number" 
            min="1" 
            max={product.quantityAvailable} 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* Rent Now Button */}
        <button className="rent-now-btn" onClick={handleRentNow}>Rent Now</button>
      </div>

      {/* Related Products Section */}
      <div className="related-products-section">
        <h3>Related Products</h3>
        <div className="related-products">
          {relatedProducts.map((related) => (
            <div key={related.id} className="related-product-card" onClick={() => handleRelatedProductClick(related.id)}>
              <img src={related.imageUrl} alt={related.name} />
              <p>{related.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
