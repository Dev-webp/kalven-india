import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  // NAV
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    borderBottom: "1px solid #E5E7EB",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
    gap: 12,
  },
  logo: {
    fontSize: 20,
    fontWeight: 600,
    color: "#111827",
    letterSpacing: "-0.5px",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    fontSize: 14,
    color: "#6B7280",
    textDecoration: "none",
  },
  navCta: {
    background: "#1a56db",
    color: "#fff",
    fontSize: 13,
    fontWeight: 500,
    padding: "8px 18px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  hamburger: {
    background: "transparent",
    border: "none",
    fontSize: 22,
    cursor: "pointer",
    color: "#111827",
  },
  mobileMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingTop: 12,
    borderTop: "1px solid #E5E7EB",
  },
  mobileNavLink: {
    fontSize: 15,
    color: "#374151",
    textDecoration: "none",
    padding: "6px 0",
  },

  // HERO
  hero: {
    padding: "4rem 2rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "1.25rem",
    background: "#fff",
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "#EBF3FF",
    color: "#1a56db",
    fontSize: 12,
    fontWeight: 500,
    padding: "5px 14px",
    borderRadius: 20,
  },
  heroBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#1a56db",
    display: "inline-block",
  },
  heroH1: {
    fontSize: "clamp(26px, 4vw, 40px)",
    fontWeight: 700,
    color: "#111827",
    maxWidth: 640,
    lineHeight: 1.25,
    margin: 0,
  },
  heroP: {
    fontSize: 16,
    color: "#6B7280",
    maxWidth: 560,
    lineHeight: 1.7,
    margin: 0,
  },
  heroBtns: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  heroStats: {
    display: "flex",
    gap: "2.5rem",
    marginTop: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  stat: { textAlign: "center" },
  statNum: { fontSize: 24, fontWeight: 700, color: "#111827" },
  statLabel: { fontSize: 13, color: "#6B7280" },

  // BUTTONS
  btnPrimary: {
    background: "#1a56db",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    padding: "11px 24px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  btnSecondary: {
    background: "transparent",
    color: "#111827",
    fontSize: 14,
    fontWeight: 500,
    padding: "11px 24px",
    borderRadius: 8,
    border: "1.5px solid #D1D5DB",
    cursor: "pointer",
  },
  btnWhite: {
    background: "#fff",
    color: "#1a56db",
    fontSize: 14,
    fontWeight: 600,
    padding: "11px 26px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },

  // SECTIONS
  section: {
    padding: "3.5rem 2rem",
    background: "#fff",
  },
  sectionAlt: {
    padding: "3.5rem 2rem",
    background: "#F8FAFC",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  sectionH2: {
    fontSize: 24,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 6,
    margin: 0,
  },
  sectionSub: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 6,
  },

  // SERVICES
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    maxWidth: 960,
    margin: "0 auto",
  },
  serviceCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: "1.25rem",
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 6,
    margin: 0,
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 1.65,
    marginTop: 6,
  },

  // CLIENTS
  clientsStrip: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    maxWidth: 860,
    margin: "0 auto",
  },
  clientPill: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 8,
    padding: "9px 18px",
    fontSize: 14,
    fontWeight: 500,
    color: "#374151",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  clientDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "inline-block",
  },
  clientsNote: {
    textAlign: "center",
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: "1.25rem",
  },

  // PARTNERS
  partnersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "1rem",
    maxWidth: 860,
    margin: "0 auto",
  },
  partnerCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: "1.1rem",
    textAlign: "center",
  },
  partnerName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 4,
  },
  partnerType: {
    fontSize: 12,
    color: "#6B7280",
  },
  partnerBadge: {
    display: "inline-block",
    marginTop: 8,
    background: "#EBF3FF",
    color: "#1a56db",
    fontSize: 11,
    fontWeight: 500,
    padding: "3px 10px",
    borderRadius: 12,
  },

  // WHY US
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "1rem",
    maxWidth: 960,
    margin: "0 auto",
  },
  whyCard: {
    borderRadius: 12,
    padding: "1.25rem",
    border: "1px solid #E5E7EB",
    background: "#fff",
  },
  whyNum: {
    fontSize: 30,
    fontWeight: 700,
    color: "#1a56db",
    marginBottom: 4,
  },
  whyTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 6,
  },
  whyDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 1.65,
  },

  // TESTIMONIALS
  testiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
    maxWidth: 960,
    margin: "0 auto",
  },
  testiCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: "1.25rem",
  },
  stars: {
    color: "#d97706",
    fontSize: 15,
    marginBottom: 10,
    letterSpacing: 1,
  },
  testiText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 1.7,
    marginBottom: 16,
  },
  testiPerson: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 600,
    flexShrink: 0,
  },
  testiName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#111827",
  },
  testiRole: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  // CTA
  ctaSection: {
    padding: "3.5rem 2rem",
    textAlign: "center",
    background: "#1a56db",
  },
  ctaH2: {
    fontSize: 26,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 10,
  },
  ctaP: {
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
    marginBottom: "1.5rem",
  },

  // FOOTER
  footer: {
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 12,
    borderTop: "1px solid #E5E7EB",
    background: "#fff",
  },
  footerLogo: {
    fontSize: 16,
    fontWeight: 600,
    color: "#111827",
  },
  footerLinks: {
    display: "flex",
    gap: "1.25rem",
    flexWrap: "wrap",
  },
  footerLink: {
    fontSize: 13,
    color: "#6B7280",
    textDecoration: "none",
  },
  footerCopy: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  // MISC
  divider: {
    border: "none",
    borderTop: "1px solid #E5E7EB",
    margin: 0,
  },
};

export default styles;