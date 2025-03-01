import React, { useState } from "react";
import Calendar from "react-calendar";
import "../styles/Calendar.css";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [transactions] = useState({
    "2025-03-01": [{ name: "Grocery", amount: 500 }],
    "2025-03-02": [{ name: "Fuel", amount: 100 }, { name: "Shopping", amount: 1200 }],
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h2>Transaction History</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <div className="history">
        <h3>Transactions on {selectedDate.toDateString()}</h3>
        <ul>
          {transactions[selectedDate.toISOString().split("T")[0]] ? (
            transactions[selectedDate.toISOString().split("T")[0]].map((t, index) => (
              <li key={index}>
                {t.name} - ₹{t.amount}
              </li>
            ))
          ) : (
            <p>No transactions recorded.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CalendarComponent;
