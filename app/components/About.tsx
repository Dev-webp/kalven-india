"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{ 
        background: "#fff", 
        padding: "20px 0 40px",
        fontFamily: "'DM Sans', system-ui, sans-serif" 
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=DM+Serif+Display:ital@0;1&display=swap');

        #about * { box-sizing: border-box; }

        .ab-wrap { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* ── INTRO ── */
        .ab-intro {
          margin-bottom: 48px;
        }
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid #e5e7eb; border-radius: 999px;
          padding: 6px 14px; font-size: 11px; font-weight: 700;
          color: #6b7280; letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 20px; background: #f8fafc;
        }
        .ab-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: end;
        }
        
        /* UPDATED BRAND TITLE STYLE */
        .ab-brand-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.1;
          color: #111827;
          margin: 0;
        }
        .ab-brand-title span {
          color: #7c3aed;
          display: block;
        }

        .ab-logo-wrap {
          display: flex;
          align-items: center;
          min-height: 140px;
        }

        .ab-intro-right {}
        .ab-lead {
          font-size: 1.05rem; color: #4b5563;
          line-height: 1.85; margin: 0 0 24px;
        }
        .ab-since {
          display: inline-flex; align-items: center; gap: 16px;
          padding: 16px 22px;
          border: 1.5px solid #ede9fe; border-radius: 14px;
          background: #faf8ff;
        }
        .ab-since-year {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem; color: #7c3aed; line-height: 1; flex-shrink: 0;
        }
        .ab-since-copy { font-size: 0.88rem; color: #6b7280; line-height: 1.55; }
        .ab-since-copy strong { display: block; color: #111827; font-weight: 700; font-size: 0.94rem; margin-bottom: 2px; }

        /* ── HERO IMAGE ── */
        .ab-hero {
          position: relative; width: 100%; height: 420px;
          border-radius: 26px; overflow: hidden;
          margin-bottom: 48px;
          box-shadow: 0 28px 80px rgba(124,58,237,0.13);
          border: 2px solid #ececec;
        }
        .ab-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ab-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(76,29,149,0.6) 0%, rgba(76,29,149,0.1) 55%, transparent 80%);
          display: flex; align-items: flex-end; padding: 40px 44px;
        }
        .ab-hero-text {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.5rem, 2.8vw, 2.1rem);
          color: #fff; font-weight: 400; line-height: 1.35;
          max-width: 420px; letter-spacing: -0.01em;
        }
        .ab-hero-text em { font-style: italic; color: #c4b5fd; }

        /* ── STATS ── */
        .ab-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1.5px solid #ede9fe; border-radius: 20px;
          overflow: hidden; background: #faf8ff;
          margin-bottom: 48px;
        }
        .ab-stat {
          padding: 32px 24px;
          text-align: center;
          border-right: 1.5px solid #ede9fe;
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-n {
          font-family: 'DM Serif Display', serif;
          font-size: 2.6rem;
          color: #7c3aed; line-height: 1; margin-bottom: 6px;
        }
        .ab-stat-l { font-size: 0.85rem; color: #6b7280; font-weight: 500; }

        /* ── STORY ── */
        .ab-story {
          display: grid; grid-template-columns: 3fr 2fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
        }
        .ab-story-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase; color: #7c3aed; margin-bottom: 14px;
        }
        .ab-story-h {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.9rem, 3.2vw, 2.7rem);
          font-weight: 400; color: #111827;
          line-height: 1.15; margin: 0 0 24px;
          letter-spacing: -0.02em;
        }
        .ab-story-h em { font-style: italic; color: #7c3aed; }
        .ab-story-p {
          font-size: 0.97rem; color: #4b5563; line-height: 1.9; margin: 0 0 16px;
        }
        .ab-story-p:last-child { margin-bottom: 0; }

        .ab-story-right { display: flex; flex-direction: column; gap: 16px; }
        .ab-story-img {
          width: 100%; height: 240px;
          border-radius: 18px; overflow: hidden;
          border: 2px solid #ececec; box-shadow: 0 10px 36px rgba(124,58,237,0.1);
        }
        .ab-story-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ab-story-card {
          background: #0f0a1e; border: 1.5px solid #2d1f54;
          border-radius: 16px; padding: 22px 24px;
        }
        .ab-story-card-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #a78bfa; margin-bottom: 8px;
        }
        .ab-story-card-p {
          font-size: 0.93rem; color: rgba(255,255,255,0.78); line-height: 1.75; margin: 0;
        }

        /* ── VISION & MISSION ── */
        .ab-vm-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 48px;
        }
        .ab-vm {
          border-radius: 22px; padding: 38px 36px;
          position: relative; overflow: hidden;
        }
        .ab-vm.vision {
          background: #0f0a1e; border: 1.5px solid #2d1f54;
        }
        .ab-vm.mission {
          background: #faf8ff; border: 1.5px solid #ede9fe;
        }
        .ab-vm-over {
          font-size: 10px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .ab-vm.vision .ab-vm-over { color: #a78bfa; }
        .ab-vm.mission .ab-vm-over { color: #7c3aed; }
        .ab-vm-h {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.45rem, 2.4vw, 2rem);
          font-weight: 400; line-height: 1.22;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }
        .ab-vm.vision .ab-vm-h { color: #fff; }
        .ab-vm.vision .ab-vm-h em { font-style: italic; color: #c4b5fd; }
        .ab-vm.mission .ab-vm-h { color: #111827; }
        .ab-vm.mission .ab-vm-h em { font-style: italic; color: #7c3aed; }
        .ab-vm-p { font-size: 0.93rem; line-height: 1.85; margin: 0; }
        .ab-vm.vision .ab-vm-p { color: rgba(255,255,255,0.68); }
        .ab-vm.mission .ab-vm-p { color: #4b5563; }
        .ab-vm-blob {
          position: absolute; bottom: -40px; right: -40px;
          width: 140px; height: 140px; border-radius: 50%; opacity: 0.06;
        }
        .ab-vm.vision .ab-vm-blob { background: #a78bfa; }
        .ab-vm.mission .ab-vm-blob { background: #7c3aed; }

        /* ── VALUES ── */
        .ab-values { margin-bottom: 48px; }
        .ab-values-top {
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid #f0edf8;
        }
        .ab-values-h {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 400; color: #111827; margin: 0; letter-spacing: -0.02em;
        }
        .ab-values-h em { font-style: italic; color: #7c3aed; }
        .ab-values-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1.5px; background: #ede9fe;
          border: 1.5px solid #ede9fe; border-radius: 20px; overflow: hidden;
        }
        .ab-val {
          background: #fff; padding: 32px 32px;
          transition: background 0.25s;
        }
        .ab-val:hover { background: #faf8ff; }
        .ab-val-num {
          font-family: 'DM Serif Display', serif;
          font-size: 2.2rem; color: #ede9fe; line-height: 1; margin-bottom: 12px;
        }
        .ab-val-h {
          font-size: 1.05rem; font-weight: 700; color: #111827;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .ab-val-p { font-size: 0.9rem; color: #6b7280; line-height: 1.72; margin: 0; }

        /* ── CTA ── */
        .ab-cta {
          background: #0f0a1e;
          border: 1.5px solid #2d1f54;
          border-radius: 24px;
          padding: 48px 52px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 36px;
          align-items: center;
        }
        .ab-cta-h {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400; color: #fff;
          margin: 0 0 12px;
          letter-spacing: -0.02em; line-height: 1.2;
        }
        .ab-cta-h em { font-style: italic; color: #c4b5fd; }
        .ab-cta-p { font-size: 0.97rem; color: rgba(255,255,255,0.62); margin: 0; line-height: 1.75; }
        .ab-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #7C3AED, #6B21A8);
          color: #fff; padding: 16px 34px; border-radius: 14px;
          border: none; font-size: 14px; font-weight: 700;
          cursor: pointer; text-decoration: none; white-space: nowrap;
          transition: all 0.2s; box-shadow: 0 8px 28px rgba(124,58,237,0.45);
          flex-shrink: 0; font-family: inherit;
        }
        .ab-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(124,58,237,0.6); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ab-intro-grid { grid-template-columns: 1fr; gap: 28px; }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
          .ab-stat:nth-child(2) { border-right: none; }
          .ab-stat:nth-child(1),
          .ab-stat:nth-child(2) { border-bottom: 1.5px solid #ede9fe; }
          .ab-story { grid-template-columns: 1fr; gap: 32px; }
          .ab-vm-row { grid-template-columns: 1fr; }
          .ab-cta { grid-template-columns: 1fr; gap: 24px; padding: 36px 36px; }
          .ab-logo-wrap { min-height: auto; }
        }
        @media (max-width: 680px) {
          #about { padding: 16px 0 32px; }
          .ab-wrap { padding: 0 1rem; }
          .ab-hero { height: 280px; }
          .ab-hero-overlay { padding: 24px; }
          .ab-stats { grid-template-columns: repeat(2, 1fr); }
          .ab-stat { padding: 24px 16px; }
          .ab-stat-n { font-size: 2rem; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-vm { padding: 28px 24px; }
          .ab-cta { padding: 28px 24px; }
          .ab-intro-grid, .ab-story, .ab-vm-row { gap: 20px; }
        }
      `}</style>

      <div className="ab-wrap">
        {/* INTRO */}
        <div className="ab-intro">
          <div className="ab-intro-grid">
            <div>
              <div className="ab-logo-wrap">
                {/* BRAND NAME WITH CLOUD THEME */}
                <h1 className="ab-brand-title">
                  Kalven IT <span>Software Solutions</span>
                </h1>
              </div>
              <div className="ab-since">
                <div className="ab-since-year">2023</div>
                <div className="ab-since-copy">
                  <strong>Strategic leadership</strong>
                  Built on operational excellence, integrity, precision, and performance.
                </div>
              </div>
            </div>
            <div className="ab-intro-right">
              <p className="ab-lead">
                Kalven Software Solutions Pvt. Ltd. is a dynamic and process-driven recruitment partner dedicated to bridging the gap between top-tier IT talent and leading global organizations. Backed by a robust ecosystem of group companies and over 3 years of international staffing expertise, we provide high-quality recruitment solutions tailored to the fast-paced requirements of the IT industry.
              </p>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div className="ab-hero">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
            alt="Kalven IT Group Office"
          />
          <div className="ab-hero-overlay">
            <p className="ab-hero-text">
              The <em>Kalven Group Advantage</em><br />
              Proven Global Footprint
            </p>
          </div>
        </div>

        {/* STORY */}
        <div className="ab-story">
          <div>
            <div className="ab-story-label">Leadership & Group Strength</div>
            <h2 className="ab-story-h">Built on <em>expertise</em><br />and trust</h2>
            <p className="ab-story-p">
              Our organization is backed by strong strategic management expertise and a commitment to operational excellence. The Kalven Group has cultivated a culture of integrity, precision, and performance across its businesses.
            </p>
            <p className="ab-story-p">
              While Kalven Software Solutions Pvt. Ltd. focuses on domestic recruitment in India, we leverage the deep-rooted experience and infrastructure of our established group entities, ensuring we understand the technical rigors and compliance standards required by global MNCs.
            </p>
          </div>
          <div className="ab-story-right">
            <div className="ab-story-img">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80"
                alt="Leadership Team"
              />
            </div>
            <div className="ab-story-card">
              <div className="ab-story-card-label">Global Ecosystem</div>
              <p className="ab-story-card-p">
                Kalven Group of LLC (USA) maintains a strong bench of 75 skilled professionals. VJC Immigration brings international compliance expertise. Diversified strength through VJC Foundation and VJC Infra Projects Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="ab-vm-row">
          <div className="ab-vm vision">
            <div className="ab-vm-over">Our Strength</div>
            <h2 className="ab-vm-h">Kalven Group LLC <em>(USA)</em></h2>
            <p className="ab-vm-p">
              Our dedicated IT staffing arm in the United States maintains a strong bench of 75 skilled professionals currently deployed at various client locations. This international exposure ensures global standards.
            </p>
            <div className="ab-vm-blob" />
          </div>
          <div className="ab-vm mission">
            <div className="ab-vm-over">Compliance Expertise</div>
            <h2 className="ab-vm-h">VJC Immigration &<br />Visa Consultants</h2>
            <p className="ab-vm-p">
              Established 2009, incorporated 2015. Years of expertise in global documentation, compliance, and international talent mobility for seamless operations.
            </p>
            <div className="ab-vm-blob" />
          </div>
        </div>

        {/* VALUES */}
        <div className="ab-values">
          <div className="ab-values-top">
            <h2 className="ab-values-h">Why choose the <em>Kalven Group</em></h2>
          </div>
          <div className="ab-values-grid">
            <div className="ab-val">
              <div className="ab-val-num">01</div>
              <h3 className="ab-val-h">Process-Driven</h3>
              <p className="ab-val-p">Dynamic recruitment processes tailored for IT industry speed and precision. High-quality placements at scale.</p>
            </div>
            <div className="ab-val">
              <div className="ab-val-num">02</div>
              <h3 className="ab-val-h">Global Standards</h3>
              <p className="ab-val-p">75+ professionals deployed in USA operations ensure we meet MNC technical and compliance requirements.</p>
            </div>
            <div className="ab-val">
              <div className="ab-val-num">03</div>
              <h3 className="ab-val-h">Strategic Leadership</h3>
              <p className="ab-val-p">Strong management expertise combined with operational excellence for sustainable business growth.</p>
            </div>
            <div className="ab-val">
              <div className="ab-val-num">04</div>
              <h3 className="ab-val-h">Group Ecosystem</h3>
              <p className="ab-val-p">VJC Immigration, Foundation, and Infra Projects provide organizational maturity and financial stability.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="ab-cta">
          <div>
            <h2 className="ab-cta-h">Ready to bridge your<br /><em>talent gap</em>?</h2>
            <p className="ab-cta-p">
              Partner with Kalven Software Solutions for IT recruitment that combines global expertise, proven processes, and strategic leadership to power your growth.
            </p>
          </div>
          <a href="#contact" className="ab-cta-btn">Connect Now →</a>
        </div>
      </div>
    </section>
  );
}