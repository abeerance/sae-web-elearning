import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export const DisplayMode = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <Box
      component="button"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginY: '10px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
      }}
      onClick={() => {
        if (isLightMode) {
          setIsLightMode(false);
        } else {
          setIsLightMode(true);
        }
      }}
    >
      {isLightMode ? (
        <Box>
          <RiSunLine size={28} fill="#FFF" />
          <Typography
            sx={{
              color: '#F8F8FC',
              fontSize: '14px',
              marginTop: '5px',
              fontWeight: 300,
            }}
          >
            Light
          </Typography>
        </Box>
      ) : (
        <Box>
          <RiMoonLine size={28} fill="#000" />
          <Typography
            sx={{
              color: '#F8F8FC',
              fontSize: '14px',
              marginTop: '5px',
              fontWeight: 300,
            }}
          >
            Dark
          </Typography>
        </Box>
      )}
    </Box>
  );
};
