import { Box, Typography } from '@mui/material';

type H1TextProps = {
  title: string;
  boxWidth: number;
};

export const H1Text = ({ title, boxWidth }: H1TextProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Box
        sx={{
          height: '10px',
          width: `${boxWidth}px`,
          background: '#F58700',
          position: 'absolute',
          bottom: 2,
          left: -10,
          zIndex: -10,
        }}
      />
    </Box>
  );
};
