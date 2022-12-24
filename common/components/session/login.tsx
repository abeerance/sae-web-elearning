import { Box, Button, Input, TextField, Typography } from '@mui/material';

export const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <form>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', width: '100px' }}
          >
            <Typography>E-Mail:</Typography>
            <Input />
          </Box>
        </form>
        <TextField
          sx={{ marginBottom: '3rem' }}
          id="email"
          label="E-Mail"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: '2rem' }}
          id="password"
          label="Password"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '3rem',
        }}
      >
        <Typography sx={{ color: '#000' }}>Reset Password</Typography>
        <Typography sx={{ color: '#000' }}>Register</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{ width: '100%', fontSize: '16px', paddingY: '1.2rem' }}
      >
        Login
      </Button>
    </Box>
  );
};
