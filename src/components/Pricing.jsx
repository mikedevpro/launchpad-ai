export default function Pricing() {
  return (
    <section className="rounded-xl border bg-white p-6">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <p className="mt-2 text-sm text-slate-600">Starter pricing cards can be replaced with real plans once your product data is ready.</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {['Starter', 'Pro', 'Enterprise'].map((tier) => (
          <div key={tier} className="rounded-lg border p-4">
            <h3 className="font-semibold">{tier}</h3>
            <p className="mt-2 text-sm">$0 / $29 / $99</p>
          </div>
        ))}
      </div>
    </section>
  )
}
