import { Box, Typography } from '@mui/material';

type H1TextProps = {
  title: string;
  boxWidth: number;
  hasMarginBottom?: boolean;
};

export const H1Text = ({ title, boxWidth, hasMarginBottom }: H1TextProps) => {
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
          height: '10px',
          width: `${boxWidth}px`,
          background: '#F58700',
          position: 'absolute',
          bottom: 5,
          left: -10,
          zIndex: -10,
        }}
      />
    </Box>
  );
};
