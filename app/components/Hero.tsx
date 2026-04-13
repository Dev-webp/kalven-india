"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: 200, suffix: "+", label: "Clients served" },
  { num: 95,  suffix: "%", label: "Placement rate" },
  { num: 7,   suffix: " days", label: "Avg hire time" },
];

function useCountUp(ref, target, suffix, duration = 2000) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix, duration]);
}

function StatItem({ num, suffix, label }) {
  const ref = useRef(null);
  useCountUp(ref, num, suffix);
  return (
    <div className="stat-item">
      <div ref={ref} className="stat-num">0{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const Hero = () => (
  <section id="home" style={{
    display: "flex",
    alignItems: "center",
    background: "#ffffff",
    padding: "20px 2rem 40px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* Background decoration blobs */}
    <div style={{
      position: "absolute", top: "-120px", right: "-100px",
      width: "500px", height: "500px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />
    <div style={{
      position: "absolute", bottom: "-80px", left: "-80px",
      width: "350px", height: "350px", borderRadius: "50%",
      background: "radial-gradient(circle, rgba(107,33,168,0.05) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <style>{`
      .hero-grid {
        max-width: 1160px;
        margin: 0 auto;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 1;
      }
      .hero-left { display: flex; flex-direction: column; gap: 1.4rem; }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(107,33,168,0.07);
        border: 1px solid rgba(107,33,168,0.18);
        border-radius: 100px;
        padding: 5px 15px;
        font-size: 12px;
        font-weight: 600;
        color: #5B21B6;
        letter-spacing: 0.02em;
        width: fit-content;
      }
      .hero-badge-dot {
        width: 7px; height: 7px;
        background: #7C3AED;
        border-radius: 50%;
        animation: blink 2s infinite;
        flex-shrink: 0;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.25; }
      }

      .hero-h1 {
        font-size: clamp(1.8rem, 3.5vw, 2.85rem);
        font-weight: 800;
        line-height: 1.15;
        color: #1E1B4B;
        margin: 0;
        letter-spacing: -0.02em;
      }
      .hero-accent {
        background: linear-gradient(135deg, #7C3AED, #4C1D95);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-p {
        font-size: 1rem;
        color: #4B5563;
        line-height: 1.75;
        margin: 0;
        max-width: 480px;
      }

      .hero-btns {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .btn-primary {
        background: linear-gradient(135deg, #7C3AED, #6B21A8);
        color: #fff;
        border: none;
        padding: 12px 26px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        letter-spacing: 0.01em;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: transform 0.18s, box-shadow 0.18s;
        box-shadow: 0 4px 16px rgba(107,33,168,0.3);
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 22px rgba(107,33,168,0.4);
      }
      .btn-secondary {
        background: #fff;
        color: #6B21A8;
        border: 1.5px solid rgba(107,33,168,0.28);
        padding: 12px 26px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: transform 0.18s, background 0.18s;
      }
      .btn-secondary:hover {
        background: #F5F3FF;
        border-color: #7C3AED;
        transform: translateY(-2px);
      }

      .hero-stats {
        display: flex;
        gap: 0;
        padding-top: 0.4rem;
        flex-wrap: wrap;
      }
      .stat-item {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 0 1.5rem 0 0;
      }
      .stat-item:first-child { padding-left: 0; }
      .stat-item + .stat-item {
        padding-left: 1.5rem;
        border-left: 1px solid rgba(107,33,168,0.14);
      }
      .stat-num {
        font-size: 1.6rem;
        font-weight: 800;
        color: #1E1B4B;
        line-height: 1;
        letter-spacing: -0.02em;
      }
      .stat-label {
        font-size: 11px;
        color: #6B7280;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .hero-right {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-height: 400px;
      }

      .float-card {
        position: absolute;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 24px rgba(107,33,168,0.12);
        padding: 9px 13px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 600;
        color: #1E1B4B;
        white-space: nowrap;
        border: 1px solid rgba(107,33,168,0.1);
      }
      .float-card.card-1 {
        top: 6%; left: -6%;
        animation: floatY 3s ease-in-out infinite 0s;
      }
      .float-card.card-2 {
        bottom: 10%; right: -6%;
        animation: floatY 3s ease-in-out infinite 1s;
      }
      .float-card.card-3 {
        top: 40%; right: -10%;
        animation: floatY 3s ease-in-out infinite 2s;
      }
      @keyframes floatY {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-7px); }
      }
      .card-icon {
        width: 28px; height: 28px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        flex-shrink: 0;
      }
      .card-icon.purple { background: #EDE9FE; }
      .card-icon.green  { background: #D1FAE5; }
      .card-icon.blue   { background: #DBEAFE; }
      .card-sub { font-size: 11px; color: #6B7280; font-weight: 400; }

      @media (max-width: 1024px) {
        .hero-grid {
          gap: 3rem;
        }
        .hero-right {
          min-height: 350px;
        }
      }

      @media (max-width: 860px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
          text-align: center;
        }
        .hero-badge { margin: 0 auto; }
        .hero-p { margin: 0 auto; }
        .hero-btns { justify-content: center; }
        .hero-stats { justify-content: center; }
        .hero-right { 
          min-height: 320px;
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
        }
        .float-card.card-1 { left: 10%; top: 5%; }
        .float-card.card-2 { right: 10%; bottom: 5%; }
        .float-card.card-3 { right: 5%; top: 35%; }
      }

      @media (max-width: 640px) {
        .hero-grid {
          gap: 2rem;
        }
        .hero-h1 { 
          font-size: 1.6rem; 
          text-align: center;
        }
        .hero-p { 
          font-size: 0.95rem;
          margin: 0 auto;
        }
        .hero-right { 
          min-height: 300px;
          max-width: 380px;
        }
        .float-card {
          padding: 7px 10px;
          font-size: 11px;
        }
        .card-icon {
          width: 24px;
          height: 24px;
          font-size: 12px;
        }
        .float-card.card-1 { left: 5%; top: 10%; }
        .float-card.card-2 { right: 5%; bottom: 10%; }
        .float-card.card-3 { right: 0%; top: 40%; }
      }

      @media (max-width: 480px) {
        #home {
          padding: 10px 1rem 30px;
        }
        .hero-grid {
          gap: 1.5rem;
        }
        .hero-h1 { 
          font-size: 1.45rem;
        }
        .hero-btns {
          justify-content: center;
          gap: 8px;
        }
        .btn-primary,
        .btn-secondary {
          padding: 10px 20px;
          font-size: 13px;
        }
        .hero-right {
          min-height: 280px;
          max-width: 100%;
        }
        .float-card {
          padding: 6px 8px;
          font-size: 10px;
          border-radius: 8px;
        }
        .card-icon {
          width: 20px;
          height: 20px;
          font-size: 11px;
        }
        .stat-item {
          padding: 0 1rem 0 0;
        }
        .stat-item + .stat-item {
          padding-left: 1rem;
        }
        .stat-num {
          font-size: 1.35rem;
        }
        .stat-label {
          font-size: 9px;
        }
      }
    `}</style>

    <div className="hero-grid">
      {/* LEFT — Text content */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          India's trusted IT & staffing partner
        </div>

        <h1 className="hero-h1">
          Building digital products &{" "}
          <span className="hero-accent">hiring top talent</span>
          {" "}— for India.
        </h1>

        <p className="hero-p">
          From custom web & app development to end-to-end IT recruitment,
          Kalven IT Group helps Indian businesses grow faster with the right
          technology and the right people.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Talk to us</a>
          <a href="#services" className="btn-secondary">See our services →</a>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <StatItem key={s.label} num={s.num} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>

      {/* RIGHT — SVG Illustration + floating cards */}
      <div className="hero-right">
        <div className="float-card card-1">
          <div className="card-icon purple">🚀</div>
          <div>
            <div className="card-sub">Projects delivered</div>
            <div>200+ clients</div>
          </div>
        </div>

        <div className="float-card card-2">
          <div className="card-icon green">✅</div>
          <div>
            <div className="card-sub">Placement rate</div>
            <div>95% success</div>
          </div>
        </div>

        <div className="float-card card-3">
          <div className="card-icon blue">⚡</div>
          <div>
            <div className="card-sub">Avg hire time</div>
            <div>7 days</div>
          </div>
        </div>

        <svg
          viewBox="0 0 420 420"
          width="100%"
          style={{ maxWidth: "100%", height: "auto" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="210" cy="210" r="180" fill="rgba(124,58,237,0.03)" stroke="rgba(124,58,237,0.1)" strokeWidth="1" strokeDasharray="6 4" />
          <circle cx="210" cy="210" r="130" fill="rgba(107,33,168,0.04)" stroke="rgba(107,33,168,0.08)" strokeWidth="1" />

          <rect x="130" y="145" width="160" height="130" rx="14" fill="#fff" stroke="rgba(107,33,168,0.16)" strokeWidth="1.5" />
          <rect x="130" y="145" width="160" height="32" rx="14" fill="#7C3AED" />
          <rect x="130" y="161" width="160" height="16" fill="#7C3AED" />
          <circle cx="148" cy="161" r="4" fill="rgba(255,255,255,0.45)" />
          <circle cx="162" cy="161" r="4" fill="rgba(255,255,255,0.45)" />
          <circle cx="176" cy="161" r="4" fill="rgba(255,255,255,0.45)" />

          <rect x="148" y="192" width="90" height="8" rx="4" fill="#EDE9FE" />
          <rect x="148" y="208" width="64" height="7" rx="3.5" fill="#F3F0FF" />
          <rect x="148" y="222" width="76" height="7" rx="3.5" fill="#F3F0FF" />
          <circle cx="256" cy="218" r="12" fill="#7C3AED" opacity="0.12" />
          <circle cx="256" cy="218" r="7"  fill="#7C3AED" opacity="0.45" />

          <rect x="130" y="255" width="160" height="20" rx="0" fill="rgba(237,233,254,0.45)" />
          <rect x="148" y="261" width="40" height="6" rx="3" fill="#7C3AED" opacity="0.55" />
          <rect x="196" y="261" width="30" height="6" rx="3" fill="#A855F7" opacity="0.35" />

          {/* Node — top */}
          <line x1="210" y1="145" x2="210" y2="90" stroke="rgba(107,33,168,0.18)" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="210" cy="78" r="22" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="210" y="74" textAnchor="middle" fontSize="15" fill="#7C3AED">💻</text>
          <text x="210" y="86" textAnchor="middle" fontSize="9" fill="#5B21B6" fontWeight="600">Dev</text>

          {/* Node — right */}
          <line x1="290" y1="210" x2="342" y2="210" stroke="rgba(107,33,168,0.18)" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="354" cy="210" r="22" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="354" y="206" textAnchor="middle" fontSize="15" fill="#7C3AED">🤝</text>
          <text x="354" y="218" textAnchor="middle" fontSize="9" fill="#5B21B6" fontWeight="600">Hire</text>

          {/* Node — bottom */}
          <line x1="210" y1="275" x2="210" y2="330" stroke="rgba(107,33,168,0.18)" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="210" cy="342" r="22" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="210" y="338" textAnchor="middle" fontSize="15" fill="#7C3AED">📈</text>
          <text x="210" y="350" textAnchor="middle" fontSize="9" fill="#5B21B6" fontWeight="600">Grow</text>

          {/* Node — left */}
          <line x1="130" y1="210" x2="78" y2="210" stroke="rgba(107,33,168,0.18)" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="66" cy="210" r="22" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
          <text x="66" y="206" textAnchor="middle" fontSize="15" fill="#7C3AED">☁️</text>
          <text x="66" y="218" textAnchor="middle" fontSize="9" fill="#5B21B6" fontWeight="600">Cloud</text>

          <circle cx="290" cy="100" r="5" fill="#A855F7" opacity="0.35" />
          <circle cx="120" cy="310" r="4" fill="#7C3AED" opacity="0.25" />
          <circle cx="330" cy="320" r="6" fill="#6D28D9" opacity="0.18" />
          <circle cx="90"  cy="110" r="5" fill="#8B5CF6" opacity="0.3"  />
        </svg>
      </div>
    </div>
  </section>
);

export default Hero;