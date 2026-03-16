import { testimonials } from "../data/content";

function TestimonialCard({ name, role, quote }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-cyan-500/10">
      <p className="leading-7 text-white/75">“{quote}”</p>
      <div className="mt-6">
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm text-white/50">{role}</div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200/80">
          Testimonials
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Built for teams that want clarity.
        </h2>
      </div>

      <div className="mt-10 rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/8 to-cyan-400/10 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
