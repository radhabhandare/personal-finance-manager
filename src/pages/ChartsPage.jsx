import React from "react";
import Charts from "../components/Charts";
import "../styles/ChartsPage.css";

const ChartsPage = () => {
  return (
    <div className="charts-page">
      <h1>Financial Charts Overview</h1>
      <Charts />
    </div>
  );
};

export default ChartsPage;
