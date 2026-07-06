const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/gaby13524",
    display: "gaby13524",
    icon: "⌨️",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriela-djuhadi",
    display: "Gabriela Djuhadi",
    icon: "💼",
  },
  {
    label: "Email",
    href: "mailto:gabglodj@gmail.com",
    display: "gabglodj@gmail.com",
    icon: "✉️",
  },
];

export function Footer() {
  return (
    <>
      <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-burnt_peach-500 p-6 text-center text-base leading-relaxed text-white">
        Page is still under construction... You can email me for inquiries or
        just to say hi! (<strong>I need a job</strong>)
      </div>

      <footer
        id="contact"
        className="mt-20 bg-[var(--hero)] px-6 py-14 text-center text-champagne_mist-200 transition-colors"
      >
        <div className="font-bungee mb-2.5 text-2xl">say hi 👋</div>
        <p className="mb-7 text-[15px] opacity-85">
          Open to junior / graduate fullstack roles in Berlin.
        </p>

        <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl border-[1.5px] border-champagne_mist-500/25 px-5 py-3 transition hover:-translate-y-0.5 hover:border-champagne_mist-500/60"
            >
              <span aria-hidden="true">{l.icon}</span>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10.5px] tracking-wider uppercase opacity-60">
                  {l.label}
                </span>
                <span className="text-[13.5px] font-semibold text-champagne_mist-600">
                  {l.display}
                </span>
              </span>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
