// Central design tokens for the True North site.
// Keeping these in one place makes the UI consistent and easy to evolve.
const theme = {
  colors: {
    navy: '#25335F',
    navyDark: '#1B2647',
    navyLight: '#33457A',
    red: '#EE1C4A',
    redDark: '#CC1640',
    bg: '#F6F8FB',
    surface: '#FFFFFF',
    surfaceMuted: '#F1F4F9',
    text: '#1C2541',
    textMuted: '#5B6378',
    border: '#E6E9F0',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Sora', sans-serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
    pill: '999px',
  },
  shadow: {
    sm: '0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)',
    md: '0 8px 24px rgba(16, 24, 40, 0.08)',
    lg: '0 18px 40px rgba(16, 24, 40, 0.12)',
  },
  transition: '200ms ease-in-out',
  maxWidth: '1200px',
};

export default theme;
