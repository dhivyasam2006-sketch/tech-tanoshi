import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (signup(email, password)) {
      navigate('/dashboard1');
    } else {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register Your Company</h2>
        <p className="auth-subtitle">Join the Carbon Intelligence Platform</p>
        
        <form onSubmit={handleSubmit}>
          {error && <div className="alert error">{error}</div>}
          
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Industry</label>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} required>
              <option value="">Select Industry</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="logistics">Logistics</option>
              <option value="agriculture">Agriculture</option>
              <option value="construction">Construction</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="cement">Cement & Construction</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="auth-btn">Register Company</button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;