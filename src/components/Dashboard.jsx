import React from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h2>Dashboard Overview</h2>
        
      </div>
    </div>
  );
};

export default Dashboard;
