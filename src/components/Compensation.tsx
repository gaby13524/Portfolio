import {useMemo, useState, type FormEvent} from "react";

const BASE = 65;
const FLOOR = 48;

interface Perk {
  id: string;
  label: string;
  save: number; // in €k
}

const PERKS: Perk[] = [
  {
    id: "wfa",
    label: "30 days work from non-EU (or more, i value this a lot)",
    save: 5,
  },
  {id: "ticket", label: "Deutschland Ticket subsidy", save: 1},
  {id: "lunch", label: "Free lunch & snacks", save: 2},
  {id: "remote", label: "Flexible working time", save: 2},
  {id: "gym", label: "Sports / Health & wellness benefit", save: 2},
];

const BRACKETS = ["under €500", "€500 – €1k", "€1k – €2k", "€2k – €3k", "€3k+"];

// Get a free form ID at formspree.io and paste it here:
const FORMSPREE_ID = "YOUR_FORM_ID";

export function Compensation() {
  const [active, setActive] = useState<Set<string>>(new Set());
  const [cbName, setCbName] = useState("");
  const [cbBracket, setCbBracket] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState<{
    email: string;
    benefit: string;
  } | null>(null);

  const togglePerk = (id: string) =>
    setActive((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const adjusted = useMemo(() => {
    const discount = PERKS.filter((p) => active.has(p.id)).reduce(
      (sum, p) => sum + p.save,
      0,
    );
    return Math.max(BASE - discount, FLOOR);
  }, [active]);

  const moved = adjusted < BASE;
  const cbReady = cbName.trim().length > 0 && cbBracket !== "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      // Local fallback until Formspree is configured
      e.preventDefault();
      setSubmitted({email, benefit: cbName.trim()});
      setModalOpen(false);
      setCbName("");
      setCbBracket("");
    }
    // With a real Formspree ID the form posts normally.
  };

  return (
    <section id="compensation" className="mx-auto max-w-4xl px-6 pt-18">
      <div className="font-bungee mb-2 text-xs tracking-wider uppercase text-burnt_peach-500">
        Compensation
      </div>
      <h2 className="mb-2.5 text-4xl font-bold tracking-tight text-(--ink-heading) md:text-5xl">
        Let's talk numbers
      </h2>
      <p className="mb-10 max-w-xl text-base leading-relaxed text-(--ink-soft)">
        Transparent from the start. Here's my base expectation — and the
        benefits that make me flexible about it. Toggle what your company offers
        and watch the number move.
      </p>

      <div className="flex flex-wrap items-start gap-10">
        {/* Left: numbers */}
        <div className="w-full flex-none md:w-52">
          <div className="text-xs text-(--ink-faint)">base expectation</div>
          <div
            className={`font-bungee text-5xl leading-none transition-colors ${
              moved ? "text-verdigris-500" : "text-(--ink-heading)"
            }`}
          >
            €{BASE}k
          </div>
          <div className="mt-1.5 text-[13px] text-(--ink-faint)">
            gross / year · Berlin
          </div>
          <div
            className={`mt-3.5 flex min-h-6 items-baseline gap-1.5 transition-opacity ${
              moved ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[13px] text-(--ink-soft)">
              with your perks →
            </span>
            <span className="font-bungee text-xl text-verdigris-500">
              €{adjusted}k
            </span>
          </div>
        </div>

        {/* Right: perks */}
        <div className="min-w-72 flex-1">
          <div className="mb-3.5 text-[13px] text-(--ink-soft)">
            benefits that flex the number — click what applies:
          </div>
          <div className="flex flex-wrap gap-2">
            {PERKS.map((p) => {
              const on = active.has(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePerk(p.id)}
                  aria-pressed={on}
                  className={`flex cursor-pointer items-center gap-2 rounded-3xl border-[1.5px] px-4 py-2 transition select-none ${
                    on
                      ? "border-verdigris-500 bg-frosted_mint-500 dark:bg-verdigris-800"
                      : "border-(--line-strong) bg-(--surface-card) hover:border-verdigris-300"
                  }`}
                >
                  <span
                    className={`text-[13px] font-semibold ${
                      on
                        ? "text-verdigris-700 dark:text-verdigris-300"
                        : "text-(--ink-heading)"
                    }`}
                  >
                    {p.label}
                  </span>
                  <span
                    className={`text-[10.5px] ${
                      on ? "text-verdigris-500" : "text-(--ink-faint)"
                    }`}
                  >
                    −€{p.save}k
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom benefit */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-dashed border-(--line-strong) pt-5">
            <div className="mb-0.5 w-full text-xs text-(--ink-faint)">
              offering a benefit that's not listed? tell me and I'll get back to
              you with my adjusted ask *
            </div>
            <input
              value={cbName}
              onChange={(e) => setCbName(e.target.value)}
              maxLength={40}
              placeholder="e.g. company car, childcare..."
              className="w-52 rounded-3xl border-[1.5px] border-(--line-strong) bg-(--surface-card) px-4 py-2 text-[13px] text-(--ink-heading) outline-none placeholder:text-(--ink-faint) focus:border-burnt_peach-300"
            />
            <select
              value={cbBracket}
              onChange={(e) => setCbBracket(e.target.value)}
              className="cursor-pointer rounded-3xl border-[1.5px] border-(--line-strong) bg-(--surface-card) px-3.5 py-2 text-[13px] text-(--ink-soft) outline-none"
            >
              <option value="" disabled>
                value / year
              </option>
              {BRACKETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <button
              disabled={!cbReady}
              onClick={() => setModalOpen(true)}
              className="cursor-pointer rounded-3xl bg-burnt_peach-500 px-4.5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-burnt_peach-600 disabled:cursor-default disabled:opacity-35"
            >
              see how it affects my ask →
            </button>
          </div>

          {submitted && (
            <div className="mt-4 rounded-xl border-[1.5px] border-verdigris-300 bg-frosted_mint-500 px-4 py-3.5 text-[13px] leading-relaxed text-verdigris-700 dark:bg-verdigris-800 dark:text-verdigris-300">
              Got it! I'll get back to you at <strong>{submitted.email}</strong>{" "}
              about <strong>{submitted.benefit}</strong>. Talk soon 👋
            </div>
          )}

          <p className="mt-4.5 text-[11.5px] leading-relaxed text-(--ink-faint)">
            * all numbers on this page are indicative and open to discussion.
            The perk values reflect what those benefits are genuinely worth to
            me — your mileage may vary.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-5"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="w-96 max-w-full rounded-2xl border-[1.5px] border-(--line-strong) bg-(--surface-card) p-6">
            <div className="mb-1 text-[17px] font-bold text-(--ink-heading)">
              What's your offer?
            </div>
            <div className="mb-4.5 text-[13px] leading-relaxed text-(--ink-soft)">
              Drop your details and I'll reply with how this benefit affects my
              ask.
            </div>

            <div className="mb-4.5 flex items-center justify-between gap-3 rounded-xl bg-(--surface-soft) px-4 py-3">
              <div>
                <div className="mb-0.5 text-[10.5px] text-(--ink-faint)">
                  benefit you added
                </div>
                <div className="text-sm font-bold text-verdigris-500">
                  {cbName.trim()}
                </div>
              </div>
              <div className="text-xs whitespace-nowrap text-(--ink-soft)">
                {cbBracket} / yr
              </div>
            </div>

            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="benefit" value={cbName.trim()} />
              <input type="hidden" name="value_bracket" value={cbBracket} />
              {(
                [
                  {
                    name: "name",
                    label: "Name",
                    placeholder: "Ada Lovelace",
                    type: "text",
                  },
                  {
                    name: "company",
                    label: "Company",
                    placeholder: "Acme GmbH",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Email",
                    placeholder: "ada@acme.com",
                    type: "email",
                  },
                ] as const
              ).map((f) => (
                <div key={f.name} className="mb-3">
                  <label className="mb-1 block text-xs font-semibold text-(--ink-soft)">
                    {f.label}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full rounded-lg border-[1.5px] border-(--line-strong) bg-(--surface)] x-3 py-2.5 text-sm text-(--ink-heading) outline-none focus:border-burnt_peach-300"
                  />
                </div>
              ))}
              <div className="mt-4.5 flex gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer rounded-lg border-[1.5px] border-(--line-strong) px-4.5 py-2.5 text-sm text-(--ink-soft)"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer rounded-lg bg-burnt_peach-500 py-2.5 text-sm font-bold text-white hover:bg-burnt_peach-600"
                >
                  send →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
