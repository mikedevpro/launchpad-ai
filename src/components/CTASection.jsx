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
            {cta.buttons.map((label, index) => (
              <button
                key={label}
                className={`rounded-full px-6 py-3 font-medium transition ${
                  index === 0
                    ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 hover:opacity-90"
                    : "border border-white/15 hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
