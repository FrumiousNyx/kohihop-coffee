// Theme utilities for Kohihop website

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const lightTheme: ThemeConfig = {
  colors: {
    primary: '#f59e0b',
    secondary: '#d97706',
    background: '#ffffff',
    surface: '#f8fafc',
    text: {
      primary: '#111827',
      secondary: '#374151',
      muted: '#9ca3af',
      inverse: '#f9fafb',
    },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px 0 rgba(0, 0, 0, 0.1)',
  },
};

export const darkTheme: ThemeConfig = {
  colors: {
    primary: '#f59e0b',
    secondary: '#d97706',
    background: '#0f172a',
    surface: '#1e293b',
    text: {
      primary: '#f9fafb',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
      inverse: '#111827',
    },
  shadows: {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px 0 rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px 0 rgba(0, 0, 0, 0.3)',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  system: lightTheme, // Default to light for system
};

export function getTheme(theme: Theme): ThemeConfig {
  return themes[theme] || lightTheme;
}
