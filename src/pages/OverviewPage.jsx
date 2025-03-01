import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/OverviewPage.css";

const data = [
  { name: "Jan", expense: 400 },
  { name: "Feb", expense: 300 },
  { name: "Mar", expense: 500 },
  { name: "Apr", expense: 700 },
];

const OverviewPage = () => {
  return (
    <div className="overview-page">
      <h2>Dashboard Overview</h2>
      
      {/* Financial Summary */}
      <div className="summary">
        <div className="summary-box income">
          <h4>Total Income</h4>
          <p>₹50,000</p>
        </div>
        <div className="summary-box expense">
          <h4>Total Expenses</h4>
          <p>₹25,000</p>
        </div>
        <div className="summary-box balance">
          <h4>Remaining Balance</h4>
          <p>₹25,000</p>
        </div>
      </div>

      {/* Expense Chart */}
      <div className="chart-container">
        <h4>Monthly Expenses</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="expense" fill="#ff6b6b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Transactions */}
      <div className="transactions">
        <h4>Recent Transactions</h4>
        <ul>
          <li>🍔 Food - ₹500</li>
          <li>🚗 Transport - ₹1000</li>
          <li>🎁 Shopping - ₹2000</li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewPage;
