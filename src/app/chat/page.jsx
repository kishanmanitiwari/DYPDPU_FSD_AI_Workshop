"use client";

import { useState } from "react";
import { askGemini } from "./actions";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const answer = await askGemini(input);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-slate-800/60 backdrop-blur rounded-2xl shadow-xl border border-slate-700 p-6 md:p-8">
        
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
          Next.js × Gemini
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI anything..."
            className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl px-6 py-3 font-medium bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Thinking…" : "Send"}
          </button>
        </div>

        {response && (
          <div className="mt-6 rounded-xl bg-slate-900 border border-slate-700 p-4 text-slate-200 whitespace-pre-wrap leading-relaxed">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
