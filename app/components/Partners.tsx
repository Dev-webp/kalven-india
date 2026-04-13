"use client";

import Image from "next/image";
import { partners } from "../data";

const trustItems = [
  {
    title: "Structured delivery approach",
    text: "Clear communication, practical planning, and dependable execution standards that help businesses move forward with confidence.",
  },
  {
    title: "Built for long-term collaboration",
    text: "Beyond one-time delivery, we build stable service relationships with responsiveness, consistency, and deep business understanding.",
  },
  {
    title: "Business-aligned support",
    text: "Technology, staffing, and operations support shaped around your practical business goals, timelines, and growth expectations.",
  },
];

const Partners = () => {
  const repeatedPartners = [...partners, ...partners];

  return (
    <>
      <style>{`
        .partners-premium {
          padding: 42px 20px 30px;
          background: linear-gradient(180deg, #ffffff 0%, #faf8ff 52%, #ffffff 100%);
        }

        .partners-shell {
          max-width: 1240px;
          margin: 0 auto;
        }

        .partners-top {
          display: grid;
        grid-template-columns: 62% 38%;
          gap: 28px;
          align-items: stretch;
        }

        .partners-top-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .partners-top-image {
          height: 100%;
          min-height: 320px;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
        }

        .partners-top-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .partners-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(107, 33, 168, 0.07);
          color: #6b21a8;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 10px;
          width: fit-content;
        }

        .partners-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
        }

        .partners-title {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
        }

        .partners-sub {
          margin-top: 12px;
          font-size: 14px;
          line-height: 1.8;
          color: #5b6475;
          max-width: 95%;
        }

        .partners-sub-secondary {
          margin-top: 10px;
        }

        .partners-mini-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .partners-mini-points span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(107, 33, 168, 0.06);
          border: 1px solid rgba(107, 33, 168, 0.1);
          color: #4b5563;
          font-size: 12px;
          font-weight: 600;
        }

        .partners-slider-wrap {
          margin-top: 22px;
          overflow: hidden;
        }

        .partners-slider {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: partnerScroll 30s linear infinite;
        }

        .partner-logo-card {
          min-width: 220px;
          height: 70px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 14px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid rgba(107, 33, 168, 0.1);
          transition: 0.3s;
        }

        .partner-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(76, 29, 149, 0.15);
        }

        .partner-logo-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          flex-shrink: 0;
        }

        .partner-logo-image {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }

        .partner-logo-name {
          font-size: 13px;
          font-weight: 700;
          color: #1f2937;
        }

        .trust-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 20px;
        }

        .trust-card {
          padding: 16px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(107, 33, 168, 0.1);
          transition: 0.3s;
        }

        .trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(76, 29, 149, 0.08);
        }

        .trust-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
        }

        .trust-card-text {
          font-size: 13px;
          color: #667085;
          margin-top: 6px;
          line-height: 1.7;
        }

        .partners-footer {
          margin-top: 22px;
          padding: 22px;
          border-radius: 20px;
          background: linear-gradient(135deg, #7c3aed, #6b21a8);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-text {
          max-width: 600px;
        }

        .footer-text h4 {
          margin: 0;
          font-size: 18px;
          line-height: 1.3;
        }

        .footer-text p {
          margin-top: 6px;
          font-size: 13px;
          opacity: 0.92;
          line-height: 1.7;
        }

        .footer-btn {
          padding: 12px 22px;
          border-radius: 999px;
          background: #fff;
          color: #6b21a8;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          white-space: nowrap;
        }

        .footer-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @keyframes partnerScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 900px) {
          .partners-top {
            grid-template-columns: 1fr;
          }

          .partners-top-image {
            min-height: 240px;
          }

          .partners-sub {
            max-width: 100%;
          }

          .trust-row {
            grid-template-columns: 1fr;
          }

          .partners-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <section className="partners-premium">
        <div className="partners-shell">
          <div className="partners-top">
            <div className="partners-top-content">
              <div className="partners-kicker">
                <span className="partners-kicker-dot" />
                Trusted partnerships
              </div>

              <h2 className="partners-title">
                Strategic partners who value execution excellence and long-term growth
              </h2>

              <p className="partners-sub">
                We collaborate with organizations seeking reliable technology delivery,
                staffing solutions, and operational support. Our partnerships deliver
                measurable business outcomes through consistent execution.
              </p>

              <p className="partners-sub partners-sub-secondary">
                We work closely with businesses that value accountability, speed, and
                long-term alignment—creating partnerships built on trust, adaptability,
                and measurable progress across critical initiatives.
              </p>

              <div className="partners-mini-points">
                <span>Reliable delivery</span>
                <span>Responsive support</span>
                <span>Long-term value</span>
              </div>
            </div>

            <div className="partners-top-image">
              <Image src="/partner.webp" alt="Trusted business partners" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="partners-slider-wrap">
            <div className="partners-slider">
              {repeatedPartners.map((partner, index) => (
                <div key={index} className="partner-logo-card">
                  <div className="partner-logo-badge">
                    {"logo" in partner && partner.logo ? (
                      <Image
                        src={partner.logo as string}
                        alt={partner.name}
                        className="partner-logo-image"
                        width={26}
                        height={26}
                      />
                    ) : (
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          background: partner.color,
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </div>
                  <span className="partner-logo-name">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="trust-row">
            {trustItems.map((item) => (
              <div key={item.title} className="trust-card">
                <h4 className="trust-card-title">{item.title}</h4>
                <p className="trust-card-text">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="partners-footer">
            <div className="footer-text">
              <h4>Let’s build something impactful together</h4>
              <p>
                Partner with us for scalable solutions, expert support, and
                long-term business success.
              </p>
            </div>

            <button className="footer-btn">Contact Us →</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;