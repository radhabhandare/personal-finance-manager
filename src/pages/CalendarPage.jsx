import React from "react";
import CalendarComponent from "../components/Calendar";
import "../styles/CalendarPage.css";

const CalendarPage = () => {
  return (
    <div className="calendar-page">
      <h1>Calendar & Expense History</h1>
      <CalendarComponent />
    </div>
  );
};

export default CalendarPage;
