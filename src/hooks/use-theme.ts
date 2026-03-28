"use client";

import React, { useState, useEffect } from 'react';
import { Theme, getTheme, themes } from '@/lib/theme';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system theme preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mediaQuery.matches);
    }

    // Apply theme to document
    const root = document.documentElement;
    const themeConfig = getTheme(theme);
    
    // Apply CSS variables
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value as string);
    });
    
    // Apply theme class
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
  };

  const value = React.useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme: setThemeState,
    isDark,
    toggleTheme
  }), [theme, isDark, toggleTheme]);

  return React.createElement(
    ThemeContext.Provider,
    { value },
    children
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
