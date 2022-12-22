import { Box, createTheme, ThemeProvider } from '@mui/material';
import { atom } from 'jotai';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import WebbAppLayout from '../common/components/layout-navigation/webapp-layout';
import {
  AuthContext,
  AuthContextProvider,
} from '../common/context/auth-context';

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

  const signInTesting = useContext(AuthContext);

  useEffect(() => {
    Object.keys(signInTesting.user).length === 0
      ? router.push('/session')
      : router.push('/');
  });

  return (
    <ThemeProvider theme={webAppTheme}>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </ThemeProvider>
  );
}
