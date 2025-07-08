import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Stack, Box, useTheme, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import MessageIcon from '@mui/icons-material/Message.js';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth.js';

const DoctorCard = ({ name, specialty, hospital, experience, rating, image }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 350,
        m: 1,
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        },
      }}
      component={motion.div}
      whileHover={{ y: -5 }}
    >
      <CardMedia
        component={motion.div}
        whileHover={{ scale: 1.03 }}
        sx={{
          height: 220,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            transition: 'transform 0.5s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
            p: 2,
            color: 'white',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {specialty}
          </Typography>
        </Box>
      </CardMedia>

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: 1,
              px: 1,
              py: 0.5,
              fontSize: '0.75rem',
              fontWeight: 600,
              mr: 1,
            }}
          >
            {rating} ★
          </Box>
          {hospital}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.primary',
            mb: 2,
          }}
        >
          {experience} years of experience
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            '& > *': {
              flex: 1,
            },
          }}
        >
          <Button
            variant="contained"
            size="medium"
            startIcon={<CalendarMonthIcon />}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              py: 1.2,
            }}
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<MessageIcon />}
            sx={{
              borderRadius: 2,
              fontWeight: 600,
              py: 1.2,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            }}
            component={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Message
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;