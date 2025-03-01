import React, { useState } from "react";
import "../styles/Transactions.css";


const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Grocery", amount: -500 },
    { id: 2, name: "Salary", amount: 20000 },
  ]);

  const [newTransaction, setNewTransaction] = useState({
    name: "",
    amount: "",
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const addTransaction = () => {
    if (newTransaction.name && newTransaction.amount) {
      setTransactions([
        ...transactions,
        {
          id: transactions.length + 1,
          name: newTransaction.name,
          amount: parseFloat(newTransaction.amount),
        },
      ]);
      setNewTransaction({ name: "", amount: "" });
    }
  };

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="transactions-container">
      <h2 className="title">Transaction History</h2>
      
      <div className="balance-box">
        <h3>Balance: ₹{totalBalance.toFixed(2)}</h3>
      </div>

      <ul className="transactions-list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount > 0 ? "income" : "expense"}>
            {t.name} - <span>₹{t.amount}</span>
          </li>
        ))}
      </ul>

      <div className="transaction-form">
        <input
          type="text"
          name="name"
          value={newTransaction.name}
          onChange={handleChange}
          placeholder="Enter Transaction Name"
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleChange}
          placeholder="Enter Amount"
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
    </div>
  );
};

export default Transactions;
