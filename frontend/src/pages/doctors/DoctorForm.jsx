import React, { useState } from 'react';
import {
  DialogTitle, DialogContent, DialogActions,
  Box, Button, Typography, Alert, Grid,
  FormControlLabel, Checkbox, CircularProgress
} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { AttachMoney } from '@mui/icons-material';
import ProfessionalInfoForm from '@/components/doctor/ProfessionalInfoForm.jsx';
import DocumentsForm from '@/components/doctor/DocumentsForm.jsx';
import PaymentInfoForm from '@/components/doctor/ PaymentInfoForm.jsx';

const steps = ['Professional Information', 'Documents & Payment'];

const FILE_TYPES = {
  PHOTO: ['image/jpeg', 'image/png', 'image/gif'],
  DOCUMENT: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ID_PROOF: ['application/pdf', 'image/jpeg', 'image/png'],
  PAYMENT_PROOF: ['application/pdf', 'image/jpeg', 'image/png']
};

const DoctorForm = ({ userId = null, onComplete, onCancel }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    professional_id: '',
    license_country: '',
    diploma: '',
    graduation_year: '',
    speciality: '',
    hospital: '',
    professional_email: '',
    professional_phone: '',
    city_country: '',
    diploma_copy: null,
    id_copy: null,
    professional_photo: null,
    payment_methods: [],
    subscription_plan: 'premium',
    payment_proof: null,
    terms_accepted: false,
    bio: '',
    cv: null,
    malpractice_insurance: null,
    references: null
  });

  const [errors, setErrors] = useState({
    professional_id: '',
    license_country: '',
    diploma: '',
    graduation_year: '',
    speciality: '',
    hospital: '',
    professional_email: '',
    professional_phone: '',
    city_country: '',
    diploma_copy: '',
    id_copy: '',
    professional_photo: '',
    payment_methods: '',
    payment_proof: '',
    terms_accepted: '',
    bio: '',
    cv: '',
    malpractice_insurance: '',
    references: '',
    general: ''
  });

  const [loading, setLoading] = useState(false);

  const checkFileType = (file, allowedTypes) => {
    return allowedTypes.includes(file.type);
  };

  const handleFileChange = (name, file, isPhoto = false) => {
    if (!file) {
      setFormData(prev => ({ ...prev, [name]: null }));
      setErrors(prev => ({ ...prev, [name]: 'File is required' }));
      return;
    }

    let isValid = true;
    let errorMessage = '';

    if (isPhoto) {
      if (!checkFileType(file, FILE_TYPES.PHOTO)) {
        isValid = false;
        errorMessage = 'Please upload a valid image (JPEG, PNG, GIF)';
      }
    } else {
      if (name === 'professional_photo') {
        if (!checkFileType(file, FILE_TYPES.PHOTO)) {
          isValid = false;
          errorMessage = 'Please upload a valid photo (JPEG, PNG, GIF)';
        }
      } else if (name === 'diploma_copy' || name === 'cv' || name === 'references') {
        if (!checkFileType(file, FILE_TYPES.DOCUMENT)) {
          isValid = false;
          errorMessage = 'Please upload a valid document (PDF, DOC, DOCX)';
        }
      } else if (name === 'id_copy' || name === 'malpractice_insurance' || name === 'payment_proof') {
        if (!checkFileType(file, FILE_TYPES.ID_PROOF)) {
          isValid = false;
          errorMessage = 'Please upload a valid file (PDF, JPEG, PNG)';
        }
      }
    }

    if (isValid) {
      setFormData(prev => ({ ...prev, [name]: file }));
      setErrors(prev => ({ ...prev, [name]: '' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: errorMessage }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {...errors};
    let isValid = true;

    if (step === 0) {
      if (!formData.professional_id.trim()) {
        newErrors.professional_id = 'Professional ID is required';
        isValid = false;
      }
      if (!formData.license_country.trim()) {
        newErrors.license_country = 'License country is required';
        isValid = false;
      }
      if (!formData.diploma.trim()) {
        newErrors.diploma = 'Diploma is required';
        isValid = false;
      }
      if (!formData.graduation_year) {
        newErrors.graduation_year = 'Graduation year is required';
        isValid = false;
      } else if (isNaN(Number(formData.graduation_year))) {
        newErrors.graduation_year = 'Please enter a valid year';
        isValid = false;
      }
      if (!formData.speciality.trim()) {
        newErrors.speciality = 'Speciality is required';
        isValid = false;
      }
      if (!formData.hospital.trim()) {
        newErrors.hospital = 'Hospital/Clinic is required';
        isValid = false;
      }
      if (!formData.professional_email.trim()) {
        newErrors.professional_email = 'Professional email is required';
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.professional_email)) {
        newErrors.professional_email = 'Invalid email format';
        isValid = false;
      }
      if (!formData.professional_phone.trim()) {
        newErrors.professional_phone = 'Professional phone is required';
        isValid = false;
      }
      if (!formData.city_country.trim()) {
        newErrors.city_country = 'City/Country is required';
        isValid = false;
      }
    } else if (step === 1) {
      if (!formData.diploma_copy) {
        newErrors.diploma_copy = 'Diploma copy is required';
        isValid = false;
      }
      if (!formData.id_copy) {
        newErrors.id_copy = 'ID copy is required';
        isValid = false;
      }
      if (!formData.professional_photo) {
        newErrors.professional_photo = 'Professional photo is required';
        isValid = false;
      }
      if (!formData.cv) {
        newErrors.cv = 'CV is required';
        isValid = false;
      }
      if (!formData.malpractice_insurance) {
        newErrors.malpractice_insurance = 'Malpractice insurance proof is required';
        isValid = false;
      }
      if (formData.payment_methods.length === 0) {
        newErrors.payment_methods = 'At least one payment method is required';
        isValid = false;
      }
      if (!formData.payment_proof) {
        newErrors.payment_proof = 'Payment proof is required';
        isValid = false;
      }
      if (!formData.terms_accepted) {
        newErrors.terms_accepted = 'You must accept the terms and conditions';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(activeStep)) return;

    if (activeStep === steps.length - 1) {
      setLoading(true);
      try {
        if (!formData.diploma_copy) {
          setErrors(prev => ({ ...prev, diploma_copy: 'Diploma copy is required' }));
          setLoading(false);
          return;
        }

        await onComplete(formData);
      } catch (err) {
        setErrors(prev => ({
          ...prev,
          general: err.message || 'An error occurred while submitting the form'
        }));
        setLoading(false);
      }
    } else {
      handleNext();
    }
  };

  return (
    <>
      <DialogContent dividers>
        <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {errors.general && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.general}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          {activeStep === 0 && (
            <ProfessionalInfoForm 
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}

          {activeStep === 1 && (
            <>
              <DocumentsForm 
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                handleFileChange={handleFileChange}
              />
              
              <PaymentInfoForm 
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                handleFileChange={handleFileChange}
              />

              <Box sx={{ mt: 3, mb: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.terms_accepted}
                      onChange={(e) => setFormData({
                        ...formData, 
                        terms_accepted: e.target.checked
                      })}
                      name="terms_accepted"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the Terms of Service and confirm that all information provided is accurate.
                    </Typography>
                  }
                />
                {errors.terms_accepted && (
                  <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    {errors.terms_accepted}
                  </Typography>
                )}
              </Box>
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button
          onClick={activeStep === 0 ? onCancel : handleBack}
          variant="outlined"
          disabled={loading}
          sx={{ mr: 2 }}
        >
          {activeStep === 0 ? 'Cancel' : 'Back'}
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || (activeStep === 1 && !formData.terms_accepted)}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AttachMoney />}
          sx={{ px: 4 }}
        >
          {loading ? 'Processing...' : 
           activeStep === steps.length - 1 ? 'Pay 15,000 FBU' : 'Continue'}
        </Button>
      </DialogActions>
    </>
  );
};

export default DoctorForm;