import { appColors } from '@/colors.js';

export const cssVars = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    // ... autres variables CSS
  },
  getThemeVars: (mode) => ({
    '--color-primary': mode === 'light' ? appColors.primaryBlue : appColors.primaryLightBlue,
    '--color-secondary': mode === 'light' ? appColors.primaryLightBlue : appColors.primaryBlue,
    // ... autres variables dynamiques
  })
};