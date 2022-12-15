import { Typography } from '@mui/material';
import Tiptap from '../wysiwyg/tiptap';

type ParagraphProps = {
  text: string;
  hasMargin?: boolean;
};

export const Paragraph = ({ text, hasMargin }: ParagraphProps) => {
  return (
    <Typography
      className="text-container"
      style={{
        margin: `${hasMargin ? '3rem 0' : '1rem 0'}`,
        fontSize: 'calc(18px + (20 - 18) * ((100vw - 300px) / (1600 - 300)))',
        lineHeight: '3rem',
      }}
    >
      {text}
    </Typography>
  );
};
