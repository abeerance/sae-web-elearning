import { Typography } from '@mui/material';

type ParagraphProps = {
  text: string;
  hasMargin?: boolean;
};

export const Paragraph = ({ text, hasMargin }: ParagraphProps) => {
  return (
    <Typography
      sx={{
        fontSize: '22px',
        lineHeight: '3rem',
        fontFamily: 'Ubuntu Mono',
        marginY: `${hasMargin ? '1.5rem' : '0.8rem'}`,
      }}
    >
      {text}
    </Typography>
  );
};
