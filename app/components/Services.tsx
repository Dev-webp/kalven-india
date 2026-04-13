"use client";

import { useState, useEffect } from "react";

const services = [
  {
    id: 1,
    slug: "it-business-consulting",
    title: "IT & Business Consulting",
    tag: "Strategy",
    tagColor: { bg: "#ede9fe", text: "#4C1D95" },
    accentHex: "#7C3AED",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
    shortDesc: "Tailored consulting built on decades of domain expertise.",
    fullDesc:
      "We partner with Indian businesses to navigate digital transformation, optimise operations, and unlock competitive advantage. Our consultants bring deep cross-sector expertise — from BFSI and healthcare to manufacturing and retail — to craft strategies that are executable, measurable, and built to last. Whether you need a one-time strategy engagement or an ongoing advisory retainer, we embed with your team and deliver outcomes that matter.",
    highlights: [
      "Digital Transformation Roadmap",
      "Technology Audits",
      "Process Optimisation",
      "Change Management",
      "Vendor Selection",
    ],
  },
  {
    id: 2,
    slug: "application-services",
    title: "Application Services",
    tag: "Development",
    tagColor: { bg: "#d1fae5", text: "#065f46" },
    accentHex: "#059669",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    shortDesc: "Custom software that improves ROI and modernises operations.",
    fullDesc:
      "From enterprise applications to SaaS platforms, we design, build, test, and maintain software that scales with your business. Our agile teams work across the full stack — React, Node, .NET, Java, Python — and follow DevSecOps practices to keep your systems secure and continuously improving. We take ownership from requirements to production, so you can focus on growing your business.",
    highlights: [
      "Enterprise Software",
      "SaaS Platforms",
      "API Development",
      "Legacy Modernisation",
      "QA & Testing",
    ],
  },
  {
    id: 3,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tag: "Mobile",
    tagColor: { bg: "#dbeafe", text: "#1e40af" },
    accentHex: "#2563EB",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    shortDesc: "iOS, Android & Windows apps built for performance and scale.",
    fullDesc:
      "We build native and cross-platform mobile experiences that users love. Using React Native, Flutter, Swift, and Kotlin, our mobile teams deliver apps that are fast, accessible, and beautifully designed. From MVPs to large-scale consumer apps, we handle the full product lifecycle — UX research, design, development, App Store submission, and ongoing iteration.",
    highlights: [
      "React Native & Flutter",
      "iOS & Android Native",
      "UX/UI Design",
      "App Store Publishing",
      "Push & Analytics",
    ],
  },
  {
    id: 4,
    slug: "web-ecommerce",
    title: "Web & Ecommerce",
    tag: "Ecommerce",
    tagColor: { bg: "#fce7f3", text: "#9d174d" },
    accentHex: "#DB2777",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    shortDesc: "Storefront design, platform implementation & integrations.",
    fullDesc:
      "We build high-converting ecommerce experiences on Shopify, WooCommerce, Magento, and custom stacks. Our work covers everything from storefront UX design and mobile optimisation to payment gateway integrations, ERP connectors, and warehouse management systems. We've helped Indian D2C and B2B brands scale from zero to millions of monthly transactions.",
    highlights: [
      "Shopify & Magento",
      "Custom Storefronts",
      "Payment Integrations",
      "Performance Optimisation",
      "SEO & Analytics",
    ],
  },
  {
    id: 5,
    slug: "it-infrastructure-services",
    title: "IT Infrastructure Services",
    tag: "Infrastructure",
    tagColor: { bg: "#fef3c7", text: "#92400e" },
    accentHex: "#D97706",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    shortDesc: "Secure, scalable infrastructure for future-ready enterprises.",
    fullDesc:
      "We design and manage cloud, hybrid, and on-premise infrastructure that is resilient, compliant, and cost-efficient. Our team holds certifications across AWS, Azure, and GCP, and specialises in zero-downtime migrations, network architecture, disaster recovery planning, and 24/7 managed operations. We help you do more with less — and sleep easy knowing your infrastructure is in expert hands.",
    highlights: [
      "Cloud Migration",
      "AWS / Azure / GCP",
      "Network Architecture",
      "Disaster Recovery",
      "24/7 Managed Ops",
    ],
  },
  {
    id: 6,
    slug: "hr-recruitment-staffing",
    title: "HR Recruitment & Staffing",
    tag: "Talent",
    tagColor: { bg: "#ede9fe", text: "#4C1D95" },
    accentHex: "#7C3AED",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80",
    shortDesc: "End-to-end recruitment that places the best tech talent.",
    fullDesc:
      "With a deep network of pre-vetted engineers, managers, and specialists across India, we fill roles at speed without sacrificing quality. We run structured technical assessments, culture-fit interviews, and background checks so that every hire is a confident one. Whether you need contract staffing, permanent placement, or an entire embedded team, we adapt to your hiring model.",
    highlights: [
      "Tech & IT Hiring",
      "Contract Staffing",
      "Permanent Placement",
      "Team Building",
      "Background Checks",
    ],
  },
  {
    id: 7,
    slug: "accounting-payroll",
    title: "Accounting & Payroll",
    tag: "Finance",
    tagColor: { bg: "#d1fae5", text: "#065f46" },
    accentHex: "#059669",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    shortDesc: "Comprehensive accounting and payroll for growing businesses.",
    fullDesc:
      "From bookkeeping and GST compliance to statutory payroll processing and MIS reporting, we handle your financial back-office so you can focus on what matters. Our team is experienced in Indian accounting standards, TDS, PF, ESIC, and professional tax across all states. We integrate with your existing ERP or accounting software and provide real-time financial dashboards.",
    highlights: [
      "GST & TDS Filing",
      "Payroll Processing",
      "Financial Reporting",
      "ERP Integration",
      "Compliance Management",
    ],
  },
  {
    id: 8,
    slug: "legal-compliance",
    title: "Legal & Compliance",
    tag: "Legal",
    tagColor: { bg: "#dbeafe", text: "#1e40af" },
    accentHex: "#2563EB",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
    shortDesc: "LPO and compliance keeping your business protected.",
    fullDesc:
      "Our legal process outsourcing team supports contract drafting and review, regulatory compliance, IP management, and corporate governance — at a fraction of traditional law firm costs. We work with startups, SMEs, and enterprises navigating SEBI regulations, Companies Act compliance, data privacy (DPDP Act), and cross-border legal requirements. Reliable, discreet, and always on time.",
    highlights: [
      "Contract Drafting & Review",
      "SEBI & RBI Compliance",
      "DPDP / Data Privacy",
      "IP Management",
      "Corporate Governance",
    ],
  },
];


