import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-6">
      <div className="w-full max-w-xl text-center bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
        
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Chat. Simple. Fast.
        </h1>

        <p className="text-lg text-white/90 mb-10 leading-relaxed">
          Talk to AI instantly.  
          Sign in to save chats, or chat for free with no memory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="px-8 py-4 rounded-xl bg-white text-indigo-700 font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
          >
            Sign in
          </Link>

          <Link
            href="/chat"
            className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-indigo-700 transition"
          >
            Chat for free (no memory)
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/70">
          No signup required for free chat.
        </p>
      </div>
    </div>
  );
}
