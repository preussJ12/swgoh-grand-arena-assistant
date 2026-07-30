export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-lg border border-slate-700">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          SWGOH Grand Arena Assistant
        </h1>

        <label className="block mb-2 font-medium text-slate-200">
          Ally Code
        </label>

        <input
          type="text"
          placeholder="123-456-789"
          className="w-full rounded-md border border-slate-600 bg-slate-700 text-white placeholder-slate-400 p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700 transition">
          Import Roster
        </button>
      </div>
    </main>
  );
}