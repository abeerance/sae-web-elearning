import { Box, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import AvatarPlaceholder from '../../assets/avatar-placeholder.png';
import { H1Text } from '../../components/common/typography/h1-text';

export default function Profile() {
  const { data: sessionData } = useSession();

  return sessionData ? (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100% - 80px)',
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: '40px',
        overflowY: 'scroll',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          backgroundImage: 'linear-gradient(to bottom, #070A10, #131929)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 40px',
        }}
      >
        <Typography
          sx={{ fontSize: '20px', fontWeight: 600, letterSpacing: '1px' }}
        >
          Profile
        </Typography>
        {sessionData.user.image ? (
          <Box
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              position: 'relative',
              marginY: '15px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={sessionData.user.image}
              alt="Profile Image of the user"
              fill
            />
          </Box>
        ) : (
          <Box sx={{ marginY: '20px' }}>
            <Image
              src={AvatarPlaceholder}
              alt="Placeholder for Avatar Image"
              height={120}
              width={120}
            />
          </Box>
        )}
        <Typography
          sx={{ fontSize: '30px', fontWeight: 700, letterSpacing: '1px' }}
        >
          {sessionData.user.name}
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '1px',
                color: '#FF6A3D',
              }}
            >
              100
            </Typography>
            <Typography>Not Started</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '1px',
                color: '#FF6A3D',
              }}
            >
              10
            </Typography>
            <Typography>Progressing</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 800,
                letterSpacing: '1px',
                color: '#FF6A3D',
              }}
            >
              50
            </Typography>
            <Typography>Completed</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '30px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              width: '150px',
              height: '150px',
              borderRadius: '10px',
              background: '#15433B',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
              Courses
            </Typography>
            <Typography sx={{ fontSize: '30px', fontWeight: 700 }}>
              3
            </Typography>
          </Box>
          <Box
            sx={{
              width: '150px',
              height: '150px',
              borderRadius: '10px',
              background: '#0C2A26',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
              Badges
            </Typography>
            <Typography sx={{ fontSize: '30px', fontWeight: 700 }}>
              20
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '20px',
          backgroundImage: 'linear-gradient(to bottom, #070A10, #131929)',
        }}
      >
        <H1Text text="Gamification badges" />
      </Box>
    </Box>
  ) : (
    <></>
  );
}
