import { Box, Typography } from '@mui/material';

type H1TextProps = {
  text: string;
  hasMarginBottom?: boolean;
  isCenter?: boolean;
};

export const H1Text = ({ text, hasMarginBottom, isCenter }: H1TextProps) => {
  return (
    <Box sx={{ marginBottom: `${hasMarginBottom ? '20px' : 0}` }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: '50px',
          fontWeight: 500,
          textAlign: `${isCenter ? 'center' : 'left'}`,
          letterSpacing: '1px',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
