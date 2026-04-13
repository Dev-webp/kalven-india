"use client";

import { whyUs } from "../data";
import styles from "../styles";
import SectionHeader from "./SectionHeader";

const WhyUs = () => (
  <section
    style={{
      ...styles.sectionAlt,
      padding: "48px 20px 44px",
      background:
        "linear-gradient(180deg, #ffffff 0%, #faf8ff 52%, #ffffff 100%)",
    }}
    id="why-us"
  >
    <div
      style={{
        maxWidth: "1240px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <SectionHeader
          title="Why Partner with Us?"
          sub="Built for dependable recruitment delivery, compliance, and long-term business alignment."
        />
      </div>

      <div className="whyus-top-grid">
        <div className="whyus-image-wrap">
          <img
            src="/why-choose-image.webp"
            alt="Professional recruitment and talent acquisition partnership"
            className="whyus-main-image"
          />
        </div>

        <div className="whyus-content">
          <div className="whyus-kicker">
            <span className="whyus-kicker-dot" />
            Why Partner with Kalven
          </div>

          <h2 className="whyus-title">Why Partner with Us?</h2>

          <div className="whyus-text-block">
            <p>
              We are not just a recruitment agency; we are an extension of your
              talent acquisition team. By choosing Kalven Software Solutions,
              you benefit from:
            </p>

            <p>
              <strong>Global Best Practices:</strong> We apply the same rigorous
              sourcing and vetting methodologies used in our US operations to
              your domestic IT requirements.
            </p>

            <p>
              <strong>Ready-to-Deploy Pipeline:</strong> Our internal database
              and recruitment network allow us to minimize turnaround time
              (TAT) for urgent IT requisitions.
            </p>

            <p>
              <strong>Comprehensive Compliance:</strong> Drawing from our
              experience in immigration and corporate law (VJC), we ensure that
              all documentation, background verification, and onboarding
              processes meet the highest corporate standards.
            </p>

            <p>
              <strong>Strategic Alignment:</strong> We understand the nuances of
              the software industry—from niche skill sets to cultural
              fitment—ensuring high retention rates for our candidates.
            </p>
          </div>
        </div>
      </div>

      <div className="whyus-commitment">
        <h3 className="whyus-commitment-title">Our Commitment</h3>

        <p className="whyus-commitment-text">
          At Kalven Software Solutions, we pride ourselves on being agile,
          transparent, and results-oriented. We are eager to prove our strength
          in the Indian market and are committed to maintaining the high
          standards expected by your prestigious organization.
        </p>

        <p className="whyus-commitment-text">
          We look forward to the opportunity to discuss how our recruitment
          solutions can support your human capital objectives and add value to
          your ongoing projects.
        </p>
      </div>

      <div className="whyus-points-grid">
        {whyUs.map((item) => (
          <div key={item.num} className="whyus-point-card">
            <div className="whyus-point-num">{item.num}</div>
            <div className="whyus-point-title">{item.title}</div>
            <div className="whyus-point-desc">{item.desc}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .whyus-top-grid {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 24px;
          align-items: stretch;
          margin-top: 14px;
        }

        .whyus-image-wrap {
          min-height: 380px;
          border-radius: 24px;
          overflow: hidden;
   
       
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .whyus-main-image {
          width: 100%;
          height: 100%;
          max-height: 100%;
          object-fit: contain;
          object-position: center;
         
        }

        .whyus-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .whyus-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(107, 33, 168, 0.07);
          color: #6b21a8;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 12px;
          border: 1px solid rgba(107, 33, 168, 0.12);
        }

        .whyus-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          box-shadow: 0 0 0 6px rgba(124, 58, 237, 0.08);
        }

        .whyus-title {
          margin: 0;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: #111827;
          font-weight: 800;
        }

        .whyus-text-block {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .whyus-text-block p {
          margin: 0;
          color: #5b6475;
          font-size: 14px;
          line-height: 1.82;
        }

        .whyus-text-block strong {
          color: #111827;
        }

        .whyus-commitment {
          margin-top: 22px;
          padding: 20px 22px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.08),
            rgba(107, 33, 168, 0.03)
          );
          border: 1px solid rgba(107, 33, 168, 0.1);
          box-shadow: 0 16px 40px rgba(76, 29, 149, 0.05);
        }

        .whyus-commitment-title {
          margin: 0 0 8px;
          font-size: 1.05rem;
          line-height: 1.3;
          color: #111827;
          font-weight: 800;
        }

        .whyus-commitment-text {
          margin: 0;
          color: #5b6475;
          font-size: 14px;
          line-height: 1.85;
        }

        .whyus-commitment-text + .whyus-commitment-text {
          margin-top: 10px;
        }

        .whyus-points-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .whyus-point-card {
          position: relative;
          overflow: hidden;
          padding: 20px 18px;
          border-radius: 20px;
          background: #ffffff;
          border: 1px solid rgba(107, 33, 168, 0.1);
          box-shadow: 0 14px 34px rgba(76, 29, 149, 0.05);
          transition:
            transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .whyus-point-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 42px rgba(76, 29, 149, 0.1);
          border-color: rgba(107, 33, 168, 0.18);
        }

        .whyus-point-num {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          background: rgba(107, 33, 168, 0.08);
          border: 1px solid rgba(107, 33, 168, 0.1);
          color: #6b21a8;
          font-weight: 800;
          font-size: 14px;
        }

        .whyus-point-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          line-height: 1.35;
          margin-bottom: 8px;
        }

        .whyus-point-desc {
          font-size: 13px;
          line-height: 1.75;
          color: #667085;
        }

        @media (max-width: 1100px) {
          .whyus-top-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .whyus-image-wrap {
            min-height: 300px;
          }

          .whyus-points-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .whyus-image-wrap {
            min-height: auto;
            padding: 10px;
          }

          .whyus-main-image {
            width: 100%;
            height: auto;
            max-height: none;
            object-fit: contain;
          }

          .whyus-points-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  </section>
);

export default WhyUs;