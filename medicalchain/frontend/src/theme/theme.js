// ---------- 1. theme.js ----------
import { createTheme } from '@mui/material/styles';
import { appColors } from '@/theme/colors';
import '@/assets/fonts/poppins.css';

const baseTypography = {
  fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  htmlFontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2 },
  h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 },
  h3: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.3 },
  h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
  h5: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4 },
  h6: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 },
};

const createCompleteTheme = (mode) => {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? appColors.primaryBlue : appColors.primaryLightBlue,
        contrastText: appColors.uiWhite,
        light: isLight ? '#4a6b9b' : '#5ab0e0',
        dark: isLight ? '#0a2a56' : '#1a7cb3',
      },
      secondary: {
        main: isLight ? appColors.primaryLightBlue : appColors.primaryBlue,
        contrastText: appColors.uiWhite,
      },
      background: {
        default: isLight ? appColors.lightBackground : appColors.darkBackground,
        paper: isLight ? appColors.lightPaper : appColors.darkPaper,
      },
      text: {
        primary: isLight ? appColors.lightTextPrimary : appColors.darkTextPrimary,
        secondary: isLight ? appColors.lightTextSecondary : appColors.darkTextSecondary,
      },
      error: { main: appColors.error },
      warning: { main: appColors.warning },
      info: { main: appColors.info },
      success: { main: appColors.success },
    },
    typography: {
      ...baseTypography,
      h1: { ...baseTypography.h1, color: isLight ? appColors.titleLight : appColors.titleDark },
      h2: { ...baseTypography.h2, color: isLight ? appColors.titleLight : appColors.titleDark },
      h3: { ...baseTypography.h3, color: isLight ? appColors.titleLight : appColors.titleDark },
      h4: { ...baseTypography.h4, color: isLight ? appColors.titleLight : appColors.titleDark },
      h5: { ...baseTypography.h5, color: isLight ? appColors.titleLight : appColors.titleDark },
      h6: { ...baseTypography.h6, color: isLight ? appColors.titleLight : appColors.titleDark },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            transition: 'all 0.3s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.875rem',
          },
        },
      },
    },
    custom: {
      title: isLight ? appColors.titleLight : appColors.titleDark,
      header: appColors.headerBackground,
      footer: appColors.footerBackground,
      headerText: appColors.uiWhite,
      footerText: appColors.uiWhite,
    },
  });
};

export const lightTheme = createCompleteTheme('light');
export const darkTheme = createCompleteTheme('dark');