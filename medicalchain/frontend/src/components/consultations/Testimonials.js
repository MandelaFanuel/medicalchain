import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Avatar,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  
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
        damping: 10
      }
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      text: "This service saved me hours of waiting at the clinic. The doctor was professional and caring, and the online booking system was incredibly easy to use. Highly recommend!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "Patient",
      text: "I was able to find a specialist quickly and book an appointment for the same day. The reminder system prevented me from missing my appointment. Excellent service overall.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Williams",
      role: "Patient",
      text: "As someone with a busy schedule, this platform has been a lifesaver. The doctors I've seen through MedicalChain have been top-notch and the convenience can't be beat.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <Box 
      ref={ref}
      sx={{ 
        backgroundColor: 'background.default',
        py: isSmall ? 4 : 6,
        px: isSmall ? 2 : 4
      }}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            textAlign: 'center',
            color: 'primary.main'
          }}
          component={motion.div}
          variants={itemVariants}
        >
          Patient Testimonials
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'text.secondary',
            mb: 4,
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto'
          }}
          component={motion.div}
          variants={itemVariants}
        >
          Hear what our patients have to say about their experiences
        </Typography>
        
        <Grid 
          container 
          spacing={isSmall ? 2 : 4} 
          justifyContent="center"
          component={motion.div}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <Grid 
              item 
              key={index} 
              xs={12} 
              sm={6} 
              md={4}
              component={motion.div}
              variants={itemVariants}
            >
              <Box 
                sx={{ 
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }
                }}
                component={motion.div}
                whileHover={{ y: -5 }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3 
                  }}
                >
                  <Avatar 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    sx={{ 
                      width: 56, 
                      height: 56, 
                      mr: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600 
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Rating 
                  value={testimonial.rating} 
                  readOnly 
                  sx={{ 
                    mb: 2,
                    color: 'primary.main'
                  }} 
                />
                <Typography 
                  fontStyle="italic"
                  sx={{ 
                    color: 'text.primary',
                    position: 'relative',
                    '&:before, &:after': {
                      content: '"\\""',
                      fontSize: '2rem',
                      color: 'primary.light',
                      opacity: 0.3,
                      lineHeight: 0
                    },
                    '&:before': {
                      position: 'absolute',
                      left: -10,
                      top: -5
                    },
                    '&:after': {
                      position: 'absolute',
                      right: -10,
                      bottom: -15
                    }
                  }}
                >
                  {testimonial.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;