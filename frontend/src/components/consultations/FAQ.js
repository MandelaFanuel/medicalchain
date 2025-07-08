import React, { useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore.js';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Select a doctor, choose an available time slot that works for you, and confirm your booking. You'll receive a confirmation email with all the details."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment time through your account dashboard or the confirmation email."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, mobile money payments, and bank transfers. Payment is required at the time of booking to secure your appointment."
    },
    {
      question: "Is my medical information secure?",
      answer: "Absolutely. We use industry-standard encryption and security protocols to protect all your personal and medical information."
    },
    {
      question: "How do I contact my doctor after booking?",
      answer: "After booking, you'll have access to a secure messaging system to communicate with your doctor directly through our platform."
    }
  ];

  return (
    <Container 
      ref={ref}
      maxWidth="xl" 
      sx={{ 
        py: isSmall ? 4 : 6, 
        px: isSmall ? 2 : 4 
      }}
      component={motion.div}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Grid 
        container 
        spacing={isSmall ? 2 : 6}
        alignItems="center"
      >
        {/* Left Column - Contact */}
        <Grid 
          item 
          xs={12} 
          md={5}
          component={motion.div}
          variants={itemVariants}
        >
          <Box 
            sx={{ 
              p: isSmall ? 3 : 4,
              backgroundColor: 'background.default',
              borderRadius: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                color: 'primary.main'
              }}
            >
              Need More Help?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                mb: 3
              }}
            >
              Can't find the answer you're looking for? Our support team is available 24/7 to assist you with any questions or concerns.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              sx={{
                borderRadius: 2,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1rem',
                width: isSmall ? '100%' : '200px', // Largeur fixe de 200px sur desktop
                maxWidth: '100%',
                alignSelf: 'flex-start' // Alignement à gauche
              }}
              component={motion.div}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </Button>
          </Box>
        </Grid>

        {/* Right Column - FAQs */}
        <Grid 
          item 
          xs={12} 
          md={7}
          component={motion.div}
          variants={containerVariants}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              color: 'primary.main'
            }}
            component={motion.div}
            variants={itemVariants}
            >
            Frequently Asked Questions
          </Typography>
          
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              sx={{ 
                mb: 2, 
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider'
              }}
              component={motion.div}
              variants={itemVariants}
            >
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: 'background.default',
                  '&:hover': {
                    backgroundColor: 'action.hover'
                  }
                }}
              >
                <Typography 
                  fontWeight={600}
                  sx={{ 
                    color: 'text.primary' 
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: 'background.paper'
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: 'text.secondary' 
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQ;