import { motion } from "framer-motion";
import { features } from "../data/content";

const sectionIntro = {
  title: "Features",
  heading: "Built to keep teams moving.",
  text: "A focused product experience that highlights clarity, speed, and polished team workflows.",
};

const featureClass =
  "group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/10";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          {sectionIntro.title}
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {sectionIntro.heading}
        </h2>
        <p className="mt-4 text-white/70">{sectionIntro.text}</p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={featureClass}
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 transition group-hover:bg-cyan-400/20">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 leading-7 text-white/65">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
