import { Box, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import Image from 'next/image';
import React, { RefObject, useLayoutEffect } from 'react';
import { collapsed } from '../../../pages/_app';
import placeholderProfile from '../../assets/placeholder-profile.webp';

type UserBarProps = {
  userBarRef: RefObject<HTMLDivElement>;
  setUserBarHeight: React.Dispatch<React.SetStateAction<number>>;
};

export const UserBar = ({ userBarRef, setUserBarHeight }: UserBarProps) => {
  const [navCollapsed] = useAtom(collapsed);

  useLayoutEffect(() => {
    if (userBarRef.current !== null) {
      setUserBarHeight(userBarRef.current.clientHeight);
    }
  }, [setUserBarHeight, userBarRef]);

  return (
    <Box
      id="user-bar"
      sx={{
        width: '100%',
        display: `${navCollapsed ? 'none' : 'flex'}`,
        flexDirection: 'column',
        alignItems: 'center',
        margin: '35px 0 20px',
      }}
      ref={userBarRef}
    >
      <Box
        sx={{
          width: '10rem',
          height: '10rem',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '4px 3px 0 2px #EF6A04',
          marginBottom: '15px',
        }}
      >
        <Image
          src={placeholderProfile}
          alt="placeholder profile"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Box>
      <Typography
        sx={{ fontWeight: 500, fontSize: '2.5rem', color: '#f8f8f8' }}
      >
        Hadrian Chio
      </Typography>
    </Box>
  );
};
