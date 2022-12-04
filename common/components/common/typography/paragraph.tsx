type ParagraphProps = {
  text: string;
  hasMargin?: boolean;
};

export const Paragraph = ({ text, hasMargin }: ParagraphProps) => {
  return (
    <p style={{ margin: `${hasMargin ? '3rem 0' : '0.8rem 0'}` }}>{text}</p>
  );
};
