// BudgetsPage.jsx (Main budget management page)
import React, { useState } from "react";
import Budgets from "../components/Budgets";
import "../styles/BudgetsPage.css";

const BudgetsPage = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, category: "Food", amount: 5000, spent: 1000 },
    { id: 2, category: "Transport", amount: 3000, spent: 500 },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const addBudget = () => {
    if (newCategory && newAmount) {
      setBudgets([
        ...budgets,
        { id: Date.now(), category: newCategory, amount: parseFloat(newAmount), spent: 0 },
      ]);
      setNewCategory("");
      setNewAmount("");
    }
  };

  const updateBudget = (id, newSpent) => {
    setBudgets(
      budgets.map((budget) =>
        budget.id === id ? { ...budget, spent: newSpent } : budget
      )
    );
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

  return (
    <div className="budgets-page">
      <h2>Manage Your Budgets</h2>
      <div className="budget-form">
        <input
          type="text"
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />
        <button onClick={addBudget}>Add Budget</button>
      </div>
      <div className="budgets-list">
        {budgets.map((budget) => (
          <Budgets
            key={budget.id}
            budget={budget}
            onDelete={deleteBudget}
            onUpdate={updateBudget}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetsPage;
