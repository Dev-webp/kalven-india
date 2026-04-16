"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { name: "Ritika Sharma", role: "Operations Head, Retail", text: "Structure, speed, and real ownership. Our workflow efficiency improved dramatically within just a few weeks.", initials: "RS", bg: "#ede9fe", color: "#5b21b6" },
  { name: "Karan Mehta", role: "Founder, Fintech", text: "Perfect communication from day one. They understood our requirements fast and delivered well beyond expectations.", initials: "KM", bg: "#dbeafe", color: "#1d4ed8" },
  { name: "Priya Nair", role: "HR Director, Enterprise", text: "Smooth, professional, and dependable. An outstanding long-term partner — I'd recommend them without hesitation.", initials: "PN", bg: "#d1fae5", color: "#047857" },
  { name: "Amit Verma", role: "CTO, SaaS", text: "Startup speed with enterprise-grade clarity. Excellent implementation and rock-solid follow-through every time.", initials: "AV", bg: "#fef3c7", color: "#b45309" },
  { name: "Neha Kapoor", role: "Healthcare Director", text: "Consistent, fast, and incredibly detail-oriented. Their proactive team makes every collaboration feel effortless.", initials: "NK", bg: "#fce7f3", color: "#9d174d" },
  { name: "Rahul Patel", role: "CEO, E-commerce", text: "Delivered ahead of schedule with zero bugs. This is what a true partnership looks and feels like.", initials: "RP", bg: "#ecfdf5", color: "#166534" },
  { name: "Sneha Gupta", role: "Marketing VP", text: "Creative solutions backed by flawless execution. They exceeded every single KPI we set for the quarter.", initials: "SG", bg: "#fefce8", color: "#a16207" },
  { name: "Dev Anand", role: "Product Lead, B2B", text: "Thoughtful, reliable, and technically sharp. They elevated our entire product experience end-to-end.", initials: "DA", bg: "#eff6ff", color: "#1e40af" },
  { name: "Meera Joshi", role: "COO, Logistics", text: "Rapid delivery, zero handholding needed. They just get it — and that kind of clarity is incredibly rare.", initials: "MJ", bg: "#f0fdf4", color: "#166534" },
];

