import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { createLowlight } from "lowlight";
import "highlight.js/styles/tokyo-night-dark.css";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxListBullet,
} from "react-icons/rx";

const lowlight = createLowlight();

lowlight.register({ css });
lowlight.register({ js });
lowlight.register({ ts });
lowlight.register({ html });

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({ lowlight })],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none p-2",
      },
    },
  });
  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w[700px] mx-auto pt-16 prose prose-violet prose-invert"
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg flex overflow-hidden divide-zinc-400 gap-2"
          editor={editor}
        >
          <button
            className=" p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <RxFontBold className="w-4 h-4" />
          </button>
          <button
            className=" p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <RxFontItalic className="w-4 h-4" />
          </button>
          <button
            className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <RxStrikethrough className="w-4 h-4" />
          </button>
          <button
            className=" p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            <RxCode className="w-4 h-4" />
          </button>

          <button
            className=" p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <RxListBullet className="w-4 h-4" />
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
