import React, { useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Specialities = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
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

  // Animations plus rapides
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05, // Réduit de 0.1 à 0.05
        duration: 0.2 // Ajout d'une durée totale plus courte
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 }, // Réduit le déplacement Y de 20 à 10
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Augmenté de 100 à 150 pour plus de rapidité
        damping: 12,   // Augmenté de 10 à 12 pour moins de rebond
        duration: 0.3  // Durée réduite
      }
    }
  };

  const specialties = [
    "Cardiology", "Dermatology", "Neurology", "Pediatrics",
    "Orthopedics", "Ophthalmology", "Gynecology", "Dentistry",
    "Psychiatry", "Endocrinology", "Gastroenterology", "Urology"
  ];

  return (
    <Box 
      ref={ref}
      sx={{ 
        backgroundColor: 'background.paper',
        py: isSmall ? 4 : 6,
        px: isSmall ? 2 : 4,
        borderRadius: 4,
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)', // Ombre plus subtile
        mx: { xs: 2, sm: 3, md: 4 },
        my: 4
      }}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 } }}>
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
          Medical Specialties
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
          Browse doctors by their area of expertise
        </Typography>
        
        <Grid 
          container 
          spacing={isSmall ? 1.5 : 3} 
          justifyContent="center"
          component={motion.div}
          variants={containerVariants}
        >
          {specialties.map((spec, index) => (
            <Grid 
              item 
              key={index} 
              xs={6} 
              sm={4} 
              md={3} 
              lg={2}
              component={motion.div}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.10 } }} // Réduit l'effet hover
            >
              <Chip
                label={spec}
                clickable
                sx={{
                  width: '100%',
                  py: 2,
                  borderRadius: 2,
                  fontWeight: 600,
                  backgroundColor: 'background.default',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText'
                  },
                  transition: 'all 0.1s ease' // Transition plus rapide
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Specialities;