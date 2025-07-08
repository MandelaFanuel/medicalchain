import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from '@/components/header/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import PartnersSection from '@/components/PartnersSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
import Footer from '@/components/footer/Footer.jsx';
import PromotionsSection from '@/components/PromotionsSection.jsx';

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      fontFamily: theme.typography.fontFamily, 
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <PromotionsSection />
        <PartnersSection />
        <ServicesSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;