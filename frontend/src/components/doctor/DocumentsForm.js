import React from 'react';
import { Grid } from '@mui/material';
import { Description, PhotoCamera, Assignment, PictureAsPdf } from '@mui/icons-material';
import FileUploadField from '@/components/doctor/FileUploadField.js';
import FormSection from '@/components/doctor/FormSection.js';

const DocumentsForm = ({ formData, setFormData, errors, handleFileChange }) => {
  return (
    <FormSection title="Required Documents">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="Diploma Copy"
            preview={formData.diploma_copy ? URL.createObjectURL(formData.diploma_copy) : null}
            onChange={(file) => handleFileChange('diploma_copy', file)}
            error={errors.diploma_copy}
            icon={<Assignment sx={{ color: '#114680' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="ID Copy"
            preview={formData.id_copy ? URL.createObjectURL(formData.id_copy) : null}
            onChange={(file) => handleFileChange('id_copy', file)}
            error={errors.id_copy}
            icon={<PictureAsPdf sx={{ color: '#114680' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="Professional Photo"
            preview={formData.professional_photo ? URL.createObjectURL(formData.professional_photo) : null}
            onChange={(file) => handleFileChange('professional_photo', file, true)}
            error={errors.professional_photo}
            icon={<PhotoCamera sx={{ color: '#114680' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="CV"
            preview={formData.cv ? URL.createObjectURL(formData.cv) : null}
            onChange={(file) => handleFileChange('cv', file)}
            error={errors.cv}
            icon={<Description sx={{ color: '#114680' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="Malpractice Insurance"
            preview={formData.malpractice_insurance ? URL.createObjectURL(formData.malpractice_insurance) : null}
            onChange={(file) => handleFileChange('malpractice_insurance', file)}
            error={errors.malpractice_insurance}
            icon={<PictureAsPdf sx={{ color: '#114680' }} />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FileUploadField
            label="References"
            preview={formData.references ? URL.createObjectURL(formData.references) : null}
            onChange={(file) => handleFileChange('references', file)}
            error={errors.references}
            icon={<Description sx={{ color: '#114680' }} />}
          />
        </Grid>
      </Grid>
    </FormSection>
  );
};

export default DocumentsForm;