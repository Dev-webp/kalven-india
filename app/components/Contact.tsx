"use client";

const Contact = () => {
  return (
    <>
      <style jsx global>{`
        .contact-section {
          padding: 50px 20px 60px; /* Reduced top & bottom */
          background: #ffffff;
          font-family: "Times New Roman", Times, serif;
          line-height: 1.5;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .contact-kicker {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.08);
          color: #7c3aed;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .contact-title {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          line-height: 1.15;
          font-weight: 700;
          color: #111827;
          margin: 0 auto;
          max-width: 700px;
          text-wrap: balance;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .contact-image-box {
          position: relative;
          overflow: hidden;
          min-height: 320px;
        }

        .contact-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .contact-image-overlay {
          position: absolute;
          inset: 0;
          /* background-color: rgba(0,0,0,0.05); if you want a subtle overlay */
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .contact-card {
          background: #fafafa;
          border: 1px solid #f0f0f0;
          border-radius: 18px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
          font-family: "Times New Roman", Times, serif;
        }

        .contact-card:hover {
          background: #ffffff;
          border-color: #ddd6fe;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(124, 58, 237, 0.08);
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #7c3aed;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .contact-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
          font-family: "Times New Roman", Times, serif;
        }

        .contact-card-text,
        .contact-card-link {
          font-size: 13px;
          line-height: 1.55;
          color: #6b7280;
          text-decoration: none;
          white-space: pre-line;
          font-family: "Times New Roman", Times, serif;
        }

        .contact-card-link:hover {
          color: #7c3aed;
        }

        @media (max-width: 1024px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
          .contact-image-box {
            min-height: 280px;
            height: 320px;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 40px 16px 50px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-card {
            padding: 16px;
          }
          .contact-image-box {
            height: 220px;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Main Centered Header */}
          <div className="contact-header">
            <div className="contact-kicker">Get In Touch</div>
            <h2 className="contact-title">
              Let’s connect with the right team at Kalven Software
            </h2>
          </div>

          <div className="contact-wrapper">
            {/* Left Side: Professional Image */}
            <div className="contact-image-box">
              <img
                src="/contact1.png"
                alt="Kalven Team Collaboration"
              />
              <div className="contact-image-overlay"></div>
            </div>

            {/* Right Side: Information Grid */}
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h4 className="contact-card-title">Address</h4>
                <p className="contact-card-text">
                  62/A, Sundari Reddy Bhavan, Ground Floor, Vengalrao Nagar, Hyderabad-500038.
                </p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <h4 className="contact-card-title">Call Us</h4>
                <a className="contact-card-link" href="tel:+919440467000">
                  +91‑9440467000
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h4 className="contact-card-title">Email</h4>
                <a className="contact-card-link" href="mailto:admin@kalvenit.com">
                  admin@kalvenit.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h4 className="contact-card-title">Website</h4>
                <a className="contact-card-link" href="https://www.kalvenit.com" target="_blank" rel="noopener noreferrer">
                  www.kalvenit.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;