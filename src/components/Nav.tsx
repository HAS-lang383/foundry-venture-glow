import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TABS: { to: string; label: string }[] = [
  { to: "/", label: "Overview" },
  { to: "/vision", label: "The Vision" },
  { to: "/model", label: "The Model" },
  { to: "/platform", label: "The Platform" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/founders", label: "For Founders" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Foundry for Good Venture Studio: Home">
          <span className="brand-mark"><img src="/assets/ffg-mark.svg" alt="" width={38} height={38} /></span>
          <span className="brand-stack">
            <span className="b-name">Foundry for Good</span>
            <span className="b-sub">Venture Studio</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {TABS.map((t) => (
            <Link key={t.to} to={t.to} className={location.pathname === t.to ? "active" : ""}>
              {t.label}
            </Link>
          ))}
        </nav>
        <Link to="/founders" className="nav-cta">
          Become a Venture Lead
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.5 8h9M9 4.5l3.5 3.5L9 11.5"></path></svg>
        </Link>
        <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h14M3 10h14M3 14h14"></path></svg>
        </button>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {TABS.map((t) => (
          <Link key={t.to} to={t.to} className={location.pathname === t.to ? "active" : ""}>
            {t.label}
          </Link>
        ))}
        <Link to="/founders" className="nav-cta">Become a Venture Lead</Link>
      </div>
    </header>
  );
}
