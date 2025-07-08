import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';
import { 
  Box, Button, Card, CardContent, Container,
  TextField, Typography, Alert, InputAdornment,
  CircularProgress, Stack, FormControlLabel,
  Checkbox, Grid, useTheme, Snackbar
} from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import Footer from '@/components/footer/Footer.jsx';
import Header from '@/components/header/Header.jsx';

// Couleurs pour le dégradé
const gradientColors = {
  left: '#031733',
  middle: '#5ab0e0',
  right: '#031733'
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: ''
  });

  const [forgotPasswordMessage, setForgotPasswordMessage] = useState(false);
  
  const { login, error: authError, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/consultation');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (authError) {
      setErrors(prev => ({ ...prev, general: authError }));
    }
  }, [authError]);

  const validate = () => {
    const newErrors = {
      email: '',
      password: '',
      general: ''
    };
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await login(formData.email, formData.password, formData.rememberMe);
    } catch (err) {
      console.error('Login error:', err);
      setErrors(prev => ({
        ...prev,
        general: err.message || 'Login failed. Please check your credentials.'
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name] || errors.general) {
      setErrors(prev => ({ ...prev, [name]: '', general: '' }));
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setForgotPasswordMessage(true);
  };

  const handleCloseForgotPasswordMessage = () => {
    setForgotPasswordMessage(false);
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ 
              mb: 4, 
              fontWeight: 'bold',
              background: `linear-gradient(90deg, ${gradientColors.left} 0%, ${gradientColors.middle} 50%, ${gradientColors.right} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Login
            </Typography>

            {errors.general && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {errors.general}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="email"
                  autoFocus
                />

                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="current-password"
                />

                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item>
                    <Link
                      to="#"
                      onClick={handleForgotPasswordClick}
                      style={{
                        color: '#1976d2',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                        fontSize: '0.875rem'
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ 
                    mt: 2, 
                    py: 1.5,
                    background: `linear-gradient(90deg, ${gradientColors.left} 0%, ${gradientColors.middle} 50%, ${gradientColors.right} 100%)`,
                    color: 'white',
                    '&:hover': {
                      opacity: 0.9,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    },
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255,255,255,0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover::after': {
                      opacity: 1
                    }
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
                </Button>
              </Stack>

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Don't have an account?
                </Typography>
                <Link
                  to="/register"
                  style={{
                    color: '#1976d2',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                    fontSize: '1rem'
                  }}
                >
                  Create an account
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={forgotPasswordMessage}
        autoHideDuration={6000}
        onClose={handleCloseForgotPasswordMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseForgotPasswordMessage} severity="info" sx={{ width: '100%' }}>
          Feature is still in development
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
};

export default LoginPage;