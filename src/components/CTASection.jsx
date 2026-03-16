const cta = {
  title: "Turn meetings into momentum.",
  text: "LaunchPad AI helps teams turn notes into clear action, without extra friction.",
  buttons: [
    "Start free today",
    "Book a demo",
  ],
};

const gradientClass =
  "pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-10">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-8 text-center md:p-12">
        <div className={gradientClass} />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {cta.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              aria-label="Start free today"
              className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Start free today
            </button>
            <button
              type="button"
              aria-label="Book a demo"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
