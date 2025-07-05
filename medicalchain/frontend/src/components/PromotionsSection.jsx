import React, { useState, useEffect } from 'react';
import { 
  Box, Container, Typography, Button, Rating, TextField, 
  Dialog, DialogTitle, DialogContent, DialogActions,
  IconButton, useTheme, useMediaQuery, Snackbar, Alert
} from "@mui/material";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PaymentPopup from '@/components/PaymentPopup.jsx';
import { useAuth } from '@/context/AuthContext';
  
// Import images
import fanuel2 from '@/assets/images/Fanuel2.jpg';
import shem1 from '@/assets/images/shem1.jpg';
import shem2 from '@/assets/images/shem2.jpg';
import shem3 from '@/assets/images/shem3.jpg';
import shem4 from '@/assets/images/shem4.jpg';
import shem5 from '@/assets/images/shem5.jpg';
import shem6 from '@/assets/images/shem6.jpg';
import shem7 from '@/assets/images/shem7.jpg';
import shem8 from '@/assets/images/shem8.jpg';

// Promoted doctors data
const promotedDoctors = [
  {
    id: 1,
    name: "Dr. Niyonkuru",
    specialty: "Cardiologist",
    image: fanuel2,
    hospital: "Kira Hospital",
    phone: "+257 61 234 567",
    experience: "15 years",
    rating: 4.7,
    patients: 1243,
    reviews: 287
  },
  {
    id: 2,
    name: "Dr. Shema",
    specialty: "Dermatologist",
    image: shem1,
    hospital: "King's Hospital",
    phone: "+257 79 876 543",
    experience: "8 years",
    rating: 4.5,
    patients: 876,
    reviews: 145
  },
  {
    id: 3,
    name: "Dr. Patrick",
    specialty: "Neurologist",
    image: shem2,
    hospital: "Hope Medical Center",
    phone: "+257 68 345 678",
    experience: "12 years",
    rating: 4.9,
    patients: 1567,
    reviews: 321
  },
  {
    id: 4,
    name: "Dr. Alice",
    specialty: "Pediatrician",
    image: shem3,
    hospital: "Children's Care",
    phone: "+257 71 234 567",
    experience: "10 years",
    rating: 4.8,
    patients: 2034,
    reviews: 412
  },
  {
    id: 5,
    name: "Dr. Jean",
    specialty: "Surgeon",
    image: shem4,
    hospital: "City General",
    phone: "+257 62 456 789",
    experience: "18 years",
    rating: 4.6,
    patients: 2876,
    reviews: 532
  },
  {
    id: 6,
    name: "Dr. Marie",
    specialty: "Gynecologist",
    image: shem5,
    hospital: "Women's Health",
    phone: "+257 75 678 901",
    experience: "14 years",
    rating: 4.7,
    patients: 1890,
    reviews: 387
  },
  {
    id: 7,
    name: "Dr. David",
    specialty: "Ophthalmologist",
    image: shem6,
    hospital: "Vision Plus",
    phone: "+257 69 012 345",
    experience: "9 years",
    rating: 4.4,
    patients: 1123,
    reviews: 201
  },
  {
    id: 8,
    name: "Dr. Sarah",
    specialty: "Dentist",
    image: shem7,
    hospital: "Dental Care",
    phone: "+257 78 901 234",
    experience: "7 years",
    rating: 4.3,
    patients: 987,
    reviews: 176
  },
  {
    id: 9,
    name: "Dr. Eric",
    specialty: "Orthopedist",
    image: shem8,
    hospital: "Bone & Joint",
    phone: "+257 76 543 210",
    experience: "11 years",
    rating: 4.5,
    patients: 1345,
    reviews: 298
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.8
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
      damping: 10,
      duration: 0.6
    }
  }
};