const AUTO_DURATION = 4500;
const COUNT_DURATION = 2800;

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [prog, setProg] = useState(0);
  const [counted, setCounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const statsRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverRef = useRef(false);

  const next = () => setCurrent((p) => (p + 1) % items.length);
  const prev = () => setCurrent((p) => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);
    if (hoverRef.current) return;
    let p = 0;
    tickRef.current = setInterval(() => {
      p += 100 / (AUTO_DURATION / 100);
      setProg(Math.min(100, p));
    }, 100);
    timerRef.current = setTimeout(() => setCurrent((c) => (c + 1) % items.length), AUTO_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [current]);

  useEffect(() => {
    if (!statsRef.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setCounted(true); }, { threshold: 0.35 });
    io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  const prevIdx = (current - 1 + items.length) % items.length;
  const nextIdx = (current + 1) % items.length;

  return (
    <section style={{ background: "white", padding: "60px 20px 0", fontFamily: "'Times New Roman', Times, serif", overflow: "hidden" }}>
      <style>{`
        .tm-section * { box-sizing: border-box; }

        .tm-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #f3f0ff;
          border: 1px solid #ddd6fe;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 11.5px;
          font-weight: 700;
          color: #6d28d9;
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .tm-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #7c3aed;
          animation: tmBlink 2s infinite;
        }

        @keyframes tmBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .tm-title {
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          font-weight: 800;
          color: #0f0a1e;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 0 10px;
        }

        .tm-sub {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        /* ── CAROUSEL LAYOUT ── */
        .tm-stage {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 0 40px;
          min-height: 340px;
        }

        /* The three slots are absolutely positioned so
           center is ALWAYS truly centered */
        .tm-slot {
          position: absolute;
          top: 50%;
          transition: transform .5s cubic-bezier(.16,1,.3,1),
                      opacity .5s cubic-bezier(.16,1,.3,1),
                      width .5s cubic-bezier(.16,1,.3,1),
                      filter .4s;
        }

        .tm-slot-left {
          transform: translate(calc(-50% - 230px), -50%) scale(0.88);
          opacity: 0.55;
          filter: blur(0.5px);
          width: min(340px, 90vw);
          z-index: 1;
        }

        .tm-slot-center {
          transform: translate(-50%, calc(-50% - 8px)) scale(1);
          opacity: 1;
          filter: none;
          width: min(400px, 90vw);
          z-index: 3;
          left: 50%;
        }

        .tm-slot-right {
          transform: translate(calc(-50% + 230px), -50%) scale(0.88);
          opacity: 0.55;
          filter: blur(0.5px);
          width: min(340px, 90vw);
          z-index: 1;
        }

        /* Mobile: only center */
        @media (max-width: 700px) {
          .tm-slot-left,
          .tm-slot-right { display: none; }
          .tm-slot-center {
            width: min(360px, 92vw);
            transform: translate(-50%, -50%) scale(1);
          }
          .tm-stage { min-height: 300px; }
        }

        /* ── CARD ── */
        .tm-card {
          background: #fff;
          border-radius: 24px;
          padding: 28px 26px 22px;
          border: 1.5px solid #e8e3f8;
          position: relative;
          overflow: hidden;
          transition: box-shadow .4s, border-color .4s;
        }

        .tm-card-center {
          border-color: #a78bfa;
          box-shadow:
            0 0 0 4px rgba(167,139,250,0.12),
            0 24px 60px rgba(109,40,217,.18),
            0 8px 20px rgba(109,40,217,.08);
        }

        .tm-card-side {
          box-shadow: 0 8px 24px rgba(15,23,42,.06);
          cursor: pointer;
        }

        .tm-card-side:hover {
          border-color: #c4b5fd;
          box-shadow: 0 16px 40px rgba(109,40,217,.12);
        }

        /* top accent bar */
        .tm-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s cubic-bezier(.16,1,.3,1);
          border-radius: 24px 24px 0 0;
        }

        .tm-card-center::before { transform: scaleX(1); }
        .tm-card-side:hover::before { transform: scaleX(1); }

        .tm-quote-icon {
          position: absolute;
          top: 10px; right: 16px;
          font-size: 64px;
          line-height: 1;
          font-family: Georgia, serif;
          color: #ede9fe;
          pointer-events: none;
          user-select: none;
        }

        .tm-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }

        .tm-star {
          width: 13px; height: 13px;
          background: #f59e0b;
          clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
        }

        .tm-text {
          font-size: 14px;
          line-height: 1.78;
          color: #374151;
          margin: 0 0 16px;
          font-weight: 400;
        }

        .tm-verified {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #f5f3ff;
          border: 1px solid #ede9fe;
          border-radius: 999px;
          padding: 3px 11px;
          font-size: 10.5px;
          color: #6d28d9;
          font-weight: 600;
          margin-bottom: 18px;
          letter-spacing: .02em;
        }

        .tm-verified-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #7c3aed;
        }

        .tm-divider {
          border: none;
          border-top: 1px solid #f1f5f9;
          margin: 0 0 14px;
        }

        .tm-footer {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .tm-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(0,0,0,.08);
          letter-spacing: .01em;
        }

        .tm-name {
          font-size: 13.5px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 2px;
          letter-spacing: -.01em;
        }

        .tm-role {
          font-size: 11.5px;
          color: #94a3b8;
          font-weight: 500;
        }

        /* ── NAV BUTTONS ── */
        .tm-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          cursor: pointer;
          color: #6b7280;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 6px 20px rgba(15,23,42,.08);
          transition: border-color .2s, color .2s, background .2s, transform .2s;
          line-height: 1;
        }

        .tm-nav-btn:hover {
          border-color: #7c3aed;
          color: #7c3aed;
          background: #f5f3ff;
          transform: translateY(-50%) scale(1.08);
        }

        .tm-nav-left { left: 0; }
        .tm-nav-right { right: 0; }

        @media (max-width: 700px) {
          .tm-nav-left { left: 4px; }
          .tm-nav-right { right: 4px; }
        }

        /* ── DOTS ── */
        .tm-dot {
          width: 6px; height: 6px;
          border-radius: 99px;
          background: #e2e8f0;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all .3s cubic-bezier(.16,1,.3,1);
        }

        .tm-dot-on {
          background: #7c3aed;
          width: 22px;
        }

        /* ── PROGRESS ── */
        .tm-prog-wrap {
          max-width: 400px;
          margin: 0 auto 0;
          height: 2px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }

        .tm-prog-bar {
          height: 100%;
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          border-radius: 99px;
          transition: width .1s linear;
        }

        /* ── STATS ── */
        .tm-stats {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
          border-top: 1px solid #e8e3f8;
          padding-top: 36px;
        }

        .tm-stat {
          text-align: center;
          padding: 0 32px;
          border-right: 1px solid #e8e3f8;
        }

        .tm-stat:last-child { border-right: none; }

        .tm-stat-num {
          font-size: 28px;
          font-weight: 800;
          color: #6d28d9;
          letter-spacing: -0.03em;
          line-height: 1;
          display: block;
        }

        .tm-stat-lbl {
          font-size: 11px;
          color: #94a3b8;
          margin-top: 5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .07em;
        }

        @media (max-width: 500px) {
          .tm-stat { padding: 12px 18px; border-right: none; }
          .tm-stats { gap: 0; }
        }
      `}</style>

      <div className="tm-section" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div className="tm-badge">
            <span className="tm-badge-dot" />
            Client testimonials
          </div>
          <h2 className="tm-title">
            Loved by teams{" "}
            <span style={{ color: "#6d28d9" }}>across India</span>
          </h2>
          <p className="tm-sub">Real feedback from businesses we&apos;ve proudly partnered with</p>
        </div>

        {/* Carousel */}
        <div
          className="tm-stage"
          onMouseEnter={() => {
            hoverRef.current = true;
            if (timerRef.current) clearTimeout(timerRef.current);
            if (tickRef.current) clearInterval(tickRef.current);
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
            setCurrent((c) => c);
          }}
        >
          {/* Left card */}
          {!isMobile && (
            <div className="tm-slot tm-slot-left" onClick={prev}>
              <div className="tm-card tm-card-side">
                <span className="tm-quote-icon">&ldquo;</span>
                <div className="tm-stars">{Array(5).fill(0).map((_, i) => <div key={i} className="tm-star" />)}</div>
                <p className="tm-text">{items[prevIdx].text}</p>
                <hr className="tm-divider" />
                <div className="tm-footer">
                  <div className="tm-avatar" style={{ background: items[prevIdx].bg, color: items[prevIdx].color }}>
                    {items[prevIdx].initials}
                  </div>
                  <div>
                    <div className="tm-name">{items[prevIdx].name}</div>
                    <div className="tm-role">{items[prevIdx].role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Center card — always truly centered */}
          <div className="tm-slot tm-slot-center">
            <div className="tm-card tm-card-center">
              <span className="tm-quote-icon">&ldquo;</span>
              <div className="tm-stars">{Array(5).fill(0).map((_, i) => <div key={i} className="tm-star" />)}</div>
              <p className="tm-text">{items[current].text}</p>
              <div className="tm-verified">
                <span className="tm-verified-dot" />
                Verified client
              </div>
              <hr className="tm-divider" />
              <div className="tm-footer">
                <div className="tm-avatar" style={{ background: items[current].bg, color: items[current].color }}>
                  {items[current].initials}
                </div>
                <div>
                  <div className="tm-name">{items[current].name}</div>
                  <div className="tm-role">{items[current].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          {!isMobile && (
            <div className="tm-slot tm-slot-right" onClick={next}>
              <div className="tm-card tm-card-side">
                <span className="tm-quote-icon">&ldquo;</span>
                <div className="tm-stars">{Array(5).fill(0).map((_, i) => <div key={i} className="tm-star" />)}</div>
                <p className="tm-text">{items[nextIdx].text}</p>
                <hr className="tm-divider" />
                <div className="tm-footer">
                  <div className="tm-avatar" style={{ background: items[nextIdx].bg, color: items[nextIdx].color }}>
                    {items[nextIdx].initials}
                  </div>
                  <div>
                    <div className="tm-name">{items[nextIdx].name}</div>
                    <div className="tm-role">{items[nextIdx].role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Nav buttons — outside the cards, anchored to stage edges */}
          <button className="tm-nav-btn tm-nav-left" onClick={prev}>&#8249;</button>
          <button className="tm-nav-btn tm-nav-right" onClick={next}>&#8250;</button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 0 }}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`tm-dot ${current === i ? "tm-dot-on" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// Stat item component
function StatItem({ stat, counted }: { stat: { label: string; target: number; decimals: boolean; suffix: string; delay: number }; counted: boolean }) {
  const display = useCountUpStat(stat.target, stat.decimals, stat.suffix, counted, stat.delay);
  return (
    <div className="tm-stat">
      <span className="tm-stat-num">{display}</span>
      <div className="tm-stat-lbl">{stat.label}</div>
    </div>
  );
}

// Inline hook usage workaround for mapping
function useCountUpStat(target: number, decimals: boolean, suffix: string, started: boolean, delay: number) {
  const [display, setDisplay] = useState("0" + suffix);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const frame = (now: number) => {
        const p = Math.min((now - startTime) / COUNT_DURATION, 1);
        const e = easeOutQuart(p);
        const val = decimals ? (target * e).toFixed(1) : Math.round(target * e);
        setDisplay(val + suffix);
        if (p < 1) { rafRef.current = requestAnimationFrame(frame); }
        else { setDisplay((decimals ? target.toFixed(1) : target) + suffix); }
      };
      rafRef.current = requestAnimationFrame(frame);
    }, delay);
    return () => { clearTimeout(timeout); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [started, target, decimals, suffix, delay]);

  return display;
}