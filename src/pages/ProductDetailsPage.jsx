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

  // Use provided product images (main + thumbnails)
  const images = [product.image, ...(product.images || [])];

  const [mainImage, setMainImage] = useState(images[0]); // Default main image
  const [quantity, setQuantity] = useState(1); // Default quantity 1

  // Function to handle quantity change
  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(1, prev - 1)));
  };

  // Generate WhatsApp Message
  const whatsappMessage = `Hello, I'm interested in the ${product.name}.` +
                          `Brand: ${product.brand}` +
                          `Model Year: ${product.year}` +
                          `Quantity: ${quantity}`;

  // WhatsApp Link (Mobile & Desktop Compatible)
  const whatsappLink = `https://api.whatsapp.com/send?phone=%2B966562449061&text=${encodeURIComponent(whatsappMessage)}`;

  // Fallback: Copy to Clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodeURIComponent(whatsappMessage));
    alert("Message copied to clipboard! Open WhatsApp and paste the message.");
  };

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
              className={`thumbnail ${mainImage === image ? "active" : ""}`}
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

        {/* Quantity Selector */}
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

        {/* Fallback: Copy to Clipboard Button */}
        {/* <button onClick={copyToClipboard} className="copy-message-button">
          Copy Message
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
