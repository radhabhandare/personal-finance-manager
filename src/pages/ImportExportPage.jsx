import React from "react";
import ImportExport from "../components/ImportExport";
import "../styles/ImportExportPage.css";

const ImportExportPage = () => {
  return (
    <div className="import-export-page">
      <h1>Manage Your Transactions</h1>
      <ImportExport />
    </div>
  );
};

export default ImportExportPage;
