import {Editor} from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="bg-zinc-800 sm:w-[1000px] mx-auto rounded-lg min-h-[800px] shadow-md border overflow-hidden border-black/20 grid grid-cols-[12rem_1fr]">
        <aside className="bg-zinc-900 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <span className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500"></span>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
