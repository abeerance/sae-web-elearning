import { Box, Typography } from '@mui/material';

export default function Searchbar() {
  return (
    <Box
      sx={{
        height: '5rem',
        width: '100%',
        background: '#fff',
        borderRadius: '15px',
        border: '1px solid #232323',
        boxShadow: '3px 3px 0 2px #232323',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '2rem' }}>Search</Typography>
    </Box>
  );
}
