import { Link, Navigate, Route, Routes } from "react-router-dom";
import NGORegistration from "./pages/NGORegistration";
import DonorRegistration from "./pages/DonorRegistration";
import Login from "./pages/Login";

function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <div className="brand">NGO Management System</div>
        <div className="nav-links">
          <Link to="/ngo-register">NGO Registration</Link>
          <Link to="/donor-register">Donor Registration</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <main className="page-area">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/ngo-register" element={<NGORegistration />} />
          <Route path="/donor-register" element={<DonorRegistration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;