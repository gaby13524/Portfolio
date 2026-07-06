import {useState} from "react";
import {TimelineCard, TimelineDot, SplitDot} from "./TimelineCard";
import FhContent, {FhCollage} from "./FhContent";

const ACCENTS = {
  fokus: "#e76f51", // burnt_peach
  msc: "#2a9d8f", // verdigris
  gap: "#c55f77", // wine_plum-300
  bsc: "#5fbcc2", // stormy_teal-300
};

export function Experience() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const isOpen = (id: string) => openIds.has(id);

  return (
    <section id="timeline" className="mx-auto max-w-4xl px-6 pt-18">
      <div className="font-bungee mb-2 text-xs tracking-wider uppercase text-burnt_peach-500">
        Timeline
      </div>
      <h2 className="mb-2.5 text-4xl font-bold tracking-tight text-[var(--ink-heading)] md:text-5xl">
        Checkpoints of my life so far
      </h2>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">
        It may not be the most professional or complete, but it encompasses the
        memories that still stand out to me to this day.
      </p>

      <div className="relative flex flex-col gap-2.5">
        {/* spine */}
        <div className="absolute top-0 bottom-0 left-1/2 z-0 w-0.5 -translate-x-1/2 bg-[var(--line-strong)] max-md:left-2 max-md:translate-x-0" />

        {/* Concurrent: working-while-studying + MSc — split dot */}
        <div className="relative flex items-start gap-0 max-md:flex-col max-md:gap-2.5">
          <div className="relative z-[1] mr-auto w-[calc(50%-26px)] max-md:ml-8 max-md:w-[calc(100%-2rem)]">
            <TimelineCard
              entry={{
                id: "fokus",
                date: "2022 — 2024",
                title: "Fraunhofer FOKUS",
                role: "Fullstack developer (part-time)",
                accent: ACCENTS.fokus,
                chips: [
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                ],
                children: (
                  <>
                    <FhContent />
                    <FhCollage />
                  </>
                ),
              }}
              open={isOpen("fokus")}
              onToggle={toggle}
            />
          </div>

          <SplitDot
            topColor={ACCENTS.fokus}
            bottomColor={ACCENTS.msc}
            active={isOpen("fokus2") || isOpen("msc")}
          />

          <div className="relative z-[1] ml-auto w-[calc(50%-26px)] max-md:ml-8 max-md:w-[calc(100%-2rem)]">
            <TimelineCard
              entry={{
                id: "msc",
                date: "2022 — 2024",
                title: "MSc Bioinformatics",
                role: "Freie Universität Berlin",
                accent: ACCENTS.msc,
                chips: ["Python", "pandas", "scikit-learn", "Medical imaging"],
                children: (
                  <p className="py-3.5 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    Computational biology with a heavy data focus — ML
                    pipelines, medical imaging analysis, and learning to think
                    rigorously about messy real-world data.
                  </p>
                ),
              }}
              open={isOpen("msc")}
              onToggle={toggle}
            />
          </div>
        </div>

        {/* Gap — right */}
        <div className="relative flex items-start max-md:flex-col">
          <TimelineDot accent={ACCENTS.gap} active={isOpen("gap")} />
          <div className="relative z-[1] ml-auto w-[calc(50%-26px)] max-md:ml-8 max-md:w-[calc(100%-2rem)]">
            <TimelineCard
              entry={{
                id: "gap",
                date: "2020 — 2021",
                title: "Gap? What Gap?",
                role: "Covid graduate era",
                accent: ACCENTS.gap,
                chips: ["Meta Ads", "Marketing (all of it)", "Resilience"],
                children: (
                  <p className="py-3.5 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    I graduated during covid 😭 It was very hard to find a job
                    and I moved back to Indo. One year of unsuccessfully trying
                    out Forex trading, and then I worked as the entire marketing
                    department for a startup product — got them their first 5–10
                    customers, starting from zero. LMAO.
                  </p>
                ),
              }}
              open={isOpen("gap")}
              onToggle={toggle}
            />
          </div>
        </div>

        {/* Bachelor — left */}
        <div className="relative flex items-start max-md:flex-col">
          <div className="relative z-[1] mr-auto w-[calc(50%-26px)] max-md:ml-8 max-md:w-[calc(100%-2rem)]">
            <TimelineCard
              entry={{
                id: "bsc",
                date: "— 2020",
                title: "Baccalaureate",
                role: "UCLA",
                accent: ACCENTS.bsc,
                children: (
                  <p className="py-3.5 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    Ah, the good ol' days. I had a lot of fun but somehow this
                    memory of mine is fading quickly. It lowkey feels like a
                    dream now. It felt like home — but for some reason it had to
                    end.
                  </p>
                ),
              }}
              open={isOpen("bsc")}
              onToggle={toggle}
            />
          </div>
          <TimelineDot accent={ACCENTS.bsc} active={isOpen("bsc")} />
        </div>
      </div>
    </section>
  );
}
