import React, { useState, useEffect } from 'react';

const AUTH_API = process.env.REACT_APP_AUTH_API || 'http://localhost:5001/api';

export default function AuthComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${AUTH_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setMessage('Login successful.');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Login error.');
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setMessage('Logged out successfully.');
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {token && <button onClick={handleLogout}>Logout</button>}
      {message && <div>{message}</div>}
    </div>
  );
}
