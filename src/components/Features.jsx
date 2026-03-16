const items = [
  {
    title: 'Fast setup',
    body: 'Spin up a clean page with reusable sections in minutes.'
  },
  {
    title: 'Flexible content',
    body: 'Keep text and labels in one data file for easy updates.'
  },
  {
    title: 'Accessible baseline',
    body: 'Simple semantic sections ready to extend with style and behavior.'
  }
]

export default function Features() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((feature) => (
        <article key={feature.title} className="rounded-xl border bg-white p-5 shadow-sm">
          <h3 className="mb-2 font-semibold">{feature.title}</h3>
          <p className="text-sm text-slate-600">{feature.body}</p>
        </article>
      ))}
    </section>
  )
}
