import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { selectTheme } from '@/app/api/appSlice.ts';
import { useAppSelector } from '@/common/hooks';
import { Routing } from '@/common/routing';
import { darkTheme, lightTheme } from '@/common/theme';
import { Header, Footer } from '@/app/ui';

export const App = () => {
  const themeMode = useAppSelector(selectTheme);

  useEffect(() => {
    const resolvedTheme = themeMode || 'light';
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="appContainer">
          <Header />
          <Routing />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};
