import { Typography, Divider, Grid } from '@mui/material';

const FormSection = ({ title, children }) => (
  <>
    <Typography variant="subtitle1" fontWeight={500} gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Grid container spacing={2}>
      {children}
    </Grid>
  </>
);

export default FormSection;