"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "../data";

const TOP_BAR_H = 36;
const NAV_H = 64;

const services = [
  { id: 1, name: "IT & Business Consulting",    slug: "it-business-consulting"    },
  { id: 2, name: "Application Services",         slug: "application-services"      },
  { id: 3, name: "Mobile App Development",       slug: "mobile-app-development"    },
  { id: 4, name: "Web & Ecommerce",              slug: "web-ecommerce"             },
  { id: 5, name: "IT Infrastructure Services",   slug: "it-infrastructure-services"},
  { id: 6, name: "HR Recruitment & Staffing",    slug: "hr-recruitment-staffing"   },
  { id: 7, name: "Accounting & Payroll",         slug: "accounting-payroll"        },
  { id: 8, name: "Legal & Compliance",           slug: "legal-compliance"          },
];

const Navbar = () => {
  const [menuOpen,             setMenuOpen]             = useState(false);
  const [scrolled,             setScrolled]             = useState(false);
  const [activeLink,           setActiveLink]           = useState("");
  const [topBarVisible,        setTopBarVisible]        = useState(true);
  const [mobileServicesOpen,   setMobileServicesOpen]   = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const cur = window.scrollY;
      setScrolled(cur > 20);
      setTopBarVisible(cur < lastScrollY || cur < 10);
      lastScrollY = cur;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.paddingTop = `${TOP_BAR_H + NAV_H}px`;
    return () => { document.body.style.paddingTop = ""; };
  }, []);

  /* ── THE FIX: scroll first, then set hash ── */
  const handleServiceClick = (serviceSlug: string) => {
    setActiveLink("Services");

    // 1. Scroll to the services section immediately
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 2. After scroll begins, update hash so Services component picks it up
    setTimeout(() => {
      window.location.hash = `services/${serviceSlug}`;
    }, 120);
  };

  const handleMobileServiceClick = (serviceSlug: string) => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setActiveLink("Services");

    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => {
      window.location.hash = `services/${serviceSlug}`;
    }, 120);
  };

  return (
    <>
      <style>{`
        :root {
          --kp:       #6B21A8;
          --kp-light: #7C3AED;
          --kp-dark:  #4C1D95;
          --knavy:    #1E1B4B;
          --kacc:     #A855F7;
          --ksoft:    #EDE9FE;
          --kborder:  rgba(107,33,168,0.15);
        }

        /* ── TOP BAR ── */
        .top-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1001;
          height: ${TOP_BAR_H}px;
          background: linear-gradient(90deg, #4C1D95, #6B21A8, #7C3AED, #4C1D95);
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          overflow: hidden;
          transform: translateY(0);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          white-space: nowrap;
          box-sizing: border-box;
        }
        .top-bar.hidden { transform: translateY(-100%); }

        @keyframes shimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .top-bar-inner {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          max-width: 100%;
        }
        .top-bar-badge {
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          padding: 2px 9px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #EDE9FE;
          flex-shrink: 0;
        }
        .top-bar-link {
          color: #C4B5FD;
          text-decoration: underline;
          cursor: pointer;
          font-weight: 600;
          flex-shrink: 0;
          margin-left: 4px;
        }
        .top-bar-extra { display: none; }
        @media (min-width: 769px) {
          .top-bar-extra {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .top-bar-divider {
            width: 1px; height: 14px;
            background: rgba(255,255,255,0.3);
            flex-shrink: 0;
          }
        }

        /* ── NAVBAR ── */
        .kalven-nav {
          position: fixed;
          top: ${TOP_BAR_H}px; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: ${NAV_H}px;
          width: 100%;
          box-sizing: border-box;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1.5px solid var(--kborder);
          transform: translateY(0);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease;
        }
        .kalven-nav.top-hidden { transform: translateY(-${TOP_BAR_H}px); }
        .kalven-nav.scrolled {
          box-shadow: 0 4px 24px rgba(107,33,168,0.1);
          background: rgba(255,255,255,0.98);
        }
        .kalven-nav::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #7C3AED, #4C1D95);
        }
/* ── LOGO ── */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  margin-top: 12px;
}

/* Apply only on large screens */
@media (min-width: 768px) {
  .nav-logo {
    margin-left: 42px;
  }
}
        /* ── DESKTOP LINKS ── */
        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-link-item {
          position: relative;
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 14px; right: 14px;
          height: 2px;
          background: linear-gradient(90deg, #7C3AED, #6B21A8);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }
        .nav-link-item:hover,
        .nav-link-item.active {
          color: var(--kp);
          background: var(--ksoft);
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after { transform: scaleX(1); }

        /* ── SERVICES DROPDOWN ── */
        .services-dropdown-wrapper { position: relative; }

        .services-toggle {
          position: relative;
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s, background 0.2s;
          font-family: inherit;
        }
        .services-toggle:hover,
        .services-toggle.active { color: var(--kp); background: var(--ksoft); }

        .services-toggle-arrow {
          font-size: 11px;
          transition: transform 0.25s ease;
          display: inline-block;
        }
        .services-dropdown-wrapper:hover .services-toggle-arrow { transform: rotate(180deg); }

        .services-dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: -10px;
          background: #fff;
          border: 1.5px solid var(--kborder);
          border-radius: 12px;
          padding: 8px 0;
          min-width: 240px;
          box-shadow: 0 10px 40px rgba(107,33,168,0.15);
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px) scale(0.95);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          z-index: 1001;
        }
        .services-dropdown-wrapper:hover .services-dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }
        .services-dropdown-item {
          padding: 12px 16px;
          color: #374151;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s;
          border-left: 3px solid transparent;
          cursor: pointer;
          background: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }
        .services-dropdown-item:hover {
          background: var(--ksoft);
          color: var(--kp);
          border-left-color: var(--kp-light);
          padding-left: 20px;
        }
        .services-dropdown-arrow {
          font-size: 11px;
          color: var(--kacc);
          opacity: 0;
          transition: all 0.2s;
        }
        .services-dropdown-item:hover .services-dropdown-arrow {
          opacity: 1;
          transform: translateX(3px);
        }

        /* ── RIGHT ── */
        .nav-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        .nav-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--knavy);
          text-decoration: none;
          padding: 7px 13px;
          border-radius: 8px;
          border: 1.5px solid var(--kborder);
          background: var(--ksoft);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .nav-phone:hover { border-color: var(--kp); background: #DDD6FE; }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #7C3AED, #6B21A8);
          color: #fff;
          font-size: 13.5px;
          font-weight: 600;
          padding: 9px 20px;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          transition: all 0.2s;
          box-shadow: 0 2px 10px rgba(107,33,168,0.3);
          font-family: inherit;
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(107,33,168,0.4); }
        .nav-cta span { position: relative; z-index: 1; }
        .nav-cta-dot {
          width: 6px; height: 6px;
          background: #C4B5FD;
          border-radius: 50%;
          animation: pulse 2s infinite;
          position: relative; z-index: 1;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }

        /* ── HAMBURGER ── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px; height: 40px;
          background: var(--ksoft);
          border: 1.5px solid var(--kborder);
          border-radius: 9px;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .hamburger:hover { background: #DDD6FE; }
        .hamburger span {
          display: block;
          width: 18px; height: 2px;
          background: var(--kp);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 9999;
          background: #fff;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          overflow-y: auto;
        }
        .mobile-menu.open { transform: translateX(0); }

        .mobile-menu-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #F3F0FF;
          flex-shrink: 0;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .mobile-menu-top::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #6B21A8, #4C1D95);
        }
        .mobile-close {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--ksoft);
          border: 1.5px solid var(--kborder);
          border-radius: 9px;
          cursor: pointer;
          font-size: 15px;
          color: var(--kp);
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .mobile-close:hover { background: #FEE2FE; color: #EF4444; border-color: #FECACA; }

        .mobile-nav-body {
          flex: 1;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-nav-link {
          font-size: 16px;
          font-weight: 500;
          color: #1F2937;
          text-decoration: none;
          padding: 14px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
          transition: all 0.2s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: var(--ksoft);
          color: var(--kp);
          border-color: #DDD6FE;
          padding-left: 20px;
        }
        .mobile-nav-link .arrow { font-size: 14px; color: var(--kacc); opacity: 0; transition: all 0.2s; }
        .mobile-nav-link:hover .arrow { opacity: 1; transform: translateX(3px); }

        .mobile-services-toggle {
          font-size: 16px;
          font-weight: 500;
          color: #1F2937;
          background: transparent;
          border: 1px solid transparent;
          padding: 14px 16px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          transition: all 0.2s;
          font-family: inherit;
        }
        .mobile-services-toggle:hover,
        .mobile-services-toggle.active {
          background: var(--ksoft);
          color: var(--kp);
          border-color: #DDD6FE;
          padding-left: 20px;
        }
        .mobile-services-arrow {
          font-size: 14px;
          color: var(--kacc);
          transition: transform 0.3s ease;
        }
        .mobile-services-toggle.active .mobile-services-arrow { transform: rotate(180deg); }

        .mobile-services-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .mobile-services-submenu.open { max-height: 600px; }

        .mobile-service-item {
          font-size: 14px;
          font-weight: 400;
          color: #6B7280;
          text-decoration: none;
          padding: 11px 16px 11px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-left: 2px solid transparent;
          transition: all 0.2s;
          cursor: pointer;
          background: none;
          border-top: none;
          border-right: none;
          border-bottom: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }
        .mobile-service-item:hover {
          color: var(--kp);
          background: rgba(107,33,168,0.05);
          border-left-color: var(--kp-light);
          padding-left: 44px;
        }
        .mobile-service-arrow { font-size: 12px; color: var(--kacc); opacity: 0; transition: all 0.2s; }
        .mobile-service-item:hover .mobile-service-arrow { opacity: 1; transform: translateX(2px); }

        .mobile-bottom {
          padding: 1rem 1.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid #F3F0FF;
          flex-shrink: 0;
        }
        .mobile-phone {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          background: var(--ksoft);
          border: 1.5px solid var(--kborder);
          border-radius: 12px;
          color: var(--knavy);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-cta {
          background: linear-gradient(135deg, #7C3AED, #6B21A8);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          width: 100%;
          box-sizing: border-box;
          letter-spacing: 0.02em;
          transition: all 0.2s;
          box-shadow: 0 4px 16px rgba(107,33,168,0.3);
          font-family: inherit;
        }
        .mobile-cta:hover { box-shadow: 0 6px 22px rgba(107,33,168,0.45); transform: translateY(-1px); }
        .mobile-footer-note { text-align: center; font-size: 12px; color: #9CA3AF; margin: 4px 0 0; }
        .mobile-footer-cities {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; flex-wrap: wrap; margin-top: 4px;
        }
        .city-tag {
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--kp); background: var(--ksoft);
          padding: 3px 10px; border-radius: 20px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) { .nav-phone { display: none; } }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-cta { display: none; }
          .hamburger { display: flex; }
          .kalven-nav { padding: 0 1rem; }
          .top-bar { font-size: 12px; }
          .top-bar-extra { display: none !important; }
        }
        @media (max-width: 480px) {
          .top-bar { font-size: 11px; }
          .top-bar-badge { font-size: 9px; padding: 1px 6px; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className={`top-bar ${!topBarVisible ? "hidden" : ""}`}>
        <div className="top-bar-inner">
          <span className="top-bar-badge">New</span>
          <span>IT Staffing &amp; Recruitment now available across India</span>
          <span className="top-bar-link">Book now →</span>
          <div className="top-bar-extra">
            <div className="top-bar-divider" />
            <span>Free consultation for startups &amp; SMEs</span>
            <div className="top-bar-divider" />
            <span>Bengaluru · Hyderabad · Mumbai · Delhi · Chennai</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`kalven-nav ${scrolled ? "scrolled" : ""} ${!topBarVisible ? "top-hidden" : ""}`}>
        <a href="/" className="nav-logo">
          <Image
            src="/kalven.png"
            alt="Kalven IT Group"
            width={180}
            height={42}
            style={{ objectFit: "contain", height: "auto" }}
            priority
          />
        </a>

        <div className="nav-links-desktop">
          {navLinks.map((link) => {
            if (link === "Services") {
              return (
                <div key={link} className="services-dropdown-wrapper">
                  <button className={`services-toggle ${activeLink === "Services" ? "active" : ""}`}>
                    {link}
                    <span className="services-toggle-arrow">▼</span>
                  </button>
                  <div className="services-dropdown-menu">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        className="services-dropdown-item"
                        onClick={() => handleServiceClick(service.slug)}
                      >
                        {service.name}
                        <span className="services-dropdown-arrow">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nav-link-item ${activeLink === link ? "active" : ""}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
            );
          })}
        </div>

        <div className="nav-right">
          <a href="tel:+919999999999" className="nav-phone">
            📞 +91 99999 99999
          </a>
          <button className="nav-cta">
            <span className="nav-cta-dot" />
            <span>Get a Quote</span>
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <Image
            src="/kalven-logo.png"
            alt="Kalven IT Group"
            width={110}
            height={34}
            style={{ objectFit: "contain", height: "auto" }}
          />
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close">✕</button>
        </div>

        <div className="mobile-nav-body">
          {navLinks.map((link) => {
            if (link === "Services") {
              return (
                <div key={link}>
                  <button
                    className={`mobile-services-toggle ${mobileServicesOpen ? "active" : ""}`}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link}
                    <span className="mobile-services-arrow">▼</span>
                  </button>
                  <div className={`mobile-services-submenu ${mobileServicesOpen ? "open" : ""}`}>
                    {services.map((service) => (
                      <button
                        key={service.id}
                        className="mobile-service-item"
                        onClick={() => handleMobileServiceClick(service.slug)}
                      >
                        {service.name}
                        <span className="mobile-service-arrow">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
                <span className="arrow">→</span>
              </a>
            );
          })}
        </div>

        <div className="mobile-bottom">
          <a href="tel:+919999999999" className="mobile-phone">
            📞 +91 99999 99999
          </a>
          <button className="mobile-cta">Get a Quote</button>
          <p className="mobile-footer-note">India's trusted IT &amp; staffing partner</p>
          <div className="mobile-footer-cities">
            <span className="city-tag">Bengaluru</span>
            <span className="city-tag">Mumbai</span>
            <span className="city-tag">Delhi</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;