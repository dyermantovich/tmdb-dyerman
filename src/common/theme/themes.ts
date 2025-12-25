import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0F766E' },
    secondary: { main: '#DB2777' },
    background: {
      default: '#F7FAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0B1220',
      secondary: '#334155',
    },
    divider: '#E2E8F0',
    success: { main: '#16A34A' },
    warning: { main: '#CA8A04' },
    error: { main: '#DC2626' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2DD4BF' },
    secondary: { main: '#F472B6' },
    background: {
      default: '#061418',
      paper: '#0B1F24',
    },
    text: {
      primary: '#E6F6F5',
      secondary: '#9FB7B6',
    },
    divider: '#16333A',
    success: { main: '#22C55E' },
    warning: { main: '#FBBF24' },
    error: { main: '#FCA5A5' },
  },
});
