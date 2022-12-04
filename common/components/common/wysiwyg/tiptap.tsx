import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function Tiptap({ content }: { content: string }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  });

  return <EditorContent editor={editor} />;
}
