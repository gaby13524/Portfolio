import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[var(--hero)] px-7 py-3.5 transition-colors">
      <a href="#" className="font-bungee text-lg text-champagne_mist-200">
        gabi<span className="text-burnt_peach-300">.</span>
      </a>

      <div className="flex items-center gap-5">
        <div className="hidden gap-4 text-[13px] text-champagne_mist-200/75 md:flex">
          <a href="#timeline" className="hover:text-champagne_mist-200">
            timeline
          </a>
          <a href="#projects" className="hover:text-champagne_mist-200">
            projects
          </a>
          <a href="#compensation" className="hover:text-champagne_mist-200">
            compensation
          </a>
          <a href="#contact" className="hover:text-champagne_mist-200">
            contact
          </a>
        </div>

        <button
          onClick={toggle}
          role="switch"
          aria-checked={dark}
          aria-label="Toggle dark mode"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5"
        >
          <span className="relative h-4 w-7 rounded-full bg-white/25 transition-colors dark:bg-verdigris-500">
            <span
              className={`absolute top-[3px] left-[3px] h-2.5 w-2.5 rounded-full bg-champagne_mist-200 transition-transform ${
                dark ? "translate-x-3" : ""
              }`}
            />
          </span>
          <span className="min-w-8 text-[11px] font-semibold text-champagne_mist-200/80">
            {theme}
          </span>
        </button>
      </div>
    </nav>
  );
}