const PromotionsSection = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const { user, isAuthenticated, isLoading: authLoading, isDoctor } = useAuth();
  
  // States
  const [paymentPopupOpen, setPaymentPopupOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });
  const [x, setX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  const scrollSpeed = isSmall ? 2 : isMedium ? 2.5 : 3;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Effects
  useEffect(() => {
    if (inView) controls.start("visible");
    setLoading(authLoading);
  }, [inView, controls, authLoading]);

  useEffect(() => {
    if (!autoScroll) return;

    const maxX = -(promotedDoctors.length * (isSmall ? 260 : isMedium ? 280 : 320) - window.innerWidth + 100);
    const interval = setInterval(() => {
      setX(prev => (prev - scrollSpeed < maxX ? 0 : prev - scrollSpeed));
    }, 16);

    return () => clearInterval(interval);
  }, [autoScroll, isSmall, isMedium]);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handlePrev = () => {
    setAutoScroll(false);
    setX(prev => Math.min(prev + (isSmall ? 300 : isMedium ? 400 : 500), 0));
    setTimeout(() => setAutoScroll(true), 2000);
  };

  const handleNext = () => {
    setAutoScroll(false);
    const maxX = -(promotedDoctors.length * (isSmall ? 260 : isMedium ? 280 : 320) - window.innerWidth + 100);
    setX(prev => Math.max(prev - (isSmall ? 300 : isMedium ? 400 : 500), maxX));
    setTimeout(() => setAutoScroll(true), 2000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleJoinNow = () => {
    if (!isAuthenticated) {
      setErrorMessage("Please log in to access this feature");
      setSnackbar({
        open: true,
        message: "You must be logged in to subscribe to promotions",
        severity: 'error'
      });
      return;
    }

    if (loading) {
      setSnackbar({
        open: true,
        message: "Verification in progress...",
        severity: 'info'
      });
      return;
    }

    if (!isDoctor) {
      setErrorMessage("Only verified doctors can subscribe to promotions.");
      setSnackbar({
        open: true,
        message: "Your account is not registered as a doctor",
        severity: 'error'
      });
      return;
    }
    
    setPaymentPopupOpen(true);
    setErrorMessage('');
  };

  // Render
  return (
    <Box 
      ref={ref}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      sx={{ 
        py: { xs: 4, sm: 5, md: 6 },
        backgroundColor: theme.palette.background.default,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Promotion Section */}
        <motion.div variants={itemVariants}>
          <Box sx={{
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6 },
            p: { xs: 3, sm: 4 },
            backgroundColor: theme.palette.background.paper,
            borderRadius: '16px',
            boxShadow: theme.shadows[2],
            border: `1px solid ${theme.palette.divider}`,
            mx: { xs: 0, sm: 2 }
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              mb: 2,
              fontSize: { 
                xs: '1.25rem', 
                sm: '1.5rem', 
                md: '1.75rem',
                lg: '2rem' 
              },
              lineHeight: 1.2
            }}>
              Doctor, increase your visibility!
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: theme.palette.text.secondary,
              mb: { xs: 3, sm: 4 },
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { 
                xs: '0.95rem', 
                sm: '1rem', 
                md: '1.1rem' 
              },
              lineHeight: 1.6
            }}>
              Subscribe to our promotions and attract more patients easily.
            </Typography>

            {errorMessage && (
              <Typography variant="body2" sx={{ 
                color: theme.palette.error.main,
                mb: 2,
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}>
                {errorMessage}
              </Typography>
            )}

            <Button 
              variant="contained"
              size="large"
              onClick={handleJoinNow}
              disabled={loading}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                px: { xs: 4, sm: 5, md: 6 },
                py: { xs: 1, sm: 1.25, md: 1.5 },
                borderRadius: '8px',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: { xs: '0.95rem', sm: '1rem' },
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {loading ? 'Verifying...' : 'Subscribe Now'}
            </Button>
          </Box>
        </motion.div>

        {/* Promoted Doctors Section */}
        <motion.div variants={itemVariants}>
          <Typography variant="h4" sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            mb: { xs: 3, sm: 4 },
            fontSize: { 
              xs: '1.5rem', 
              sm: '1.75rem', 
              md: '2rem',
              lg: '2.25rem' 
            }
          }}>
            Featured Doctors
          </Typography>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Typography variant="body1" sx={{ 
            textAlign: 'center',
            color: theme.palette.text.secondary,
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { 
              xs: '0.95rem', 
              sm: '1rem', 
              md: '1.1rem' 
            },
            px: { xs: 2, sm: 0 }
          }}>
            Unlimited visibility for doctors who have subscribed to our premium offer
          </Typography>
        </motion.div>

        {/* Doctors Carousel */}
        <Box sx={{ 
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          py: 2
        }}>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                position: 'absolute',
                left: { xs: -4, sm: -8, md: -12 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                backgroundColor: theme.palette.background.paper,
                '&:hover': { 
                  backgroundColor: theme.palette.action.hover,
                  transform: 'translateY(-50%) scale(1.1)' 
                },
                transition: 'all 0.2s ease',
                boxShadow: theme.shadows[4],
                display: isSmall ? 'none' : 'flex',
                width: 40,
                height: 40
              }}
              aria-label="Previous doctors"
            >
              <ChevronLeftIcon fontSize={isMedium ? "medium" : "large"} />
            </IconButton>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: -4, sm: -8, md: -12 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                backgroundColor: theme.palette.background.paper,
                '&:hover': { 
                  backgroundColor: theme.palette.action.hover,
                  transform: 'translateY(-50%) scale(1.1)' 
                },
                transition: 'all 0.2s ease',
                boxShadow: theme.shadows[4],
                display: isSmall ? 'none' : 'flex',
                width: 40,
                height: 40
              }}
              aria-label="Next doctors"
            >
              <ChevronRightIcon fontSize={isMedium ? "medium" : "large"} />
            </IconButton>
          </motion.div>

          <Box sx={{ overflow: 'hidden', width: '100%', mx: { xs: -2, sm: 0 } }}>
            <motion.div
              animate={{ x }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              drag="x"
              dragConstraints={{ 
                left: -(promotedDoctors.length * (isSmall ? 260 : isMedium ? 280 : 320) - window.innerWidth + 100), 
                right: 0 
              }}
              onDragStart={() => {
                setIsDragging(true);
                setAutoScroll(false);
              }}
              onDragEnd={() => {
                setIsDragging(false);
                setTimeout(() => setAutoScroll(true), 2000);
              }}
              style={{ 
                display: 'flex',
                width: 'max-content',
                cursor: isDragging ? 'grabbing' : 'grab',
                paddingLeft: isSmall ? '16px' : '0'
              }}
            >
              {[...promotedDoctors, ...promotedDoctors].map((doctor, index) => (
                <DoctorCard 
                  key={`${doctor.id}-${index}`} 
                  doctor={doctor} 
                  isSmall={isSmall}
                  isMedium={isMedium}
                  onSelectDoctor={() => setSelectedDoctor(doctor)}
                />
              ))}
            </motion.div>
          </Box>
        </Box>
      </Container>

      {/* Payment Popup */}
      <PaymentPopup 
        open={paymentPopupOpen}
        onClose={(success) => {
          setPaymentPopupOpen(false);
          if (success) {
            setSnackbar({
              open: true,
              message: "Payment successful! Your promotion will be activated soon.",
              severity: 'success'
            });
          }
        }}
        doctor={selectedDoctor}
      />

      {/* Notification Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// DoctorCard Component
const DoctorCard = ({ doctor, isSmall, isMedium, onSelectDoctor }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    onSelectDoctor();
  };

  const handleClose = () => {
    setOpen(false);
    setIsSent(false);
    setMessage('');
  };

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => handleClose(), 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box sx={{ 
          flexShrink: 0,
          width: isSmall ? '260px' : isMedium ? '280px' : '320px',
          mx: { xs: 2, sm: 3 },
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease'
        }}>
          <Box sx={{
            height: isSmall ? '220px' : isMedium ? '250px' : '280px',
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.grey[100],
            overflow: 'hidden'
          }}>
            <Box
              component="img"
              src={doctor.image}
              alt={doctor.name}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxHeight: '100%',
                maxWidth: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              p: 1.5,
              textAlign: 'center'
            }}>
              <Typography variant="caption" sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: isSmall ? '0.75rem' : '0.85rem'
              }}>
                {doctor.specialty}
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ p: isSmall ? 2 : 2.5 }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              mb: 1,
              textAlign: 'center',
              fontSize: isSmall ? '1rem' : '1.1rem'
            }}>
              {doctor.name}
            </Typography>

            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: isSmall ? 1 : 1.5,
              gap: 1
            }}>
              <Rating
                value={doctor.rating}
                precision={0.1}
                readOnly
                size={isSmall ? "small" : "medium"}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Typography variant="caption" sx={{ 
                color: theme.palette.text.secondary,
                fontWeight: 'bold',
                fontSize: isSmall ? '0.7rem' : '0.75rem'
              }}>
                {doctor.rating.toFixed(1)}
              </Typography>
              <Typography variant="caption" sx={{ 
                color: theme.palette.text.secondary,
                fontSize: isSmall ? '0.7rem' : '0.75rem'
              }}>
                ({doctor.reviews} reviews)
              </Typography>
            </Box>

            <Box sx={{ 
              mt: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isSmall ? 0.6 : 0.8 
            }}>
              {[
                { label: "Hospital", value: doctor.hospital },
                { label: "Phone", value: doctor.phone },
                { label: "Experience", value: doctor.experience },
                { label: "Patients", value: doctor.patients.toLocaleString() }
              ].map((item, index) => (
                <Typography key={index} variant="caption" sx={{
                  display: 'flex',
                  color: theme.palette.text.secondary,
                  fontSize: isSmall ? '0.7rem' : '0.75rem'
                }}>
                  <Box component="span" sx={{ 
                    fontWeight: 'bold', 
                    mr: 1,
                    minWidth: isSmall ? '60px' : '70px'
                  }}>
                    {item.label}:
                  </Box>
                  {item.value}
                </Typography>
              ))}
            </Box>

            <Box sx={{ 
              mt: isSmall ? 1.5 : 2, 
              display: 'flex', 
              justifyContent: 'center' 
            }}>
              <Button
                variant="outlined"
                size={isSmall ? "small" : "medium"}
                startIcon={<SendIcon fontSize={isSmall ? "small" : "medium"} />}
                onClick={handleClickOpen}
                sx={{
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease',
                  fontSize: isSmall ? '0.75rem' : '0.85rem'
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </motion.div>

      <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth
        maxWidth={isSmall ? 'xs' : 'sm'}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Message to {doctor.name}</Typography>
            <IconButton 
              onClick={handleClose}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {isSent ? (
            <Box 
              sx={{ 
                p: 3, 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SendIcon 
                sx={{ 
                  fontSize: '3rem', 
                  color: theme.palette.success.main,
                  mb: 2 
                }} 
              />
              <Typography variant="h6" sx={{ 
                mb: 2, 
                color: theme.palette.success.main,
                fontSize: isSmall ? '1.1rem' : '1.25rem'
              }}>
                Message sent successfully!
              </Typography>
              <Typography sx={{ fontSize: isSmall ? '0.9rem' : '1rem' }}>
                Dr. {doctor.name} will respond to you shortly.
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="body2" sx={{ 
                mb: 2,
                fontSize: isSmall ? '0.85rem' : '0.9rem'
              }}>
                Specialty: {doctor.specialty} | Hospital: {doctor.hospital}
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Your message"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={isSmall ? 3 : 4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: isSmall ? '0.9rem' : '1rem'
                  }
                }}
              />
            </>
          )}
        </DialogContent>
        {!isSent && (
          <DialogActions sx={{ p: 2 }}>
            <Button 
              onClick={handleClose}
              sx={{
                fontSize: isSmall ? '0.8rem' : '0.9rem'
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSend} 
              variant="contained"
              endIcon={<SendIcon fontSize="small" />}
              disabled={!message.trim()}
              sx={{
                fontSize: isSmall ? '0.8rem' : '0.9rem',
                '&:hover': {
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Send
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default PromotionsSection;