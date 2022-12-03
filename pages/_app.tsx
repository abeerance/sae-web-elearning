import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
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

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Navigation;

  return (
    <ThemeProvider theme={webAppTheme}>
      {/* @ts-ignore: isAsignable */}
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ThemeProvider>
  );
}
