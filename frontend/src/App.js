import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@/context/ThemeContext.js';
import { AuthProvider } from './context/AuthContext.jsx';

import Home from './pages/home/Home.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import Consultation from './pages/consultation/Consultation.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';
import ProtectedAuthRoute from './components/ProtectedAuthRoute.jsx';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router> {/* Router DOIT englober AuthProvider */}
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
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
