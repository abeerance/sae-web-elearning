import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import placeholderProfile from '../../assets/placeholder-profile.webp';

export const UserBar = () => {
  return (
    <Box
      id="user-bar"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <Typography
        sx={{
          alignSelf: 'flex-start',
          fontWeight: 700,
          fontSize: '2rem',
          marginBottom: '20px',
        }}
      >
        Profile
      </Typography>
      <Box
        sx={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid #232323',
          boxShadow: '3px 3px 0 2px #232323',
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
      <Typography sx={{ fontWeight: 500, fontSize: '2.5rem' }}>
        Hadrian Chio
      </Typography>
    </Box>
  );
};
