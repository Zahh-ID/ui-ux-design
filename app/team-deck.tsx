"use client";

import { useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  desc: string;
  avatar: string;
  panel: string;
  tags: string[];
};

const TEAM: Member[] = [
  {
    name: "Syahruzzahid",
    role: "240533610463",
    desc: "NEXT TIME YOU MAKE DECISSION, PLEASE SPEAK WITH ME. IM HERE AS WELL!!!",
    avatar: "/team/alex.jpg",
    panel: "#AED9E0",
    tags: ["Node.js", "Postgres", "Docker"],
  },
  {
    name: "Nadia Dwi Setiawati",
    role: "	240533603769",
    desc: "Turns designs into snappy, accessible interfaces with a soft spot for tiny interactions.",
    avatar: "/team/mia.jpg",
    panel: "#FFB3C6",
    tags: ["React", "Tailwind", "Motion"],
  },
  {
    name: "Niko Ardiansyah",
    role: "	240533609358",
    desc: "Keeps data flowing in real time - sockets, streams, and dashboards that never lag.",
    avatar: "/team/dante.jpg",
    panel: "#B5EAD7",
    tags: ["WebSocket", "Go", "Timescale"],
  },
  {
    name: "Nadia Rahma",
    role: "240533600463",
    desc: "Sets the visual direction - illustration, motion, and a consistent playful look across the app.",
    avatar: "/team/sora.jpg",
    panel: "#C3B1E1",
    tags: ["Figma", "SVG", "Comic"],
  },
];

const AUTO_MS = 3500;
const SWIPE_PX = 90;

/* Swipeable, auto-cycling stack of team profile cards for the hero.
   Compact on mobile; larger with a description from `sm` up. */
export function TeamDeck() {
  const n = TEAM.length;
  const [top, setTop] = useState(0);
  const [dx, setDx] = useState(0);
  const [leaving, setLeaving] = useState<0 | 1 | -1>(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef<{ startX: number; active: boolean }>({ startX: 0, active: false });

  // Auto-advance after a moment (unless the user is interacting).
  useEffect(() => {
    if (paused || leaving !== 0) return;
    const id = window.setTimeout(() => setLeaving(1), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [paused, leaving, top]);

  const onLeaveEnd = (e: React.TransitionEvent) => {
    if (leaving === 0 || e.propertyName !== "transform") return;
    setTop((t) => (t + (leaving === 1 ? 1 : n - 1)) % n);
    setLeaving(0);
    setDx(0);
  };

  const onDown = (e: React.PointerEvent) => {
    if (leaving !== 0) return;
    drag.current = { startX: e.clientX, active: true };
    setPaused(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    setDx(e.clientX - drag.current.startX);
  };
  const onUp = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setPaused(false);
    if (dx > SWIPE_PX) setLeaving(1);
    else if (dx < -SWIPE_PX) setLeaving(-1);
    else setDx(0);
  };

  return (
    <div
      className="relative mx-auto h-[14.5rem] w-full max-w-[15.5rem] touch-pan-y select-none sm:h-[19rem] sm:max-w-[19rem] lg:h-[27rem] lg:max-w-[25rem]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        if (!drag.current.active) setDx(0);
      }}
    >
      {TEAM.map((m, i) => {
        const offset = (i - top + n) % n;
        if (offset > 2) return null;
        const isTop = offset === 0;

        let transform: string;
        let opacity = offset === 2 ? 0.9 : 1;
        let transition = "transform 260ms cubic-bezier(.2,.8,.2,1), opacity 200ms linear";
        if (isTop) {
          if (leaving !== 0) {
            transform = `translateX(${leaving * 130}%) rotate(${leaving * 18}deg)`;
            opacity = 0;
          } else {
            transform = `translateX(${dx}px) rotate(${dx * 0.05}deg)`;
            if (drag.current.active) transition = "none";
          }
        } else if (offset === 1) {
          transform = "translateY(14px) scale(0.94) rotate(-4deg)";
        } else {
          transform = "translateY(28px) scale(0.88) rotate(5deg)";
        }

        return (
          <article
            key={m.name}
            onPointerDown={isTop ? onDown : undefined}
            onPointerMove={isTop ? onMove : undefined}
            onPointerUp={isTop ? onUp : undefined}
            onPointerCancel={isTop ? onUp : undefined}
            onTransitionEnd={isTop ? onLeaveEnd : undefined}
            className={`absolute inset-0 flex flex-col overflow-clip rounded-3xl border-4 border-black bg-card-light p-3 shadow-neobrutal-lg sm:p-4 ${
              isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
            }`}
            style={{ transform, transition, zIndex: 10 - offset, opacity }}
          >
            <div
              className="pattern-dots relative flex min-h-0 flex-1 items-center justify-center overflow-clip rounded-2xl border-3 border-black"
              style={{ backgroundColor: m.panel }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.avatar}
                alt={m.name}
                draggable={false}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border-2 border-white bg-black px-2 py-0.5 font-display text-[10px] font-bold text-white sm:px-2.5 sm:py-1 sm:text-[11px]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                TEAM
              </span>
            </div>
            <div className="mt-2.5">
              <div className="flex items-center gap-1 font-display text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
                <span className="truncate">{m.name}</span>
                <span className="material-symbols-outlined shrink-0 text-sm text-primary-dark sm:text-base">
                  verified
                </span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500 lg:text-sm">{m.role}</div>
              <p className="mt-1.5 hidden text-xs font-semibold leading-snug text-slate-600 line-clamp-3 sm:block lg:text-[13px]">
                {m.desc}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1 short:hidden sm:mt-2">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border-2 border-black bg-background-light px-1.5 py-0.5 font-display text-[10px] font-bold sm:px-2 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-1.5 sm:mt-3">
              {TEAM.map((_, di) => (
                <span
                  key={di}
                  className={`h-2 w-2 rounded-full border border-black ${
                    di === top ? "bg-primary" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
