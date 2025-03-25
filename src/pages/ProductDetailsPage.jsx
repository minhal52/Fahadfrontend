import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const product = location.state?.product;

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // Store multiple images: main image + extra images
  const images = [
    product.image,
    ...(product.models || []).map(
      (model, index) =>
        `/images/${product.name.toLowerCase().replace(/ /g, "-")}-${index + 1}.jpg`
    ),
  ];

  const [mainImage, setMainImage] = useState(images[0]); // Default main image
  const [quantity, setQuantity] = useState(1); // Default quantity 1

  // Function to handle quantity change
  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // WhatsApp message with product details
  const whatsappMessage = `Hello, I'm interested in the ${product.name}. 
Brand: ${product.brand}
Model Year: ${product.year}
Quantity: ${quantity}`;

  const whatsappLink = `https://wa.me/yourwhatsappnumber?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="product-details">
      {/* Go Back Button */}
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>

      {/* Left Side - Product Images */}
      <div className="product-images">
        <img src={mainImage} alt={product.name} className="main-image" />
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Info */}
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Model Year:</strong> {product.year}</p>

        {/* Check if the product is Transportation or Equipment */}
        {product.type === "Transportation" && (
          <div className="product-type">
            <p><strong>Type:</strong> Transportation</p>
            {/* Add any specific details for transportation */}
          </div>
        )}

        {product.type === "Equipment" && (
          <div className="product-type">
            <p><strong>Type:</strong> Equipment</p>
            {/* Add any specific details for equipment */}
          </div>
        )}

        {/* Quantity Selector with Increase/Decrease Buttons */}
        <div className="quantity-container">
          <label>Quantity:</label>
          <button onClick={() => handleQuantityChange("decrease")} className="quantity-btn">-</button>
          <span className="quantity-value">{quantity}</span>
          <button onClick={() => handleQuantityChange("increase")} className="quantity-btn">+</button>
        </div>

        {/* WhatsApp Inquiry Button */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          <FaWhatsapp className="whatsapp-icon" /> WhatsApp Inquiry
        </a>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
