import { motion } from "framer-motion";
import { steps } from "../data/content";

const sectionIntro = {
  title: "How it works",
  heading: "Simple workflow. Clear outcomes.",
  text: "Designed for teams who want a clean process without extra friction.",
};

const stepClass =
  "flex gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-cyan-500/5";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            {sectionIntro.title}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {sectionIntro.heading}
          </h2>
          <p className="mt-4 text-white/70">{sectionIntro.text}</p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={stepClass}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
                {index + 1}
              </div>
              <p className="leading-7 text-white/70">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
