const questions = [
  {
    q: 'Can I reuse these sections?',
    a: 'Yes, import and reorder any component from the new page layout.'
  },
  {
    q: 'Where do I edit text?',
    a: 'Start in src/data/content.js for central copy and labels.'
  }
]

export default function FAQ() {
  return (
    <section className="rounded-xl border bg-white p-6">
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="mt-4 grid gap-4">
        {questions.map(({ q, a }) => (
          <details key={q} className="rounded border p-3">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-sm text-slate-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
