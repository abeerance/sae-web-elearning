import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { atom } from 'jotai';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import WebbAppLayout from '../common/components/layout-navigation/webapp-layout';

import '../common/i18n/config';
import { Page } from '../common/types/page';
import '../styles/globals.css';

const webAppTheme = createTheme({
  typography: {
    fontFamily: ['Outfit', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

type Props = AppProps & {
  Component: Page;
};

export const collapsed = atom(false);

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? WebbAppLayout;
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const checkAuthentification = () => {
      !isAuthenticated ? router.push('/session') : router.push('/');
    };
    checkAuthentification();
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={webAppTheme}>
      <Auth0Provider
        domain="dev-63ab4rto.eu.auth0.com"
        clientId="bjoTKgW288aNwle7jMbmhZJNUHJrK7Hd"
      >
        {/* @ts-ignore: isAsignable */}
        <Layout>
          {getLayout(
            <Box
              sx={{
                height: '100%',
                width: '100%',
                overflowY: 'scroll',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Component {...pageProps} />
            </Box>,
          )}
        </Layout>
      </Auth0Provider>
    </ThemeProvider>
  );
}
