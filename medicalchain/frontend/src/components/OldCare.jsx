// import React from "react";
// import { 
//   Button, 
//   Typography, 
//   Grid, 
//   Card, 
//   CardContent, 
//   Container,
//   Box
// } from "@mui/material";
// import fanuelImage from '../assets/images/Fanuel2.jpg';

// const OldCare = () => {
//   return (
//     <Box sx={{ fontFamily: 'sans-serif', bgcolor: 'grey.50' }}>
//       {/* Navbar */}
//       <Box 
//         sx={{ 
//           bgcolor: 'white', 
//           boxShadow: 1, 
//           py: 2, 
//           px: 4, 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center'
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'custom.title' }}>
//           OldCare
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 3 }}>
//           {['Home', 'About Us', 'Services', 'Clinical Care', 'Resources', 'Reviews', 'Contact Us']
//             .map((item) => (
//               <Typography 
//                 key={item}
//                 component="a" 
//                 href="#" 
//                 sx={{ 
//                   color: 'grey.700',
//                   '&:hover': { color: 'blue.600' },
//                   textDecoration: 'none'
//                 }}
//               >
//                 {item}
//               </Typography>
//             ))}
//         </Box>
//       </Box>

//       {/* Hero Section */}
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" sx={{ fontWeight: 'bold', color: 'grey.800', mb: 2 }}>
//               We Help You Live Your Best Golden Years
//             </Typography>
//             <Typography variant="body1" sx={{ color: 'grey.600', mb: 3 }}>
//               This is the main page of your website, and it should be the first page that visitors see. 
//               It should include your hero text, as well as links to other important pages on your website.
//             </Typography>
//             <Button 
//               variant="contained" 
//               sx={{ 
//                 bgcolor: 'blue.600',
//                 '&:hover': { bgcolor: 'blue.700' },
//                 color: 'white',
//                 py: 1.5,
//                 px: 3,
//                 borderRadius: 1
//               }}
//             >
//               Book Appointment
//             </Button>
//             <Typography variant="body2" sx={{ mt: 1.5, color: 'grey.500' }}>
//               4.7 Rating on <Box component="span" sx={{ fontWeight: 'bold' }}>Capture</Box>
//             </Typography>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src={fanuelImage}
//               alt="Golden Years"
//               sx={{
//                 borderRadius: 1,
//                 boxShadow: 3,
//                 width: '100%',
//                 height: 'auto',
//                 maxHeight: 400,
//                 objectFit: 'cover'
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Partners Section */}
//       <Box sx={{ py: 4, bgcolor: 'white' }}>
//         <Container>
//           <Typography variant="h6" sx={{ textAlign: 'center', color: 'grey.500', mb: 3 }}>
//             Trusted by:
//           </Typography>
//           <Grid container justifyContent="center" spacing={4}>
//             {["WebMD", "healthline", "verywell", "CR"].map((partner) => (
//               <Grid item key={partner}>
//                 <Typography sx={{ color: 'grey.700', fontWeight: 'medium' }}>
//                   {partner}
//                 </Typography>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Services Section */}
//       <Container sx={{ py: 8 }}>
//         <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: 'grey.800', mb: 1 }}>
//           Our Services
//         </Typography>
//         <Typography variant="subtitle1" sx={{ textAlign: 'center', color: 'grey.500', mb: 6 }}>
//           Types Of Services
//         </Typography>
//         <Grid container spacing={4}>
//           {[
//             {
//               title: "Home Care",
//               description: "This type of care provides assistance with activities of daily living (ADLs) such as bathing, dressing, eating, and grooming.",
//             },
//             {
//               title: "Assisted Living",
//               description: "This type of care provides a combination of housing, meals, and assistance with ADLs.",
//             },
//             {
//               title: "Adult Day Care",
//               description: "This type of care provides a safe and stimulating environment for older adults during the day.",
//             },
//             {
//               title: "Nursing Home",
//               description: "This type of care provides 24/7 medical care for older adults who need a high level of assistance.",
//             },
//           ].map((service, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ 
//                 height: '100%',
//                 boxShadow: 2,
//                 '&:hover': { boxShadow: 4 },
//                 transition: 'box-shadow 0.3s'
//               }}>
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'blue.800', mb: 1 }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: 'grey.600' }}>
//                     {service.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default OldCare;