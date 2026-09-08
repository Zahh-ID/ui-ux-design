import { FrameHeight } from "./frame-height";
import { SiteHeader } from "./site-header";
import { TeamDeck } from "./team-deck";

/* The handcrafted NFT character, reused at hero and thumbnail sizes. */
function NftArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#FFA5CC" height="110" rx="26" stroke="#000" strokeWidth={4} width="70" x="65" y="45" />
      <path d="M65,70 Q100,85 135,70" fill="none" stroke="#000" strokeWidth={4} />
      <ellipse cx="100" cy="115" fill="#B2F5EA" rx="46" ry="18" stroke="#000" strokeWidth={4} />
      <path d="M55,115 C55,125 145,125 145,115" fill="none" stroke="#FFE600" strokeWidth={3} />
      <ellipse cx="88" cy="100" fill="#000" rx="4" ry="5" />
      <ellipse cx="112" cy="100" fill="#000" rx="4" ry="5" />
      <circle cx="85" cy="106" fill="#FF4F81" opacity="0.6" r="5" />
      <circle cx="115" cy="106" fill="#FF4F81" opacity="0.6" r="5" />
      <path d="M96,108 Q100,113 104,108" stroke="#000" strokeLinecap="round" strokeWidth={3} />
      <rect fill="#CCFF33" height="18" rx="6" stroke="#000" strokeWidth={4} width="30" x="85" y="28" />
      <path d="M78,35 C78,20 100,15 100,28" fill="none" stroke="#000" strokeLinecap="round" strokeWidth={4} />
      <polygon fill="#FFE600" points="40,40 43,48 51,51 43,54 40,62 37,54 29,51 37,48" stroke="#000" strokeWidth={2} />
      <polygon fill="#CCFF33" points="155,130 157,136 163,138 157,140 155,146 153,140 147,138 153,136" stroke="#000" strokeWidth={2} />
    </svg>
  );
}

/* ── Squad5 accent doodles (from the design-system asset set) ── */
function PinkStar({ className }: { className?: string }) {
  const d = "M0 -26 L6 -8 L24 -6 L8 6 L14 24 L0 12 L-14 24 L-8 6 L-24 -6 L-6 -8 Z";
  return (
    <svg className={className} viewBox="-30 -30 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d={d} transform="translate(3 3)" fill="#000000" />
      <path d={d} fill="#FFB3C6" stroke="#000000" strokeWidth={3} strokeLinejoin="round" />
      <circle cx="0" cy="0" r="3" fill="#000000" />
    </svg>
  );
}

function MintStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-26 -26 56 56" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2" r="22" fill="#000000" />
      <circle cx="0" cy="0" r="22" fill="#B5EAD7" stroke="#000000" strokeWidth={3} />
      <path
        d="M0 -14 L4 -4 L14 -4 L6 3 L9 13 L0 7 L-9 13 L-6 3 L-14 -4 L-4 -4 Z"
        fill="#000000"
      />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  const d = "M90 40 Q100 30 110 40 T130 40 T150 40";
  return (
    <svg className={className} viewBox="85 26 70 20" xmlns="http://www.w3.org/2000/svg">
      <path d={d} fill="none" stroke="#CCFF33" strokeWidth={7} strokeLinecap="round" />
      <path d={d} fill="none" stroke="#000000" strokeWidth={2.5} strokeLinecap="round" />
    </svg>
  );
}

