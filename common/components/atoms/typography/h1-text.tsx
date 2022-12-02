import { Box, Typography } from '@mui/material';

type H1TextProps = {
  title: string;
};

export const H1Text = ({ title }: H1TextProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '40px',
          fontWeight: 700,
          zIndex: 100,
          fontStyle: 'italic',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: '10px',
          width: '500px',
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
