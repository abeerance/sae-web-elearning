import Tiptap from '../wysiwyg/tiptap';

type ParagraphProps = {
  text: string;
  hasMargin?: boolean;
};

export const Paragraph = ({ text, hasMargin }: ParagraphProps) => {
  return (
    <div
      className="text-container"
      style={{ margin: `${hasMargin ? '3rem 0' : '1rem 0'}` }}
    >
      <Tiptap content={text} />
    </div>
  );
};
