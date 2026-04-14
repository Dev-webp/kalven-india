"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const steps = [
  {
    label: "Preparing",
    desc: "Define the role before going live.",
    full: "We align with your hiring team to craft precise job descriptions, establish realistic salary bands, and map out the full interview panel — so everyone is set up for success from day one.",
    points: [
      "Craft targeted job descriptions with must-have skills",
      "Set transparent salary ranges & timelines",
      "Map your interview panel and decision process",
    ],
    tip: "A well-defined job description reduces mis-hires by up to 40%.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="13" y2="15" />
      </svg>
    ),
  },
  {
    label: "Onboarding",
    desc: "Coordinate interviews seamlessly.",
    full: "Our structured scheduling engine ensures candidates get timely invites, prep materials and panel context well before interviews — while hiring managers receive real-time consolidated feedback after every round.",
    points: [
      "Send structured interview invites with prep packs",
      "Share panel bios so candidates feel confident",
      "Collect real-time feedback on a shared scorecard",
    ],
    tip: "Structured feedback forms cut decision time in half across panels.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Hiring",
    desc: "Close with a seamless offer experience.",
    full: "We handle the final mile — offer letter drafting, contract dispatch, and pre-boarding checklists — so new hires feel welcomed before their first day. A buddy assignment and day-one agenda removes first-day anxiety entirely.",
    points: [
      "Draft & dispatch offer letters and contracts",
      "Kick off pre-boarding tasks and IT setup",
      "Set day-one agenda with buddy assignment",
    ],
    tip: "Pre-boarding checklists reduce early attrition by keeping excitement high.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Sourcing",
    desc: "Build a deep, qualified talent pipeline.",
    full: "Using a multi-channel sourcing strategy — job boards, LinkedIn, employee referrals, ATS mining and Boolean passive-candidate searches — we ensure you never rely on a single pool of talent.",
    points: [
      "Post across job boards, LinkedIn & niche portals",
      "Mine your ATS and activate employee referrals",
      "Boolean search unlocks passive top-tier candidates",
    ],
    tip: "Referral hires are 4× more likely to stay beyond 2 years.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="17" y1="17" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    label: "Selection",
    desc: "Make objective, confident final decisions.",
    full: "Structured debrief sessions, comparative scorecards, reference checks and background verification ensure the final hire is the right one — and a prompt, competitive offer keeps top candidates from slipping away.",
    points: [
      "Panel debrief with comparative scorecards",
      "Reference checks & background verification",
      "Prompt competitive offers that close top talent",
    ],
    tip: "Delays in extending offers cost companies 1 in 3 top candidates.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "Screening",
    desc: "Filter fast — focus on the best profiles.",
    full: "Every applicant is run through a rigorous must-have criteria checklist, followed by a short structured screening call. Shared scorecards mean your team only spends time on candidates who truly fit.",
    points: [
      "Resume review against must-have skill criteria",
      "Short structured phone or video screening call",
      "Shared scorecards keep the whole team aligned",
    ],
    tip: "Shared scorecards eliminate 60% of subjective bias in resume review.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const VIOLET = "#7c3aed";
const NAVY = "#1a1f5e";
const SEG_COLORS = [VIOLET, NAVY, VIOLET, NAVY, VIOLET, NAVY];

/* ─────────────────────────────────────────────
   DONUT HELPERS
───────────────────────────────────────────── */
function polarToXY(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function buildArc(cx: number, cy: number, R: number, ri: number, startDeg: number, endDeg: number): string {
  const [x1, y1] = polarToXY(cx, cy, R, startDeg);
  const [x2, y2] = polarToXY(cx, cy, R, endDeg);
  const [x3, y3] = polarToXY(cx, cy, ri, endDeg);
  const [x4, y4] = polarToXY(cx, cy, ri, startDeg);
  const lg = endDeg - startDeg > 180 ? 1 : 0;
  return `M${x1} ${y1} A${R} ${R} 0 ${lg} 1 ${x2} ${y2} L${x3} ${y3} A${ri} ${ri} 0 ${lg} 0 ${x4} ${y4}Z`;
}

interface DonutProps {
  current: number;
  onSelect: (i: number) => void;
}

function DonutChart({ current, onSelect }: DonutProps) {
  const n = steps.length;
  const gap = 5;
  const slice = 360 / n;

  // slightly larger donut
  const cx = 120;
  const cy = 120;
  const R = 108;     // was 98
  const ri = 60;     // was 54
  const labelR = R + 18;

  return (
    <svg
      viewBox="0 0 240 240"
      width="100%"
      style={{ maxWidth: 240, height: "auto", overflow: "visible" }}
    >
      {steps.map((step, i) => {
        const start = i * slice + gap / 2;
        const end = (i + 1) * slice - gap / 2;
        const mid = (start + end) / 2;
        const [ix, iy] = polarToXY(cx, cy, (R + ri) / 2, mid);
        const [lx, ly] = polarToXY(cx, cy, labelR, mid);
        const angle = mid % 360;
        const anchor =
          angle > 10 && angle < 170
            ? "start"
            : angle > 190 && angle < 350
            ? "end"
            : "middle";
        const isActive = i === current;
        const color = SEG_COLORS[i];
        return (
          <g key={i} style={{ cursor: "pointer" }} onClick={() => onSelect(i)}>
            <path
              d={buildArc(cx, cy, R, ri, start, end)}
              fill={color}
              opacity={isActive ? 1 : 0.18}
              style={{ transition: "opacity 0.35s" }}
            />
            <g
              transform={`translate(${ix - 9}, ${iy - 9})`}
              style={{ opacity: isActive ? 1 : 0.45, transition: "opacity 0.35s" }}
            >
              {step.icon}
            </g>
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize="8"
              fontWeight="700"
              fontFamily="'DM Sans',system-ui,sans-serif"
              fill={isActive ? color : "#9ca3af"}
              style={{ transition: "fill 0.35s" }}
            >
              {step.label}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={ri - 3} fill="#f5f3ff" />
      <text
        x={cx}
        y={cy - 9}
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="800"
        fontFamily="'DM Sans',system-ui"
        fill={NAVY}
      >
        Full Cycle
      </text>
      <text
        x={cx}
        y={cy + 6}
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="700"
        fontFamily="'DM Sans',system-ui"
        fill={VIOLET}
      >
        Recruiting
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function HomePage() {
  const [current, setCurrent] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    if (timerRef.current !== null) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % steps.length),
      3800
    );
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % steps.length),
      3800
    );
    return () => {
      if (timerRef.current !== null) clearInterval(timerRef.current);
    };
  }, []);

  const step = steps[current];
  const activeColor = SEG_COLORS[current];

  return (
    <main
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        backgroundColor: "#ffffff", // overall white theme
        color: "#0f172a",
      }}
    >
      {/* ══════════════════════════════════════════════
          HERO — 65 / 35 intro (white, reduced padding)
      ══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#ffffff",
          minHeight: "auto", // no forced full viewport height
          padding: "32px 6vw", // reduced top/bottom space
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* light grid overlay (very subtle) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(#e5e7eb 1px,transparent 1px),linear-gradient(90deg,#e5e7eb 1px,transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <style>{`
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
          @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
          .step-anim { animation: fadeUp 0.28s ease forwards; }

          .intro-grid {
            display: grid;
            grid-template-columns: 60% 40%;
            gap: 3.5rem;
            width: 100%;
            max-width: 1140px;
            align-items: center;
            position: relative;
            z-index: 1;
          }
          @media (max-width: 860px) {
            .intro-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          }

          .mini-card2 {
            background: #fff;
            border-radius: 10px;
            padding: 10px 10px 8px;
            cursor: pointer;
            border: 1.5px solid transparent;
            transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
          }
          .mini-card2:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(124,58,237,0.1); }
          .mini-card2.active { border-color: ${VIOLET}; box-shadow: 0 3px 14px rgba(124,58,237,0.14); }

          .prog-dot2 {
            width: 6px; height: 6px; border-radius: 50%;
            background: #d1d5db; border: none; padding: 0; cursor: pointer;
            transition: background 0.3s, transform 0.3s;
          }
          .prog-dot2.active { background: ${VIOLET}; transform: scale(1.4); }

          .lc-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            width: 100%;
            max-width: 1100px;
            align-items: stretch;
          }
          .lc-left {
            display: flex; flex-direction: column;
            justify-content: space-between; gap: 14px;
          }
          .lc-right {
            display: flex; flex-direction: column;
            justify-content: space-between; gap: 12px;
          }
          .mini-row2 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 7px;
          }
          @media (max-width: 860px) {
            .lc-grid { grid-template-columns: 1fr !important; }
            .lc-left { align-items: center; }
          }
          @media (max-width: 500px) {
            .mini-row2 { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        <div className="intro-grid">
          {/* LEFT */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(124,58,237,0.06)",
                border: "1px solid rgba(167,139,250,0.3)",
                borderRadius: 100,
                padding: "5px 15px",
                marginBottom: 18,
                fontSize: 10,
                fontWeight: 700,
                color: VIOLET,
                letterSpacing: "0.08em",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  background: VIOLET,
                  borderRadius: "50%",
                  animation: "blink 2s infinite",
                }}
              />
              INDIA&apos;S LEADING IT STAFFING PARTNER
            </div>

            <h1
              style={{
                fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              Connecting Great
             
                Talent
           
              to Great{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#6366f1,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Organisations.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(13px, 1.4vw, 15px)",
                color: "#4b5563",
                lineHeight: 1.85,
                margin: "0 0 10px",
                maxWidth: 580,
              }}
            >
              Kalven IT Group is a premier full life-cycle recruiting firm headquartered in India, specialising in technology, engineering, and business transformation talent. Founded on the belief that the right hire changes everything, we partner with startups and Fortune-500 enterprises alike to build high-performing teams — faster, smarter, and with zero compromise on quality.
            </p>

            <p
              style={{
                fontSize: "clamp(12px, 1.25vw, 14px)",
                color: "#6b7280",
                lineHeight: 1.8,
                margin: "0 0 24px",
                maxWidth: 560,
              }}
            >
              With over a decade of domain expertise, proprietary talent networks, and a consultative approach, Kalven IT Group has placed thousands of professionals across BFSI, SaaS, deep-tech, and infrastructure sectors. Every search begins with understanding your business — not just your job description.
            </p>

            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 14,
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#6d28d9",
                  fontWeight: 700,
                  marginBottom: 4,
                  letterSpacing: "0.06em",
                }}
              >
                TRUSTED BY
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#111827",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                Startups · Scale-ups · Enterprise
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#6b7280",
                  marginTop: 3,
                }}
              >
                BFSI · SaaS · Deep-tech · Infrastructure
              </div>
            </div>
          </div>

          {/* RIGHT: show image from /public/image.png */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                borderRadius: 22,
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                backgroundColor: "#f9fafb",
                position: "relative",
              }}
            >
              <Image
                src="/kalvenit1.jpg"
                alt="Kalven IT Group team"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — RECRUITING LIFECYCLE
      ══════════════════════════════════════════════ */}
      <section
        style={{
          background: "#f9fafb",
          padding: "40px 5vw 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div className="lc-grid">
          {/* LEFT */}
          <div className="lc-left">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#ede9fe",
                  border: "1px solid #c4b5fd",
                  borderRadius: 100,
                  padding: "4px 12px",
                  marginBottom: 10,
                  fontSize: 10,
                  fontWeight: 700,
                  color: VIOLET,
                  letterSpacing: "0.06em",
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    background: VIOLET,
                    borderRadius: "50%",
                    animation: "blink 2s infinite",
                  }}
                />
                HOW WE WORK
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.3vw, 1.95rem)",
                  fontWeight: 800,
                  color: NAVY,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                }}
              >
                Full Life Cycle <span style={{ color: VIOLET }}>Recruiting</span>
                <br />
                — Done Right.
              </h2>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#6b7280",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: 360,
                }}
              >
                From first brief to day-one, our six-stage process ensures every hire is the right one — delivered on time, every time.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <DonutChart current={current} onSelect={goTo} />
            </div>

            <div style={{ display: "flex", gap: 7, justifyContent: "center" }}>
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`prog-dot2${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lc-right">
            <div
              key={current}
              className="step-anim"
              style={{
                background: "#ffffff",
                borderRadius: 16,
                padding: "16px 18px",
                border: `1.5px solid ${activeColor}28`,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 9,
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: activeColor,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#9ca3af",
                      letterSpacing: "0.08em",
                      marginBottom: 1,
                    }}
                  >
                    STAGE {current + 1} OF {steps.length}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: NAVY,
                    }}
                  >
                    {step.label}
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: 12.5,
                  color: "#4b5563",
                  lineHeight: 1.68,
                  margin: 0,
                }}
              >
                {step.full}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {step.points.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: 12.5,
                      color: "#374151",
                    }}
                  >
                    <span
                      style={{
                        width: 17,
                        height: 17,
                        borderRadius: "50%",
                        background: `${activeColor}16`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                        <polyline
                          points="2 6 5 9 10 3"
                          stroke={activeColor}
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span style={{ lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: "auto",
                  background: `${activeColor}0c`,
                  border: `1px solid ${activeColor}20`,
                  borderRadius: 9,
                  padding: "9px 13px",
                  fontSize: 11.5,
                  color: activeColor,
                  fontWeight: 600,
                  lineHeight: 1.55,
                }}
              >
                💡 <strong>Pro tip:</strong> {step.tip}
              </div>
            </div>

            <div className="mini-row2">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`mini-card2${i === current ? " active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      background: SEG_COLORS[i],
                      borderRadius: 7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 5,
                      opacity: i === current ? 1 : 0.55,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: i === current ? SEG_COLORS[i] : NAVY,
                      lineHeight: 1.2,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#9ca3af",
                      marginTop: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}