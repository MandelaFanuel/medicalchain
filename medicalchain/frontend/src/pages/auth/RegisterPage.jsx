import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  Box, Button, Card, CardContent, Container, TextField, Typography, Alert,
  InputAdornment, CircularProgress, Grid, Avatar, MenuItem, Dialog,
  DialogTitle, DialogContent, DialogActions, Stepper, Step, StepLabel, IconButton,
  FormControlLabel, Checkbox
} from '@mui/material';
import {
  Email, Person, Lock, Home, Work, Badge, AddAPhoto, Male, Female, Transgender, Close,
} from '@mui/icons-material';
import Footer from '../../components/footer/Footer.jsx';
import Header from '../../components/header/Header.jsx';
import ProfessionalInfoForm from '../../components/doctor/ProfessionalInfoForm.js';
import DocumentsForm from '../../components/doctor/DocumentsForm.js';
import PaymentInfoForm from '../../components/doctor/ PaymentInfoForm.js';

// Couleurs pour le dégradé
const gradientColors = {
  left: '#031733',
  middle: '#5ab0e0',
  right: '#031733'
};

const RegisterPage = () => {
  const { register, error: authError, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    current_address: '',
    current_function: '',
    gender: 'M',
    profile_image: null,
    previewImage: null,
    is_doctor: false,
    termsAccepted: false,
    doctor_profile: {
      speciality: '',
      license_number: '',
      hospital: '',
      payment_method: '',
      payment_proof: null,
      diploma: null,
      id_proof: null,
    },
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    current_address: '',
    current_function: '',
    gender: '',
    termsAccepted: '',
    general: '',
  });

  const [doctorDialogOpen, setDoctorDialogOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/consultation');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (authError) {
      setErrors((prev) => ({ ...prev, general: authError }));
    }
  }, [authError]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, general: 'Image size should be less than 2MB' }));
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      setErrors((prev) => ({ ...prev, general: 'Only JPEG, JPG or PNG images are allowed' }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      profile_image: file,
      previewImage: URL.createObjectURL(file),
    }));
    setErrors((prev) => ({ ...prev, general: '' }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name] || errors.general) {
      setErrors((prev) => ({ ...prev, [name]: '', general: '' }));
    }
  };

  const validate = () => {
    const newErrors = {
      email: '',
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      current_address: '',
      current_function: '',
      gender: '',
      termsAccepted: '',
      general: '',
    };
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
      isValid = false;
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
      isValid = false;
    }

    if (!formData.current_address.trim()) {
      newErrors.current_address = 'Address is required';
      isValid = false;
    }

    if (!formData.current_function.trim()) {
      newErrors.current_function = 'Profession is required';
      isValid = false;
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleDoctorInfoChange = (doctorData) => {
    setFormData((prev) => ({
      ...prev,
      doctor_profile: {
        ...prev.doctor_profile,
        ...doctorData,
      },
      is_doctor: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const isDoctor = ['doctor', 'docteur', 'médecin', 'medecin'].some((term) =>
      formData.current_function.toLowerCase().includes(term)
    );

    if (isDoctor) {
      setDoctorDialogOpen(true);
      return;
    }

    await submitRegistration();
  };

  const handleNextStep = () => {
    if (activeStep === 0) {
      if (!formData.doctor_profile.speciality || !formData.doctor_profile.license_number) {
        setErrors((prev) => ({ ...prev, general: 'Please fill all professional information' }));
        return;
      }
    } else if (activeStep === 1) {
      if (!formData.doctor_profile.diploma || !formData.doctor_profile.id_proof) {
        setErrors((prev) => ({ ...prev, general: 'Please upload all required documents' }));
        return;
      }
    }

    setErrors((prev) => ({ ...prev, general: '' }));
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleDoctorDialogClose = () => {
    setDoctorDialogOpen(false);
    setActiveStep(0);
  };

  const handleDoctorRegistrationComplete = async () => {
    if (!formData.doctor_profile.payment_method) {
      setErrors((prev) => ({ ...prev, general: 'Please select a payment method' }));
      return;
    }

    try {
      await submitRegistration();
      setDoctorDialogOpen(false);
      setActiveStep(0);
      navigate('/login', {
        state: {
          registrationSuccess: true,
          message: 'Registration successful! Please log in.',
        },
      });
    } catch (err) {
      console.error('Registration error:', err);
      setErrors((prev) => ({ ...prev, general: err.message || 'Registration failed' }));
    }
  };

  const submitRegistration = async () => {
    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key !== 'doctor_profile' && key !== 'previewImage' && formData[key] !== null && formData[key] !== undefined) {
        if (key === 'profile_image' && formData[key] instanceof File) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    if (formData.is_doctor) {
      for (const key in formData.doctor_profile) {
        const value = formData.doctor_profile[key];
        if (value !== null && value !== undefined) {
          if (value instanceof File) {
            formDataToSend.append(`doctor_profile.${key}`, value);
          } else {
            formDataToSend.append(`doctor_profile.${key}`, value);
          }
        }
      }
    }

    try {
      await register(formDataToSend);
    } catch (err) {
      console.error('Registration error:', err);
      throw err;
    }
  };

  const getGenderIcon = () => {
    switch (formData.gender) {
      case 'M':
        return <Male color="primary" />;
      case 'F':
        return <Female color="primary" />;
      default:
        return <Transgender color="primary" />;
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ProfessionalInfoForm
            formData={formData.doctor_profile}
            setFormData={handleDoctorInfoChange}
            errors={errors}
          />
        );
      case 1:
        return (
          <DocumentsForm
            formData={formData.doctor_profile}
            setFormData={handleDoctorInfoChange}
            errors={errors}
            handleFileChange={(field, file) => {
              handleDoctorInfoChange({ [field]: file });
            }}
          />
        );
      case 2:
        return (
          <PaymentInfoForm
            formData={formData.doctor_profile}
            setFormData={handleDoctorInfoChange}
            errors={errors}
            handleFileChange={(field, file) => {
              handleDoctorInfoChange({ [field]: file });
            }}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ 
              mb: 4, 
              fontWeight: 'bold',
              background: `linear-gradient(90deg, ${gradientColors.left} 0%, ${gradientColors.middle} 50%, ${gradientColors.right} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Create Account
            </Typography>

            {errors.general && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {errors.general}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar src={formData.previewImage} sx={{ width: 100, height: 100, mb: 2 }} />
                    <Button variant="outlined" component="label" startIcon={<AddAPhoto />}>
                      Upload Profile Image
                      <input
                        type="file"
                        hidden
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleImageChange}
                      />
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="first_name"
                    label="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    error={!!errors.first_name}
                    helperText={errors.first_name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="last_name"
                    label="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    error={!!errors.last_name}
                    helperText={errors.last_name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
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
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="username"
                    label="Username"
                    value={formData.username}
                    onChange={handleChange}
                    error={!!errors.username}
                    helperText={errors.username}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Badge color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
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
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="current_address"
                    label="Address"
                    value={formData.current_address}
                    onChange={handleChange}
                    error={!!errors.current_address}
                    helperText={errors.current_address}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="current_function"
                    label="Profession"
                    value={formData.current_function}
                    onChange={handleChange}
                    error={!!errors.current_function}
                    helperText={errors.current_function}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Work color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="gender"
                    label="Gender"
                    select
                    value={formData.gender}
                    onChange={handleChange}
                    error={!!errors.gender}
                    helperText={errors.gender}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {getGenderIcon()}
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="O">Other</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the <Link href="/terms" style={{ color: '#1976d2' }}>Terms and Conditions</Link> and <Link href="/privacy" style={{ color: '#1976d2' }}>Privacy Policy</Link>
                      </Typography>
                    }
                  />
                  {errors.termsAccepted && (
                    <Typography color="error" variant="body2" sx={{ mt: -1, ml: 4 }}>
                      {errors.termsAccepted}
                    </Typography>
                  )}
                </Grid>
              </Grid>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  mt: 3,
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
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
              </Button>

              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Already have an account?
                </Typography>
                <Link
                  to="/login"
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
                  Login here
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Dialog
        open={doctorDialogOpen}
        onClose={handleDoctorDialogClose}
        fullWidth
        maxWidth="md"
        scroll="paper"
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Complete Doctor Registration</Typography>
            <IconButton onClick={handleDoctorDialogClose}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
            <Step>
              <StepLabel>Professional Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Documents</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment</StepLabel>
            </Step>
          </Stepper>

          {getStepContent(activeStep)}
        </DialogContent>
        <DialogActions>
          <Button onClick={activeStep === 0 ? handleDoctorDialogClose : handlePrevStep} color="secondary">
            {activeStep === 0 ? 'Cancel' : 'Back'}
          </Button>
          <Button
            onClick={activeStep === 2 ? handleDoctorRegistrationComplete : handleNextStep}
            color="primary"
            variant="contained"
            disabled={loading}
            sx={{
              background: `linear-gradient(90deg, ${gradientColors.left} 0%, ${gradientColors.middle} 50%, ${gradientColors.right} 100%)`,
              color: 'white',
              '&:hover': {
                opacity: 0.9
              }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : activeStep === 2 ? 'Complete Registration' : 'Next'}
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default RegisterPage;