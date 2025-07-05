import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  useTheme,
  useMediaQuery,
  Link,
  Fade,
  Grow,
  Slide
} from "@mui/material";
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BurundiFlag = () => (
  <svg 
    width="24"
    height="16"
    viewBox="0 0 36 24"
    style={{
      verticalAlign: 'middle',
      marginRight: '8px',
      display: 'inline-block',
      border: '1px solid rgba(0,0,0,0.1)'
    }}
  >
    <rect x="0" y="0" width="36" height="24" fill="#ffffff"/>
    <line x1="0" y1="0" x2="36" y2="24" stroke="#ce1021" strokeWidth="7.2"/>
    <line x1="36" y1="0" x2="0" y2="24" stroke="#ce1021" strokeWidth="7.2"/>
    <circle cx="18" cy="12" r="6" fill="#18b637"/>
    <g fill="#ffffff">
      <path d="M18 6l1.5 2.6h-3z" transform="rotate(30 18 12)"/>
      <path d="M18 6l-1.5 2.6h3z" transform="rotate(30 18 12)"/>
      <path d="M24 12l-2.6-1.5v3z" transform="rotate(30 18 12)"/>
      <path d="M24 12l-2.6 1.5v-3z" transform="rotate(30 18 12)"/>
      <path d="M12 12l2.6-1.5v3z" transform="rotate(30 18 12)"/>
      <path d="M12 12l2.6 1.5v-3z" transform="rotate(30 18 12)"/>
    </g>
  </svg>
);

const PartnersSection = () => {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const isLarge = useMediaQuery('(min-width:1200px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  
  // Animation controls for scroll
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    setLoaded(true);
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
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const partners = [
    { name: "KiraHospital", url: "/partners/kira-hospital" }, 
    { name: "Maison Medical", url: "/partners/maison-medical" }, 
    { name: "Hopital Militaire", url: "/partners/hopital-militaire" }, 
    { name: "Rois Khaled", url: "/partners/rois-khaled" },
    { name: "Pollyclinic Muyinga ", url: "/partners/Colyclinic Muyinga" }, 
    { name: "Prince Legent", url: "/partners/prince-legent" }, 
    { name: "Hopital Kibuye", url: "/partners/hopital-kibuye" }, 
    { name: "Hopital Bethanie", url: "/partners/hopital-bethanie" }, 
    { name: "Hopital de Gitega", url: "/partners/hopital-gitega" },
    { name: "Centre de Sante (CS) Hope", url: "/partners/CS-Hope" },
    { name: "Centre de Sante (DS) Kinama", url: "/partners/CS-Kinama" }
  ];

  const handleScroll = (direction) => {
    const container = document.getElementById('partners-scroll-container');
    const scrollAmount = isExtraSmall ? 150 : isSmall ? 200 : isMedium ? 250 : 300;
    container.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth' 
    });
  };

  return (
    <Box 
      ref={ref}
      sx={{ 
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 0, sm: 1, md: 2 },
        backgroundColor: '#114680',
        borderRadius: { xs: 0, sm: '16px', md: '24px' },
        mx: 'auto', 
        my: { xs: 3, sm: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        maxWidth: { xs: '100%', sm: '95%', md: '1200px' }
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <Container sx={{ 
          position: 'relative',
          maxWidth: '100% !important',
          px: { xs: '16px !important', sm: '24px !important', md: '32px !important' }
        }}>
          <motion.div variants={itemVariants}>
            <Typography variant="h6" sx={{ 
              textAlign: 'center',
              color: 'white',
              mb: { xs: 2, sm: 3, md: 4 },
              fontSize: { 
                xs: isExtraSmall ? '0.9rem' : '1rem', 
                sm: '1.05rem',
                md: '1.125rem' 
              },
              textTransform: 'uppercase', 
              letterSpacing: '1px',
              fontWeight: 500,
              position: 'relative',
              '&:after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '2px',
                backgroundColor: 'rgba(255,255,255,0.3)',
                margin: '12px auto 0'
              }
            }}>
              Our Institutional Partners
            </Typography>
          </motion.div>

          {(isSmall || isMedium) && (
            <>
              <Slide direction="right" in={loaded} timeout={1200}>
                <IconButton 
                  sx={{
                    position: 'absolute',
                    left: 4,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    zIndex: 2,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-50%) scale(1.1)'
                    },
                    padding: '6px',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.2s ease',
                    display: { xs: 'none', sm: 'flex' }
                  }}
                  onClick={() => handleScroll('left')}
                  aria-label="Scroll partners left"
                >
                  <ChevronLeft fontSize={isSmall ? "small" : "medium"} />
                </IconButton>
              </Slide>

              <Slide direction="left" in={loaded} timeout={1200}>
                <IconButton 
                  sx={{
                    position: 'absolute',
                    right: 4,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    zIndex: 2,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-50%) scale(1.1)'
                    },
                    padding: '6px',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.2s ease',
                    display: { xs: 'none', sm: 'flex' }
                  }}
                  onClick={() => handleScroll('right')}
                  aria-label="Scroll partners right"
                >
                  <ChevronRight fontSize={isSmall ? "small" : "medium"} />
                </IconButton>
              </Slide>
            </>
          )}

          <Box
            id="partners-scroll-container"
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { 
                display: 'none',
                height: isSmall ? '4px' : '6px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(255,255,255,0.3)',
                borderRadius: '3px'
              },
              gap: { xs: 2, sm: 3, md: 4, lg: 6 },
              px: { xs: 0, sm: 2, md: 4 },
              py: 1,
              scrollSnapType: 'x mandatory',
              '& > *': { 
                scrollSnapAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }
              },
              alignItems: 'center',
              height: { 
                xs: isExtraSmall ? '50px' : '60px', 
                sm: '70px',
                md: '80px' 
              }
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={partner.url}
                  sx={{ 
                    flexShrink: 0,
                    px: { 
                      xs: isExtraSmall ? 1.5 : 2, 
                      sm: 2.5,
                      md: 3 
                    },
                    py: 1,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 'fit-content',
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderColor: 'rgba(255,255,255,0.3)'
                    }
                  }}
                  aria-label={`Partner: ${partner.name}`}
                >
                  <Typography sx={{ 
                    color: 'white',
                    fontWeight: 500,
                    fontSize: { 
                      xs: isExtraSmall ? '0.75rem' : '0.8rem', 
                      sm: '0.85rem',
                      md: '0.9rem',
                      lg: '1rem'
                    },
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.5px'
                  }}>
                    {partner.name}
                  </Typography>
                </Link>
              </motion.div>
            ))}
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
};

export default PartnersSection;