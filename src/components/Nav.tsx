import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const TABS: { to: string; label: string }[] = [
  { to: "/", label: "Overview" },
  { to: "/vision", label: "Vision" },
  { to: "/model", label: "Model" },
  { to: "/platform", label: "Platform" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/team", label: "Team" },
  { to: "/founders", label: "Founders" },
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <Link to="/" className="brand">
          <img src="/assets/ffg-mark.png" alt="" className="mark" />
          <div className="brand-text">
            <span className="name">Foundry for Good</span>
            <span className="sub">Venture Studio</span>
          </div>
        </Link>

        <div className="nav-tabs">
          {TABS.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className={location.pathname === t.to ? "active" : ""}
            >
              {t.label}
            </Link>
          ))}
        </div>

        <Link to="/founders" className="btn btn-orange nav-cta">
          Become a Venture Lead <span className="arrow">→</span>
        </Link>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {TABS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className={location.pathname === t.to ? "active" : ""}
          >
            {t.label}
          </Link>
        ))}
        <Link to="/founders" className="btn btn-orange">
          Become a Venture Lead <span className="arrow">→</span>
        </Link>
      </div>
    </nav>
  );
}
