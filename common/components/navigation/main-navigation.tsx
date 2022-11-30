import { Box, Typography } from '@mui/material';

const MainNavigation = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        height: '100vh',
        width: '30rem',
        position: 'fixed',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      <Typography variant="h1" sx={{ color: '#000' }}>
        test
      </Typography>
    </Box>
  );
};

export default MainNavigation;
