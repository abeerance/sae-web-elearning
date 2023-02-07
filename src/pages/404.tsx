import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1600px',
      }}
    >
      <Box sx={{ maxWidth: '700px' }}>
        <Typography
          sx={{ marginBottom: '30px', fontSize: '60px', fontWeight: 700 }}
        >
          A Dog Ate this Page!
        </Typography>
        <Typography
          sx={{
            fontSize:
              'calc(26px + (28 - 26) * ((100vw - 300px) / (1600 - 300)))',
            lineHeight: '4.25rem',
            marginBottom: '5rem',
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
            boxShadow: '10px 9px 0 2px #EF6A04',
            borderRadius: '10px',
            fontSize: '40px',
            padding: '2rem 4rem',
            cursor: 'pointer',
          }}
        >
          <Link href={'/javascript'}>Back to Home</Link>
        </Box>
      </Box>
      {/* <ImageWrapper
        source={dog}
        description="Dog eating a piece of paper, 404 error page"
        height="500px"
        width="500px"
        fixedWidth
      /> */}
    </Box>
  );
}
