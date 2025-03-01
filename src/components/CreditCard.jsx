import React from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
import "../styles/CreditCard.css";

const creditCards = [
  { id: 1, name: "HDFC Bank", balance: -12000.5, limit: 50000 },
  { id: 2, name: "SBI Credit", balance: -8000.25, limit: 40000 },
];

const CreditCard = () => {
  return (
    <div className="credit-card-container">
      {/* Header */}
      <div className="header bg-primary text-white p-3 rounded">
        <h4>Credit Cards</h4>
      </div>

      {/* Credit Card List */}
      <div className="card-list mt-3">
        {creditCards.map((card) => (
          <Card key={card.id} className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className="text-muted">Limit: ₹{card.limit.toFixed(2)}</Card.Subtitle>
              </div>
              <h5 className={card.balance < 0 ? "text-danger" : "text-success"}>
                ₹{card.balance.toFixed(2)}
              </h5>
              <div>
                <Button variant="warning" className="me-2">
                  <FaEdit />
                </Button>
                <Button variant="danger">
                  <FaTrash />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fab btn btn-success rounded-circle">
        <FaPlus size={24} />
      </button>
    </div>
  );
};

export default CreditCard;
