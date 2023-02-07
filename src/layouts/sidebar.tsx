import { Box, Typography } from '@mui/material';
import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineLogout } from 'react-icons/md';
import { SiJavascript, SiReact, SiTypescript } from 'react-icons/si';
import { SaeLogo } from '../components/common/sae-logo/sae-logo';

import { DisplayMode } from './display-mode';

type SidebarProps = {
  currentCourse: string | undefined;
  setCurrentCourse: React.Dispatch<React.SetStateAction<string | undefined>>;
  session: Session | null;
  sidebarWidth: string;
};

export default function SideBar({
  currentCourse,
  setCurrentCourse,
  session,
  sidebarWidth,
}: SidebarProps) {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1];

  return (
    <Box
      sx={{
        width: `${session?.user ? sidebarWidth : 0}`,
        height: '100%',
        backgroundImage: 'linear-gradient(to bottom, #0F131F, #020204)',
        display: `${session?.user ? 'flex' : 'none'}`,
        flexDirection: 'column',
        padding: '30px 20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box>
        <SaeLogo />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box
          component="button"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (currentCourse !== 'profile' && setCurrentCourse) {
              setCurrentCourse('profile');
              router.push('/profile');
            }
          }}
        >
          <FiUser
            size={25}
            stroke={currentRoute === 'profile' ? '#FF6A3D' : '#F8F8FC'}
          />
          <Typography
            sx={{
              color: `${currentRoute === 'profile' ? '#FF6A3D' : '#F8F8FC'}`,
              marginTop: '5px',
              fontSize: '14px',
              fontWeight: `${currentRoute === 'profile' ? 400 : 300}`,
            }}
          >
            Profile
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (currentCourse !== 'javascript' && setCurrentCourse) {
              setCurrentCourse('javascript');
              router.push('/javascript');
            }
          }}
        >
          <SiJavascript
            size={25}
            fill={currentRoute === 'javascript' ? '#FF6A3D' : '#F8F8FC'}
          />
          <Typography
            sx={{
              color: `${currentRoute === 'javascript' ? '#FF6A3D' : '#F8F8FC'}`,
              marginTop: '5px',
              fontSize: '14px',
              fontWeight: `${currentRoute === 'javascript' ? 400 : 300}`,
            }}
          >
            JavaScript
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (currentCourse !== 'typescript' && setCurrentCourse) {
              setCurrentCourse('typescript');
              router.push('/typescript');
            }
          }}
        >
          <SiTypescript
            size={25}
            fill={currentRoute === 'typescript' ? '#FF6A3D' : '#F8F8FC'}
          />
          <Typography
            sx={{
              color: `${currentRoute === 'typescript' ? '#FF6A3D' : '#F8F8FC'}`,
              marginTop: '5px',
              fontSize: '14px',
              fontWeight: `${currentRoute === 'typescript' ? 400 : 300}`,
            }}
          >
            TypeScript
          </Typography>
        </Box>
        <Box
          component="button"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (currentCourse !== 'react' && setCurrentCourse) {
              setCurrentCourse('react');
              router.push('/react');
            }
          }}
        >
          <SiReact
            size={25}
            fill={currentRoute === 'react' ? '#FF6A3D' : '#F8F8FC'}
          />
          <Typography
            sx={{
              color: `${currentRoute === 'react' ? '#FF6A3D' : '#F8F8FC'}`,
              fontSize: '14px',
              marginTop: '5px',
              fontWeight: `${currentRoute === 'react' ? 400 : 300}`,
            }}
          >
            React
          </Typography>
        </Box>
        <DisplayMode />
      </Box>
      <Box
        component="button"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginY: '10px',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          signOut();
          router.push('/');
          window.location.reload();
        }}
      >
        <MdOutlineLogout size={25} fill="#F8F8FC" />
        <Typography
          sx={{ color: '#F8F8FC', marginTop: '5px', fontSize: '14px' }}
        >
          Logout
        </Typography>
      </Box>
    </Box>
  );
}
