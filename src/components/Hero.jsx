export default function Hero() {
  return (
    <section className="grid gap-4 rounded-2xl bg-slate-900 px-8 py-12 text-white">
      <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Welcome</p>
      <h2 className="text-4xl font-black">Build faster with a cleaner landing structure</h2>
      <p className="max-w-xl text-slate-200">
        Use this page as the starting point for your sections and replace the copy with your product story.
      </p>
      <div className="flex gap-3">
        <a href="#" className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold">Start now</a>
        <a href="#" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold">Learn more</a>
      </div>
    </section>
  )
}
