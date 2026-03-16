export default function Navbar() {
  return (
    <nav className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-6 py-3 backdrop-blur">
      <h1 className="text-xl font-bold">Launchpad AI</h1>
      <button type="button" className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-slate-100">Get Started</button>
    </nav>
  )
}
