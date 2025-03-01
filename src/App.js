import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import TransactionsPage from "./pages/TransactionsPage";
import AccountsPage from "./pages/AccountsPage";
import BudgetsPage from "./pages/BudgetsPage";
import CreditCardsPage from "./pages/CreditCardsPage";
import DebtsPage from "./pages/DebtsPage";
import ChartsPage from "./pages/ChartsPage";
import CalendarPage from "./pages/CalendarPage";
import ImportExportPage from "./pages/ImportExportPage";
import PreferencesPage from "./pages/PreferencesPage";
import BankSyncPage from "./pages/BankSyncPage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";

import "./styles/General.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<OverviewPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/accounts" element={<AccountsPage />} />
              <Route path="/budgets" element={<BudgetsPage />} />
              <Route path="/credit-cards" element={<CreditCardsPage />} />
              <Route path="/debts" element={<DebtsPage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/import-export" element={<ImportExportPage />} />
              <Route path="/preferences" element={<PreferencesPage />} />
              <Route path="/bank-sync" element={<BankSyncPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<HelpPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
