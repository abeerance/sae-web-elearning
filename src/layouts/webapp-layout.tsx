import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, type ReactNode } from 'react';
import SideBar from './sidebar';

export default function WebbAppLayout(props: ReactNode) {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const topic = router.asPath.split('/')[1];
  const [currentCourse, setCurrentCourse] = useState(topic);
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
          backgroundImage: 'linear-gradient(to bottom, #0F131F, #020204)',
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
            background: '#020204',
            // backgroundImage: 'linear-gradient(to bottom, #161614, #020204)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: 'calc(100% - 30px)',
              padding: '0 30px 30px',
            }}
          >
            <Box
              sx={{
                height: 'calc(100vh - 90px)',
                margin: '30px 0 0 0',
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
