import { motion } from "framer-motion";
import { pricingPlans } from "../data/content";

function PricingCard({ name, price, description, items, cta, featured, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`rounded-[2rem] p-8 shadow-lg transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border border-cyan-400/30 bg-cyan-400/10 shadow-cyan-500/10"
          : "border border-white/10 bg-white/5 shadow-black/10"
      }`}
    >
      <div className="text-lg font-semibold text-white">{name}</div>
      <p className="mt-3 text-sm text-white/60">{description}</p>
      <div className="mt-4 text-4xl font-semibold text-white">
        {price}
        <span className="text-lg text-white/50">/mo</span>
      </div>

      <ul className="mt-6 space-y-3 text-white/75">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>

      <motion.button
        type="button"
        aria-label={cta}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-8 rounded-full px-5 py-3 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
          featured
            ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:opacity-90"
            : "border border-white/15 text-white hover:bg-white/5"
        }`}
      >
        {cta}
      </motion.button>
    </motion.article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-2xl text-center"
      >
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          Pricing
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Simple pricing for growing teams.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            items={plan.items}
            cta={plan.cta}
            featured={plan.featured}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
