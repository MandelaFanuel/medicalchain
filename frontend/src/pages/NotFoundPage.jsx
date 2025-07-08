import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      textAlign: 'center',
      p: 3
    }}>
      <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2, color: 'red' }}>
      404 
      </Typography>
      <Typography variant="h3" sx={{ fontSize: '1.5rem',mb: 3, color: 'primaryBlue' }}>
        Page Not Found !
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1rem',mb: 4, color: 'primaryBlue' }}>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button 
        variant="contained" 
        component={Link} 
        to="/"
        size="large"
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;