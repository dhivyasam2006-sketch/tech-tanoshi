import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      // Redirect based on email
      if (email === 'cement@company.com') {
        navigate('/dashboard1');
      } else if (email === 'cosmetic@company.com') {
        navigate('/dashboard2');
      } else {
        navigate('/dashboard1');
      }
    } else {
      setError('Invalid credentials. Use predefined company emails: cement@company.com or cosmetic@company.com');
    }
  };

  // Demo credentials for quick login
  const demoLogin = (demoEmail) => {
    setEmail(demoEmail);
    setPassword('password123');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Carbon Intelligence Platform</h2>
        <p className="auth-subtitle">Supply Chain Decarbonization & Scope 3 Intelligence</p>
        
        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <button onClick={() => demoLogin('cement@company.com')} className="demo-btn cement">
            Login as Cement Company
          </button>
          <button onClick={() => demoLogin('cosmetic@company.com')} className="demo-btn cosmetic">
            Login as Cosmetic Company
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="alert error">{error}</div>}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter company email"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Use 'password123' for demo"
            />
          </div>
          
          <button type="submit" className="auth-btn">Login</button>
        </form>
        
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        
        <div className="problem-statement">
          <h4>Problem Statement:</h4>
          <p>Sustainability: Supply Chain Decarbonization & Scope 3 Intelligence</p>
          <p>Solving the bottleneck in measuring and managing Scope 3 emissions through dynamic carbon intelligence.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;