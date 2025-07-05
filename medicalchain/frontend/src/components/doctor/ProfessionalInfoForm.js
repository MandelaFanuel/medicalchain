import React from 'react';
import { Grid } from '@mui/material';
import {
  Badge, School, Work, Email, Phone, LocationOn, Description
} from '@mui/icons-material';
import FormField from '@/components/doctor/FormField.js';
import FormSection from '@/components/doctor/FormSection.js';

const ProfessionalInfoForm = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <FormSection title="Professional Information">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormField
            name="license_number"
            label="Professional ID/License Number"
            value={formData.license_number || ''}
            onChange={handleChange}
            error={errors.license_number}
            icon={<Badge />}
            helpText="Enter your official professional license number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="license_country"
            label="License Country/Region"
            value={formData.license_country || ''}
            onChange={handleChange}
            error={errors.license_country}
            icon={<LocationOn />}
            helpText="Country where your license was issued"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="diploma"
            label="Main Diploma"
            value={formData.diploma || ''}
            onChange={handleChange}
            error={errors.diploma}
            icon={<School />}
            helpText="Your primary medical diploma"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="graduation_year"
            label="Graduation Year"
            value={formData.graduation_year || ''}
            onChange={handleChange}
            error={errors.graduation_year}
            icon={<Work />}
            helpText="Year you graduated (YYYY format)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="speciality"
            label="Medical Speciality"
            value={formData.speciality || ''}
            onChange={handleChange}
            error={errors.speciality}
            icon={<Work />}
            helpText="Your medical specialization"
            inputProps={{
              'data-testid': 'speciality-input',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="hospital"
            label="Hospital/Clinic"
            value={formData.hospital || ''}
            onChange={handleChange}
            error={errors.hospital}
            icon={<Work />}
            helpText="Your current workplace"
            inputProps={{
              'data-testid': 'hospital-input',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="professional_email"
            label="Professional Email"
            value={formData.professional_email || ''}
            onChange={handleChange}
            error={errors.professional_email}
            icon={<Email />}
            helpText="Your work email address"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormField
            name="professional_phone"
            label="Professional Phone"
            value={formData.professional_phone || ''}
            onChange={handleChange}
            error={errors.professional_phone}
            icon={<Phone />}
            helpText="Your work phone number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            name="city_country"
            label="City/Country of Practice"
            value={formData.city_country || ''}
            onChange={handleChange}
            error={errors.city_country}
            icon={<LocationOn />}
            helpText="Your current practice location"
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            name="bio"
            label="Professional Bio"
            value={formData.bio || ''}
            onChange={handleChange}
            error={errors.bio}
            multiline
            rows={4}
            helpText="Brief description of your professional background"
            icon={<Description />}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default ProfessionalInfoForm;
