import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import WeddingCatering from "./Pages/WeddingCatering.jsx";
import CorporateCatering from "./Pages/CorporateEvents.jsx";
import PrivateParties from "./Pages/PrivateParties.jsx";
import BirthdayCatering from "./Pages/BirthdayParties.jsx";
import HomeCatering from "./Pages/HomeCatering.jsx";
import BBQCatering from "./Pages/BBQCatering.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Header from "./components/Header.jsx";  // Global Header
import Footer from "./components/Footer.jsx";  // Global Footer
import AuthProvider from "./components/AuthContent.jsx";  // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />  {/* Header will be visible on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wedding-catering" element={<WeddingCatering />} />
          <Route path="/corporate-events" element={<CorporateCatering />} />
          <Route path="/private-parties" element={<PrivateParties />} />
          <Route path="/birthday-parties" element={<BirthdayCatering />} />
          <Route path="/home-catering" element={<HomeCatering />} />
          <Route path="/bbq-catering" element={<BBQCatering />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
        <Footer />  {/* Footer will be visible on all pages */}
      </Router>
    </AuthProvider>
  );
}

export default App;
