import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';

const ProtectedAuthRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner message="Vérification de session..." />;
  }

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || '/consultation';
    return <Navigate to={from} replace />;
  }

  return children;
};

export default ProtectedAuthRoute;