import { createTheme, ThemeProvider } from '@mui/material';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '../common/i18n/config';
import '../styles/globals.css';

const webAppTheme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider theme={webAppTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}
