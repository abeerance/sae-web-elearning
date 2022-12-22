import { Box } from '@mui/material';
import { useState } from 'react';
import { Login } from '../../common/components/session/login';
import { PasswordReset } from '../../common/components/session/password-reset';
import { Register } from '../../common/components/session/register';

export default function Session() {
  const [sessionContext, setSessionContext] = useState<string>('login');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: '500px',
          maxWidth: '400px',
          background: '#eeeeee',
          borderRadius: '15px',
          padding: '3rem',
        }}
      >
        {sessionContext === 'login' ? (
          <Login />
        ) : sessionContext === 'register' ? (
          <Register />
        ) : (
          <PasswordReset />
        )}
      </Box>
    </Box>
  );
}
