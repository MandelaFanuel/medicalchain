import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner.jsx';

const ProtectedRoute = ({ children, requireDoctor = false }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  // Show loading spinner while auth status is being checked
  if (isLoading) {
    return <LoadingSpinner message="Checking permissions..." />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate 
      to="/login" 
      state={{ 
        from: location,
        message: 'Please log in to access this page'
      }} 
      replace 
    />;
  }

  // Check doctor-specific permissions if required
  if (requireDoctor) {
    const isDoctor = user?.is_doctor;
    const hasActiveSubscription = user?.doctor_subscription_active;
    
    if (!isDoctor || !hasActiveSubscription) {
      return <Navigate 
        to="/" 
        state={{ 
          error: 'Doctor subscription required',
          message: 'You need an active doctor subscription to access this page'
        }}
        replace 
      />;
    }
  }

  // Render children if all checks pass
  return children;
};

export default ProtectedRoute;