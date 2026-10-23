import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= IMPORTS SKELETON ================= */
import HomePage from "./pages/HomePage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= CORE / HOME ================= */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;