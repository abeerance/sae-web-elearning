import { Typography } from '@mui/material';

type ParagraphProps = {
  text: string;
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return (
    <Typography
      sx={{ fontSize: '20px', lineHeight: '3rem', marginY: '1.5rem' }}
    >
      {text}
    </Typography>
  );
};
