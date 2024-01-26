// Wallet.js
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Wallet = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  useEffect(() => {
    // Simulate user authentication (replace with your authentication logic)
    const authenticatedUser = { userId: 'someUserId' };
    setUser(authenticatedUser);

    // Simulate fetching user data (replace with your data fetching logic)
    const fetchData = async () => {
      // Fetch user data based on the authenticated user
      // Replace the following lines with your data fetching logic
      const fetchedBalance = 1000; // Replace with the actual balance
      const fetchedTransactions = []; // Replace with the actual transaction data
      setBalance(fetchedBalance);
      setTransactions(fetchedTransactions);
    };

    fetchData();
  }, []);

  const bodyStyle = {
    backgroundImage: 'url("https://wallpapers.com/images/hd/all-black-background-vxqyzaac4tdb83gr.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    width: '800px',
    height: '600px',
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const balanceContainerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#001f3f',
    fontSize: '28px',
    marginBottom: '20px',
  };

  const balanceLabelStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#4CAF50',
    marginBottom: '5px',
  };

  const balanceStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#4CAF50',
    marginTop: '5px',
  };

  const tableStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#001f3f',
  };

  const buttonStyle = {
    backgroundColor: '#28a745', // Green color for the button
    color: '#fff',
    marginTop: '190px',
    padding: '10px 20px', // Added padding for a more comfortable click area
    borderRadius: '5px', // Rounded corners for the button
    border: 'none', // No border to enhance the clean look
    cursor: 'pointer', // Show pointer cursor on hover
  };

  const formContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: 999,
    display: showWithdrawModal ? 'block' : 'none',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleWithdrawal = async () => {
    setShowWithdrawModal(true);
  };

  const handleConfirmWithdrawal = async () => {
    // Validate withdrawal amount
    const parsedAmount = parseFloat(withdrawalAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Please enter a valid withdrawal amount.');
      return;
    }

    // Simulate the withdrawal logic (replace with your withdrawal logic)
    if (balance >= parsedAmount) {
      // Withdrawal is possible
      const updatedBalance = balance - parsedAmount;
      setBalance(updatedBalance);

      // Simulate adding a withdrawal transaction
      const newTransaction = {
        amount: -parsedAmount,
        timestamp: new Date(),
      };
      setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);

      // Close the withdrawal modal
      setShowWithdrawModal(false);
    } else {
      // Insufficient balance
      alert('Insufficient balance for withdrawal.');
    }
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>
          <FontAwesomeIcon icon={faWallet} style={iconStyle} />
          My Wallet
        </h1>
        {user ? (
          <>
            <div style={balanceContainerStyle}>
              <p style={balanceLabelStyle}>Balance:</p>
              <p style={balanceStyle}>{balance} RWF</p>
            </div>
            <h2 style={headerStyle}>Transaction History</h2>
            <Table striped bordered hover style={tableStyle}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Amount</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{transaction.amount} RWF</td>
                    <td>{transaction.timestamp.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="primary" style={buttonStyle} onClick={handleWithdrawal}>
              Withdraw
            </Button>
          </>
        ) : (
          <p style={{ textAlign: 'center' }}>Please log in to view your wallet.</p>
        )}
      </div>

      {/* Withdrawal Form */}
      <div style={formContainerStyle}>
        <Form style={formStyle}>
          <Form.Group controlId="withdrawalAmount">
            <Form.Label>Amount to Withdraw</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" style={{ ...buttonStyle, marginTop: '10px' }} onClick={handleConfirmWithdrawal}>
            Confirm Withdrawal
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Wallet;
