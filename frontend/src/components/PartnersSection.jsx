import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
  Fade,
  Alert,
  styled
} from "@mui/material";
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

// Import des images locales
import HopitalDeGitega from '@/assets/images/HopitalDeGitega.jpg';
import HopitalMilitaire from '@/assets/images/HopitalMilitaire.jpg';
import kiraHospital from '@/assets/images/kiraHospital.jpg';
import MaisonMedicale from '@/assets/images/MaisonMedicale.jpg';
import PollyclinicMuyinga from '@/assets/images/PollyclinicMuyinga.jpg';
import RoisKhaled from '@/assets/images/RoisKhaled.jpg';

// Couleurs pour le dégradé (de droite à gauche)
const colors = {
  gradientStart: '#5ab0e0',  // Bleu clair (droite)
  gradientEnd: '#031733',    // Bleu foncé (gauche)
  primary: '#005b96',
  secondary: '#0b7d66',
  accent: '#ff7b25',
  white: '#ffffff',
  lightGray: '#f5f7fa',
  border: 'rgba(255,255,255,0.2)'
};

// Partner logo imports
const partnerLogos = {
  kiraHospital: kiraHospital,
  maisonMedical: MaisonMedicale,
  hopitalMilitaire: HopitalMilitaire,
  roisKhaled: RoisKhaled,
  pollyclinicMuyinga: PollyclinicMuyinga,
  hopitalGitega: HopitalDeGitega
};

// Fallback component for broken images
const FallbackLogo = ({ name }) => (
  <Box sx={{
    width: 60,
    height: 60,
    borderRadius: '50%',
    bgcolor: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    border: `1px solid ${colors.border}`
  }}>
    {name.split(' ').map(w => w[0]).join('')}
  </Box>
);

const ScrollButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: colors.white,
  zIndex: 2,
  backgroundColor: 'rgba(3,23,51,0.7)',
  '&:hover': { 
    backgroundColor: colors.gradientEnd,
  },
  padding: theme.spacing(1.5),
  backdropFilter: 'blur(4px)',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  '&:active': {
    transform: 'translateY(-50%) scale(0.95)'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1)
  }
}));

