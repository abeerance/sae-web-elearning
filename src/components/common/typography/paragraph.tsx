import { Typography } from '@mui/material';

type ParagraphProps = {
  text: string;
  hasMarginBottom?: boolean;
};

export const Paragraph = ({ text, hasMarginBottom }: ParagraphProps) => {
  return (
    <Typography
      variant="body1"
      sx={{
        marginBottom: `${hasMarginBottom ? '20px' : 0}`,
        fontSize: '22px',
        letterSpacing: '1px',
      }}
    >
      {text}
    </Typography>
  );
};
