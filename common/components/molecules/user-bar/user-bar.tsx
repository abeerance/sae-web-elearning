import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import placeholderProfile from '../../../assets/placeholder-profile.webp';

export const UserBar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '7rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '7rem',
          height: '7rem',
          borderRadius: '50px',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image src={placeholderProfile} alt="placeholder profile" fill />
      </Box>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '2rem',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: '1.8rem' }}>
          Hadrian
        </Typography>
        <Typography sx={{ fontSize: '1.8rem' }}>Chio</Typography>
      </Box>
      <Box sx={{ position: 'absolute', right: 0 }}>
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
            stroke="#f8f8f8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};