type Service = (typeof services)[0];

export default function Services() {
  const [active, setActive] = useState<Service>(services[0]);
  const [animKey, setAnimKey] = useState(0);
  const [isReady, setIsReady] = useState(false); // ← NEW: Fix timing

  // 🔥 FIXED: Robust hash handling with immediate state sync
  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash;
      const slug = raw.replace("#services/", "").toLowerCase().trim();
      
      // Find service by slug (case-insensitive, robust)
      const found = services.find((s) => 
        s.slug === slug || s.slug.toLowerCase() === slug
      );
      
      if (found && found.id !== active.id) {
        setActive(found);
        setAnimKey((k) => k + 1);
        // Scroll to detail with smooth behavior
        setTimeout(() => {
          document.getElementById("srv-detail")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    // Run immediately on mount AND on hashchange
    applyHash();
    window.addEventListener("hashchange", applyHash);
    
    // Mark as ready after first run
    setTimeout(() => setIsReady(true), 50);
    
    return () => window.removeEventListener("hashchange", applyHash);
  }, []); // Remove active dependency to prevent loops

  // 🔥 FIXED: Navbar click handler sync
  function select(s: Service) {
    if (s.id === active.id) return;
    
    setActive(s);
    setAnimKey((k) => k + 1);
    
    // Update hash AND scroll simultaneously
    window.location.hash = `#services/${s.slug}`;
    
    setTimeout(() => {
      document.getElementById("srv-detail")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 80);
  }

  // Skip render until ready (prevents flash)
  if (!isReady) return <div style={{ minHeight: "500px" }} />;
  return (
    <section
      id="services"
      style={{
        background: "#ffffff",
        padding: "36px 0 36px",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Serif+Display:ital@0;1&display=swap');

        #services * { box-sizing: border-box; }

        .srv-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .srv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
          background: #f8fafc;
        }

        .srv-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.1rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #111827;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
        }

        .srv-h2 em { font-style: italic; color: #7c3aed; }

        .srv-sub {
          font-size: 0.98rem;
          color: #6b7280;
          max-width: 520px;
          line-height: 1.75;
          margin: 0 0 34px;
        }

        #srv-detail {
          border-radius: 28px;
          border: 2px solid #ececec;
          background: #ffffff;
          overflow: hidden;
          margin-bottom: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 430px;
          box-shadow: 0 16px 45px rgba(17,24,39,0.08);
          transition: all 300ms cubic-bezier(0.16,1,0.3,1);
        }

        #srv-detail:hover {
          border-color: #a78bfa;
          box-shadow: 0 20px 60px rgba(124,58,237,0.2), 0 0 40px rgba(167,139,250,0.1);
        }

        .d-img-wrap {
          position: relative;
          overflow: hidden;
          background: #f3f4f6;
        }

        .d-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 800ms cubic-bezier(0.16,1,0.3,1);
        }

        #srv-detail:hover .d-img { transform: scale(1.05); }

        .d-content {
          padding: 42px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .d-anim { animation: fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) forwards; }

        .d-tag {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .d-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.95rem;
          font-weight: 400;
          color: #111827;
          line-height: 1.13;
          margin: 0;
        }

        .d-desc {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.8;
          margin: 0;
        }

        .d-pills { display: flex; flex-wrap: wrap; gap: 8px; }

        .d-pill {
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: #f8fafc;
          padding: 7px 12px;
          font-size: 11.5px;
          font-weight: 600;
          color: #4b5563;
        }

        .d-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          width: fit-content;
          text-decoration: none;
          color: #fff;
          transition: transform 180ms cubic-bezier(0.16,1,0.3,1), opacity 180ms, box-shadow 180ms;
          box-shadow: 0 12px 28px rgba(124,58,237,0.2);
        }

        .d-cta:hover { transform: translateY(-2px); opacity: 0.96; }

        /* bento */
        .bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 16px;
        }

        .bc {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          cursor: pointer;
          border: 2px solid #ececec;
          background: #fff;
          box-shadow: 0 10px 30px rgba(17,24,39,0.08);
          transition: transform 240ms cubic-bezier(0.16,1,0.3,1), box-shadow 240ms, border-color 240ms;
        }

        .bc:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(124,58,237,0.25), 0 0 40px rgba(124,58,237,0.15);
          border-color: #b794f6;
        }

        .bc.on {
          border-color: #8b5cf6;
          box-shadow: 0 25px 60px rgba(124,58,237,0.3), 0 0 50px rgba(139,92,246,0.2);
        }

        .bc-hero { grid-column: span 5; min-height: 320px; }
        .bc-mid  { grid-column: span 4; min-height: 240px; }
        .bc-sm   { grid-column: span 3; min-height: 220px; }
        .bc-wide { grid-column: span 6; min-height: 220px; }
        .bc-trio { grid-column: span 4; min-height: 220px; }

        .bc-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 780ms cubic-bezier(0.16,1,0.3,1), filter 780ms;
        }

        .bc:hover .bc-photo,
        .bc.on .bc-photo { transform: scale(1.08); filter: saturate(1.08) brightness(1.05); }

        .bc-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,8,12,0.92) 0%, rgba(8,8,12,0.6) 30%, rgba(8,8,12,0.18) 62%, rgba(8,8,12,0.02) 100%);
        }

        .bc-dot {
          position: absolute;
          top: 14px; right: 14px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #a78bfa;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 220ms, transform 220ms, box-shadow 220ms;
          z-index: 4;
          box-shadow: 0 0 12px rgba(167,139,250,0.5);
        }

        .bc.on .bc-dot, .bc:hover .bc-dot { opacity: 1; transform: scale(1); }

        .bc-body {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 18px;
        }

        .bc-hero .bc-body { padding: 24px; }

        .bc-tag {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          padding: 4px 10px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .bc-content {
          transform: translateY(56px);
          transition: transform 430ms cubic-bezier(0.16,1,0.3,1);
        }

        .bc:hover .bc-content, .bc.on .bc-content { transform: translateY(0); }

        .bc-h {
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
        }

        .bc-hero .bc-h { font-size: 1.18rem; }

        .bc-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 320ms cubic-bezier(0.16,1,0.3,1), transform 420ms;
          transition-delay: 40ms;
          margin-top: 10px;
          pointer-events: none;
        }

        .bc:hover .bc-hidden, .bc.on .bc-hidden { opacity: 1; transform: translateY(0); }

        .bc-p {
          font-size: 12.5px;
          color: rgba(255,255,255,0.88);
          line-height: 1.55;
          margin: 0 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-width: 95%;
        }

        .bc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        .bc-link::after {
          content: "→";
          transition: transform 220ms cubic-bezier(0.16,1,0.3,1);
        }

        .bc:hover .bc-link::after, .bc.on .bc-link::after { transform: translateX(4px); }

        @media (max-width: 1024px) {
          #srv-detail { grid-template-columns: 1fr; min-height: auto; }
          .d-img-wrap { min-height: 280px; }
          .bc-hero { grid-column: span 6; }
          .bc-mid  { grid-column: span 6; }
          .bc-sm   { grid-column: span 4; }
          .bc-wide { grid-column: span 6; }
          .bc-trio { grid-column: span 4; }
        }

        @media (max-width: 680px) {
          #services { padding: 26px 0 26px !important; }
          .srv-inner { padding: 0 1rem; }
          .srv-sub { margin-bottom: 22px; }
          #srv-detail { margin-bottom: 20px; border-radius: 22px; }
          .d-content { padding: 26px 20px; }
          .d-title { font-size: 1.45rem; }
          .bento { grid-template-columns: 1fr; gap: 12px; }
          .bc-hero, .bc-mid, .bc-sm, .bc-wide, .bc-trio {
            grid-column: span 1;
            min-height: 220px;
          }
          .bc:hover { transform: translateY(-4px); }
          .bc-content { transform: translateY(0); }
          .bc-hidden { opacity: 1; transform: translateY(0); pointer-events: auto; }
        }
      `}</style>

      <div className="srv-inner">
        <div className="srv-eyebrow">✦ Services we offer</div>
        <h2 className="srv-h2">
          What we <em>do</em> best
        </h2>
        <p className="srv-sub">
          From technology to talent, infrastructure to compliance — explore each
          service and discover how we help businesses move faster.
        </p>

        <div id="srv-detail">
          <div className="d-img-wrap">
            <img
              key={`img-${active.id}-${animKey}`}
              src={active.img}
              alt={active.title}
              className="d-img d-anim"
            />
          </div>

          <div className="d-content">
            <div
              key={`body-${active.id}-${animKey}`}
              className="d-anim"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <span
                className="d-tag"
                style={{ background: active.tagColor.bg, color: active.tagColor.text }}
              >
                {active.tag}
              </span>

              <h3 className="d-title">{active.title}</h3>
              <p className="d-desc">{active.fullDesc}</p>

              <div className="d-pills">
                {active.highlights.map((h) => (
                  <span key={h} className="d-pill">{h}</span>
                ))}
              </div>

              <a href="#contact" className="d-cta" style={{ background: active.accentHex }}>
                Get started with {active.tag} →
              </a>
            </div>
          </div>
        </div>

        <div className="bento">
          {services.slice(0, 3).map((s, i) => (
            <div
              key={s.id}
              className={`bc ${i === 0 ? "bc-hero" : i === 1 ? "bc-mid" : "bc-sm"} ${active.id === s.id ? "on" : ""}`}
              onClick={() => select(s)}
            >
              <div className="bc-photo" style={{ backgroundImage: `url('${s.img}')` }} />
              <div className="bc-scrim" />
              <div className="bc-dot" />
              <div className="bc-body">
                <div className="bc-content">
                  <span className="bc-tag" style={{ background: s.tagColor.bg, color: s.tagColor.text }}>
                    {s.tag}
                  </span>
                  <h4 className="bc-h">{s.title}</h4>
                  <div className="bc-hidden">
                    <p className="bc-p">{s.shortDesc}</p>
                    <div className="bc-link">Know more</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {services.slice(3, 5).map((s) => (
            <div
              key={s.id}
              className={`bc bc-wide ${active.id === s.id ? "on" : ""}`}
              onClick={() => select(s)}
            >
              <div className="bc-photo" style={{ backgroundImage: `url('${s.img}')` }} />
              <div className="bc-scrim" />
              <div className="bc-dot" />
              <div className="bc-body">
                <div className="bc-content">
                  <span className="bc-tag" style={{ background: s.tagColor.bg, color: s.tagColor.text }}>
                    {s.tag}
                  </span>
                  <h4 className="bc-h">{s.title}</h4>
                  <div className="bc-hidden">
                    <p className="bc-p">{s.shortDesc}</p>
                    <div className="bc-link">Know more</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {services.slice(5, 8).map((s) => (
            <div
              key={s.id}
              className={`bc bc-trio ${active.id === s.id ? "on" : ""}`}
              onClick={() => select(s)}
            >
              <div className="bc-photo" style={{ backgroundImage: `url('${s.img}')` }} />
              <div className="bc-scrim" />
              <div className="bc-dot" />
              <div className="bc-body">
                <div className="bc-content">
                  <span className="bc-tag" style={{ background: s.tagColor.bg, color: s.tagColor.text }}>
                    {s.tag}
                  </span>
                  <h4 className="bc-h">{s.title}</h4>
                  <div className="bc-hidden">
                    <p className="bc-p">{s.shortDesc}</p>
                    <div className="bc-link">Know more</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}