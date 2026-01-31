import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Determine company number based on email
  const getCompanyNumber = () => {
    if (!currentUser) return '';
    return currentUser.email === 'cement@company.com' ? '1' : '2';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={`/dashboard${getCompanyNumber()}`} className="navbar-brand">
          Carbon Intelligence Platform
        </Link>
        
        {currentUser && (
          <div className="navbar-menu">
            <div className="company-info">
              <span className="company-name">{currentUser.companyName}</span>
              <span className="company-type">{currentUser.companyType.toUpperCase()} Company</span>
            </div>
            
            <div className="nav-links">
              <Link to={`/dashboard${getCompanyNumber()}`}>Dashboard</Link>
              <Link to={`/emissions-report${getCompanyNumber()}`}>Emissions Report</Link>
              <Link to={`/upload-data${getCompanyNumber()}`}>Upload Data</Link>
              <Link to={`/consumer-data${getCompanyNumber()}`}>Consumer Data</Link>
              <Link to={`/certification${getCompanyNumber()}`}>Certification</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;