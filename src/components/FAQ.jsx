import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data/content";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.article
      layout
      className="rounded-[2rem] border border-white/10 bg-white/5 p-3 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.07]"
    >
      <button
        type="button"
        aria-label={question}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-[1.25rem] px-3 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/10 text-xl text-cyan-200"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-3 pb-3 leading-7 text-white/65">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="text-center"
      >
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          FAQ
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          A few quick answers.
        </h2>
      </motion.div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
          />
        ))}
      </div>
    </section>
  );
}
