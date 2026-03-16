import { faqs } from "../data/content";

function FAQItem({ question, answer }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.07]">
      <h3 className="text-lg font-medium text-white">{question}</h3>
      <p className="mt-3 leading-7 text-white/65">{answer}</p>
    </article>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          FAQ
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          A few quick answers.
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
