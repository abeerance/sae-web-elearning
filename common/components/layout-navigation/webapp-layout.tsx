import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Aside from './aside';
import SideBar from './sidebar';

export default function WebbAppLayout(props: ReactNode) {
  return (
    <main>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          background: '#24331E',
        }}
      >
        <SideBar />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: 'calc(100% - 350px)',
              display: 'flex',
              padding: '1rem',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                padding: '2rem',
                background: '#fff',
                borderRadius: '15px',
                overflowY: 'scroll',
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
              }}
            >
              {/* @ts-ignore: isdefined */}
              <Box>{props.children}</Box>
            </Box>
          </Box>
          <Aside />
        </Box>
      </Box>
    </main>
  );
}
