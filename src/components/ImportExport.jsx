import React, { useState } from "react";
import "../styles/ImportExport.css";

const ImportExport = () => {
  const [transactions, setTransactions] = useState([]);

  // Handle File Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        setTransactions([...transactions, ...data]);
      } catch (error) {
        alert("Invalid file format. Please upload a JSON file.");
      }
    };
    reader.readAsText(file);
  };

  // Export Data as JSON
  const handleExportJSON = () => {
    const json = JSON.stringify(transactions, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transactions.json";
    link.click();
  };

  // Export Data as CSV
  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Date,Amount,Category"].join(",") +
      "\n" +
      transactions
        .map((t) => `${t.date},${t.amount},${t.category}`)
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "transactions.csv";
    link.click();
  };

  // Delete a Transaction
  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="import-export-container">
      <h2>Import & Export Transactions</h2>

      <div className="import-section">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
        />
      </div>

      <div className="export-section">
        <button onClick={handleExportJSON}>Export as JSON</button>
        <button onClick={handleExportCSV}>Export as CSV</button>
      </div>

      <div className="transactions-list">
        <h3>Imported Transactions</h3>
        {transactions.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          <ul>
            {transactions.map((t, index) => (
              <li key={index}>
                {t.date} - ₹{t.amount} ({t.category})
                <button onClick={() => handleDeleteTransaction(index)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ImportExport;
