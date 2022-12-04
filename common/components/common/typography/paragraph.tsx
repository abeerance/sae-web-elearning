import Tiptap from '../wysiwyg/tiptap';

type ParagraphProps = {
  text: string;
  hasMargin?: boolean;
};

export const Paragraph = ({ text, hasMargin }: ParagraphProps) => {
  return (
    <div style={{ margin: `${hasMargin ? '3rem 0' : '2rem 0'}` }}>
      <Tiptap content={text} />
    </div>
  );
};