/* One shared site chrome - fixed nav (see ./site-header) + single footer. */
function SiteFooter() {
  return (
    <footer className="border-t-3 border-black bg-card-light py-4 text-xs font-bold text-slate-600 sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-12">
        <p>© 2025 Squad5 Inc. All rights reserved. Keep on doodlin&apos;!</p>
        <div className="flex items-center gap-3 font-display text-slate-900 sm:gap-4">
          <a className="hover:underline" href="#">Terms</a>
          <span>•</span>
          <a className="hover:underline" href="#">Privacy</a>
          <span>•</span>
          <a className="hover:underline" href="#">Discord</a>
          <span>•</span>
          <a className="hover:underline" href="#">Twitter/X</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
    <SiteHeader />
    <section id="home" className="app-frame frame-fixed dot-grid relative flex flex-col bg-background-light">
      <FrameHeight />

      {/* Accent doodles - clipped by the frame, never cause scroll */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-clip short:hidden">
        <PinkStar className="absolute left-4 top-20 h-9 w-9 -rotate-12 lg:h-12 lg:w-12" />
        <MintStar className="absolute right-6 top-10 h-12 w-12 rotate-6 lg:h-16 lg:w-16" />
        <Squiggle className="absolute left-2 top-1/2 hidden h-10 w-28 -rotate-6 sm:block lg:h-12 lg:w-36" />
        <PinkStar className="absolute bottom-10 left-1/3 h-7 w-7 rotate-12 lg:h-9 lg:w-9" />
        <Squiggle className="absolute right-8 top-2/3 hidden h-9 w-24 rotate-3 sm:block lg:h-10 lg:w-28" />
        <MintStar className="absolute left-2/4 top-16 h-6 w-6 lg:h-8 lg:w-8" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-16 short:pt-12">
        {/* Main - fills the frame below the fixed nav */}
        <main className="mx-auto flex w-full min-h-0 max-w-7xl flex-1 flex-col gap-2 overflow-clip px-3 py-2 sm:gap-3 sm:px-6 lg:gap-4 lg:px-12">
          <div className="grid min-h-0 flex-1 grid-cols-1 content-center items-center gap-3 md:gap-4 lg:grid-cols-12 lg:gap-8 short-wide:grid-cols-2!">
            {/* Hero copy card */}
            <div className="relative flex flex-col gap-[clamp(0.75rem,2vh,1.75rem)] overflow-clip rounded-3xl border-4 border-black bg-primary p-[clamp(1rem,2.2vw+0.5rem,3rem)] shadow-neobrutal-lg lg:col-span-6">
              <div className="pointer-events-none absolute right-4 top-4 text-black opacity-20">
                <svg className="h-24 w-24 lg:h-36 lg:w-36" fill="currentColor" viewBox="0 0 100 100">
                  <path d="M50,10 A40,40 0 1,0 90,50 A40,40 0 0,0 50,10 Z M50,30 A20,20 0 1,1 30,50 A20,20 0 0,1 50,30 Z" />
                </svg>
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 text-black opacity-15">
                <svg className="h-24 w-24 lg:h-32 lg:w-32" fill="none" stroke="currentColor" strokeWidth={6} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" strokeDasharray="10 15" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="mb-[clamp(0.5rem,1.5vh,1.25rem)] inline-flex items-center gap-2 rounded-full border-3 border-black bg-card-light px-3 py-1 font-display text-xs font-bold text-black shadow-neobrutal-sm sm:px-4 sm:py-1.5 sm:text-sm">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#FF4F81] sm:h-2.5 sm:w-2.5" />
                  <span>SQUAD  #5 IS LIVE!</span>
                </div>
                <h1 className="font-display text-[clamp(1.5rem,3.2vw+0.5rem,3.75rem)] font-bold leading-[1.12] tracking-tight text-black short:text-[clamp(1.35rem,2.2vw+0.4rem,1.9rem)]">
                  Meet{" "}
                  <span className="relative mx-1 inline-block rotate-[-1deg] rounded-xl border-3 border-black bg-doodle-yellow px-2 shadow-neobrutal-sm sm:px-3">
                    SQUAD 5
                  </span>{" "}
                  Design, pixel-precise interactive{" "}
                  <span className="relative mx-1 inline-block rotate-[1.5deg] rounded-xl border-3 border-black bg-doodle-yellow px-2 shadow-neobrutal-sm sm:px-3">
                    APPS
                  </span>
                </h1>
                <p className="mt-[clamp(0.5rem,1.6vh,1.25rem)] max-w-md text-[clamp(0.8rem,0.9vw+0.5rem,1.125rem)] font-semibold leading-relaxed text-black short:hidden">
                  playful handcrafted UI/UX DESIGN
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-stretch gap-3 border-t-3 border-black/20 pt-[clamp(0.75rem,2vh,1.75rem)] sm:flex-row sm:items-center sm:gap-4 short:pt-3">
                <button className="flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full border-3 border-black bg-card-light px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.6rem,1.6vh,1rem)] text-center font-display text-[clamp(1rem,1.4vw+0.4rem,1.25rem)] font-extrabold text-black shadow-neobrutal transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-neobrutal-sm active:translate-x-1.5 active:translate-y-1.5">
                  <span>See Our Works!!</span>
                  <span className="material-symbols-outlined font-black">arrow_forward</span>
                </button>
                
              </div>
            </div>

            {/* Team deck - swipeable, auto-cycling profile cards */}
            <div className="flex items-center justify-center lg:col-span-6">
              <TeamDeck />
            </div>
          </div>
        </main>
      </div>
    </section>

    <WorkSection />
    <AboutSection />
    <ContactSection />
    <SiteFooter />
    </>
  );
}

type Social = { label: string; kind: "github" | "x" | "icon"; icon?: string; hover: string };

type Builder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  accent: string;
  rotate: string;
  skills: string[];
  socials: Social[];
};

