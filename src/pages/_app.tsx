import { ApolloProvider } from '@apollo/client';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import apolloClient from '../../apollo-client';
import WebbAppLayout from '../layouts/webapp-layout';
import '../styles/globals.css';
import { Page } from '../types/page';

type Props = AppProps & {
  Component: Page;
  session: Session | null;
};

const webAppTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Outfit', 'sans-serif'].join(','),
  },
});

export default function MyApp({ Component, pageProps, session }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={webAppTheme}>
        <CssBaseline>
          <ApolloProvider client={apolloClient}>
            {/* @ts-expect-error: is assignable */}
            <WebbAppLayout>
              {getLayout(
                <Box
                  sx={{
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Component {...pageProps} />
                </Box>,
              )}
            </WebbAppLayout>
          </ApolloProvider>
        </CssBaseline>
      </ThemeProvider>
    </SessionProvider>
  );
}
