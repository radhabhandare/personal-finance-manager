import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";  // Adjust path

import { FaHome, FaChartBar, FaCog, FaQuestionCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finance Manager</h2>
      <ul>
        <li><Link to="/">📊 Overview</Link></li>
        <li><Link to="/transactions">📜 Transactions</Link></li>
        <li><Link to="/accounts">🏦 Accounts</Link></li>
        <li><Link to="/credit-cards">💳 Credit Cards</Link></li>
        <li><Link to="/budgets">📉 Budgets</Link></li>
        <li><Link to="/debts">⏳ Debts</Link></li>
        <li><Link to="/charts">📊 Charts</Link></li>
        <li><Link to="/calendar">📅 Calendar</Link></li>
        <li><Link to="/import-export">⬇ Import/Export</Link></li>
        <li><Link to="/preferences">⚙ Preferences</Link></li>
        <li><Link to="/bank-sync">🔗 Bank Sync</Link></li>
        <li><Link to="/settings">⚙ Settings</Link></li>
        <li><Link to="/help">❓ Help</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
