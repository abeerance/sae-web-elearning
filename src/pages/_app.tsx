import { createTheme, ThemeProvider } from '@mui/material';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import '../common/i18n/config';
import '../styles/globals.css';
import { api } from '../utils/api';

const webAppTheme = createTheme({
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
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
