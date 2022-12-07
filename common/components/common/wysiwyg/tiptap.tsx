import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

export default function Tiptap({ content }: { content: string }) {
  const [editable] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit],
    editable,
    content: content,
  });

  return <EditorContent editor={editor} />;
}
