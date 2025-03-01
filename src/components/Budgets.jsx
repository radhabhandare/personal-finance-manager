// Budgets.jsx (Component for a single budget item)
import React, { useState } from "react";
import "../styles/Budgets.css";

const Budgets = ({ budget, onDelete, onUpdate }) => {
  const [spent, setSpent] = useState(budget.spent);

  const handleUpdate = (e) => {
    const newSpent = parseFloat(e.target.value) || 0;
    setSpent(newSpent);
    onUpdate(budget.id, newSpent);
  };

  return (
    <div className="budget-card">
      <h3>{budget.category}</h3>
      <p>Budget: ₹{budget.amount}</p>
      <p>Spent: ₹{spent}</p>
      <input
        type="number"
        value={spent}
        onChange={handleUpdate}
        placeholder="Update spending"
      />
      <button onClick={() => onDelete(budget.id)}>Delete</button>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(spent / budget.amount) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Budgets;