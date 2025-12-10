import { CssBaseline, ThemeProvider } from '@mui/material';
import { selectTheme } from '@/app/api/appSlice.ts';
import { useAppSelector } from '@/common/hooks';
import { Routing } from '@/common/routing';
import { darkTheme, lightTheme } from '@/common/theme';
import { Header, Footer } from '@/app/ui';

export const App = () => {
  const themeMode = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <div>
        <Header />
        <Routing />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
