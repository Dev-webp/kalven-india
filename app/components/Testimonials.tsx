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

const AUTO_DURATION = 4000;
const COUNT_DURATION = 2800;

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function useCountUp(
  target: number,
  decimals: boolean,
  suffix: string,
  started: boolean,
  delay = 0
) {
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

        if (p < 1) {
          rafRef.current = requestAnimationFrame(frame);
        } else {
          setDisplay((decimals ? target.toFixed(1) : target) + suffix);
        }
      };

      rafRef.current = requestAnimationFrame(frame);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, target, decimals, suffix, delay]);

  return display;
}

function StatItem({
  label,
  target,
  decimals,
  suffix,
  started,
  delay,
}: {
  label: string;
  target: number;
  decimals: boolean;
  suffix: string;
  started: boolean;
  delay: number;
}) {
  const display = useCountUp(target, decimals, suffix, started, delay);

  return (
    <div style={statStyle}>
      <div style={statNumStyle}>{display}</div>
      <div style={statLblStyle}>{label}</div>
    </div>
  );
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

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (tickRef.current) clearInterval(tickRef.current);

    setProg(0);
    if (hoverRef.current) return;

    let p = 0;
    tickRef.current = setInterval(() => {
      p += 100 / (AUTO_DURATION / 100);
      setProg(Math.min(100, p));
    }, 100);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, AUTO_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [current]);

  useEffect(() => {
    if (!statsRef.current) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCounted(true);
      },
      { threshold: 0.35 }
    );

    io.observe(statsRef.current);
    return () => io.disconnect();
  }, []);

  const visibleItems = isMobile
    ? [items[current]]
    : [
        items[(current - 1 + items.length) % items.length],
        items[current],
        items[(current + 1) % items.length],
      ];

  return (
    <section style={sectionStyle}>
      <style>{css}</style>

      <div style={innerStyle}>
        <div style={headStyle}>
          <span style={badgeStyle}>★ Client testimonials</span>
          <h2 style={titleStyle}>
            Loved by teams <span style={{ color: "#6d28d9" }}>across industries</span>
          </h2>
          <p style={subStyle}>Real feedback from businesses we&apos;ve partnered with</p>
        </div>

        <div
          style={carouselShellStyle}
          onMouseEnter={() => {
            hoverRef.current = true;
            if (timerRef.current) clearTimeout(timerRef.current);
            if (tickRef.current) clearInterval(tickRef.current);
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
            setCurrent((prev) => prev);
          }}
        >
          <button style={{ ...btnStyle, left: isMobile ? 8 : -10 }} className="ts-btn" onClick={prev}>
            &#8249;
          </button>

          <div style={viewportStyle}>
            <div style={railStyle}>
              {isMobile ? (
                <article className="ts-card ts-active" style={{ ...cardBase, ...centerCardStyle, width: "100%" }}>
                  <CardContent data={visibleItems[0]} />
                </article>
              ) : (
                <>
                  <article className="ts-card ts-side" style={{ ...cardBase, ...sideCardStyle }}>
                    <CardContent data={visibleItems[0]} />
                  </article>

                  <article className="ts-card ts-active" style={{ ...cardBase, ...centerCardStyle }}>
                    <CardContent data={visibleItems[1]} />
                  </article>

                  <article className="ts-card ts-side" style={{ ...cardBase, ...sideCardStyle }}>
                    <CardContent data={visibleItems[2]} />
                  </article>
                </>
              )}
            </div>
          </div>

          <button style={{ ...btnStyle, right: isMobile ? 8 : -10 }} className="ts-btn" onClick={next}>
            &#8250;
          </button>
        </div>

        <div style={navStyle}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {items.map((_, i) => (
              <button
                key={i}
                style={{ ...dotStyle, ...(current === i ? dotOnStyle : {}) }}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

        <div style={progWrapStyle}>
          <div style={{ ...progBarStyle, width: `${prog}%` }} />
        </div>

        <div ref={statsRef} style={statsStyle}>
          <StatItem label="Happy clients" target={500} decimals={false} suffix="+" started={counted} delay={0} />
          <StatItem label="Avg rating" target={4.9} decimals={true} suffix="★" started={counted} delay={150} />
          <StatItem label="Would recommend" target={98} decimals={false} suffix="%" started={counted} delay={300} />
          <StatItem label="Industries" target={12} decimals={false} suffix="+" started={counted} delay={450} />
        </div>
      </div>
    </section>
  );
}

function CardContent({ data }: { data: typeof items[number] }) {
  return (
    <>
      <div style={quoteIconStyle}>&ldquo;</div>

      <div style={starsStyle}>
        {Array(5).fill(0).map((_, s) => (
          <div key={s} style={starStyle} />
        ))}
      </div>

      <p style={textStyle}>{data.text}</p>

      <div style={chipStyle}>
        <span style={chipDotStyle} />
        Verified client
      </div>

      <hr style={dividerStyle} />

      <div style={footerStyle}>
        <div style={{ ...avatarStyle, background: data.bg, color: data.color }}>
          {data.initials}
        </div>
        <div>
          <div style={nameStyle}>{data.name}</div>
          <div style={roleStyle}>{data.role}</div>
        </div>
      </div>
    </>
  );
}

const sectionStyle: React.CSSProperties = {
  background: "#fff",
  padding: "36px 20px 32px",
  fontFamily: "system-ui, sans-serif",
  overflow: "hidden",
};

const innerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
};

const headStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 32,
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#ede9fe",
  color: "#6d28d9",
  fontSize: 12,
  fontWeight: 500,
  padding: "5px 16px",
  borderRadius: 999,
  border: "1px solid #ddd6fe",
  marginBottom: 12,
  letterSpacing: ".05em",
};

const titleStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 500,
  color: "#0f172a",
  lineHeight: 1.2,
  marginBottom: 8,
};

const subStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#64748b",
};

const carouselShellStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const viewportStyle: React.CSSProperties = {
  width: "100%",
  overflow: "hidden",
};

const railStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  gap: 18,
  transition: "all 0.45s cubic-bezier(.16,1,.3,1)",
};

const cardBase: React.CSSProperties = {
  background: "#fff",
  border: "1.5px solid #e5e7eb",
  borderRadius: 20,
  padding: "20px 18px 18px",
  position: "relative",
  overflow: "hidden",
  minHeight: 260,
};

const centerCardStyle: React.CSSProperties = {
  flex: "0 0 min(42%, 390px)",
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 24px 56px rgba(109,40,217,.16)",
  borderColor: "#a78bfa",
  zIndex: 3,
};

const sideCardStyle: React.CSSProperties = {
  flex: "0 0 min(29%, 280px)",
  opacity: 1,
  transform: "scale(0.96)",
  boxShadow: "0 10px 24px rgba(15,23,42,.05)",
};

const quoteIconStyle: React.CSSProperties = {
  position: "absolute",
  top: 8,
  right: 14,
  fontSize: 56,
  lineHeight: 1,
  fontFamily: "Georgia, serif",
  color: "#ede9fe",
  pointerEvents: "none",
};

const starsStyle: React.CSSProperties = {
  display: "flex",
  gap: 3,
  marginBottom: 12,
};

const starStyle: React.CSSProperties = {
  width: 12,
  height: 12,
  background: "#f59e0b",
  clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
};

const textStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.72,
  color: "#374151",
  marginBottom: 16,
};

const chipStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  background: "#f5f3ff",
  border: "1px solid #ede9fe",
  borderRadius: 999,
  padding: "3px 11px",
  fontSize: 11,
  color: "#6d28d9",
  fontWeight: 500,
  marginBottom: 16,
};

const chipDotStyle: React.CSSProperties = {
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: "#7c3aed",
  flexShrink: 0,
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1.5px solid #f1f5f9",
  marginBottom: 14,
};

const footerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const avatarStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 500,
  flexShrink: 0,
  boxShadow: "0 3px 10px rgba(0,0,0,.08)",
};

const nameStyle: React.CSSProperties = {
  fontSize: 13.5,
  fontWeight: 500,
  color: "#0f172a",
  marginBottom: 1,
};

const roleStyle: React.CSSProperties = {
  fontSize: 11.5,
  color: "#64748b",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  marginTop: 24,
};

const btnStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 42,
  height: 42,
  borderRadius: "50%",
  border: "1.5px solid #e5e7eb",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#6b7280",
  fontSize: 20,
  lineHeight: 1,
  zIndex: 5,
  boxShadow: "0 8px 24px rgba(15,23,42,.08)",
};

const dotStyle: React.CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#e2e8f0",
  border: "none",
  padding: 0,
  cursor: "pointer",
  transition: "all 300ms cubic-bezier(.16,1,.3,1)",
};

const dotOnStyle: React.CSSProperties = {
  background: "#7c3aed",
  width: 20,
  borderRadius: 99,
};

const progWrapStyle: React.CSSProperties = {
  maxWidth: 420,
  margin: "16px auto 0",
  height: 2,
  background: "#f1f5f9",
  borderRadius: 99,
  overflow: "hidden",
};

const progBarStyle: React.CSSProperties = {
  height: "100%",
  background: "linear-gradient(90deg,#7c3aed,#3b82f6)",
  borderRadius: 99,
  transition: "width .1s linear",
};

const statsStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 0,
  marginTop: 32,
  borderTop: "1.5px solid #f1f5f9",
  paddingTop: 28,
  flexWrap: "wrap",
};

const statStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "0 24px",
};

const statNumStyle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 500,
  color: "#6d28d9",
  minWidth: 70,
  display: "inline-block",
};

const statLblStyle: React.CSSProperties = {
  fontSize: 11.5,
  color: "#94a3b8",
  marginTop: 3,
};

const css = `
.ts-card{
  transition: transform .45s cubic-bezier(.16,1,.3,1), box-shadow .45s, border-color .45s;
}
.ts-card::after{
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:3px;
  background:linear-gradient(90deg,#7c3aed,#3b82f6);
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .35s cubic-bezier(.16,1,.3,1);
}
.ts-active::after{
  transform:scaleX(1);
}
.ts-btn:hover{
  border-color:#7c3aed!important;
  color:#7c3aed!important;
  background:#f5f3ff!important;
}
.ts-side{
  opacity:1;
}
@media (max-width: 640px){
  .ts-btn{
    width:38px!important;
    height:38px!important;
  }
}
`;