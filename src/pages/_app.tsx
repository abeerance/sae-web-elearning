import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import '../i18n/config';
import '../styles/globals.css';
import { api } from '../utils/api';

const webAppTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Outfit', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider theme={webAppTheme}>
      <SessionProvider session={session}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
