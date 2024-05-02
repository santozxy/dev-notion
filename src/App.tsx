import Editor from "./components/Editor";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="bg-gray-200 sm:w-[1000px] mx-auto rounded-lg min-h-[800px] shadow-md border overflow-hidden border-black/20 grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
