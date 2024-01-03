import React, { useState, useEffect } from 'react';
import { StyleProvider } from './ThemeContext';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(theme);
  }, [theme]);

  return (
    <StyleProvider value={{ theme, toggleTheme }}>{children}</StyleProvider>
  );
}

export default ThemeProvider;
