import React, { useState } from "react";
import { FaPlus, FaEye, FaExchangeAlt, FaEllipsisV } from "react-icons/fa";
import { Card, Button, Modal, Form } from "react-bootstrap";
import "../styles/Accounts.css";

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { name: "Wallet", balance: 281.54, type: "Normal" },
    { name: "Bank Account", balance: 34457.48, type: "Normal" },
    { name: "Prepaid Card", balance: 200.0, type: "Normal" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newAccount, setNewAccount] = useState({ name: "", balance: "", type: "Normal" });

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0).toFixed(2);

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const addAccount = () => {
    if (newAccount.name && newAccount.balance) {
      setAccounts([...accounts, { ...newAccount, balance: parseFloat(newAccount.balance) }]);
      setNewAccount({ name: "", balance: "", type: "Normal" });
      setShowModal(false);
    }
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="balance-header">
        <h4>Accounts</h4>
        <h5>Total: ₹{totalBalance}</h5>
      </div>

      {/* Account List */}
      <div className="mt-3">
        {accounts.map((account, index) => (
          <Card key={index} className="account-card shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{account.name}</Card.Title>
                <Card.Subtitle className="text-muted">{account.type}</Card.Subtitle>
              </div>
              <h5 className="text-success">₹{account.balance.toFixed(2)}</h5>
              <div>
                <Button variant="light" className="me-2">
                  <FaExchangeAlt />
                </Button>
                <Button variant="light" className="me-2">
                  <FaEye />
                </Button>
                <Button variant="light">
                  <FaEllipsisV />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Floating Action Button to Add Account */}
      <button className="fab btn btn-danger rounded-circle" onClick={() => setShowModal(true)}>
        <FaPlus size={24} />
      </button>

      {/* Modal for Adding New Account */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Account Name</Form.Label>
              <Form.Control type="text" name="name" value={newAccount.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Initial Balance</Form.Label>
              <Form.Control type="number" name="balance" value={newAccount.balance} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="type" value={newAccount.type} onChange={handleChange}>
                <option>Normal</option>
                <option>Credit</option>
                <option>Savings</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addAccount}>
            Add Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Accounts;
