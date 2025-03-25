import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ServicePage from "./pages/Servicesp";
import Contact from "./pages/Contact";
import EquipmentRentals from "./pages/EquipmentRental";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Transportation from "./pages/Transportation";
import MaterialSupply from "./pages/MaterialSupply";
import MachinerySupply from "./pages/MachinerySupply";
import InstrumentationPage from "./pages/InstrumentationPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<Contact />} />

            {/* ✅ Fixed Route for Equipment Rentals */}
            <Route path="/services/equipment-rental" element={<EquipmentRentals />} />
            
            <Route path="/product-details/:id" element={<ProductDetailsPage />} />

            {/* Services Routes */}
            <Route path="/services/transportation" element={<Transportation />} />
            <Route path="/services/material-supply" element={<MaterialSupply />} />
            <Route path="/services/machinery-supply" element={<MachinerySupply />} />
            <Route path="/services/instrumentation" element={<InstrumentationPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