const BUILDERS: Builder[] = [
  {
    id: "#001",
    name: "Syahruzzahid",
    role: "240533610463",
    bio: "NEXT TIME YOU MAKE A DECISSION, PLEASE SPEAK WITH ME. IM HERE AS WELL!!!",
    avatar: "/team/alex.jpg",
    accent: "bg-pastel-blue",
    rotate: "hover:rotate-1",
    skills: ["Just peeps wanna grew"],
    socials: [
      { label: "GitHub Profile", kind: "github", hover: "hover:bg-primary" },
      { label: "X / Twitter Profile", kind: "x", hover: "hover:bg-badge-yellow" },
    ],
  },
  {
    id: "#002",
    name: "Nadia Dwi Setiawati",
    role: "240533603769",
    bio: "Turned vectors into living canvases. Obsessed with micro-interactions, low bundle footprints, and neo-brutalist joy across all viewports.",
    avatar: "/team/mia.jpg",
    accent: "bg-pastel-pink",
    rotate: "hover:-rotate-1",
    skills: [],
    socials: [
      { label: "GitHub Profile", kind: "github", hover: "hover:bg-primary" },
      { label: "Figma Profile", kind: "icon", icon: "design_services", hover: "hover:bg-pastel-pink" },
    ],
  },
  {
    id: "#003",
    name: "Niko Ardiansyah",
    role: "240533609358",
    bio: "Keeps the mempool clean and graph nodes purring at 60 FPS sub-second indexing. Built the real-time websocket feed.",
    avatar: "/team/dante.jpg",
    accent: "bg-pastel-mint",
    rotate: "hover:rotate-1",
    skills: [],
    socials: [
      { label: "GitHub Profile", kind: "github", hover: "hover:bg-primary" },
      { label: "Mirror Web3 Blog", kind: "icon", icon: "auto_stories", hover: "hover:bg-pastel-mint" },
    ],
  },
  {
    id: "#004",
    name: "Nadia Rahma",
    role: "240533600463",
    bio: "Pencil in hand, drawing every winking cube and pastel cloud you trade here. Guardian of the community artistic lore.",
    avatar: "/team/sora.jpg",
    accent: "bg-pastel-lavender",
    rotate: "hover:-rotate-1",
    skills: [],
    socials: [
      { label: "Behance Portfolio", kind: "icon", icon: "palette", hover: "hover:bg-pastel-lavender" },
      { label: "X / Twitter Profile", kind: "x", hover: "hover:bg-badge-yellow" },
    ],
  },
];

function SocialIcon({ s }: { s: Social }) {
  const cls = `flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-background-light text-black transition-colors ${s.hover}`;
  if (s.kind === "github") {
    return (
      <a href="#" aria-label={s.label} className={cls}>
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    );
  }
  if (s.kind === "x") {
    return (
      <a href="#" aria-label={s.label} className={cls}>
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    );
  }
  return (
    <a href="#" aria-label={s.label} className={cls}>
      <span className="material-symbols-outlined text-base">{s.icon}</span>
    </a>
  );
}

