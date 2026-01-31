import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Predefined company emails
  const COMPANY_EMAILS = {
    'cement@company.com': 'cement',
    'cosmetic@company.com': 'cosmetic'
  };

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('carbonUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simple authentication - check if email is in predefined list
    if (COMPANY_EMAILS[email] && password === 'password123') {
      const user = {
        email,
        companyType: COMPANY_EMAILS[email],
        companyName: email === 'cement@company.com' ? 'Cement Corp Ltd' : 'Cosmetic Beauty Inc'
      };
      setCurrentUser(user);
      localStorage.setItem('carbonUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // For demo, auto-login after signup
    const user = {
      email,
      companyType: 'new',
      companyName: email.split('@')[0]
    };
    setCurrentUser(user);
    localStorage.setItem('carbonUser', JSON.stringify(user));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('carbonUser');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};