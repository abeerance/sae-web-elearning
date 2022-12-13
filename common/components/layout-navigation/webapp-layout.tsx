import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import SideBar from './sidebar';

const course = atom('home');

export default function WebbAppLayout(props: ReactNode) {
  const [currentCourse, setCurrentCourse] = useAtom(course);

  const router = useRouter();

  return (
    <main>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          background: '#232227',
        }}
      >
        <SideBar
          currentCourse={currentCourse}
          setCurrentCourse={setCurrentCourse}
        />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            borderRadius: '1rem',
            overflow: 'hidden',
            padding: '1rem',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              padding: '2rem 4rem',
              background: '#fff',
              borderRadius: '10px',
              overflowY: 'scroll',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            }}
          >
            {/* @ts-ignore: isdefined */}
            <Box>{props.children}</Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
