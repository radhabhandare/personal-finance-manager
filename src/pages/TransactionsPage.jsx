import React from "react";
import Transactions from "../components/Transactions"; // Ensure the correct path

const TransactionsPage = () => {
  return (
    <div className="transactions-page">
      <h1>Transactions</h1>
      <Transactions />
    </div>
  );
};

export default TransactionsPage;
