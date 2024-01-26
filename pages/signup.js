// pages/signup.js
import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState(null);
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client', // Default value is 'client'
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleSignup = async () => {
    // Check if passwords match before signup
    if (signupDetails.password !== signupDetails.confirmPassword) {
      setPasswordMatch(false);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide notification after 3 seconds
      return;
    }

    try {
      // Implement signup logic using fetch or other methods
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupDetails),
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // Reset passwordMatch and hide notification when user types in password or confirmPassword
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordMatch(true);
      setShowNotification(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px' }}>
      {user ? (
        <p>Welcome, {user.name}! Your account has been created.</p>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#001f3f', fontSize: '24px' }}>Signup</h2>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={signupDetails.name}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupDetails.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupDetails.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={signupDetails.confirmPassword}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
              {!passwordMatch && showNotification && (
                <p style={{ color: 'red', marginTop: '5px' }}>Passwords do not match. Please check again.</p>
              )}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="userType" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                User Type:
              </label>
              <select
                id="userType"
                name="userType"
                value={signupDetails.userType}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              >
                <option value="client">Client</option>
                <option value="developer">Developer</option>
              </select>
            </div>

            <button
              type="button"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                backgroundColor: '#001f3f',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px',
              }}
              onClick={handleSignup}
            >
              Signup
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Signup;
