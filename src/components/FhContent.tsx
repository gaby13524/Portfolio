import {useState} from "react";
import sommerEvent from "@/images/fh/som_ev.jpeg";
import potluck1 from "@/images/fh/potluck1(4).jpg";
import potluck3 from "@/images/fh/potluck3.jpg";
import potluck3_1 from "@/images/fh/potluck3_1.jpg";
import polaroidStud from "@/images/fh/LT_girlies.jpeg";
import polaroidLLM3 from "@/images/fh/LLM3.jpeg";

interface CollagePhoto {
  id: string;
  area: string; // grid-area name
  src: string;
  desc: string;
}

const photos: CollagePhoto[] = [
  {
    id: "sommer",
    area: "sommer",
    src: sommerEvent,
    desc: "Sommer event — the whole institute out in the sun ☀️",
  },
  {
    id: "girls",
    area: "girls",
    src: polaroidStud,
    desc: "The LT girlies 💕",
  },
  {
    id: "llm",
    area: "llm",
    src: polaroidLLM3,
    desc: "LLM project crew — deadline week survivors",
  },
  {
    id: "pot1",
    area: "pot1",
    src: potluck1,
    desc: "Potluck #1 — which I organized, obviously",
  },
  {
    id: "pot31",
    area: "pot31",
    src: potluck3_1,
    desc: "Potluck #3 — the spread before everyone descended",
  },
  {
    id: "pot3",
    area: "pot3",
    src: potluck3,
    desc: "Potluck #3 — aftermath and good company",
  },
];

export default function FhContent() {
  return (
    <div>
      <p className="py-3.5 text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
        <strong>
          Do I get the job done? Maybe. But am I a great addition to the team?
          Absolutely.
        </strong>
        <br />
        <br />I had a lot of fun working there and I learned a lot. I got to
        work on a lot of different projects and I met amazing people. I was also
        the one organizing potlucks, secret santa, and lunch games lmao.
      </p>
    </div>
  );
}

/** Gapless collage in one rounded rectangle. Layout mirrors the original
 *  resizable-panel proportions. Hover any tile for its description overlay. */
export function FhCollage() {
  const [lightbox, setLightbox] = useState<CollagePhoto | null>(null);

  return (
    <>
      <div className="mb-2 text-[10px] font-semibold tracking-wider uppercase text-[var(--ink-faint)]">
        events and friends 🥺 →
      </div>

      <div
        className="grid gap-0 overflow-hidden rounded-2xl"
        style={{
          gridTemplateColumns: "3fr 2fr 2.5fr 2.5fr",
          gridTemplateRows: "110px 110px 95px",
          gridTemplateAreas: `
            "sommer sommer girls pot31"
            "sommer sommer llm   pot31"
            "pot1   pot1   pot3  pot3"
          `,
        }}
      >
        {photos.map((p) => (
          <button
            key={p.id}
            onClick={() => setLightbox(p)}
            style={{gridArea: p.area}}
            className="group relative flex cursor-pointer items-center justify-center overflow-hidden bg-[var(--surface-soft)] text-[10px] text-[var(--ink-faint)] outline outline-1 -outline-offset-1 outline-[var(--line)]"
          >
            <img
              src={p.src}
              className="h-full w-full object-cover"
              alt={p.desc}
            />

            <span className="absolute inset-0 flex items-center justify-center bg-stone-800/70 p-3 text-center text-xs font-semibold leading-snug text-champagne_mist-200 opacity-0 transition-opacity group-hover:opacity-100">
              {p.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[110] flex flex-col items-center justify-center gap-3.5 bg-black/90"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-7 cursor-pointer text-3xl leading-none text-stone-500 hover:text-white"
          >
            ✕
          </button>
          <div className="flex h-[340px] w-[520px] max-w-[90vw] items-center justify-center overflow-hidden rounded-xl bg-stone-800 text-[15px] text-stone-400">
            <img
              src={lightbox.src}
              className="h-full w-full rounded-xl object-contain"
              alt={lightbox.desc}
            />
          </div>
          <div className="text-sm text-stone-400">{lightbox.desc}</div>
        </div>
      )}
    </>
  );
}
