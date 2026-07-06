import { type ReactNode } from "react";

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  role: string;
  accent: string; // hex color, e.g. "#e76f51"
  chips?: string[];
  children?: ReactNode; // description + extra content (e.g. photo collage)
}

interface TimelineCardProps {
  entry: TimelineEntry;
  open: boolean;
  onToggle: (id: string) => void;
}

export function TimelineCard({ entry, open, onToggle }: TimelineCardProps) {
  return (
    <div
      style={{ ["--ac" as string]: entry.accent }}
      className={`cursor-pointer overflow-hidden rounded-xl border-[1.5px] bg-[var(--surface-card)] transition-[border-color,box-shadow] hover:shadow-md ${
        open ? "border-[var(--ac)]" : "border-[var(--line)] hover:border-[var(--line-strong)]"
      }`}
    >
      <button
        onClick={() => onToggle(entry.id)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-3.5 text-left"
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold tracking-wider uppercase text-[var(--ac)]">
            {entry.date}
          </span>
          <span className="text-[15px] font-bold text-[var(--ink-heading)]">
            {entry.title}
          </span>
          <span className="text-[12.5px] text-[var(--ink-faint)]">
            {entry.role}
          </span>
        </div>
        <span
          className={`text-lg leading-none text-[var(--ink-faint)] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {/* grid-rows animation: no max-height hacks */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--line)] px-4 pb-4 text-left">
            {entry.children}
            {entry.chips && entry.chips.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {entry.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--line-strong)] bg-[var(--surface-soft)] px-3 py-1 text-[11px] font-medium text-[var(--ink-soft)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Round dot on the center spine — always filled with the entry's accent,
 *  ring appears only when the row is active. */
export function TimelineDot({ accent, active }: { accent: string; active: boolean }) {
  return (
    <div
      style={{
        background: accent,
        boxShadow: active
          ? `0 0 0 3px var(--surface), 0 0 0 5px ${accent}`
          : "none",
      }}
      className="absolute top-4 left-1/2 z-[2] h-3.5 w-3.5 -translate-x-1/2 rounded-full transition-shadow max-md:left-2"
    />
  );
}

/** Split pill dot for two concurrent experiences — top/bottom halves in each
 *  entry's color, shared outer ring only when either card is open. */
export function SplitDot({
  topColor,
  bottomColor,
  active,
}: {
  topColor: string;
  bottomColor: string;
  active: boolean;
}) {
  return (
    <div className="absolute top-3 left-1/2 z-[2] -translate-x-1/2 max-md:left-2">
      <svg width="22" height="40" viewBox="0 0 22 40" aria-label="Two concurrent experiences">
        <rect
          x="1.5"
          y="1.5"
          width="19"
          height="37"
          rx="9.5"
          fill="var(--surface)"
          stroke={active ? "var(--line-strong)" : "transparent"}
          strokeWidth="2"
          style={{ transition: "stroke 0.2s" }}
        />
        <rect x="5" y="5" width="12" height="14.5" rx="6" fill={topColor} />
        <rect x="5" y="20.5" width="12" height="14.5" rx="6" fill={bottomColor} />
      </svg>
    </div>
  );
}
