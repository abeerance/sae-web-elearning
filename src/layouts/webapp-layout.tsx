import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useState, type ReactNode } from 'react';
import SideBar from './sidebar';

export default function WebbAppLayout(props: ReactNode) {
  const { data: sessionData } = useSession();
  const [currentCourse, setCurrentCourse] = useState('javascript');
  const sidebarWidth = '120px';

  return (
    <>
      <Head>
        <title>SAE Web E-Learning</title>
        <meta
          name="description"
          content="E-Learning knowledgebase for SAE web students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          backgroundImage: 'linear-gradient(to bottom, #18041D, #020204)',
        }}
      >
        <SideBar
          currentCourse={currentCourse}
          setCurrentCourse={setCurrentCourse}
          session={sessionData}
          sidebarWidth={sidebarWidth}
        />
        <Box
          component="main"
          sx={{
            width: `${
              sessionData?.user ? `calc(100% - ${sidebarWidth})` : '100%'
            }`,
            borderRadius: `${sessionData?.user ? '20px' : 0}`,
            overflow: 'hidden',
            margin: `${sessionData?.user ? '15px 15px 15px 0' : 0}`,
            backgroundImage: 'linear-gradient(to top, #18041D, #020204)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 'calc(100% - 30px)',
              padding: '0 50px 30px',
            }}
          >
            <Box
              sx={{
                height: '100%',
                margin: '30px 0 0 0',
                overflowY: 'scroll',
              }}
            >
              {/* @ts-expect-error: isdefined */}
              {props.children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
