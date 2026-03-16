import { pricingPlans } from "../data/content";

const sectionIntro = {
  title: "Pricing",
  heading: "Simple pricing for growing teams.",
};

const getCardClass = (featured) =>
  `rounded-[2rem] p-8 shadow-lg transition duration-300 hover:-translate-y-1 ${
    featured
      ? "border border-cyan-400/30 bg-cyan-400/10 shadow-cyan-500/10"
      : "border border-white/10 bg-white/5 shadow-black/10"
  }`;

const getButtonClass = (featured) =>
  `mt-8 rounded-full px-5 py-3 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
    featured
      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-90"
      : "border border-white/15 text-white hover:bg-white/5"
  }`;

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          {sectionIntro.title}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {sectionIntro.heading}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className={getCardClass(plan.featured)}>
            <div className="text-lg font-semibold text-white">{plan.name}</div>
            <p className="mt-3 text-sm text-white/60">{plan.description}</p>
            <div className="mt-4 text-4xl font-semibold text-white">
              {plan.price}
              <span className="text-lg text-white/50">/mo</span>
            </div>

            <ul className="mt-6 space-y-3 text-white/75">
              {plan.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <button type="button" aria-label={plan.cta} className={getButtonClass(plan.featured)}>
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
