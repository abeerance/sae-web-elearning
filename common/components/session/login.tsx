import { Box, Button, TextField } from '@mui/material';

export const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxHeight: '350px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField id="email" label="E-Mail" variant="outlined" />
        <TextField id="password" label="Password" variant="outlined" />
      </Box>
      <Button variant="contained">Login</Button>
    </Box>
  );
};
