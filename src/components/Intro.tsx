import { TypeAnimation } from "react-type-animation";

export function Intro() {
  return (
    <header className="flex min-h-[88vh] flex-col items-center justify-center bg-[var(--hero)] px-6 py-14 text-center text-champagne_mist-200 transition-colors">
      <h5 className="mb-2 text-xl font-normal opacity-85">
        Hi there, my name is
      </h5>
      <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-6xl">
        Gabriela Djuhadi.
      </h1>
      <p className="mb-3 max-w-lg text-[17px] leading-relaxed opacity-90">
        I am a Fullstack Developer trying to find myself and my niche in a sea
        of others. I am one of a kind, for better or worse; get to know me if
        you dare (<strong>I need a job</strong>).
      </p>

      <TypeAnimation
        sequence={[
          "Bioinformatician by training.",
          500,
          "Bioinformatician by training. Web developer by (former) part-time job.",
          500,
          "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former personality hire",
          1500,
          "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former ",
          1500,
          "Bioinformatician by training. Web developer by (former) part-time job. Full-time cat-servant and former event organizer.",
        ]}
        speed={50}
        className="font-bitcount mx-auto mt-4 mb-7 min-h-[70px] max-w-2xl text-xl text-champagne_mist-600 md:text-2xl"
      />

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-burnt_peach-500 px-7 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-burnt_peach-600"
        >
          Hire me!
        </a>
        <a
          href="#timeline"
          className="rounded-lg border-[1.5px] border-champagne_mist-500/40 px-7 py-3 text-[15px] font-semibold text-champagne_mist-200 transition hover:-translate-y-0.5 hover:border-champagne_mist-200"
        >
          See my journey ↓
        </a>
      </div>
    </header>
  );
}
