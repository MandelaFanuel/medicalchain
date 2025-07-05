import React from 'react';
import { Box, useTheme } from '@mui/material/index.js';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchBar from '../../components/consultations/SearchBar';
import DoctorsSection from '../../components/consultations/DoctorsSection';
import Specialities from '../../components/consultations/Specialities';
import FAQ from '../../components/consultations/FAQ';
import Testimonials from '../../components/consultations/Testimonials';

const Consultation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 4,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ maxWidth: 'xl', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
          <SearchBar />
          <DoctorsSection />
          <Specialities />
          <FAQ />
          <Testimonials />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Consultation;