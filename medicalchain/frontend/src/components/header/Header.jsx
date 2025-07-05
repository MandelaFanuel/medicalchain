import React, { useState } from 'react';
import { 
  Typography, 
  Box,
  IconButton,
  Drawer,
  List, 
  ListItem,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  useTheme as useMuiTheme,
  useMediaQuery,
  Tooltip
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LogoutIcon from '@mui/icons-material/Logout';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const isTinyScreen = useMediaQuery('(max-width:350px)');
  const isExtraSmallScreen = useMediaQuery('(max-width:400px)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:899px)');
  const isLargeScreen = useMediaQuery('(min-width:900px) and (max-width:1075px)');
  const isExtraLargeScreen = useMediaQuery('(min-width:1076px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');

  const commonLinks = [
    { name: 'Services', path: '/services', icon: <MedicalServicesIcon /> },
    { name: 'Hospitals', path: '/hospitals', icon: <LocalHospitalIcon /> },
    { name: 'Add Pharmacy', path: '/Add Pharmacy', icon: <MedicationIcon /> },
    { name: 'Clinicals', path: '/clinicals', icon: <MedicationIcon /> },
    { name: 'Resources', path: '/resources', icon: <LibraryBooksIcon /> },
    { name: 'About Us', path: '/about', icon: <InfoIcon /> },
    { name: 'Contact Us', path: '/contact', icon: <ContactMailIcon /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleUserMenuClose();
    logout();
    navigate('/');
    setMobileOpen(false);
  };

  const getGenderIcon = (gender) => {
    switch (gender) {
      case 'M': return <MaleIcon fontSize="small" />;
      case 'F': return <FemaleIcon fontSize="small" />;
      default: return <TransgenderIcon fontSize="small" />;
    }
  };

  const renderDesktopLink = (item) => (
    <Tooltip 
      title={item.name} 
      arrow 
      disableHoverListener={isMediumScreen || isLargeScreen}
    >
      <Box 
        component={Link}
        to={item.path}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          textDecoration: 'none',
          p: 1,
          borderRadius: 1,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateY(-1px)'
          },
          transition: 'all 0.2s ease'
        }}
      >
        <IconButton 
          sx={{ 
            color: 'rgba(255,255,255,0.9)', 
            p: 0,
            '&:hover': {
              transform: 'scale(1.1)'
            }
          }}
        >
          {item.icon}
        </IconButton>
        {!isSmallScreen && (
          <Typography 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              '&:hover': { 
                color: 'white',
              }, 
              fontSize: { 
                xs: '0.8rem',
                sm: '0.85rem',
                md: '0.9rem', 
                lg: '0.95rem',
                xl: '1rem'
              }, 
              fontWeight: '500', 
              whiteSpace: 'nowrap',
              transition: 'color 0.2s ease',
            }}
          >
            {item.name}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );

  const renderMobileLink = (item) => (
    <ListItem 
      component={Link}
      to={item.path}
      onClick={handleDrawerToggle}
      sx={{ 
        px: isTinyScreen ? 1 : 2, 
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: isTinyScreen ? 1 : 2,
        textDecoration: 'none',
        color: 'rgba(255,255,255,0.9)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: 'white'
        },
        transition: 'all 0.2s ease'
      }}
    >
      {item.icon}
      <Typography 
        sx={{ 
          fontWeight: '500',
          fontSize: isTinyScreen ? '0.9rem' : '1rem'
        }}
      >
        {item.name}
      </Typography>
    </ListItem>
  );

  return (
    <>
      <Box 
        component="header"
        sx={{ 
          backgroundColor: muiTheme.palette.primary.main,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          py: { 
            xs: isTinyScreen ? 0.5 : 1, 
            sm: 1.5, 
            md: 1.75,
            lg: 2
          }, 
          px: { 
            xs: isTinyScreen ? 1 : 2, 
            sm: 3, 
            md: 3,
            lg: 4,
            xl: 6
          }, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          position: 'sticky', 
          top: 0, 
          zIndex: 1100,
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <Typography 
          component={Link} 
          to="/"
          variant="h5" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'white',
            fontSize: { 
              xs: isTinyScreen ? '0.9rem' : '1.1rem', 
              sm: '1.25rem', 
              md: '1.3rem',
              lg: '1.4rem',
              xl: '1.5rem'
            },
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            mr: { xs: 1, sm: 2 },
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 0.9,
              transform: 'scale(1.02)'
            }
          }}
        > 
          MedicalChain
        </Typography>
        
        {/* Navigation */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: { 
            xs: isTinyScreen ? 0.5 : 1, 
            sm: 1.5,
            md: 1.5,
            lg: 2
          },
          ml: 'auto'
        }}>
          {/* Desktop Navigation */}
          <Box 
            component="nav"
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: { 
                md: 0.5,
                lg: 1,
                xl: 1.5
              }, 
              alignItems: 'center',
              flexShrink: 0
            }}
          >
            {commonLinks.map((item) => (
              <React.Fragment key={item.name}>
                {renderDesktopLink(item)}
              </React.Fragment>
            ))}
          </Box>

          {/* Theme Toggle */}
          <Tooltip title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              sx={{ 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'rotate(15deg)'
                },
                color: 'white',
                padding: { xs: '4px', sm: '6px', md: '6px' },
                transition: 'all 0.3s ease'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <NightsStayIcon sx={{ 
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.1rem', 
                    md: '1.1rem',
                    lg: '1.2rem'
                  } 
                }} />
              ) : (
                <WbSunnyIcon sx={{ 
                  fontSize: { 
                    xs: '1rem', 
                    sm: '1.1rem', 
                    md: '1.1rem',
                    lg: '1.2rem'
                  } 
                }} />
              )}
            </IconButton>
          </Tooltip>

          {/* User Menu - Desktop */}
          {isAuthenticated && !isSmallScreen && (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flexShrink: 0
            }}>
              <Tooltip title="Account settings">
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    cursor: 'pointer',
                    p: 0.75,
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                  onClick={handleUserMenuOpen}
                >
                  <Avatar 
                    alt={user?.username || 'User'} 
                    src={user?.profile_image} 
                    sx={{ 
                      width: { 
                        md: 30,
                        lg: 34,
                        xl: 38
                      }, 
                      height: { 
                        md: 30,
                        lg: 34,
                        xl: 38
                      },
                      transition: 'all 0.3s ease'
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontWeight: '500',
                      fontSize: {
                        md: '0.8rem',
                        lg: '0.85rem',
                        xl: '0.9rem'
                      },
                      maxWidth: { md: '100px', lg: '120px', xl: '150px' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {user?.username || user?.email}
                  </Typography>
                </Box>
              </Tooltip>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
                sx={{ 
                  '& .MuiPaper-root': {
                    backgroundColor: muiTheme.palette.primary.main,
                    color: 'white',
                    marginTop: '8px',
                    minWidth: '250px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  },
                  '& .MuiMenuItem-root': {
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.08)'
                    }
                  }
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar 
                      alt={user?.username || 'User'} 
                      src={user?.profile_image} 
                      sx={{ 
                        width: 56, 
                        height: 56,
                        border: '2px solid white'
                      }} 
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {user?.username}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        {user?.email}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                  
                  {/* User Details Section */}
                  <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PersonIcon fontSize="small" /> Full Name:   {user?.first_name} {user?.last_name}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <HomeIcon fontSize="small" /> Address:   {user?.current_address}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <WorkIcon fontSize="small" /> Function:   {user?.current_function}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {getGenderIcon(user?.gender)} Gender:   {user?.gender === 'M' ? 'Male' : user?.gender === 'F' ? 'Female' : 'Other'}
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ my: 1, backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </Box>
                <MenuItem 
                  onClick={handleLogout} 
                  sx={{ 
                    gap: 1.25,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  <LogoutIcon fontSize="small" /> Logout
                </MenuItem>
              </Menu>
            </Box>
          )}

          {/* Mobile Menu Button */}
          <IconButton 
            color="inherit"
            aria-label="open menu"
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'scale(1.1)'
              },
              padding: { xs: '4px', sm: '6px', md: '6px' },
              display: { md: 'none' },
              transition: 'all 0.2s ease'
            }}
          >
            <MenuIcon sx={{ 
              fontSize: { 
                xs: '1.3rem', 
                sm: '1.4rem', 
                md: '1.4rem'
              } 
            }} />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{ 
          '& .MuiDrawer-paper': { 
            width: isTinyScreen ? '90%' : isExtraSmallScreen ? '85%' : '75%', 
            maxWidth: '320px',
            marginTop: '75px',
            height: '55%',
            backgroundColor: muiTheme.palette.primary.dark,
            color: 'white',
            boxSizing: 'border-box',
            borderLeft: '1px solid rgba(255,255,255,0.1)'
          },
          display: { md: 'none' }
        }}
      >
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            p: isTinyScreen ? 1 : 2,
            position: 'sticky',
            top: 0,
            backgroundColor: muiTheme.palette.primary.dark,
            zIndex: 1,
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'rotate(90deg)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              <CloseIcon sx={{ fontSize: '1.5rem' }} /> 
            </IconButton>
          </Box>

          {isAuthenticated && user && (
            <>
              <Box sx={{ 
                p: isTinyScreen ? 1.5 : 2, 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}>
                <Avatar 
                  alt={user.username} 
                  src={user.profile_image} 
                  sx={{ 
                    width: isTinyScreen ? 40 : 48, 
                    height: isTinyScreen ? 40 : 48 
                  }} 
                />
                <Box sx={{ overflow: 'hidden' }}>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {user.username}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    opacity: 0.8,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {user.email}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    opacity: 0.8,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '0.75rem',
                    mt: 0.5
                  }}>
                    {user.first_name} {user.last_name}
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
            </>
          )}

          <Box sx={{ 
            flex: 1,
            overflowY: 'auto',
            py: 1,
            '&::-webkit-scrollbar': {
              width: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '2px'
            }
          }}>
            <List sx={{ p: 0 }}>
              {commonLinks.map((item) => (
                <React.Fragment key={item.name}>
                  {renderMobileLink(item)}
                </React.Fragment>
              ))}
            </List>

            {isAuthenticated && (
              <>
                <Divider sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  my: 1,
                  mx: isTinyScreen ? 1 : 2
                }} />
                <List sx={{ p: 0 }}>
                  <ListItem 
                    onClick={handleLogout}
                    sx={{ 
                      px: isTinyScreen ? 1 : 2, 
                      py: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      gap: isTinyScreen ? 1 : 2,
                      color: 'rgba(255,255,255,0.9)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: 'white'
                      }
                    }}
                  >
                    <LogoutIcon />
                    <Typography sx={{ fontWeight: '500' }}>Logout</Typography>
                  </ListItem>
                </List>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}