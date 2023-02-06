import { Typography } from '@mui/material';

type ParagraphProps = {
  text: string;
  hasMarginBottom?: boolean;
};

export const Paragraph = ({ text, hasMarginBottom }: ParagraphProps) => {
  return (
    <Typography sx={{ marginBottom: `${hasMarginBottom ? '20px' : 0}` }}>
      {text}
    </Typography>
  );
};
