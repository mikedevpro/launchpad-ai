const footerLinks = {
  sections: [
    {
      title: "Product",
      items: ["Features", "Pricing", "FAQ"],
    },
    {
      title: "Company",
      items: ["About", "Contact", "Privacy"],
    },
  ],
};

const footerCopy =
  "A modern SaaS landing page concept focused on clarity, responsiveness, and polished UI.";

const legalText = "© 2026 LaunchPad AI. Crafted as a front-end portfolio project.";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
              LP
            </span>
            <span className="text-xl font-semibold tracking-tight">LaunchPad AI</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
            {footerCopy}
          </p>
        </div>

        {footerLinks.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              {section.items.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/40">
        {legalText}
      </div>
    </footer>
  );
}
