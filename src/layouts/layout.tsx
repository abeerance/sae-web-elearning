import { Box } from '@mui/material';
import { type ReactNode } from 'react';
import { WebAppHead } from '../components/common/header/header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WebAppHead />
      <Box sx={{ width: '100%', height: '100vh', backround: 'red' }}>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
