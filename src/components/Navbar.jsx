import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";  // Adjust path

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Finance Manager</h2>
      <div className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/transactions">💰 Transactions</Link>
        <Link to="/login">🔑 Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
