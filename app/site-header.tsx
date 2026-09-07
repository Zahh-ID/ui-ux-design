"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "work", "about", "contact"] as const;
const LINKS: { id: string; label: string }[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* Fixed nav whose active link tracks the section under the viewport in
   real time as you scroll. */
export function SiteHeader() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView[0]) setActive(inView[0].target.id);
      },
      // Shrink the observation band toward the middle of the screen so `active`
      // flips as a section crosses the centre.
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b-3 border-black bg-background-light shadow-[0_4px_0_0_#000] short:h-12">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-3 sm:px-6 lg:px-12">
        <a className="group flex items-center gap-2 sm:gap-3" href="#home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-clip rounded-xl border-3 border-black shadow-neobrutal-sm transition-transform group-hover:-rotate-6 sm:h-10 sm:w-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Squad5 logo"
              width={48}
              height={48}
              className="h-full w-full scale-[1.12] object-cover"
            />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-black sm:text-2xl">
            Squad<span className="text-primary-dark">5</span>
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full border-3 px-3 py-2 font-display text-sm font-bold text-black transition-all sm:px-4 sm:py-2.5 sm:text-base ${
                  isActive
                    ? "border-black bg-primary shadow-neobrutal-sm"
                    : "border-transparent hover:border-black hover:bg-primary/40"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
