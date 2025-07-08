import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Grid, Button, Box, 
  useTheme, useMediaQuery 
} from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DoctorCard from '@/components/consultations/DoctorCard.js';

// Import des images
import doctor1 from '@/assets/images/Fanuel2.jpg';
import doctor2 from '@/assets/images/shem2.jpg';
import doctor3 from '@/assets/images/shem5.jpg';
import shem1 from '@/assets/images/shem1.jpg';
import shem2 from '@/assets/images/shem2.jpg';
import shem3 from '@/assets/images/shem3.jpg';

const ALL_DOCTORS = [
  {
    name: "Dr. Nining Ackerman",
    specialty: "Cardiology",
    hospital: "City Heart Center",
    experience: 12,
    rating: 4.8,
    image: doctor1
  },
  {
    name: "Dr. Minji Espinosa",
    specialty: "Neurology",
    hospital: "NeuroCare Institute",
    experience: 8,
    rating: 4.7,
    image: doctor2
  },
  {
    name: "Dr. Manuel Uthicha",
    specialty: "Dermatology",
    hospital: "Skin Wellness Clinic",
    experience: 15,
    rating: 4.9,
    image: doctor3
  },
  {
    name: "Dr. Shem Johnson",
    specialty: "Pediatrics",
    hospital: "Children's Medical Center",
    experience: 10,
    rating: 4.9,
    image: shem1
  },
  {
    name: "Dr. Shem Wilson",
    specialty: "Orthopedics",
    hospital: "Bone & Joint Clinic",
    experience: 7,
    rating: 4.6,
    image: shem2
  },
  {
    name: "Dr. Shem Brown",
    specialty: "Ophthalmology",
    hospital: "Vision Care Center",
    experience: 9,
    rating: 4.7,
    image: shem3
  }
];

const DoctorsSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [showAll, setShowAll] = useState(false);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
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
    hidden: { y: 20, opacity: 0 },
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

  const visibleDoctors = showAll ? ALL_DOCTORS : ALL_DOCTORS.slice(0, 3);

  return (
    <Container 
      ref={ref}
      maxWidth="xl"
      sx={{ 
        py: isSmall ? 4 : 6, 
        px: isSmall ? 2 : 4,
        backgroundColor: theme.palette.background.default
      }}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Typography 
        variant="h3" 
        sx={{
          fontWeight: 700,
          mb: 2,
          textAlign: 'center',
          color: theme.palette.primary.main
        }}
        component={motion.div}
        variants={itemVariants}
      >
        Our Expert Doctors
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        sx={{
          color: theme.palette.text.secondary,
          mb: 4,
          textAlign: 'center',
          maxWidth: 700,
          mx: 'auto'
        }}
        component={motion.div}
        variants={itemVariants}
      >
        Highly qualified professionals ready to provide you with the best medical care
      </Typography>
      
      <Grid 
        container 
        spacing={isSmall ? 2 : 4} 
        justifyContent="center"
        component={motion.div}
        variants={containerVariants}
      >
        {visibleDoctors.map((doctor, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
            component={motion.div}
            variants={itemVariants}
          >
            <DoctorCard {...doctor} />
          </Grid>
        ))}
      </Grid>

      {ALL_DOCTORS.length > 3 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant={showAll ? "text" : "outlined"}
            size="large"
            onClick={() => setShowAll(!showAll)}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              color: showAll ? theme.palette.primary.main : 'inherit',
              borderColor: theme.palette.primary.main
            }}
          >
            {showAll ? 'Show Less' : `View More Doctors (${ALL_DOCTORS.length - 3})`}
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default DoctorsSection;