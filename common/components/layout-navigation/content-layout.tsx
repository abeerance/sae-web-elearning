import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Searchbar from '../common/searchbar/searchbar';

export default function ContentLayout(props: ReactNode) {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Searchbar />
      <Box
        sx={{
          position: 'abolute',
          top: '100px',
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {/* @ts-ignore: isdefined */}
        <>{props.children}</>
      </Box>
    </Box>
  );
}
