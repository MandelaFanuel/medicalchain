import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const FileUploadField = ({ label, preview, onChange, error, icon }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  const handleRemove = () => {
    onChange(null);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
        {label}
      </Typography>
      
      {preview ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={preview} 
            alt="Preview" 
            style={{ 
              width: 80,
              height: 80,
              objectFit: 'cover',
              marginRight: 8,
              border: '1px solid #ddd',
              borderRadius: 4
            }} 
          />
          <IconButton 
            onClick={handleRemove}
            size="small"
            sx={{ color: 'error.main' }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      ) : (
        <Button
          variant="outlined"
          component="label"
          startIcon={icon}
          fullWidth
          size="small"
          sx={{
            py: 1,
            borderStyle: 'dashed',
            borderWidth: 1.5,
            borderColor: 'divider',
            '&:hover': {
              borderColor: 'primary.main'
            }
          }}
        >
          Choose File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
          />
        </Button>
      )}
      
      {error && (
        <Typography color="error" variant="caption" sx={{ mt: 0.5, display: 'block' }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default FileUploadField;