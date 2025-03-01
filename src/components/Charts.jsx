import React from "react";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import "../styles/Charts.css";

const data = [
  { name: "Jan", expenses: 500, income: 1000 },
  { name: "Feb", expenses: 700, income: 1200 },
  { name: "Mar", expenses: 400, income: 900 },
  { name: "Apr", expenses: 800, income: 1300 },
];

const Charts = () => {
  return (
    <div className="charts-container">
      <h2>Financial Charts</h2>

      {/* Bar Chart */}
      <div className="chart">
        <h3>Income vs Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expenses" fill="#f44336" />
            <Bar dataKey="income" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="chart">
        <h3>Expenses Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="expenses" stroke="#f44336" />
            <Line type="monotone" dataKey="income" stroke="#4caf50" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart">
        <h3>Expense Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="expenses" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#f44336" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
