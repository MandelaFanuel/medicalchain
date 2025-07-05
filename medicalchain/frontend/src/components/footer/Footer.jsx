import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Grid, 
  List, 
  ListItem,
  Link as MuiLink,
  Stack,
  Box,
  Button,
  Container,
  IconButton,
  useMediaQuery,
  Fade,
  Grow,
  Slide
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WalletIcon from '@mui/icons-material/Wallet';
import EthereumIcon from '@/components/EthereumIcon';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ElderlyIcon from '@mui/icons-material/Elderly';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

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

const Footer = () => {
  const [loaded, setLoaded] = useState(false);
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const isLarge = useMediaQuery('(min-width:1200px)');
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Couleurs fixes en cas d'absence de ThemeProvider
  const footerBgColor = '#114680';
  const footerTextColor = '#FFFFFF';
  
  const footerStyles = {
    backgroundColor: footerBgColor,
    color: footerTextColor,
    py: { xs: 4, sm: 5, md: 6 },
    px: { xs: 2, sm: 3, md: 4, lg: 6 },
    mt: 'auto',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  };

  const iconButtonStyles = {
    color: footerTextColor,
    backgroundColor: 'rgba(255,255,255,0.1)',
    '&:hover': { 
      backgroundColor: 'rgba(255,255,255,0.2)',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.2s ease',
    width: { xs: 36, sm: 40 },
    height: { xs: 36, sm: 40 }
  };

  const quickLinks = [
    { text: 'Home', icon: <HomeIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'Services', icon: <MedicalServicesIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'About Us', icon: <InfoIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'Contact', icon: <ContactMailIcon fontSize={isExtraSmall ? "small" : "medium"} /> }
  ];

  const servicesLinks = [
    { text: 'Home Care', icon: <HomeIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'Assisted Living', icon: <ElderlyIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'Nursing Home', icon: <LocalHospitalIcon fontSize={isExtraSmall ? "small" : "medium"} /> },
    { text: 'Resources', icon: <LibraryBooksIcon fontSize={isExtraSmall ? "small" : "medium"} /> }
  ];

  return (
    <Fade in={loaded} timeout={1000}>
      <Box component="footer" sx={footerStyles}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
            {/* Column 1 - About & Social */}
            <Grid item xs={12} sm={6} md={4}>
              <Grow in={loaded} timeout={500}>
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                    color: footerTextColor
                  }}>
                    MediChain
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2, 
                    color: footerTextColor,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}>
                    Helping you live your best golden years with quality healthcare services.
                  </Typography>
                </Box>
              </Grow>
              
              {/* Social Icons */}
              <Slide direction="up" in={loaded} timeout={800}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1.5, 
                    color: footerTextColor,
                    fontSize: { xs: '0.95rem', sm: '1rem' }
                  }}>
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                      <IconButton 
                        key={index} 
                        sx={iconButtonStyles}
                        aria-label={`Follow us on ${['Facebook', 'Twitter', 'Instagram', 'LinkedIn'][index]}`}
                      >
                        <Icon fontSize={isSmall ? "small" : "medium"} />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Slide>

              {/* Crypto Payments */}
              <Slide direction="up" in={loaded} timeout={1000}>
                <Box>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1.5, 
                    color: footerTextColor,
                    fontSize: { xs: '0.95rem', sm: '1rem' }
                  }}>
                    Crypto Payments
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    mb: 1.5, 
                    fontStyle: 'italic', 
                    color: footerTextColor,
                    fontSize: { xs: '0.85rem', sm: '0.9rem' }
                  }}>
                    Blockchain integrated payments
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    {[AccountBalanceWalletIcon, CurrencyBitcoinIcon, EthereumIcon, WalletIcon].map((Icon, index) => (
                      <IconButton 
                        key={index} 
                        sx={iconButtonStyles}
                        aria-label={`Pay with ${['Wallet', 'Bitcoin', 'Ethereum', 'Crypto Wallet'][index]}`}
                      >
                        <Icon fontSize={isSmall ? "small" : "medium"} />
                      </IconButton>
                    ))}
                  </Stack>
                </Box>
              </Slide>
            </Grid>
            
            {/* Column 2 - Quick Links */}
            <Grid item xs={6} sm={3} md={2}>
              <Grow in={loaded} timeout={600}>
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2, 
                    color: footerTextColor,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }
                  }}>
                    Quick Links
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {quickLinks.map((item, index) => (
                      <Slide 
                        key={item.text} 
                        direction="right" 
                        in={loaded} 
                        timeout={800 + index * 100}
                      >
                        <ListItem disablePadding sx={{ mb: 1.5 }}>
                          <MuiLink href="#" sx={{ 
                            color: footerTextColor,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&:hover': { 
                              textDecoration: 'underline',
                              color: 'rgba(255,255,255,0.8)'
                            },
                            transition: 'all 0.2s ease',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                          }}>
                            {item.icon} {item.text}
                          </MuiLink>
                        </ListItem>
                      </Slide>
                    ))}
                  </List>
                </Box>
              </Grow>
            </Grid>
            
            {/* Column 3 - Services */}
            <Grid item xs={6} sm={3} md={3}>
              <Grow in={loaded} timeout={700}>
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2, 
                    color: footerTextColor,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }
                  }}>
                    Services
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {servicesLinks.map((item, index) => (
                      <Slide 
                        key={item.text} 
                        direction="right" 
                        in={loaded} 
                        timeout={900 + index * 100}
                      >
                        <ListItem disablePadding sx={{ mb: 1.5 }}>
                          <MuiLink href="#" sx={{ 
                            color: footerTextColor,
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&:hover': { 
                              textDecoration: 'underline',
                              color: 'rgba(255,255,255,0.8)'
                            },
                            transition: 'all 0.2s ease',
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                          }}>
                            {item.icon} {item.text}
                          </MuiLink>
                        </ListItem>
                      </Slide>
                    ))}
                  </List>
                </Box>
              </Grow>
            </Grid>
            
            {/* Column 4 - Contact & Newsletter */}
            <Grid item xs={12} md={3}>
              <Grow in={loaded} timeout={800}>
                <Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2, 
                    color: footerTextColor,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }
                  }}>
                    Contact Us
                  </Typography>
                  
                  {/* Address */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 1, 
                    mb: 2 
                  }}>
                    <LocationOnIcon 
                      fontSize={isExtraSmall ? "small" : "medium"} 
                      sx={{ 
                        color: footerTextColor,
                        mt: '2px'
                      }} 
                    />
                    <Typography variant="body1" sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: footerTextColor,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}>
                      <BurundiFlag /> 20e AV Ruyigi Street, Kinama Bujumbura Burundi
                    </Typography>
                  </Box>
                  
                  {/* Phone */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    mb: 2 
                  }}>
                    <PhoneIcon 
                      fontSize={isExtraSmall ? "small" : "medium"} 
                      sx={{ color: footerTextColor }} 
                    />
                    <Typography variant="body1" sx={{ 
                      color: footerTextColor,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}>
                      (257) 803-611
                    </Typography>
                  </Box>
                  
                  {/* Email */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    mb: 3 
                  }}>
                    <EmailIcon 
                      fontSize={isExtraSmall ? "small" : "medium"} 
                      sx={{ color: footerTextColor }} 
                    />
                    <Typography variant="body1" sx={{ 
                      color: footerTextColor,
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}>
                      info@medichain.com
                    </Typography>
                  </Box>
                  
                  {/* Newsletter */}
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 'bold', 
                    mb: 1.5, 
                    color: footerTextColor,
                    fontSize: { xs: '0.95rem', sm: '1rem' }
                  }}>
                    Newsletter
                  </Typography>
                  <Box 
                    component="form" 
                    sx={{ 
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 1
                    }}
                  >
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      style={{ 
                        flex: 1,
                        padding: '10px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '14px',
                        minWidth: '120px'
                      }}
                      aria-label="Your email address for newsletter"
                    />
                    <Button 
                      type="submit"
                      startIcon={<SendIcon />}
                      sx={{ 
                        backgroundColor: footerBgColor,
                        color: footerTextColor,
                        borderRadius: '4px',
                        '&:hover': { 
                          backgroundColor: '#0d3a6b',
                          transform: 'translateY(-1px)'
                        },
                        minWidth: '120px',
                        px: 3,
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        py: { xs: 1, sm: 1.25 },
                        transition: 'all 0.2s ease'
                      }}
                    >
                      Subscribe
                    </Button>
                  </Box>
                </Box>
              </Grow>
            </Grid>
          </Grid>
          
          {/* Copyright */}
          <Fade in={loaded} timeout={1200}>
            <Box sx={{ 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              mt: { xs: 4, sm: 5 }, 
              pt: { xs: 3, sm: 4 },
              textAlign: 'center'
            }}>
              <Typography variant="body2" sx={{ 
                color: footerTextColor,
                fontSize: { xs: '0.8rem', sm: '0.9rem' }
              }}>
                © {new Date().getFullYear()} MediChain. All rights reserved.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Fade>
  );
};

export default Footer;