import { Box, createTheme, ThemeProvider } from '@mui/material';
import { atom, useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { CollapseButton } from '../common/components/common/buttons/collapse-button';
import Navigation from '../common/components/layout-navigation/navigation';
import '../common/i18n/config';
import { Page } from '../common/types/page';
import '../styles/globals.css';

const webAppTheme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

type Props = AppProps & {
  Component: Page;
};

export const sidebarWidth = atom(350);
export const collapsed = atom(false);

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Navigation;
  const [width] = useAtom(sidebarWidth);
  const [contentWidth, setContentWidth] = useState<number>();
  const [navCollapsed] = useAtom(collapsed);

  useEffect(() => {
    const setContentSize = () => {
      setContentWidth(window.innerWidth - width);
    };
    if (!navCollapsed) {
      setContentSize();
    }
  }, [navCollapsed, width]);

  return (
    <ThemeProvider theme={webAppTheme}>
      {/* @ts-ignore: isAsignable */}
      <Layout>
        {getLayout(
          <Box
            sx={{
              height: '100vh',
              width: `${navCollapsed ? '100vw' : `${contentWidth}px`}`,
              padding: '5rem 7rem',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <CollapseButton />
            <Component {...pageProps} />
          </Box>,
        )}
      </Layout>
    </ThemeProvider>
  );
}
