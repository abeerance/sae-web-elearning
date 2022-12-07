import { Box, Typography } from '@mui/material';

type H1TextProps = {
  title: string;
  hasMarginBottom?: boolean;
};

export const H1Text = ({ title, hasMarginBottom }: H1TextProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginBottom: `${hasMarginBottom && '3rem'}`,
      }}
    >
      <Typography variant="h1">{title}</Typography>
      <Box
        sx={{
          height: '35px',
          width: '35px',
          background: '#F58700',
          position: 'absolute',
          top: 0,
          left: -10,
          zIndex: -10,
        }}
      />
    </Box>
  );
};
