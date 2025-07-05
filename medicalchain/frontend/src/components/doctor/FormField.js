import React from 'react';
import { 
  TextField, 
  InputAdornment, 
  Typography, 
  Box 
} from '@mui/material';

const FormField = ({
  name,
  label,
  value,
  onChange,
  error,
  icon,
  helpText,
  multiline = false,
  rows = 3,
  ...props
}) => {
  return (
    <Box sx={{ mb: 1 }}>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        error={Boolean(error)}
        helperText={error || helpText}
        fullWidth
        size="small"
        variant="outlined"
        margin="normal"
        multiline={multiline}
        rows={rows}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start" sx={{ color: '#114680' }}>
              {icon}
            </InputAdornment>
          ),
        }}
        FormHelperTextProps={{
          sx: { 
            margin: 0,
            fontSize: '0.75rem',
            lineHeight: 1.2
          }
        }}
        sx={{
          '& .MuiInputBase-root': {
            fontSize: '0.875rem'
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.875rem'
          }
        }}
        {...props}
      />
    </Box>
  );
};

export default FormField;