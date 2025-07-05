import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 40, color = 'primary', message, fullPage = true }) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      minHeight={fullPage ? '100vh' : 'auto'}
      p={2}
    >
      <CircularProgress 
        size={size} 
        color={color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : 'inherit'} 
      />
      {message && (
        <Typography variant="body1" mt={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  message: PropTypes.string,
  fullPage: PropTypes.bool
};

export default LoadingSpinner;