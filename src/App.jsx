import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import Login from "./Pages/Login.jsx";
import WeddingCatering from "./Pages/WeddingCatering.jsx";
import CorporateCatering from "./Pages/CorporateEvents.jsx";
import PrivateParties from "./Pages/PrivateParties.jsx";
import BirthdayCatering from "./Pages/BirthdayParties.jsx";
import HomeCatering from "./Pages/HomeCatering.jsx";
import BBQCatering from "./Pages/BBQCatering.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wedding-catering" element={<WeddingCatering />} />
        <Route path="/corporate-events" element={<CorporateCatering />} />
        <Route path="/private-parties" element={<PrivateParties />} />
        <Route path="/birthday-parties" element={<BirthdayCatering />} />
        <Route path="/home-catering" element={<HomeCatering />} />
        <Route path="/bbq-catering" element={<BBQCatering />} />
      </Routes>
    </Router>
  );
}

export default App;
