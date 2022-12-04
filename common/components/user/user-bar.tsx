import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import placeholderProfile from '../../assets/placeholder-profile.webp';

export const UserBar = () => {
  return (
    <Box
      id="user-bar"
      sx={{
        width: '100%',
        height: '7rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        paddingX: '40px',
        zIndex: 20,
        bottom: 30,
        background: ' #2C2C2C',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '7rem',
            height: '7rem',
            borderRadius: '50px',
            position: 'relative',
            overflow: 'hidden',
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
      </Box>
      <Box>
        <RiLogoutCircleRLine size={30} />
      </Box>
    </Box>
  );
};
