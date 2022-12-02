import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../common/i18n/config';
import '../styles/globals.css';

const webAppTheme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={webAppTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
