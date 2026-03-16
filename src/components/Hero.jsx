import { motion } from "framer-motion";
import { heroStats } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function HeroCard() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-900/95 p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-white/45">Weekly summary</div>
            <div className="text-lg font-semibold text-white">Monday Product Sync</div>
          </div>
          <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
            Ready to share
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
            <div className="text-sm font-medium text-cyan-200">Top priorities</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Finalize homepage messaging for launch</li>
              <li>• Assign onboarding flow revisions</li>
              <li>• Review analytics dashboard feedback</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="text-sm font-medium text-white">Action items</div>
              <p className="mt-2 text-sm text-white/60">
                8 tasks assigned with owners and deadlines.
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="text-sm font-medium text-white">Blockers</div>
              <p className="mt-2 text-sm text-white/60">
                2 items flagged for follow-up this week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200 shadow-lg shadow-cyan-500/10"
            >
              Meeting notes → action-ready summaries
            </motion.div>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Turn scattered meeting notes into clear next steps.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              LaunchPad AI helps small teams convert meeting notes into action items,
              summaries, and weekly updates with a clean, fast workflow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.button
                type="button"
                aria-label="Try LaunchPad AI"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Try LaunchPad AI
              </motion.button>
              <motion.button
                type="button"
                aria-label="Watch demo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Watch demo
              </motion.button>
            </div>

            <div className="mt-8 text-sm text-white/50">
              Trusted by founders, small teams, and client-based businesses.
            </div>
          </motion.div>

          <HeroCard />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60 backdrop-blur md:grid-cols-4 md:text-left"
        >
          {heroStats.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + index * 0.08 }}
              className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
