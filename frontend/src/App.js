import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

// Chemins relatifs ajustés
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/home/Home';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Consultation from './pages/consultation/Consultation';

import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAuthRoute from './components/ProtectedAuthRoute';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <ProtectedAuthRoute>
                  <LoginPage />
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedAuthRoute>
                  <RegisterPage />
                </ProtectedAuthRoute>
              }
            />
            <Route
              path="/consultation"
              element={
                <ProtectedRoute>
                  <Consultation />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;