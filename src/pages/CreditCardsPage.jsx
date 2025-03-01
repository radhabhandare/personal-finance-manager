import React from "react";
import CreditCard from "../components/CreditCard";
import Sidebar from "../components/Sidebar";
import "../styles/CreditCardPage.css";

const CreditCardPage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="content-container">
        <CreditCard />
      </div>
    </div>
  );
};

export default CreditCardPage;
