import React, { useState } from "react";
import "./Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Grocery", amount: -50 },
    { id: 2, name: "Salary", amount: 1000 },
  ]);

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.name} - <span className={t.amount > 0 ? "income" : "expense"}>
              ${t.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
