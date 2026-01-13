import { CssBaseline, ThemeProvider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useRef, useState } from 'react';
import { selectTheme } from '@/app/api/appSlice.ts';
import { useAppSelector } from '@/common/hooks';
import { Routing } from '@/common/routing';
import { darkTheme, lightTheme } from '@/common/theme';
import { Header, Footer } from '@/app/ui';
import { mediaApi } from '@/features/media/api/mediaApi';
import { useLocation } from 'react-router';

export const App = () => {
  const themeMode = useAppSelector(selectTheme);
  const location = useLocation();
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const hadFetchOnRoute = useRef(false);
  const isFetching = useAppSelector((state) =>
    Object.values(state[mediaApi.reducerPath].queries).some(
      (query) => (query as { status?: string }).status === 'pending',
    ),
  );

  useEffect(() => {
    hadFetchOnRoute.current = false;
    setHasLoadedOnce(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isFetching) {
      hadFetchOnRoute.current = true;
      return;
    }

    if (!hasLoadedOnce && hadFetchOnRoute.current) {
      setHasLoadedOnce(true);
    }
  }, [isFetching, hasLoadedOnce]);

  useEffect(() => {
    const resolvedTheme = themeMode || 'light';
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <div
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <div className="appContainer">
          <Header />
          <div className="appLoader">
            {isFetching && hasLoadedOnce ? <LinearProgress /> : null}
          </div>
          <Routing />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};
