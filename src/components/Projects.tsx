import {useRef, useState, useEffect} from "react";

interface Project {
  id: string;
  title: string;
  status?: string;
  desc: string;
  tags: string[];
  accent: string;
  repo?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    id: "taskbreaker",
    title: "Task Breaker",
    status: "in progress 🚧",
    desc: "Breaking overwhelming tasks into small, doable steps. Because sometimes the hardest part of doing the thing is figuring out where the thing even starts.",
    tags: ["React", "TypeScript"],
    accent: "#e76f51", // burnt_peach
    repo: "https://github.com/gaby13524/task_breaker",
  },
  {
    id: "thesis",
    title: "Master's Thesis",
    desc: "Medical image segmentation with deep learning — building reproducible ML pipelines for multi-modal imaging data. The most rigorous thing I've ever debugged.",
    tags: ["Python", "nnU-Net", "SimpleITK", "Deep learning"],
    accent: "#2a9d8f", // verdigris
    repo: "https://github.com/gaby13524/DrosophilaRegistration-Thesis",
  },
  {
    id: "funfact",
    title: "FunFact",
    desc: "A place to share my fun facts, built to learn Vue coming from React. Contains deliberate redundancy — I wanted to learn how routing and Pinia work, not write the shortest possible App.vue.",
    tags: ["Vue", "Pinia", "Vue Router"],
    accent: "#c55f77", // wine_plum-300
    repo: "https://github.com/gaby13524/FunFact",
  },
];

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // keep the dot indicator in sync when the user swipes/scrolls manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.children[0] as HTMLElement | undefined;
      if (!card) return;
      const step = card.offsetWidth + 16; // card + gap
      setCurrent(Math.round(track.scrollLeft / step));
    };
    track.addEventListener("scroll", onScroll, {passive: true});
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, PROJECTS.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setCurrent(clamped);
  };

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 pt-18">
      <div className="font-bungee mb-2 text-xs tracking-wider uppercase text-burnt_peach-500">
        Projects
      </div>
      <h2 className="mb-2.5 text-4xl font-bold tracking-tight text-(--ink-heading) md:text-5xl">
        Things I've built
      </h2>
      <p className="mb-8 max-w-xl text-base leading-relaxed text-(--ink-soft)">
        A thesis, a work in progress, and a Vue detour. Swipe or use the arrows.
      </p>

      <div className="relative">
        {/* Track: scroll-snap carousel */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              style={{["--ac" as string]: p.accent}}
              className="flex w-[85%] flex-none snap-center flex-col rounded-2xl border-[1.5px] border-(--line) bg-(--surface-card) p-6 transition-colors hover:border-(--ac) sm:w-[70%] md:w-[55%]"
            >
              <div className="mb-1 flex items-baseline gap-2.5">
                <h3 className="text-xl font-bold text-(--ink-heading)">
                  {p.title}
                </h3>
                {p.status && (
                  <span className="rounded-full bg-(--surface-soft) px-2.5 py-0.5 text-[10.5px] font-semibold text-(--ink-soft)">
                    {p.status}
                  </span>
                )}
              </div>
              <div
                className="mb-3 h-1 w-10 rounded-full"
                style={{background: p.accent}}
              />
              <p className="mb-4 flex-1 text-[13.5px] leading-relaxed text-(--ink-soft)">
                {p.desc}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-(--line-strong) bg-(--surface-soft) px-3 py-1 text-[11px] font-medium text-(--ink-soft)"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border-[1.5px] border-(--line-strong) px-4 py-2 text-[13px] font-semibold text-(--ink-heading) transition hover:border-(--ac)"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg px-4 py-2 text-[13px] font-semibold text-white transition"
                    style={{background: p.accent}}
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous project"
          className="absolute top-1/2 -left-3 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-(--line-strong) bg-(--surface-card) text-(--ink-heading) shadow-sm transition hover:border-burnt_peach-300 disabled:cursor-default disabled:opacity-30 md:flex"
        >
          ←
        </button>
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === PROJECTS.length - 1}
          aria-label="Next project"
          className="absolute top-1/2 -right-3 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-(--line-strong) bg-(--surface-card) text-(--ink-heading) shadow-sm transition hover:border-burnt_peach-300 disabled:cursor-default disabled:opacity-30 md:flex"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.title}`}
            className="h-2.5 w-2.5 cursor-pointer rounded-full transition-colors"
            style={{
              background: i === current ? p.accent : "var(--line-strong)",
            }}
          />
        ))}
      </div>

      <div className="mt-5 text-center text-[13px] text-(--ink-faint)">
        more on{" "}
        <a
          href="https://github.com/gaby13524?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-(--ink-soft) underline"
        >
          my GitHub ↗
        </a>
      </div>
    </section>
  );
}
