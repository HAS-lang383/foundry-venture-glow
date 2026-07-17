import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <div className="foot-brand">
            <img src="/assets/ffg-mark.png" alt="" width={36} height={36} />
            Foundry for Good
          </div>
          <p style={{ color: "#a8b3c4", maxWidth: 360 }}>
            A venture studio building software companies that serve nonprofits and associations.
          </p>
        </div>
        <div>
          <h4>Studio</h4>
          <Link to="/vision">Vision</Link>
          <Link to="/model">Model</Link>
          <Link to="/platform">Platform</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <h4>People</h4>
          <Link to="/team">Team</Link>
          <Link to="/founders">Founders</Link>
          <a href="https://foundryforgood.co" target="_blank" rel="noreferrer">
            Foundry for Good ↗
          </a>
        </div>
        <div className="fine">
          <span>© {new Date().getFullYear()} Foundry for Good</span>
          <span>FFG Venture Studio</span>
        </div>
      </div>
    </footer>
  );
}
