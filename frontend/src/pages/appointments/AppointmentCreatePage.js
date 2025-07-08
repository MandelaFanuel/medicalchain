// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import DoctorService from '../../services/DoctorService';
// import WalletService from '../../services/WalletService';
// import {
//   Box, Typography, Card, CardContent,
//   TextField, Button, Alert, CircularProgress,
//   Grid, MenuItem, Select, FormControl, InputLabel
// } from '@mui/material';
// import {
//   CalendarToday, AccessTime, Person,
//   MedicalServices, Payment
// } from '@mui/icons-material';

// const AppointmentCreatePage = () => {
//   const { user, wallet } = useAuth();
//   const navigate = useNavigate();
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     doctor_id: '',
//     date: '',
//     time: '',
//     reason: '',
//     payment_method: 'wallet'
//   });
//   const [availabilities, setAvailabilities] = useState([]);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const data = await DoctorService.getDoctors();
//         setDoctors(data.filter(d => d.is_verified));
//       } catch (err) {
//         setError('Failed to load doctors list');
//       }
//     };
    
//     fetchDoctors();
//   }, []);

//   useEffect(() => {
//     if (formData.doctor_id) {
//       const fetchAvailabilities = async () => {
//         try {
//           const response = await api.get(`/api/availabilities/?doctor=${formData.doctor_id}`);
//           setAvailabilities(response.data);
//         } catch (err) {
//           console.error('Failed to fetch availabilities', err);
//         }
//       };
//       fetchAvailabilities();
//     }
//   }, [formData.doctor_id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
    
//     try {
//       // First make payment
//       if (formData.payment_method === 'wallet') {
//         await WalletService.makePayment(
//           15000,
//           process.env.REACT_APP_MEDICHAIN_ACCOUNT_ID, 
//           'appointment'
//         );
//       }

//       // Then create appointment
//       const appointmentData = {
//         doctor: formData.doctor_id,
//         appointment_date: formData.date,
//         appointment_time: formData.time,
//         appointment_reason: formData.reason,
//         is_paid: true
//       };

//       const response = await api.post('/api/appointments/create/', appointmentData);
      
//       setSuccess(true);
//       setTimeout(() => navigate('/appointments'), 2000);
//     } catch (err) {
//       setError(err.message || 'Appointment creation failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
//         <CalendarToday sx={{ verticalAlign: 'middle', mr: 1 }} />
//         New Appointment
//       </Typography>

//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error}
//         </Alert>
//       )}

//       {success && (
//         <Alert severity="success" sx={{ mb: 3 }}>
//           Appointment created successfully! Redirecting...
//         </Alert>
//       )}

//       <Card elevation={3}>
//         <CardContent>
//           <Box component="form" onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} md={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Select Doctor</InputLabel>
//                   <Select
//                     name="doctor_id"
//                     value={formData.doctor_id}
//                     onChange={handleChange}
//                     label="Select Doctor"
//                     required
//                   >
//                     {doctors.map(doctor => (
//                       <MenuItem key={doctor.id} value={doctor.id}>
//                         Dr. {doctor.user.first_name} {doctor.user.last_name} - {doctor.speciality}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   name="date"
//                   label="Date"
//                   type="date"
//                   InputLabelProps={{ shrink: true }}
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   name="time"
//                   label="Time"
//                   type="time"
//                   InputLabelProps={{ shrink: true }}
//                   value={formData.time}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <FormControl fullWidth>
//                   <InputLabel>Payment Method</InputLabel>
//                   <Select
//                     name="payment_method"
//                     value={formData.payment_method}
//                     onChange={handleChange}
//                     label="Payment Method"
//                   >
//                     <MenuItem value="wallet">Medichain Wallet</MenuItem>
//                     <MenuItem value="on_site">Pay On Site</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="reason"
//                   label="Reason for Appointment"
//                   multiline
//                   rows={4}
//                   value={formData.reason}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Alert severity="info" sx={{ mb: 2 }}>
//                   Appointment fee: 15,000 FBU (will be charged immediately)
//                 </Alert>
//               </Grid>

//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   size="large"
//                   startIcon={loading ? <CircularProgress size={20} /> : <Payment />}
//                   disabled={loading || success}
//                 >
//                   {loading ? 'Processing...' : 'Book Appointment'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default AppointmentCreatePage;