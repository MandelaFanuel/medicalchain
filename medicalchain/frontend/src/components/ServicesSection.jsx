import React, { useEffect } from 'react';
import { 
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useMediaQuery
} from "@mui/material";
import {
  CalendarToday,
  Schedule,
  Cancel,
  Security,
  Payment,
  Notifications,
  Videocam,
  History
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const isExtraSmall = useMediaQuery('(max-width:400px)');
  const isSmall = useMediaQuery('(max-width:600px)');
  const isMedium = useMediaQuery('(max-width:900px)');
  const isLarge = useMediaQuery('(min-width:1200px)');
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <CalendarToday fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Prise de rendez-vous simplifiée",
      description: "Trouvez et réservez en quelques clics un rendez-vous avec le médecin de votre choix, selon vos disponibilités et vos besoins spécifiques.",
      features: ["Recherche par spécialité", "Disponibilités en temps réel", "Confirmation immédiate"]
    },
    {
      icon: <Schedule fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Gestion optimisée du temps",
      description: "Optimisez votre temps et celui des médecins grâce à notre système intelligent de planification et de rappels automatiques.",
      features: ["Rappels SMS/Email", "Gestion des retards", "Temps de consultation adapté"]
    },
    {
      icon: <Cancel fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Annulation et modification facile",
      description: "Modifiez ou annulez vos rendez-vous en toute simplicité, conformément aux politiques des praticiens.",
      features: ["Annulation en ligne", "Modification instantanée", "Historique des changements"]
    },
    {
      icon: <Security fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Sécurité et confidentialité",
      description: "Vos données médicales et personnelles sont protégées par des protocoles de sécurité avancés et un chiffrement de bout en bout.",
      features: ["Authentification forte", "Données chiffrées", "Accès sécurisé"]
    },
    {
      icon: <Payment fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Paiements sécurisés",
      description: "Réglez vos consultations en toute sécurité via notre plateforme de paiement intégrée avec plusieurs options disponibles.",
      features: ["Carte bancaire", "Mobile Money", "Paiement crypté"]
    },
    {
      icon: <Notifications fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Alertes et notifications",
      description: "Recevez des notifications personnalisées pour vos rendez-vous à venir, rappels de préparation et suivis post-consultation.",
      features: ["Alertes personnalisables", "Notifications push", "Suivi médical"]
    },
    {
      icon: <Videocam fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Consultations à distance",
      description: "Accédez à des consultations virtuelles sécurisées avec des professionnels de santé, sans vous déplacer.",
      features: ["Vidéoconférence sécurisée", "Prescriptions électroniques", "Dossier médical partagé"]
    },
    {
      icon: <History fontSize={isSmall ? "medium" : "large"} color="primary" />,
      title: "Historique complet",
      description: "Consultez l'historique de tous vos rendez-vous, prescriptions et documents médicaux en un seul endroit sécurisé.",
      features: ["Archivage automatique", "Accès chronologique", "Export PDF"]
    }
  ];

  return (
    <Container 
      ref={ref}
      sx={{ 
        py: { 
          xs: isExtraSmall ? 6 : 8, 
          md: isPortrait ? 12 : 16 
        }, 
        px: { 
          xs: isExtraSmall ? 2 : 3, 
          sm: 4 
        } 
      }}
    >
      <Box 
        component={motion.div}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        sx={{ 
          textAlign: 'center', 
          mb: { 
            xs: isExtraSmall ? 4 : 6, 
            md: isPortrait ? 8 : 12 
          } 
        }}
      >
        <Typography 
          component={motion.div}
          variants={titleVariants}
          variant="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'custom.title', 
            fontSize: { 
              xs: isExtraSmall ? '1.5rem' : '1.75rem', 
              sm: '2rem', 
              md: isPortrait ? '2rem' : '2.25rem'
            }, 
            mb: 2,
            lineHeight: 1.2
          }}
        >
          Nos Services Complets
        </Typography>
        <Typography 
          component={motion.div}
          variants={titleVariants}
          variant="subtitle1" 
          sx={{ 
            color: '#718096', 
            fontSize: { 
              xs: isExtraSmall ? '0.9rem' : '1rem', 
              md: isPortrait ? '1rem' : '1.125rem' 
            },
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Découvrez comment MedicalChain révolutionne l'expérience médicale pour les patients et les professionnels de santé
        </Typography>
      </Box>
      
      <Grid 
        component={motion.div}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        container 
        spacing={{ 
          xs: isExtraSmall ? 2 : 3, 
          md: isPortrait ? 3 : 4 
        }}
      >
        {services.map((service, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            lg={3} 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card sx={{ 
                height: '100%', 
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', 
                borderRadius: '12px', 
                transition: 'all 0.3s ease',
                border: '1px solid #e2e8f0',
                '&:hover': { 
                  boxShadow: '0 10px 15px -3px rgba(17, 70, 128, 0.2)'
                } 
              }}>
                <CardContent sx={{ 
                  p: { 
                    xs: isExtraSmall ? 2 : 3, 
                    md: isPortrait ? 3 : 4 
                  }, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    mb: isSmall ? 2 : 3,
                    minHeight: isSmall ? '48px' : '64px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 'bold', 
                    color: '#114680', 
                    mb: isSmall ? 1 : 2, 
                    fontSize: { 
                      xs: isExtraSmall ? '1rem' : '1.1rem', 
                      sm: '1.15rem',
                      md: isPortrait ? '1.15rem' : '1.25rem' 
                    },
                    textAlign: 'center',
                    minHeight: isSmall ? 'auto' : '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#4a5568', 
                    fontSize: { 
                      xs: isExtraSmall ? '0.85rem' : '0.9rem', 
                      sm: '0.95rem',
                      md: isPortrait ? '0.95rem' : '1rem' 
                    }, 
                    lineHeight: 1.6,
                    mb: isSmall ? 2 : 3,
                    flexGrow: 1
                  }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ 
                    mt: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 0.5
                  }}>
                    {service.features.map((feature, i) => (
                      <Chip 
                        key={i}
                        label={feature}
                        size="small"
                        sx={{ 
                          m: 0.5, 
                          bgcolor: '#f0f9ff',
                          color: '#114680',
                          fontSize: isSmall ? '0.65rem' : '0.7rem',
                          height: isSmall ? '24px' : '28px'
                        }} 
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;