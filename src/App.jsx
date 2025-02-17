// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SubCategoryPage from "./pages/SubCategoryPage";
import ModelPage from "./pages/ModelPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subcategory/:categoryId" element={<SubCategoryPage />} />
          <Route path="/models/:categoryId/:subcategoryId" element={<ModelPage />} />
          <Route path="/product-details/:productId" element={<ProductDetailsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
