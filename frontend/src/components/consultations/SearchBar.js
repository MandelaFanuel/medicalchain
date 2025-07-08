import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Grid, 
  Paper, 
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SearchBar = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchType, setSearchType] = useState('doctor');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleOptionClick = (option) => {
    setSearchQuery(option);
    setSearchType('location');
  };

  return (
    <Box 
      ref={ref}
      sx={{ 
        p: isSmall ? 2 : 3,
        backgroundColor: 'background.paper',
        borderRadius: 4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
        mx: 'auto',
        my: 4,
        maxWidth: 1000
      }}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 3, 
          fontWeight: 700, 
          color: 'primary.main',
          textAlign: 'center'
        }}
        component={motion.div}
        variants={itemVariants}
      >
        Find Your MediChain Provider
      </Typography>

      <Grid container spacing={isSmall ? 2 : 3}>
        {/* Doctor Search */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 2, 
              borderRadius: 3,
              backgroundColor: searchType === 'doctor' ? 'rgba(17, 70, 128, 0.05)' : 'background.paper',
              border: searchType === 'doctor' ? '1px solid rgba(17, 70, 128, 0.2)' : '1px solid rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
            component={motion.div}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
            }}
            onClick={() => setSearchType('doctor')}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: searchType === 'doctor' ? 'primary.main' : 'text.primary',
                fontWeight: 600
              }}
            >
              Find a Doctor
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by specialty or hospital"
                value={searchType === 'doctor' ? searchQuery : ''}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{
                  borderRadius: 2,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Search Doctors
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* Location Search */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 2, 
              borderRadius: 3,
              backgroundColor: searchType === 'location' ? 'rgba(17, 70, 128, 0.05)' : 'background.paper',
              border: searchType === 'location' ? '1px solid rgba(17, 70, 128, 0.2)' : '1px solid rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              height: '100%'
            }}
            component={motion.div}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
            }}
            onClick={() => setSearchType('location')}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2, 
                color: searchType === 'location' ? 'primary.main' : 'text.primary',
                fontWeight: 600
              }}
            >
              Find by Location
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <LocationOnIcon color="action" sx={{ mr: 1 }} />,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                sx={{
                  borderRadius: 2,
                  py: 1.2,
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Search Nearby
              </Button>
              
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  mt: 1, 
                  color: 'text.secondary',
                  fontWeight: 500
                }}
              >
                Popular:
              </Typography>
              <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                  flexWrap: 'wrap',
                  '& > *': {
                    mb: 1
                  }
                }}
              >
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500
                  }}
                  onClick={() => handleOptionClick('Nearest Hospitals')}
                >
                  Nearest Hospitals
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500
                  }}
                  onClick={() => handleOptionClick('Nearest Specialists')}
                >
                  Nearest Specialists
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;