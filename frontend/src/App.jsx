import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= IMPORTS SKELETON ================= */
import HomePage from "./pages/HomePage"; 
import UserLogin from "./pages/pages/user/UserLogin";
import UserSignup from "./pages/pages/user/UserSignup";
import TermOfServices from "./pages/pages/user/TermOfServices";
import PrivacyPolicy from "./pages/pages/user/PrivacyPolicy";
import DiseaseDetection from "./pages/products/DiseaseDetection";
import Dashboard from "./pages/pages/user/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= CORE / HOME ================= */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/terms" element={<TermOfServices />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/disease-detection" element={<DiseaseDetection />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;