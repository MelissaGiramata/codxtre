// pages/login.js
import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState(null);
  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLoginWithCredentials = async () => {
    try {
      // Implement login logic with credentials using fetch or other methods
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginCredentials),
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Login with credentials failed', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '200px' }}>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#001f3f', fontSize: '24px' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#001f3f', fontSize: '16px' }}>
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={loginCredentials.username}
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
                value={loginCredentials.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
              />
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
              onClick={handleLoginWithCredentials}
            >
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
