"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import {
  FaArrowLeft, FaChevronRight, FaFacebook,
  FaTwitter, FaInstagram, FaLink,
} from "react-icons/fa";
import { useTheme } from "../../../context/ThemeContext";
import wamufat from "@/public/wamufat.jpg"
import wamufat1 from "@/public/wamufat1.jpg"
import wamufat2 from "@/public/wamufat2.jpg"
import wamufat3 from "@/public/wamufat3.jpg"
import basketb from "@/public/basketb.jpg"
import basketb1 from "@/public/basketb1.jpg"
import basketb2 from "@/public/basketb2.jpg"
import marathon from "@/public/marathon.jpg"
import marathon2 from "@/public/marathon1.jpg"

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const recapsData: Record<string, RecapData> = {

  /* ── 1. WamuFat Foundation ─────────────────────────────────────────────── */
  "wamufat-foundation": {
    tag: "Event Recap · Youth Development",
    badge: "Awarded Best Youth Program 2025",
    heroGradient: "linear-gradient(135deg,#0a7c4e 0%,#065535 40%,#1a2e23 100%)",
    statsBarBg: "#065535",
    title: ["WamuFat Foundation", "Annual Athletics", "Program"],
    titleEm: [1],
    meta: [
      { icon: "calendar", text: "July 21 – August 22, 2025" },
      { icon: "pin",      text: "Agroterra Sport Academy, Nigeria" },
      { icon: "clock",    text: "32-Day Programme · 12 Sports" },
    ],
    stats: [
      { number: "200+", label: "Athletes Trained" },
      { number: "18",   label: "Elite Coaches" },
      { number: "32",   label: "Days of Training" },
      { number: "12",   label: "Sports Disciplines" },
    ],
    sections: [
      {
        label: "Overview",
        h2: "A Summer That Shaped Champions",
        body: [
          "The WamuFat Foundation Annual Athletics Program 2025, held in collaboration with Agroterra Sport Academy, was a landmark event that brought together over 200 young athletes from across Nigeria for an intensive 32-day summer camp experience. Running from July 21 to August 22, the program exceeded all expectations, earning the prestigious Best Youth Program 2025 award from the National Sports Development Council.",
          "Set against the lush backdrop of Agroterra's world-class facilities, participants engaged in rigorous training sessions spanning twelve sporting disciplines — from athletics and football to swimming, golf, and martial arts. Every athlete arrived with potential; every athlete left with purpose.",
        ],
      },
    ],
    pullQuote: {
      text: "\"This program didn't just train bodies — it forged character, resilience, and a love for sport that will last a lifetime.\"",
      cite: "— Chief Coach Emmanuel Adeyemi, Program Director",
    },
    highlights: {
      label: "Program Highlights",
      h2: "What Made This Year Exceptional",
      items: [
        { icon: "🏃", title: "Elite Coaching Panel", body: "18 professional coaches and 6 international guest trainers delivered personalised performance plans for each athlete, ensuring every participant received targeted, world-class guidance." },
        { icon: "🏆", title: "Inter-Camp Championship", body: "A closing tournament on August 20–22 saw athletes compete across disciplines, with medals awarded in 36 individual and team events — fostering healthy competition and sportsmanship." },
        { icon: "🧠", title: "Sports Science & Nutrition", body: "For the first time, the program incorporated dedicated sports psychology and nutrition workshops, equipping athletes with holistic performance tools beyond physical training." },
        { icon: "🌍", title: "Community Outreach Day", body: "On August 10, athletes volunteered in the surrounding community — coaching younger children and participating in a local school sports day, reinforcing the academy's values of giving back." },
        { icon: "📺", title: "Media Spotlight", body: "NTA Sports and two regional broadcasters covered the closing ceremony, bringing national visibility to the next generation of Nigerian sporting talent." },
      ],
    },
    impact: {
      label: "Impact & Legacy",
      h2: "Building the Future of Nigerian Sport",
      body: [
        "Beyond the training sessions and medals, the WamuFat Foundation program left an enduring mark on each participant. Fourteen athletes were scouted by regional sports federations for advanced development programmes, while three received scholarship offers to sports-focused secondary schools.",
        "The WamuFat Foundation, whose mission is to democratise access to sports education for underprivileged youth, subsidised 40% of participant fees — ensuring that financial constraints did not bar talented young Nigerians from accessing elite coaching.",
      ],
    },
    sidebar: {
      details: [
        { icon: "📅", label: "Dates",        value: "July 21 – August 22, 2025" },
        { icon: "📍", label: "Location",     value: "Agroterra Sport Academy, Nigeria" },
        { icon: "👥", label: "Participants", value: "200+ young athletes" },
        { icon: "🏅", label: "Category",     value: "Youth Development · Athletics" },
        { icon: "🤝", label: "Organiser",    value: "WamuFat Foundation & Agroterra Sport Academy" },
      ],
      awards: [
        { icon: "🥇", text: "Best Youth Program 2025",  sub: "National Sports Development Council" },
        { icon: "🌟", text: "Community Impact Award",   sub: "Lagos State Ministry of Youth" },
        { icon: "📺", text: "Featured on NTA Sports",   sub: "Closing ceremony broadcast" },
      ],
      upcomingLabel: "Upcoming Event",
      upcomingTitle: "WamuFat Foundation Annual Program 2026",
      upcomingDesc:  "Early registration now open. Secure your spot for next year's programme.",
      upcomingCta:   "Register Interest",
    },
    galleryImages: [wamufat, wamufat1, wamufat2, wamufat3],
    galleryNote: "Full photo album on Instagram & Facebook. Tag us @AgroterraAcademy.",
  },

  /* ── 2. Lagos Marathon ─────────────────────────────────────────────────── */
  "lagos-marathon": {
    tag: "Event Recap · Road Running",
    badge: "Record-Breaking Participation",
    heroGradient: "linear-gradient(120deg,#035c6e 0%,#012e3a 50%,#001a22 100%)",
    statsBarBg: "#012e3a",
    title: ["2025", "Lagos", "Marathon"],
    titleEm: [2],
    meta: [
      { icon: "calendar", text: "February 15, 2025" },
      { icon: "pin",      text: "Lagos Island → Victoria Island, Lagos" },
      { icon: "clock",    text: "42.195 km · 15,247 Finishers" },
    ],
    stats: [
      { number: "15,247", label: "Finishers" },
      { number: "12",     label: "Nations" },
      { number: "2:18:34",label: "Men's Record" },
      { number: "23",     label: "Para-Athletes" },
    ],
    sections: [
      {
        label: "Overview",
        h2: "Lagos Sets a New Standard",
        body: [
          "The 2025 Lagos Marathon, held on February 15, rewrote the record books in every measurable way. With 15,247 official finishers — a 38% increase over 2024 — the race cemented Lagos as West Africa's premier marathon destination. Runners from 12 nations including Kenya, Ethiopia, Ghana, the UK, and the USA took to the streets in what organisers described as \"an event that finally puts Lagos on the global marathon calendar.\"",
          "Agroterra Sport Academy served as Official Training Partner, with 47 academy athletes crossing the finish line and 12 placing in the top 100 of their respective categories — the best-ever academy showing at the Lagos Marathon.",
        ],
      },
    ],
    pullQuote: {
      text: "\"Running through Lagos feels like the whole city is cheering for you. This race is unlike anything else in West Africa.\"",
      cite: "— Kwame Asante, Men's Champion (2:18:34 Course Record)",
    },
    highlights: {
      label: "Event Highlights",
      h2: "What Made 2025 Unforgettable",
      items: [
        { icon: "🏃", title: "Record Participation", body: "15,247 finishers — the highest in the marathon's history — crossed the finish line, a 38% increase over 2024." },
        { icon: "🌍", title: "International Presence", body: "Runners from 12 countries including Kenya, Ethiopia, Ghana, the UK, and the USA participated, elevating Lagos onto the global marathon calendar." },
        { icon: "♿", title: "Para-Athletics Category", body: "For the first time, the Lagos Marathon introduced a dedicated para-athletics division, with 23 wheelchair athletes completing the full 42 km course." },
        { icon: "🎶", title: "Street Entertainment", body: "Live Afrobeats and highlife bands performed at five points along the route, creating an electric carnival atmosphere that drew thousands of spectators." },
        { icon: "🏥", title: "Zero Medical Incidents", body: "Thanks to comprehensive planning and 200+ medical volunteers, the 2025 edition recorded zero serious medical emergencies — a testament to world-class event management." },
      ],
    },
    impact: {
      label: "Race Results",
      h2: "Men's & Women's Division Winners",
      body: [],
      table: [
        { place: "🥇 1st",   athlete: "Kwame Asante",   country: "Ghana",    time: "2:18:34" },
        { place: "🥈 2nd",   athlete: "Emeka Eze",       country: "Nigeria",  time: "2:21:07" },
        { place: "🥉 3rd",   athlete: "Samuel Waweru",   country: "Kenya",    time: "2:23:49" },
        { place: "🥇 1st (W)",athlete: "Halima Musa",    country: "Ethiopia", time: "2:41:12" },
        { place: "🥈 2nd (W)",athlete: "Adaeze Okonkwo", country: "Nigeria",  time: "2:44:55" },
        { place: "🥉 3rd (W)",athlete: "Fatuma Aidid",   country: "Somalia",  time: "2:47:31" },
      ],
    },
    sidebar: {
      details: [
        { icon: "📅", label: "Date",       value: "February 15, 2025" },
        { icon: "📍", label: "Location",   value: "Lagos Island → Victoria Island" },
        { icon: "📏", label: "Distance",   value: "42.195 km Full Marathon" },
        { icon: "👥", label: "Finishers",  value: "15,247 athletes" },
        { icon: "🌍", label: "Countries",  value: "12 nations represented" },
        { icon: "🤝", label: "Partner",    value: "Agroterra Sport Academy (Official Training Partner)" },
      ],
      awards: [
        { icon: "📈", text: "Record Participation", sub: "15,247 finishers — all-time high" },
        { icon: "⏱️", text: "Course Record Set",    sub: "Men's: 2:18:34 (Kwame Asante)" },
        { icon: "♿", text: "Para-Athletics Inaugural", sub: "First-ever wheelchair division" },
        { icon: "📺", text: "National Broadcast",   sub: "Live on NTA & Channels TV" },
      ],
      upcomingLabel: "2026 Lagos Marathon",
      upcomingTitle: "Join Us Next February",
      upcomingDesc:  "Train with Agroterra Academy's certified marathon programme and be ready for 2026.",
      upcomingCta:   "Enquire About Training",
    },
    galleryImages: [marathon, marathon2],
    galleryNote: "Official race photos at lagosmarathon.ng/gallery2025. Tag us @AgroterraAcademy.",
  },

  /* ── 3. Basketball Tournament ──────────────────────────────────────────── */
  "basketball-tournament": {
    tag: "Event Recap · Basketball",
    badge: "Featured on National TV",
    heroGradient: "linear-gradient(125deg,#1a0a00 0%,#3d1500 40%,#1a0a00 100%)",
    statsBarBg: "#1a0a00",
    title: ["2024", "Basketball", "Tournament"],
    titleEm: [1],
    meta: [
      { icon: "calendar", text: "December 10–15, 2024" },
      { icon: "pin",      text: "Agroterra Indoor Arena, Nigeria" },
      { icon: "clock",    text: "6-Day Tournament · 16 Teams" },
    ],
    stats: [
      { number: "16",   label: "Teams Competed" },
      { number: "48",   label: "Games Played" },
      { number: "320+", label: "Athletes" },
      { number: "5K+",  label: "Spectators" },
    ],
    sections: [
      {
        label: "Overview",
        h2: "Six Days of Elite Hoops",
        body: [
          "The 2024 Agroterra Basketball Tournament, held December 10–15, was the most competitive and widely watched basketball event in the academy's history. Sixteen teams from across the South-West and South-South geopolitical zones converged on Agroterra's state-of-the-art indoor arena for six days of high-intensity competition, drawing over 5,000 spectators and earning a dedicated broadcast slot on national television.",
          "The tournament featured men's and women's divisions, with prize money totalling ₦4.5 million — the largest purse ever offered at a regional club-level basketball event in Nigeria.",
        ],
      },
    ],
    pullQuote: {
      text: "\"I've played in Lagos and Abuja — but the level here was different. This tournament belongs on the national stage.\"",
      cite: "— Chukwuemeka 'Emeka' Obi, MVP | Lagos Thunderbolts",
    },
    highlights: {
      label: "Event Highlights",
      h2: "What Made the Tournament Unforgettable",
      items: [
        { icon: "📺", title: "National TV Broadcast", body: "NTA Sports aired four marquee games live, giving players and clubs unprecedented national visibility and exposing thousands of new fans to club-level Nigerian basketball." },
        { icon: "🏟️", title: "Sold-Out Finals", body: "The December 15 championship game was a sell-out, with fans queuing from 7 AM for a 3 PM tip-off — a testament to the growing prestige of the Agroterra Basketball Tournament." },
        { icon: "👩‍🏀", title: "Women's Division Debut", body: "2024 marked the introduction of a dedicated women's bracket featuring 8 teams. The final between Port Harcourt Gems and Lagos Queens drew an emotional standing ovation." },
        { icon: "🎓", title: "Scouts & Scholarships", body: "Three federation scouts attended, resulting in two athletes receiving invitations to the National Basketball League development programme." },
        { icon: "🤝", title: "Community Day", body: "On December 13, a free public skills clinic hosted over 150 children from neighbouring communities coached by tournament players." },
      ],
    },
    impact: {
      label: "Champions & Awards",
      h2: "Honours & Individual Awards",
      body: [],
      awards: [
        { icon: "🥇", text: "Men's Champions: Lagos Thunderbolts",   sub: "def. Calabar Storm 68–54" },
        { icon: "🥇", text: "Women's Champions: Port Harcourt Gems", sub: "def. Lagos Queens 55–48" },
        { icon: "🏅", text: "Men's MVP: Emeka Obi",                  sub: "24.3 PPG · 7.1 RPG · 5.4 APG" },
        { icon: "🏅", text: "Women's MVP: Ifeoma Nwosu",             sub: "28-pt semifinal performance" },
        { icon: "🛡️", text: "Best Defensive Team: Abuja Knights",    sub: "41 PPG allowed in group stage" },
        { icon: "⭐", text: "Rising Star: Tunde Adeyemi (17)",        sub: "Youngest player in the tournament" },
      ],
    },
    sidebar: {
      details: [
        { icon: "📅", label: "Dates",      value: "December 10–15, 2024" },
        { icon: "📍", label: "Venue",      value: "Agroterra Indoor Arena, Nigeria" },
        { icon: "🏀", label: "Teams",      value: "16 clubs (Men & Women)" },
        { icon: "👥", label: "Athletes",   value: "320+ players" },
        { icon: "🎟️", label: "Spectators", value: "5,000+ over 6 days" },
        { icon: "💰", label: "Prize Pool",  value: "₦4.5 million total" },
      ],
      awards: [
        { icon: "📺", text: "Featured on National TV",     sub: "NTA Sports live broadcast" },
        { icon: "🎓", text: "2 NBL Development Invites",   sub: "Scouted at the tournament" },
        { icon: "🤝", text: "Community Skills Clinic",     sub: "150+ children coached" },
      ],
      upcomingLabel: "2025 Tournament",
      upcomingTitle: "Coming December 2025",
      upcomingDesc:  "Team registrations open Q3 2025. Will your club compete?",
      upcomingCta:   "Register Your Team",
    },
    galleryImages: [basketb2, basketb1, basketb],
    galleryNote: "Full gallery on our website and social media. Tag @AgroterraAcademy.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type TableRow  = { place: string; athlete: string; country: string; time: string };
type AwardItem = { icon: string; text: string; sub: string };

interface RecapData {
  tag: string; badge: string; heroGradient: string; statsBarBg: string;
  title: string[]; titleEm: number[];
  meta: { icon: string; text: string }[];
  stats: { number: string; label: string }[];
  sections: { label: string; h2: string; body: string[] }[];
  pullQuote: { text: string; cite: string };
  highlights: { label: string; h2: string; items: { icon: string; title: string; body: string }[] };
  impact: { label: string; h2: string; body: string[]; table?: TableRow[]; awards?: AwardItem[] };
  sidebar: {
    details: { icon: string; label: string; value: string }[];
    awards: AwardItem[];
    upcomingLabel: string; upcomingTitle: string; upcomingDesc: string; upcomingCta: string;
  };
  galleryImages: StaticImageData[];
  galleryNote: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────────────────────────────────────

function MetaIcon({ type }: { type: string }) {
  const cls = "flex-shrink-0 opacity-80";
  if (type === "calendar") return (
    <svg className={cls} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
  if (type === "pin") return (
    <svg className={cls} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
  return (
    <svg className={cls} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function RecapDetail() {
  const { toggleTheme } = useTheme();
  const params = useParams();
  const slug   = typeof params?.slug === "string" ? params.slug : "";
  const recap  = recapsData[slug];

  if (!recap) {
    return (
      <div className={`min-h-screen pt-16 flex flex-col items-center justify-center ${toggleTheme ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-900"}`}>
        <p className="text-2xl font-bold mb-4">Recap not found</p>
        <Link href="/events" className="text-emerald-500 hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Past Events
        </Link>
      </div>
    );
  }

  const bg = toggleTheme ? "bg-slate-900" : "bg-gray-50";
  const card = toggleTheme ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200";
  const textMuted = toggleTheme ? "text-slate-400" : "text-slate-500";
  const textBody  = toggleTheme ? "text-slate-300" : "text-slate-600";
  const textHead  = toggleTheme ? "text-emerald-100" : "text-slate-900";

  return (
    <div className={`min-h-screen pt-16 ${bg} transition-colors duration-300`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0" style={{ background: recap.heroGradient }} />
        {/* subtle pattern */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }} />
        {/* badge */}
        <div className="absolute top-10 left-8 sm:left-12 bg-yellow-400 text-slate-900 text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-sm flex items-center gap-2">
          ★ {recap.badge}
        </div>
        <div className="relative pb-14 pl-8 sm:pl-12 pr-6 max-w-4xl">
          <span className="inline-block mb-5 text-[11px] font-semibold tracking-[3px] uppercase text-white/80 border border-white/20 bg-white/10 px-3 py-1 rounded-sm">
            {recap.tag}
          </span>
          <h1 className="text-white leading-none mb-5"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px,8vw,92px)", letterSpacing: "1px" }}>
            {recap.title.map((word, i) => (
              <span key={i}>
                {recap.titleEm.includes(i)
                  ? <em className="not-italic text-yellow-400">{word}</em>
                  : word}
                {i < recap.title.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <div className="flex flex-wrap gap-5">
            {recap.meta.map((m, i) => (
              <span key={i} className="flex items-center gap-2 text-white/75 text-[13px]">
                <MetaIcon type={m.icon} /> {m.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className={`px-6 sm:px-12 py-3 text-[13px] flex items-center gap-2 border-b ${toggleTheme ? "bg-slate-800 text-slate-400 border-slate-700" : "bg-white text-slate-500 border-gray-200"}`}>
        <Link href="/" className="text-emerald-500 hover:underline">Home</Link>
        <span className="text-gray-400">›</span>
        <Link href="/events" className="text-emerald-500 hover:underline">Events</Link>
        <span className="text-gray-400">›</span>
        <Link href="/events/recaps" className="text-emerald-500 hover:underline">Recaps</Link>
        <span className="text-gray-400">›</span>
        <span className="truncate max-w-[180px]">{recap.title.join(" ")}</span>
      </div>

      {/* ── STATS STRIP ── */}
      <div style={{ background: recap.statsBarBg }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-2 sm:grid-cols-4">
          {recap.stats.map((s, i) => (
            <div key={i} className="py-7 px-4 text-center border-r border-white/10 last:border-r-0">
              <div className="text-yellow-400 leading-none mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px,5vw,52px)" }}>
                {s.number}
              </div>
              <div className="text-[11px] uppercase tracking-[1.5px] text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

        {/* ── ARTICLE ── */}
        <main>

          {/* Overview sections */}
          {recap.sections.map((sec, i) => (
            <div key={i} className="mb-12">
              <p className="text-[10px] font-bold tracking-[3px] uppercase text-emerald-500 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-gray-200">
                {sec.label}
              </p>
              <h2 className={`text-3xl mb-5 ${textHead}`}
                style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}>
                {sec.h2}
              </h2>
              {sec.body.map((p, j) => (
                <p key={j} className={`text-base leading-[1.85] mb-4 ${textBody}`}>{p}</p>
              ))}
            </div>
          ))}

          {/* Pull Quote */}
          <blockquote className={`border-l-4 border-emerald-500 pl-7 py-5 pr-4 rounded-r-xl mb-12 ${toggleTheme ? "bg-emerald-950/30" : "bg-emerald-50"}`}>
            <p className={`text-xl leading-relaxed ${toggleTheme ? "text-emerald-200" : "text-emerald-900"}`}
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>
              {recap.pullQuote.text}
            </p>
            <cite className={`block mt-3 text-[13px] not-italic font-semibold ${textMuted}`}>
              {recap.pullQuote.cite}
            </cite>
          </blockquote>

          {/* Highlights */}
          <div className="mb-12">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-emerald-500 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-gray-200">
              {recap.highlights.label}
            </p>
            <h2 className={`text-3xl mb-6 ${textHead}`}
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}>
              {recap.highlights.h2}
            </h2>
            <ul>
              {recap.highlights.items.map((item, i) => (
                <li key={i} className={`flex gap-4 items-start py-4 border-b ${toggleTheme ? "border-slate-700" : "border-gray-100"} last:border-b-0`}>
                  <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <p className={`text-[15px] leading-relaxed ${textBody}`}>
                    <strong className={toggleTheme ? "text-emerald-100" : "text-slate-900"}>{item.title}:</strong>{" "}
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact / Results */}
          <div className="mb-12">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-emerald-500 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-gray-200">
              {recap.impact.label}
            </p>
            <h2 className={`text-3xl mb-6 ${textHead}`}
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}>
              {recap.impact.h2}
            </h2>
            {recap.impact.body.map((p, i) => (
              <p key={i} className={`text-base leading-[1.85] mb-4 ${textBody}`}>{p}</p>
            ))}

            {/* Marathon results table */}
            {recap.impact.table && (
              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-4">
                <table className="w-full text-[14px] border-collapse">
                  <thead>
                    <tr style={{ background: "#0a7c4e" }}>
                      {["Place","Athlete","Country","Finish Time"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-white font-semibold text-[11px] uppercase tracking-[1.5px]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recap.impact.table.map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? (toggleTheme ? "bg-slate-700" : "bg-emerald-50/50") : ""}>
                        <td className={`px-4 py-3 border-b ${toggleTheme ? "border-slate-700 text-slate-300" : "border-gray-100 text-slate-700"}`}>{row.place}</td>
                        <td className={`px-4 py-3 border-b font-medium ${toggleTheme ? "border-slate-700 text-slate-200" : "border-gray-100 text-slate-800"}`}>{row.athlete}</td>
                        <td className={`px-4 py-3 border-b ${toggleTheme ? "border-slate-700 text-slate-300" : "border-gray-100 text-slate-600"}`}>{row.country}</td>
                        <td className={`px-4 py-3 border-b font-semibold text-emerald-600 ${toggleTheme ? "border-slate-700" : "border-gray-100"}`}>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Basketball awards list */}
            {recap.impact.awards && (
              <ul className="mt-4">
                {recap.impact.awards.map((a, i) => (
                  <li key={i} className={`flex items-start gap-4 py-3 border-b ${toggleTheme ? "border-slate-700" : "border-gray-100"} last:border-b-0`}>
                    <span className="text-xl">{a.icon}</span>
                    <div>
                      <p className={`text-[14px] font-semibold ${textHead}`}>{a.text}</p>
                      <p className={`text-[13px] ${textMuted}`}>{a.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ── GALLERY ── */}
          <div className="mb-12">
            <p className="text-[10px] font-bold tracking-[3px] uppercase text-emerald-500 mb-3 flex items-center gap-3 after:flex-1 after:h-px after:bg-gray-200">
              Photo Gallery
            </p>
            <h2 className={`text-3xl mb-6 ${textHead}`}
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}>
              Moments from the Event
            </h2>

            <div className="grid grid-cols-3 gap-3">
              {recap.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden ${
                    i === 0 ? "col-span-3 aspect-[16/7]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${recap.title.join(" ")} — gallery photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes={i === 0 ? "100vw" : "33vw"}
                  />
                </div>
              ))}
            </div>

            <p className={`mt-4 text-[13px] italic ${textMuted}`}>{recap.galleryNote}</p>
          </div>

          {/* Back link */}
          <Link href="/events"
            className="inline-flex items-center gap-2 text-emerald-500 font-semibold text-sm hover:gap-3 transition-all duration-200">
            <FaArrowLeft /> Back to All Past Events
          </Link>
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="flex flex-col gap-6">

          {/* Event details */}
          <div className={`rounded-2xl overflow-hidden border ${card}`}>
            <div className="px-5 py-3 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-[2px]">
              Event Details
            </div>
            <div className="p-5 flex flex-col gap-4">
              {recap.sidebar.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg">{d.icon}</span>
                  <div>
                    <p className={`text-[11px] font-semibold uppercase tracking-[1px] ${textMuted}`}>{d.label}</p>
                    <p className={`text-[14px] font-medium ${textHead}`}>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className={`rounded-2xl overflow-hidden border ${card}`}>
            <div className="px-5 py-3 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-[2px]">
              Awards & Recognition
            </div>
            <div className="p-5 flex flex-col gap-4">
              {recap.sidebar.awards.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <p className={`text-[14px] font-semibold ${textHead}`}>{a.text}</p>
                    <p className={`text-[12px] ${textMuted}`}>{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className={`rounded-2xl overflow-hidden border ${card}`}>
            <div className="px-5 py-3 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-[2px]">
              Share This Recap
            </div>
            <div className="p-5 grid grid-cols-2 gap-2">
              {[
                { icon: <FaFacebook />, label: "Facebook",  href: "#" },
                { icon: <FaTwitter />,  label: "Twitter",   href: "#" },
                { icon: <FaInstagram />,label: "Instagram", href: "#" },
                { icon: <FaLink />,     label: "Copy Link", href: "#" },
              ].map(btn => (
                <a key={btn.label} href={btn.href}
                  className={`flex items-center gap-2 text-[13px] font-medium px-3 py-2 rounded-lg border transition-colors duration-200
                    ${toggleTheme
                      ? "border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400"
                      : "border-gray-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600"}`}>
                  {btn.icon} {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Upcoming CTA */}
          <div className="rounded-2xl overflow-hidden border border-emerald-500/50 bg-emerald-500/5">
            <div className="px-5 py-3 bg-emerald-800 text-white text-[11px] font-bold uppercase tracking-[2px]">
              {recap.sidebar.upcomingLabel}
            </div>
            <div className="p-5">
              <p className={`text-[14px] font-bold mb-1 ${textHead}`}>{recap.sidebar.upcomingTitle}</p>
              <p className={`text-[13px] mb-4 ${textMuted}`}>{recap.sidebar.upcomingDesc}</p>
              <Link href="/contact"
                className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-[14px] font-semibold py-3 rounded-xl transition-colors duration-200">
                {recap.sidebar.upcomingCta}
              </Link>
            </div>
          </div>

          {/* Other recaps */}
          <div className={`rounded-2xl overflow-hidden border ${card}`}>
            <div className="px-5 py-3 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-[2px]">
              Other Recaps
            </div>
            <div className="p-3 flex flex-col gap-1">
              {[
                { slug: "wamufat-foundation",  label: "WamuFat Foundation Program" },
                { slug: "lagos-marathon",       label: "2025 Lagos Marathon" },
                { slug: "basketball-tournament",label: "2024 Basketball Tournament" },
              ].filter(r => r.slug !== slug).map(r => (
                <Link key={r.slug} href={`/events/recaps/${r.slug}`}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-[13px] font-medium transition-colors duration-200
                    ${toggleTheme
                      ? "text-slate-300 hover:bg-slate-700 hover:text-emerald-400"
                      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"}`}>
                  {r.label}
                  <FaChevronRight className="text-[10px] opacity-60" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── FOOTER CTA ── */}
      <section className={`py-14 px-6 text-center ${toggleTheme ? "bg-slate-800" : "bg-gray-100"}`}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-emerald-500">Don&apos;t Miss the Next Event</h2>
        <p className={`text-base mb-7 max-w-xl mx-auto ${textMuted}`}>
          Register for an upcoming event and be part of the Agroterra Sport Academy experience.
        </p>
        <Link href="/events"
          className="inline-block px-8 py-3.5 rounded-full font-semibold text-base bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300">
          See Upcoming Events
        </Link>
      </section>
    </div>
  );
}