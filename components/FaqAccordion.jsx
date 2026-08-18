"use client";

import { useId, useState } from "react";

/**
 * Accordion list. One item open at a time; clicking the open item closes it.
 * Pass defaultOpen={null} to start with everything collapsed.
 */
export default function FaqAccordion({ items = [], defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const uid = useId();

  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const triggerId = `${uid}-trigger-${i}`;
        const panelId = `${uid}-panel-${i}`;

        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-colors duration-300 ${
              isOpen
                ? "border-violet-500/60 bg-gradient-to-b from-violet-500/[0.10] to-transparent"
                : "border-white/[0.06] bg-white/[0.03] hover:border-white/15"
            }`}
          >
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 rounded-2xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080D] sm:px-7"
              >
                <span className="text-base font-medium text-white sm:text-lg">
                  {item.question}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-violet-500 to-sky-400 text-white shadow-[0_0_24px_-6px_rgba(139,92,246,0.9)]"
                      : "border border-white/10 bg-white/[0.04] text-slate-400"
                  }`}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                    <line
                      x1="3"
                      y1="8"
                      x2="13"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <line
                      x1="8"
                      y1="3"
                      x2="8"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      className={`origin-center transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 sm:px-7 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
