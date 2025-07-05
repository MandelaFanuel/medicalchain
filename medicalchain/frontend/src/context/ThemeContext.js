import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@/theme/theme'; // ✅ thème complet

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    try {
      const saved = localStorage.getItem('themeMode');
      return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch {
      return 'light';
    }
  });

  const currentTheme = useMemo(() => themeMode === 'light' ? lightTheme : darkTheme, [themeMode]);

  const toggleTheme = () => {
    setThemeMode(prev => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('themeMode', newMode);
      } catch {}
      document.documentElement.setAttribute('data-theme', newMode);
      return newMode;
    });
  };

  const setTheme = (mode) => {
    if (['light', 'dark'].includes(mode)) {
      setThemeMode(mode);
      try {
        localStorage.setItem('themeMode', mode);
      } catch {}
      document.documentElement.setAttribute('data-theme', mode);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: themeMode, currentTheme, toggleTheme, setTheme, isDarkMode: themeMode === 'dark' }}>
      <MuiThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export default ThemeContext;
