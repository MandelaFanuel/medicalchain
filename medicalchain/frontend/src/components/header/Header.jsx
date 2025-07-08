import React, { useState } from 'react';
import {
  Typography, Box, IconButton, Drawer, List, ListItem, Avatar, Menu, MenuItem,
  useTheme as useMuiTheme, useMediaQuery, Tooltip, Divider, Select, 
  FormControl, ListItemIcon
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LanguageIcon from '@mui/icons-material/Language';

import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import logo from '../../assets/logo/logo14.png';

// Couleurs pour le dégradé (de droite vers gauche)
const headerColors = {
  gradientStart: '#5ab0e0', // Bleu clair (droite)
  gradientEnd: '#031733'   // Bleu foncé (gauche)
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFeatureMessage, setShowFeatureMessage] = useState(false);
  const [clickedLinkPosition, setClickedLinkPosition] = useState({ top: 0, left: 0 });
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [language, setLanguage] = useState('');

  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
  const isMediumScreen = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleUserMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleUserMenuClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleUserMenuClose();
    logout();
    navigate('/');
    setMobileOpen(false);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setClickedLinkPosition({
      top: rect.bottom,
      left: rect.left + rect.width / 2
    });
    setShowFeatureMessage(true);
    setMobileOpen(false);
    setTimeout(() => {
      setShowFeatureMessage(false);
    }, 3000);
  };

  const handleCloseFeatureMessage = () => {
    setShowFeatureMessage(false);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const languages = [
    { 
      code: 'BID', 
      name: 'Kirundi', 
      country: 'Burundi', 
      flag: 'https://flagcdn.com/w40/bi.png' 
    },
    { 
      code: 'eng', 
      name: 'English', 
      country: 'UK', 
      flag: 'https://flagcdn.com/w40/gb.png' 
    },
    { 
      code: 'swah', 
      name: 'Swahili', 
      country: 'Tanzania', 
      flag: 'https://flagcdn.com/w40/tz.png' 
    },
    { 
      code: 'fran', 
      name: 'French', 
      country: 'France', 
      flag: 'https://flagcdn.com/w40/fr.png' 
    },
    { 
      code: 'ling', 
      name: 'Lingala', 
      country: 'DR Congo', 
      flag: 'https://flagcdn.com/w40/cd.png' 
    }
  ];

  const commonLinks = [
    { name: 'Services', path: '/services', icon: <MedicalServicesIcon /> },
    { name: 'Hospitals', path: '/hospitals', icon: <LocalHospitalIcon /> },
    { name: 'Add Pharmacy', path: '/add-pharmacy', icon: <MedicationIcon /> },
    { name: 'Clinicals', path: '/clinicals', icon: <MedicationIcon /> },
    { name: 'Resources', path: '/resources', icon: <LibraryBooksIcon /> },
    { name: 'About Us', path: '/about', icon: <InfoIcon /> },
    { name: 'Contact Us', path: '/contact', icon: <ContactMailIcon /> }
  ];

  const renderDesktopLink = (item) => (
    <Box 
      key={item.path} 
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Tooltip title={item.name} arrow disableHoverListener={isMediumScreen}>
        <Box
          component="a"
          href={item.path}
          onClick={handleLinkClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            textDecoration: 'none',
            p: '8px 12px',
            borderRadius: 1,
            minWidth: '100px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              transform: 'translateY(-1px)'
            },
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
        >
          <IconButton
            sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              p: 0, 
              '&:hover': { transform: 'scale(1.1)' } 
            }}
          >
            {item.icon}
          </IconButton>
          {!isSmallScreen && (
            <Typography 
              sx={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '0.95rem', 
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}
            >
              {item.name}
            </Typography>
          )}
        </Box>
      </Tooltip>
    </Box>
  );

  const renderMobileLink = (item) => (
    <Box 
      key={item.path} 
      sx={{ 
        position: 'relative',
        width: '100%'
      }}
    >
      <ListItem
        component="a"
        href={item.path}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setClickedLinkPosition({
            top: rect.bottom,
            left: rect.left + rect.width / 2
          });
          handleLinkClick(e);
        }}
        sx={{
          px: 3,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          textDecoration: 'none',
          color: theme === 'dark' ? 'white' : 'text.primary',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
            color: 'primary.main'
          },
          transition: 'all 0.2s ease',
          cursor: 'pointer'
        }}
      >
        <Box sx={{ minWidth: '24px', display: 'flex', justifyContent: 'center' }}>
          {item.icon}
        </Box>
        <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
          {item.name}
        </Typography>
      </ListItem>
    </Box>
  );

  const renderLanguageSelector = (isMobile = false) => (
    <FormControl size="small" sx={{ 
      minWidth: isMobile ? 80 : 120,
      mr: isSmallScreen ? 0 : 1,
      position: 'relative'
    }}>
      <Select
        value={language}
        onChange={handleLanguageChange}
        displayEmpty
        sx={{ 
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 1,
          '& .MuiSelect-select': {
            py: isSmallScreen ? 0.5 : 0.8,
            minHeight: 'auto',
            display: 'flex',
            alignItems: 'center',
            fontSize: isSmallScreen ? '0.75rem' : '0.875rem'
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          }
        }}
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: {
              borderRadius: 1,
              mt: 1,
              minWidth: isMobile ? 160 : 180,
              position: 'absolute',
              zIndex: 1300
            }
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          }
        }}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LanguageIcon sx={{ 
                  color: muiTheme.palette.primary.main,
                  mr: 0.5,
                  fontSize: isSmallScreen ? '1rem' : '1.25rem'
                }} />
                {!isSmallScreen && (
                  <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
                    Language
                  </Typography>
                )}
              </Box>
            );
          }
          const lang = languages.find(l => l.code === selected);
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                component="img" 
                src={lang?.flag} 
                alt={lang?.country}
                sx={{ 
                  width: 20, 
                  height: 14, 
                  mr: 0.5,
                  objectFit: 'cover',
                  borderRadius: 0.5,
                  border: '1px solid rgba(0,0,0,0.1)'
                }} 
              />
              {!isSmallScreen && (
                <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
                  {lang?.name}
                </Typography>
              )}
            </Box>
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code} sx={{ fontSize: '0.875rem' }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Box 
                component="img" 
                src={lang.flag} 
                alt={lang.country}
                sx={{ 
                  width: 24, 
                  height: 16, 
                  objectFit: 'cover',
                  borderRadius: 0.5,
                  border: '1px solid rgba(0,0,0,0.1)'
                }} 
              />
            </ListItemIcon>
            <Typography variant="body2">{lang.name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <Box
      component="header"
      sx={{
        background: `linear-gradient(270deg, ${headerColors.gradientStart} 0%, ${headerColors.gradientEnd} 100%)`,
        py: 0.5,
        px: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        width: '100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}
    >
      {/* Logo */}
      <Box
        component={Link}
        to="/"
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none', 
          flexShrink: 0,
          mr: isSmallScreen ? 0 : 2
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="MedicalChain Logo"
          sx={{
            height: isSmallScreen ? 80 : 104,
            width: isSmallScreen ? '100px' : '126px',
          }}
        />
      </Box>

      {/* Navigation Links - Hidden on mobile */}
      {!isSmallScreen && (
        <Box 
          component="nav" 
          sx={{ 
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
            flexGrow: 1,
            marginRight: '5%',
            gap: 2,
            overflow: 'hidden'
          }}
        >
          {renderLanguageSelector()}
          {commonLinks.map((item) => renderDesktopLink(item))}
        </Box>
      )}

      {/* Right side controls */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1.5, sm: 2 },
          flexShrink: 0
        }}
      >
        {/* Language selector - mobile only */}
        {isSmallScreen && renderLanguageSelector(true)}

        <Tooltip title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton 
            onClick={toggleTheme} 
            sx={{ 
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)'
              },
              transition: 'transform 0.2s ease',
              p: isSmallScreen ? '6px' : '8px',
              mx: isSmallScreen ? 0.5 : 0
            }}
          >
            {theme === 'light' ? (
              <NightsStayIcon fontSize={isSmallScreen ? "small" : "medium"} />
            ) : (
              <WbSunnyIcon fontSize={isSmallScreen ? "small" : "medium"} />
            )}
          </IconButton>
        </Tooltip>

        {isAuthenticated && !isSmallScreen && (
          <Box>
            <Tooltip title="Account settings">
              <IconButton 
                onClick={handleUserMenuOpen} 
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    transform: 'scale(1.1)'
                  },
                  transition: 'transform 0.2s ease'
                }}
              >
                <Avatar alt={user?.username} src={user?.profile_image} sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
            <Menu 
              anchorEl={anchorEl} 
              open={Boolean(anchorEl)} 
              onClose={handleUserMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: '180px'
                }
              }}
            >
              <MenuItem disabled sx={{ opacity: 1, fontWeight: 500 }}>
                {user?.username}
              </MenuItem>
              <MenuItem 
                onClick={handleLogout}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.05)'
                  }
                }}
              >
                <LogoutIcon fontSize="small" sx={{ mr: 1 }} /> 
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Menu button - mobile only */}
        {isSmallScreen && (
          <IconButton 
            onClick={handleDrawerToggle} 
            sx={{ 
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)'
              },
              transition: 'transform 0.2s ease',
              p: isSmallScreen ? '6px' : '8px',
              ml: 0.7
            }}
          >
            <MenuIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 280,
            height: 'auto',
            marginTop: isSmallScreen ? '72px' : '107px',
            backgroundColor: theme === 'dark' ? 'background.paper' : 'background.default',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8
          }
        }}
      >
        <Box>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            p: 1,
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}>
            <IconButton 
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List sx={{ py: 0 }}>
            {commonLinks.map((item, index) => (
              <React.Fragment key={item.path}>
                {renderMobileLink(item)}
                {index < commonLinks.length - 1 && <Divider />}
              </React.Fragment>
            ))}
            
            {isAuthenticated && (
              <>
                <Divider />
                <ListItem 
                  button 
                  onClick={handleLogout}
                  sx={{
                    px: 3,
                    py: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: theme === 'dark' ? 'white' : 'text.primary',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.05)',
                      color: 'primary.main'
                    }
                  }}
                >
                  <LogoutIcon fontSize="small" />
                  <Typography sx={{ fontWeight: '500', fontSize: '1rem' }}>
                    Logout
                  </Typography>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>

      {/* Feature still in development message */}
      {showFeatureMessage && (
        <Box
          sx={{
            position: 'fixed',
            top: clickedLinkPosition.top,
            left: clickedLinkPosition.left,
            transform: 'translateX(-50%)',
            backgroundColor: (theme) => theme.palette.info.dark,
            color: 'white',
            px: 2,
            py: 1,
            borderRadius: 1,
            boxShadow: 3,
            zIndex: 1200,
            whiteSpace: 'nowrap',
            fontSize: '0.875rem',
            fontWeight: 500,
            animation: 'fadeInOut 3s ease-in-out forwards',
            '@keyframes fadeInOut': {
              '0%': { 
                opacity: 0, 
                transform: 'translateX(-50%) translateY(-10px)' 
              },
              '10%': { 
                opacity: 1, 
                transform: 'translateX(-50%) translateY(0)' 
              },
              '90%': { 
                opacity: 1, 
                transform: 'translateX(-50%) translateY(0)' 
              },
              '100%': { 
                opacity: 0, 
                transform: 'translateX(-50%) translateY(-10px)' 
              }
            }
          }}
        >
          Feature still in development
        </Box>
      )}
    </Box>
  );
}