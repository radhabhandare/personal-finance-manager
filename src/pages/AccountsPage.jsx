import React from "react";
import Accounts from "../components/Accounts";
import Sidebar from "../components/Sidebar";
import "../styles/AccountsPage.css";

const AccountsPage = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="content-container">
        <Accounts />
      </div>
    </div>
  );
};

export default AccountsPage;
