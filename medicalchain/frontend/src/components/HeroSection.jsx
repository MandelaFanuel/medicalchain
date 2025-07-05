import React, { useEffect, useState } from 'react';
import { 
  Container,
  Grid,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroImage from '@/assets/images/appareil1.jpg';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const HeroSection = () => {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const theme = useTheme();
  
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1
      }
    }
  };

  const renderStars = () => {
    const starCount = 3;
    const radius = isMedium ? 40 : 50;
    const startAngle = -160;
    const endAngle = 20;
    const angleStep = (endAngle - startAngle) / (starCount - 1);
  
    return (
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        sx={{
          position: 'absolute',
          top: isMedium ? -20 : -25,
          right: isMedium ? 20 : 30,
          zIndex: 2,
          width: radius * 2,
          height: radius,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {[...Array(starCount)].map((_, i) => {
          const angle = startAngle + (i * angleStep);
          const angleRad = angle * (Math.PI / 180);
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);
          
          return (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
                color: theme.palette.mode === 'light' ? '#114680' : 'white',
                fontSize: {
                  xs: '1.2rem',
                  sm: '1.5rem',
                  md: '1.8rem'
                },
                filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.5))',
              }}
            >
              <StarIcon fontSize="inherit" />
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Container 
      ref={ref}
      maxWidth="lg" 
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      sx={{ 
        py: { 
          xs: isExtraSmall ? 6 : 8, 
          md: isPortrait ? 12 : 16 
        }, 
        px: { 
          xs: isExtraSmall ? 2 : 3, 
          sm: 4 
        },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {!isAuthenticated && !isMedium && (
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          sx={{
            position: 'fixed',
            top: { xs: 50, sm: 65, md: 90 },
            right: { xs: 16, sm: 32, md: 48 },
            display: 'flex',
            gap: { xs: 1, sm: 2 },
            zIndex: 1000,
            alignItems: 'center',
            backgroundColor: 'background.paper',
            borderRadius: '20px',
            p: 1,
            boxShadow: 4,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Button
            component={Link}
            to="/login"
            variant="text"
            size={isSmall ? 'small' : 'medium'}
            startIcon={<LoginIcon fontSize={isSmall ? 'small' : 'medium'} />}
            sx={{
              color: 'text.primary',
              px: { xs: 1, sm: 1.5 },
              minWidth: 0,
              '&:hover': {
                backgroundColor: 'action.hover'
              },
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem'
              }
            }}
          >
            {!isExtraSmall && 'Sign In'}
          </Button>

          <Box sx={{ 
            width: '1px', 
            height: '24px',
            backgroundColor: 'divider', 
            mx: 0.5
          }}/>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            size={isSmall ? 'small' : 'medium'}
            startIcon={<PersonAddIcon fontSize={isSmall ? 'small' : 'medium'} />}
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              px: { xs: 1, sm: 1.5 },
              minWidth: 0,
              '&:hover': {
                backgroundColor: 'primary.dark'
              },
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem'
              }
            }}
          >
            {!isExtraSmall && 'Sign Up'}
          </Button>
        </Box>
      )}

      <Grid 
        container 
        spacing={{ 
          xs: isExtraSmall ? 4 : 6, 
          md: isPortrait ? 6 : 10 
        }} 
        alignItems="center"
        direction={isMedium ? 'column-reverse' : 'row'}
      >
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            pr: { md: isPortrait ? 2 : 4 },
            textAlign: isMedium ? 'center' : 'left'
          }}
        >
          <motion.div variants={titleVariants}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                color: 'custom.title', 
                fontSize: { 
                  xs: isExtraSmall ? '1.5rem' : '1.75rem', 
                  sm: '2rem', 
                  md: isPortrait ? '2.25rem' : '2.5rem',
                  lg: '3rem'
                }, 
                lineHeight: 1.2, 
                mb: { 
                  xs: isExtraSmall ? 2 : 3, 
                  md: 4 
                },
                textShadow: isMedium ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              Become a Health Hero With MediChain
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Box>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.primary', 
                  fontSize: { 
                    xs: isExtraSmall ? '0.9rem' : '1rem', 
                    md: isPortrait ? '1rem' : '1.125rem' 
                  }, 
                  lineHeight: 1.6, 
                  mb: 2,
                  maxWidth: isMedium ? '100%' : '90%',
                  mx: isMedium ? 'auto' : 'inherit'
                }}
              >
                Join the Health revolution in Burundi! MediChain makes it easy to book medical appointments online and introduces a unique decentralized payment system with Blockchain integration (mobile, crypto and banks payment systems are supported).
              </Typography>

              <Typography 
                variant="body1" 
                component="div" 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: { 
                    xs: isExtraSmall ? '0.9rem' : '1rem', 
                    md: isPortrait ? '1rem' : '1.125rem' 
                  }, 
                  lineHeight: 1.6, 
                  mb: 2,
                  maxWidth: isMedium ? '100%' : '90%',
                  mx: isMedium ? 'auto' : 'inherit'
                }}
              >
                <strong>For Patients:</strong> save time, find the right doctor and schedule your consultation effortlessly.
              </Typography>

              <Typography 
                variant="body1" 
                component="div" 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: { 
                    xs: isExtraSmall ? '0.9rem' : '1rem', 
                    md: isPortrait ? '1rem' : '1.125rem' 
                  }, 
                  lineHeight: 1.6, 
                  mb: 2,
                  maxWidth: isMedium ? '100%' : '90%',
                  mx: isMedium ? 'auto' : 'inherit'
                }}
              >
                <strong>For Doctors:</strong> connect with more patients and optimize your schedule with ease.
              </Typography>

              <Typography 
                variant="body1" 
                component="div" 
                sx={{ 
                  color: 'primary.main', 
                  fontSize: { 
                    xs: isExtraSmall ? '0.9rem' : '1rem', 
                    md: isPortrait ? '1rem' : '1.125rem' 
                  }, 
                  lineHeight: 1.6, 
                  mb: { 
                    xs: isExtraSmall ? 3 : 4, 
                    md: 6 
                  },
                  maxWidth: isMedium ? '100%' : '90%',
                  mx: isMedium ? 'auto' : 'inherit'
                }}
              >
                <strong>Together, let's make healthcare access smooth, fast, and secure. Be part of the change!</strong>
              </Typography>
            </Box>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2,
                alignItems: isMedium ? 'center' : 'flex-start'
              }}
            >
              <Button 
                component={Link}
                to={isAuthenticated ? "/consultation" : "/login"}
                variant="contained" 
                sx={{ 
                  backgroundColor: 'primary.dark', 
                  color: 'white', 
                  py: { 
                    xs: isExtraSmall ? 1 : 1.25, 
                    md: isPortrait ? 1.5 : 2 
                  }, 
                  px: { 
                    xs: isExtraSmall ? 3 : 4, 
                    md: isPortrait ? 4 : 5 
                  },
                  borderRadius: '100px', 
                  fontSize: { 
                    xs: isExtraSmall ? '0.9rem' : '1rem', 
                    md: isPortrait ? '1rem' : '1.1rem' 
                  }, 
                  fontWeight: 'bold', 
                  textTransform: 'none', 
                  width: 'fit-content',
                  minWidth: { 
                    xs: isExtraSmall ? '180px' : '200px', 
                    md: '220px' 
                  },
                  '&:hover': { 
                    backgroundColor: 'primary.darker',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {isAuthenticated ? 'Book Appointment' : 'Get Started'}
              </Button>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: isMedium ? 'center' : 'flex-start'
                }}
              >
                {[...Array(4)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    sx={{ 
                      color: theme.palette.mode === 'light' ? '#114680' : 'white', 
                      fontSize: { 
                        xs: '1rem', 
                        sm: '1.1rem',
                        md: '1.25rem' 
                      } 
                    }} 
                  />
                ))}
                <StarHalfIcon 
                  sx={{ 
                    color: theme.palette.mode === 'light' ? '#114680' : 'white', 
                    fontSize: { 
                      xs: '1rem', 
                      sm: '1.1rem',
                      md: '1.25rem' 
                    } 
                  }} 
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: { 
                      xs: '0.8rem', 
                      sm: '0.85rem',
                      md: '0.875rem' 
                    }, 
                    ml: 0.5 
                  }}
                >
                  4.7 Rating on <Box component="span" sx={{ fontWeight: 'bold' }}>Google Play</Box>
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pl: { md: 4 },
          position: 'relative'
        }}>
          <Box sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px'
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <motion.div
                variants={imageVariants}
                style={{ width: '100%' }}
              >
                <Box sx={{ 
                  position: 'relative',
                  backgroundColor: '#114680',
                  padding: '25% 10% 0 0',
                  borderTopLeftRadius: '250px',
                  borderTopRightRadius: '250px',
                  borderBottomRightRadius: '250px',
                  borderBottomLeftRadius: '250px',
                  width: '100%',
                  maxWidth: '500px',
                  display: 'flex',
                  justifyContent: 'left',
                  boxSizing: 'border-box',
                  zIndex: 1,
                  marginTop: '40px'
                }}>
                  {renderStars()}

                  <Box sx={{
                    width: '78%',
                    maxWidth: '350px',
                    aspectRatio: '1/1',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    borderTopLeftRadius: '150px',
                    borderTopRightRadius: '150px',
                    boxShadow: 3,
                    transform: 'translateX(20px)'
                  }}>
                    <Box 
                      component="img" 
                      src={heroImage} 
                      alt="Health Hero" 
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }} 
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {!isAuthenticated && isMedium && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Box sx={{
                display: 'flex',
                gap: 2,
                mt: 4,
                justifyContent: 'center',
                width: '100%'
              }}>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  size="medium"
                  startIcon={<LoginIcon />}
                  sx={{
                    color: 'text.primary',
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'action.hover'
                    }
                  }}
                >
                  Sign In
                </Button>

                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="medium"
                  startIcon={<PersonAddIcon />}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'primary.dark'
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </motion.div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;