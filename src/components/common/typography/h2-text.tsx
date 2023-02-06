import { Box, Typography } from '@mui/material';

type H2TextProps = {
  text: string;
  hasMarginBottom?: boolean;
};

export const H2Text = ({ text, hasMarginBottom }: H2TextProps) => {
  return (
    <Box sx={{ marginBottom: `${hasMarginBottom ? '20px' : 0}` }}>
      <Typography variant="h2" sx={{ fontSize: '30px', fontWeight: 500 }}>
        {text}
      </Typography>
    </Box>
  );
};