const PartnersSection = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedPartnerIndex, setClickedPartnerIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const partners = [
    { name: "Kira Hospital", url: "/partners/kira-hospital", logo: partnerLogos.kiraHospital, key: 'kiraHospital' }, 
    { name: "Maison Medicale", url: "/partners/maison-medical", logo: partnerLogos.maisonMedical, key: 'maisonMedical' }, 
    { name: "Hopital Militaire", url: "/partners/hopital-militaire", logo: partnerLogos.hopitalMilitaire, key: 'hopitalMilitaire' }, 
    { name: "Rois Khaled Hospital", url: "/partners/rois-khaled", logo: partnerLogos.roisKhaled, key: 'roisKhaled' },
    { name: "Pollyclinic Muyinga", url: "/partners/pollyclinic-muyinga", logo: partnerLogos.pollyclinicMuyinga, key: 'pollyclinicMuyinga' }, 
    { name: "Hopital de Gitega", url: "/partners/hopital-gitega", logo: partnerLogos.hopitalGitega, key: 'hopitalGitega' }
  ];

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const calculateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return 0;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.scrollWidth / partners.length;
    return Math.min(Math.round(scrollPosition / itemWidth), partners.length - 1);
  }, [partners.length]);

  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    setActiveIndex(calculateActiveIndex());
  }, [calculateActiveIndex]);

  const handleScroll = useCallback((direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = isMobile ? 250 : 400;
    scrollContainerRef.current.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth' 
    });
  }, [isMobile]);

  const scrollToPartner = useCallback((index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.scrollWidth / partners.length;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  }, [partners.length]);

  const handlePartnerClick = useCallback((e, index) => {
    e.preventDefault();
    setClickedPartnerIndex(index);
    setTimeout(() => setClickedPartnerIndex(null), 3000);
    scrollToPartner(index);
  }, [scrollToPartner]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    
    return () => container.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 0, sm: 2 },
        background: `linear-gradient(270deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
        borderRadius: { xs: 0, sm: 3 },
        mx: 'auto',
        my: { xs: 4, sm: 5 },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 3,
        maxWidth: { lg: 1200 }
      }}
    >
      <Container sx={{ 
        position: 'relative',
        maxWidth: '100% !important',
        px: { xs: '16px !important', sm: '24px !important' }
      }}>
        <Typography variant="h6" sx={{ 
          textAlign: 'center',
          color: colors.white,
          mb: { xs: 3, sm: 4 },
          fontSize: { xs: '1.1rem', sm: '1.2rem' },
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontWeight: 500,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: 60,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.3)',
            margin: '12px auto 0'
          }
        }}>
          Our Institutional Partners
        </Typography>

        <Fade in={showLeftArrow}>
          <ScrollButton sx={{ left: 8 }} onClick={() => handleScroll('left')}>
            <ArrowBackIosNew fontSize={isMobile ? "small" : "medium"} />
          </ScrollButton>
        </Fade>

        <Fade in={showRightArrow}>
          <ScrollButton sx={{ right: 8 }} onClick={() => handleScroll('right')}>
            <ArrowForwardIos fontSize={isMobile ? "small" : "medium"} />
          </ScrollButton>
        </Fade>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            gap: { xs: 2, sm: 3 },
            px: { xs: 0, sm: 2 },
            py: 1,
            scrollSnapType: 'x mandatory',
            alignItems: 'center',
            minHeight: { xs: 160, sm: 180 }
          }}
        >
          {partners.map((partner, index) => (
            <Box 
              key={`partner-${index}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                scrollSnapAlign: 'center',
                mr: { xs: 2, sm: 3 },
                flexShrink: 0,
                width: { xs: 140, sm: 160 }
              }}
            >
              <Link 
                href={partner.url}
                onClick={(e) => handlePartnerClick(e, index)}
                sx={{ 
                  px: { xs: 1.5, sm: 2 },
                  py: 2,
                  backgroundColor: index === activeIndex ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  border: `1px solid ${index === activeIndex ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  minHeight: { xs: 140, sm: 160 },
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                {imageErrors[partner.key] ? (
                  <FallbackLogo name={partner.name} />
                ) : (
                  <Box 
                    component="img"
                    src={partner.logo}
                    alt={partner.name}
                    onError={() => handleImageError(partner.key)}
                    sx={{
                      width: 'auto',
                      height: { xs: 60, sm: 70 },
                      maxWidth: '100%',
                      objectFit: 'contain',
                      mb: 2,
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                  />
                )}
                <Typography sx={{ 
                  color: colors.white,
                  fontWeight: 500,
                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  textAlign: 'center',
                  whiteSpace: 'normal',
                  lineHeight: 1.2,
                  letterSpacing: '0.5px',
                  mt: 1,
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}>
                  {partner.name}
                </Typography>
              </Link>

              {clickedPartnerIndex === index && (
                <Fade in={clickedPartnerIndex === index}>
                  <Alert 
                    severity="info"
                    sx={{ 
                      mt: 1.5,
                      py: 0,
                      fontSize: '0.75rem',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: colors.white,
                      border: `1px solid ${colors.border}`,
                      backdropFilter: 'blur(4px)',
                      '& .MuiAlert-icon': { color: colors.white }
                    }}
                  >
                    Feature still in development
                  </Alert>
                </Fade>
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 3,
          gap: 1
        }}>
          {partners.map((_, index) => (
            <IconButton
              key={`indicator-${index}`}
              size="small"
              onClick={() => scrollToPartner(index)}
              sx={{
                p: 0,
                '&:hover': { transform: 'scale(1.2)' },
                transition: 'transform 0.2s ease'
              }}
            >
              <Box 
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? colors.white : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: index === activeIndex ? colors.white : 'rgba(255,255,255,0.7)'
                  }
                }}
              />
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PartnersSection;