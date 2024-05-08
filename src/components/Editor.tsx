import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

import { StarterKit } from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { createLowlight } from "lowlight";
import "highlight.js/styles/tokyo-night-dark.css";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxListBullet,
  RxActivityLog,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";

const lowlight = createLowlight();

lowlight.register({ css });
lowlight.register({ js });
lowlight.register({ ts });
lowlight.register({ html });

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      TaskList.configure({
        HTMLAttributes: {
          class: "flex flex-col items-start p-2 border-l-4 border-zinc-400 ",
        },
      }),
      TaskItem.configure({
        nested: true,
        HTMLAttributes: {
          class: "p-1 accent-purple-500 flex items-center gap-2",
        },
      }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });
  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[1200px] mx-auto pt-16 prose prose-violet prose-invert"
      />
      {editor && (
        <FloatingMenu
          className="bg-zinc-700 shadow-xl border text-white border-zinc-600 gap-1 shadow-black/20 rounded-lg flex flex-col py-2 px-1"
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writting with plain text
              </span>
            </div>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              className="w-12 border border-zinc-600 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writting with plain text
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg flex divide-x divide-zinc-400"
          editor={editor}
        >
          {/* <BubbleButton
            onClick={() => editor.chain().focus().createParagraphNear().run()}
          >
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton> */}

          <BubbleButton>
            <input
              type="color"
              className="w-4 h-4 rounded-md border-0 outline-none"
              onInput={(event) =>
                editor
                  .chain()
                  .focus()
                  .setColor((event.target as HTMLInputElement).value)
                  .run()
              }
              value={editor.getAttributes("textStyle").color}
              data-testid="setColor"
            />
          </BubbleButton>

          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              data-active={editor.isActive("list")}
            >
              <RxListBullet className="w-4 h-4" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleTaskList().run()}
            >
              <RxActivityLog className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
