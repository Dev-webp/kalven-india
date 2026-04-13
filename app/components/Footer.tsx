import { footerLinks } from "../data";

const Footer = () => {
  const quickLinks = footerLinks || ["Home", "About", "Services", "Careers", "Contact"];
  const services = ["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"];
  const company = ["About Us", "Our Team", "Careers", "Blog"];
  const contact = ["Hyderabad, India", "+91 9440467000", "admin@kalvenit.com"];

  return (
    <>
      <style>{`
        .kalven-footer {
          background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
          color: #e5e7eb;
          padding: 72px 24px 24px;
          margin-top: 60px;
        }

        .kalven-footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .kalven-footer-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 50px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .kalven-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .kalven-footer-logo {
          font-size: 30px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .kalven-footer-logo span {
          color: #2563eb;
        }

        .kalven-footer-desc {
          font-size: 15px;
          line-height: 1.8;
          color: #94a3b8;
          max-width: 360px;
        }

        .kalven-socials {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .kalven-socials a {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #ffffff;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .kalven-socials a:hover {
          background: #2563eb;
          transform: translateY(-3px);
        }

        .kalven-footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .kalven-footer-col h4 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .kalven-footer-col a {
          display: block;
          text-decoration: none;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.9;
          transition: all 0.3s ease;
        }

        .kalven-footer-col a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .kalven-footer-bottom {
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .kalven-footer-copy {
          font-size: 13px;
          color: #94a3b8;
        }

        .kalven-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .kalven-footer-bottom-links a {
          text-decoration: none;
          color: #cbd5e1;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .kalven-footer-bottom-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .kalven-footer-top {
            grid-template-columns: 1fr;
          }

          .kalven-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .kalven-footer {
            padding: 56px 18px 22px;
          }

          .kalven-footer-logo {
            font-size: 24px;
          }

          .kalven-footer-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .kalven-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .kalven-footer-bottom-links {
            gap: 12px;
          }
        }
      `}</style>

      <footer className="kalven-footer">
        <div className="kalven-footer-container">
          <div className="kalven-footer-top">
            <div className="kalven-footer-brand">
              <div className="kalven-footer-logo">
                Kalven <span>IT</span> Group India
              </div>

              <p className="kalven-footer-desc">
                We build reliable digital products and modern business solutions
                with speed, clarity, and long-term support.
              </p>

              <div className="kalven-socials">
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Twitter">x</a>
                <a href="#" aria-label="Instagram">ig</a>
              </div>
            </div>

            <div className="kalven-footer-grid">
              <div className="kalven-footer-col">
                <h4>Quick Links</h4>
                {quickLinks.map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </div>

              <div className="kalven-footer-col">
                <h4>Services</h4>
                {services.map((item) => (
                  <a key={item} href="#">{item}</a>
                ))}
              </div>

              <div className="kalven-footer-col">
                <h4>Company</h4>
                {company.map((item) => (
                  <a key={item} href="#">{item}</a>
                ))}
              </div>

              <div className="kalven-footer-col">
                <h4>Contact</h4>
                <a href="#">Hyderabad, India</a>
                <a href="tel:+919440467000">+91 9440467000</a>
                <a href="mailto:admin@kalvenit.com">admin@kalvenit.com</a>
              </div>
            </div>
          </div>

          <div className="kalven-footer-bottom">
            <div className="kalven-footer-copy">
              © {new Date().getFullYear()} Kalven IT Group India Pvt. Ltd. All rights reserved.
            </div>

            <div className="kalven-footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;