import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import Certification1 from './pages/Certification1';
import Certification2 from './pages/Certification2';
import ConsumerData1 from './pages/ConsumerData1';
import ConsumerData2 from './pages/ConsumerData2';
import EmissionsRe1 from './pages/EmissionsRe1';
import EmissionsRe2 from './pages/EmissionsRe2';
import UploadData1 from './pages/UploadData1';
import UploadData2 from './pages/UploadData2';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Navigate to="/login" />} />
              
              {/* Company 1 Routes */}
              <Route path="/dashboard1" element={<PrivateRoute><Dashboard1 /></PrivateRoute>} />
              <Route path="/certification1" element={<PrivateRoute><Certification1 /></PrivateRoute>} />
              <Route path="/consumer-data1" element={<PrivateRoute><ConsumerData1 /></PrivateRoute>} />
              <Route path="/emissions-report1" element={<PrivateRoute><EmissionsRe1 /></PrivateRoute>} />
              <Route path="/upload-data1" element={<PrivateRoute><UploadData1 /></PrivateRoute>} />
              
              {/* Company 2 Routes */}
              <Route path="/dashboard2" element={<PrivateRoute><Dashboard2 /></PrivateRoute>} />
              <Route path="/certification2" element={<PrivateRoute><Certification2 /></PrivateRoute>} />
              <Route path="/consumer-data2" element={<PrivateRoute><ConsumerData2 /></PrivateRoute>} />
              <Route path="/emissions-report2" element={<PrivateRoute><EmissionsRe2 /></PrivateRoute>} />
              <Route path="/upload-data2" element={<PrivateRoute><UploadData2 /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;