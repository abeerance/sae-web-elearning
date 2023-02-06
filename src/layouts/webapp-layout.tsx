import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState, type ReactNode } from 'react';
import SideBar from './sidebar';

export default function WebbAppLayout(props: ReactNode) {
  const { data: sessionData } = useSession();
  const [currentCourse, setCurrentCourse] = useState('javascript');
  const sidebarWidth = '120px';

  return (
    <main>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#1A2238',
          padding: `${sessionData?.user ? '15px 15px 15px 0' : '0'}`,
        }}
      >
        <SideBar
          currentCourse={currentCourse}
          setCurrentCourse={setCurrentCourse}
          session={sessionData}
          sidebarWidth={sidebarWidth}
        />
        <Box
          sx={{
            width: `${
              sessionData?.user ? `calc(100% - ${sidebarWidth})` : '100%'
            }`,
            height: '100%',
            borderRadius: `${sessionData?.user ? '30px' : 0}`,
            overflow: 'hidden',
            background: '#F8F8FB',
          }}
        >
          {/* @ts-expect-error: isdefined */}
          {props.children}
        </Box>
      </Box>
    </main>
  );
}
