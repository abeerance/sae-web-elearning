import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import dog from '../assets/404-img.png';
import { ImageWrapper } from '../components/common/images/image-wrapper';

export default function Custom404() {
  const router = useRouter();
  const currentRoute = router.asPath.split('/')[1];
  const [redirectRoute, setRedirectRoute] = useState<string>();

  useEffect(() => {
    if (
      currentRoute === 'profile' ||
      currentRoute === 'javascript' ||
      currentRoute === 'typescript' ||
      currentRoute === 'react'
    ) {
      setRedirectRoute(`/${currentRoute}`);
    } else {
      setRedirectRoute('/');
    }
  }, [currentRoute, setRedirectRoute]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        backgroundImage: 'linear-gradient(to bottom, #0E1320, #020204)',
      }}
    >
      <Box
        sx={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            marginBottom: '30px',
            fontSize: '40px',
            fontWeight: 700,
            alignSelf: 'flex-start',
          }}
        >
          Oh no! A Dog Ate this Page!
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            marginBottom: '40px',
            alignSelf: 'flex-start',
          }}
        >
          Your dog is cute but honestly a menace. Where are my shoes? Where is
          my graduation certificate? Where is the chocolate cake I baked for my
          Aunt’s birthday? And why did you take your dog to the vet on that same
          Thursday?!
        </Typography>
        <Box
          component="button"
          sx={{
            border: 'none',
            borderRadius: '9999px',
            padding: '20px 30px',
            cursor: 'pointer',
            background:
              'linear-gradient(201deg, rgba(255,106,61,1) 0%, rgba(154,65,38,1) 100%)',
            alignSelf: 'flex-start',
          }}
        >
          <Link href={`${redirectRoute}`}>
            <Typography
              sx={{
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: 500,
                color: '#f8f8f8',
              }}
            >
              {redirectRoute === '/'
                ? 'Back to home'
                : 'Back to Module Overview'}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: '30%' }}>
        <ImageWrapper
          source={dog}
          description="Dog eating a piece of paper, 404 error page"
          height="350px"
          width="350px"
          fixedWidth
        />
      </Box>
    </Box>
  );
}