function BuilderCard({ b }: { b: Builder }) {
  return (
    <article
      className={`group flex flex-col overflow-clip rounded-2xl border-3 border-black bg-card-light shadow-neobrutal transition-all duration-200 hover:-translate-y-2 hover:shadow-neobrutal-lg ${b.rotate}`}
    >
      <div className={`relative border-b-3 border-black p-2 ${b.accent}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={b.avatar}
          alt={b.name}
          width={480}
          height={480}
          className="block aspect-square w-full rounded-lg border-2 border-black object-cover"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border-2 border-black bg-verified px-2 py-0.5 text-[10px] font-black text-white">
          <span className="material-symbols-outlined text-[11px]">verified</span>
          VERIFIED
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-display text-lg font-bold text-black">{b.name}</h3>
          <p className="mb-2 mt-0.5 font-display text-[11px] font-extrabold uppercase tracking-wider text-role">
            {b.role}
          </p>
          <p className="mb-3 text-[13px] font-semibold leading-relaxed text-slate-600">{b.bio}</p>
        </div>
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {b.skills.map((s) => (
              <span
                key={s}
                className="rounded-md border-2 border-black bg-surface-container px-2 py-0.5 text-[11px] font-extrabold"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t-2 border-black pt-3">
            <span className="font-display text-[11px] font-bold text-slate-500">CONNECT:</span>
            <div className="flex gap-1.5">
              {b.socials.map((s, i) => (
                <SocialIcon key={i} s={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}


function StatBox({ items }: { items: [string, string][] }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 rounded-xl border-3 border-black bg-surface-container p-2 text-center shadow-neobrutal-sm">
      {items.map(([label, value], i) => (
        <div key={label} className={i === 1 ? "border-x-2 border-black px-1" : "px-1"}>
          <span className="block font-display text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {label}
          </span>
          <span className="block font-display text-sm font-extrabold text-black">{value}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectContent({
  tag,
  title,
  desc,
  primaryLabel,
  primaryIcon,
  primaryBg,
  secondaryLabel,
  secondaryIcon,
  primaryHref,
}: {
  tag: string;
  title: string;
  desc: string;
  primaryLabel: string;
  primaryIcon: string;
  primaryBg: string;
  secondaryLabel: string;
  secondaryIcon: string;
  primaryHref?: string;
}) {
  return (
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <span className="rounded-lg border-2 border-black bg-surface-container-high px-2 py-1 font-display text-[11px] font-bold shadow-neobrutal-sm">
          {tag}
        </span>
        <span className="h-3 w-3 animate-pulse rounded-full border-2 border-black bg-verified" />
      </div>
      <h3 className="mt-3 font-display text-2xl font-extrabold text-black sm:text-3xl">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://ui-ux-pendidikan.0xzahh.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-full border-3 border-black px-5 py-2.5 font-display text-sm font-bold shadow-neobrutal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neobrutal-lg active:translate-x-0.5 active:translate-y-0.5 ${primaryBg}`}
        >
          {primaryLabel}
          <span className="material-symbols-outlined text-base">{primaryIcon}</span>
        </a>
        <a
          href="https://ui-ux-industri.0xzahh.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border-3 border-black bg-card-light px-4 py-2.5 font-display text-sm font-bold shadow-neobrutal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neobrutal-lg active:translate-x-0.5 active:translate-y-0.5"
        >
          <span className="material-symbols-outlined text-base">{secondaryIcon}</span>
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <section id="work" className="app-frame dot-grid relative bg-background-light">
      <div className="pt-16 short:pt-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-10 sm:gap-16 sm:px-6 lg:px-12">
          {/* 1 - Intro */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex -rotate-1 items-center gap-1.5 rounded-full border-3 border-black bg-badge-yellow px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide shadow-neobrutal-sm transition-transform hover:rotate-0">
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              Ecosystem Showcase
              <span className="material-symbols-outlined text-base">auto_awesome</span>
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
              <span className="mr-1 inline-block rounded-lg border-3 border-black bg-primary px-2 py-0.5 shadow-neobrutal-sm">
                Flagship Projects
              </span>{" "}
              &amp;{" "}
              <span className="ml-1 inline-block rounded-lg border-3 border-black bg-badge-yellow px-2 py-0.5 shadow-neobrutal-sm">
                Live Deployments
              </span>
            </h2>
            <p className="max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
              Two flagship builds - an interactive education platform and a heavy-duty industrial
              operations dashboard.
            </p>
          </div>

          {/* 2 - Project 1: Education */}
          <div className="relative overflow-clip rounded-2xl border-4 border-black bg-card-light p-5 shadow-neobrutal-lg sm:p-8">
            <span className="absolute -top-3 right-6 hidden rotate-2 rounded-lg border-3 border-black bg-pastel-mint px-3 py-1 font-display text-xs font-bold shadow-neobrutal-sm sm:block">
              ★ Live in Classrooms
            </span>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <ProjectContent
                tag="#PROJECT_01 · Education Platform"
                title="Interactive Education Web App"
                desc="A friendly learning platform for students and teachers: interactive lessons, auto-graded quizzes, progress tracking, live classroom sessions, and offline-first content that works on any device."
                primaryLabel="Launch App"
                primaryIcon="north_east"
                primaryBg="bg-primary"
                secondaryLabel="View Details"
                secondaryIcon="visibility"
              />
              <div className="w-full lg:w-1/2">
                <div className="relative -rotate-1 rounded-2xl border-3 border-black bg-pastel-blue p-2 shadow-neobrutal transition-transform hover:rotate-0">
                  <div className="mb-2 flex items-center justify-between border-b-2 border-black px-1 pb-2">
                    <div className="flex gap-1">
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-[#ba1a1a]" />
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-badge-yellow" />
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-verified" />
                    </div>
                    <span className="font-display text-[10px] font-bold uppercase text-black">
                      https://ui-ux-pendidikan.0xzahh.dev
                    </span>
                    <span className="material-symbols-outlined text-sm text-black">tab</span>
                  </div>
                  <div className="overflow-clip rounded-xl border-3 border-black bg-card-light shadow-neobrutal-sm">
                    <div className="pattern-dots flex aspect-[4/3] items-center justify-center bg-[#C7E9FF]">
                      <NftArt className="h-3/5 w-3/5 drop-shadow-md filter" />
                    </div>
                  </div>
                  <span className="absolute -bottom-4 -left-4 flex rotate-6 items-center gap-1.5 rounded-xl border-3 border-black bg-badge-yellow px-2 py-1 font-display text-[11px] font-bold shadow-neobrutal">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    Works Offline!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 - Project 2: Protocol */}
          <div className="relative overflow-clip rounded-2xl border-4 border-black bg-card-light p-5 shadow-neobrutal-lg sm:p-8">
            <span className="absolute -top-3 left-6 hidden -rotate-2 rounded-lg border-3 border-black bg-pastel-lavender px-3 py-1 font-display text-xs font-bold shadow-neobrutal-sm sm:block">
              ⚡ On the Factory Floor
            </span>
            <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative rotate-1 rounded-2xl border-3 border-black bg-pastel-lavender p-2 shadow-neobrutal transition-transform hover:rotate-0">
                  <div className="mb-2 flex items-center justify-between border-b-2 border-black px-1 pb-2">
                    <div className="flex gap-1">
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-[#ba1a1a]" />
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-badge-yellow" />
                      <span className="h-3 w-3 rounded-full border-[1.5px] border-black bg-verified" />
                    </div>
                    <span className="font-display text-[10px] font-bold uppercase text-black">
                      ops.acme.io/floor
                    </span>
                    <span className="material-symbols-outlined text-sm text-black">tab</span>
                  </div>
                  <div className="overflow-clip rounded-xl border-3 border-black bg-card-light shadow-neobrutal-sm">
                    <div className="pattern-dots flex aspect-[4/3] items-center justify-center bg-[#EBE3FA]">
                      <NftArt className="h-3/5 w-3/5 drop-shadow-md filter" />
                    </div>
                  </div>
                  <span className="absolute -bottom-4 -right-4 flex -rotate-6 items-center gap-1.5 rounded-xl border-3 border-black bg-badge-yellow px-2 py-1 font-display text-[11px] font-bold shadow-neobrutal">
                    <span className="material-symbols-outlined text-sm">monitoring</span>
                    24/7 Monitoring
                  </span>
                </div>
              </div>
              <ProjectContent
                tag="#PROJECT_02 · Industrial Operations"
                title="Industrial Operations Web App"
                desc="A rugged operations console for factories and warehouses: real-time machine telemetry, predictive maintenance alerts, shift scheduling, inventory control, and role-based access for the shop floor."
                primaryLabel="Read Case Study"
                primaryIcon="menu_book"
                primaryBg="bg-badge-yellow"
                secondaryLabel="View Live Demo ↗"
                secondaryIcon="code"
              />
            </div>
          </div>

          {/* 4 - Builder grant callout */}
          
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="app-frame dot-grid relative bg-background-light">
      {/* Accent doodles (from the design-system asset set) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-clip">
        <PinkStar className="absolute left-3 top-28 hidden h-11 w-11 rotate-12 lg:block" />
        <MintStar className="absolute right-6 top-64 hidden h-14 w-14 -rotate-6 lg:block" />
        <Squiggle className="absolute right-10 top-40 hidden h-10 w-28 rotate-3 xl:block" />
        <MintStar className="absolute bottom-40 left-6 hidden h-9 w-9 rotate-45 xl:block" />
      </div>

      <div className="relative z-10 pt-16 short:pt-12">
        {/* Floating doodle stickers */}
        <span className="pointer-events-none absolute left-8 top-24 hidden -rotate-6 rounded-xl border-3 border-black bg-pastel-pink px-3 py-1.5 font-display text-xs font-bold shadow-neobrutal xl:block">
          ✨ Shut up!!!!
        </span>
        <span className="pointer-events-none absolute right-8 top-44 hidden rotate-6 rounded-xl border-3 border-black bg-pastel-mint px-3 py-1.5 font-display text-xs font-bold shadow-neobrutal xl:block">
          👾 Backburner!
        </span>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-10 sm:gap-20 sm:px-6 lg:px-12">
          {/* 1 - Hero header */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-3 border-black bg-pastel-lavender px-4 py-1 font-display text-xs font-bold uppercase tracking-wide shadow-neobrutal-sm">
              <span className="material-symbols-outlined text-base">group</span>
              The Squad Directory
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl">
              Meet the{" "}
              <span className="inline-block -rotate-1 rounded-lg border-3 border-black bg-primary px-3 py-1 shadow-neobrutal-sm">
                SQUAD 5 Architects
              </span>
            </h2>
            <p className="max-w-2xl text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
              The humans translating comic book dreams into robust design, handcrafted, and pixel-precise interactive apps.
            </p>
          </div>

          {/* 2 - Team grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUILDERS.map((b) => (
              <BuilderCard key={b.id} b={b} />
            ))}
          </div>

        

          {/* Comic footer note */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-display text-[11px] font-bold text-slate-500">
            <span>CRAFTED WITH CHAOS &amp; SOLIDITY</span>
            <span>•</span>
            <span>NO ROYALTIES RUGGED</span>
            <span>•</span>
            <span>BISMILLAH NILAI "A"</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── #contact — repurposed from the "the SDK" banner ── */
function ContactSection() {
  return (
    <section
      id="contact"
      className="app-frame dot-grid relative flex flex-col items-center justify-center bg-background-light px-4 py-16 pt-24 sm:px-6 lg:px-12"
    >
      <div className="relative w-full max-w-4xl overflow-clip rounded-3xl border-4 border-black bg-primary p-6 shadow-neobrutal-lg sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full border-3 border-black/40 bg-badge-yellow/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-4 select-none font-display text-5xl font-black text-black/25"
        >
          {"{ }"}
        </div>
        <div className="relative z-10 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 font-display text-[11px] font-black uppercase tracking-wider text-white">
            <span className="text-primary">●</span> Get In Touch
          </span>
          <h2 className="mb-4 font-display text-2xl font-extrabold leading-tight text-black sm:text-3xl lg:text-4xl">
            Got a project? Let&apos;s build it together.
          </h2>
          <p className="mb-6 text-sm font-bold leading-relaxed text-black/85 sm:text-base">
            Tell us what you need - an education platform, an industrial dashboard, or something
            entirely new - and we&apos;ll scope it, prototype it, and ship it.
          </p>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:squad5@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border-3 border-black bg-[#ffff00] px-6 py-3 font-display text-sm font-bold shadow-neobrutal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neobrutal-lg active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Email Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full border-3 border-black bg-card-light px-6 py-3 font-display text-sm font-bold shadow-neobrutal transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neobrutal-lg active:translate-x-0.5 active:translate-y-0.5"
            >
              <span className="material-symbols-outlined text-base">forum</span>
              Message on Discord
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-[11px] font-bold text-black/70">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">mail</span>
              squad5@example.com
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">schedule</span>
              Replies within 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
