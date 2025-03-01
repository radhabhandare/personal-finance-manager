import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";  

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finance Manager</h2>
      <ul>
        <li><NavLink to="/" activeclassname="active">📊 Overview</NavLink></li>
        <li><NavLink to="/transactions" activeclassname="active">📜 Transactions</NavLink></li>
        <li><NavLink to="/accounts" activeclassname="active">🏦 Accounts</NavLink></li>
        <li><NavLink to="/credit-cards" activeclassname="active">💳 Credit Cards</NavLink></li>
        <li><NavLink to="/budgets" activeclassname="active">📉 Budgets</NavLink></li>
        <li><NavLink to="/debts" activeclassname="active">⏳ Debts</NavLink></li>
        <li><NavLink to="/charts" activeclassname="active">📊 Charts</NavLink></li>
        <li><NavLink to="/calendar" activeclassname="active">📅 Calendar</NavLink></li>
        <li><NavLink to="/import-export" activeclassname="active">⬇ Import/Export</NavLink></li>
        <li><NavLink to="/preferences" activeclassname="active">⚙ Preferences</NavLink></li>
        <li><NavLink to="/bank-sync" activeclassname="active">🔗 Bank Sync</NavLink></li>
        <li><NavLink to="/settings" activeclassname="active">⚙ Settings</NavLink></li>
        <li><NavLink to="/help" activeclassname="active">❓ Help</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
