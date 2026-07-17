import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/">
              <span className="brand-mark"><img src="/assets/ffg-mark.svg" alt="" width={38} height={38} /></span>
              <span className="brand-stack">
                <span className="b-name">Foundry for Good</span>
                <span className="b-sub">Venture Studio</span>
              </span>
            </Link>
            <p>A venture studio building the next generation of companies for the nonprofit and association economy.</p>
          </div>
          <div className="foot-col">
            <h4>Studio</h4>
            <ul>
              <li><Link to="/vision">The Vision</Link></li>
              <li><Link to="/model">The Model</Link></li>
              <li><Link to="/platform">The Platform</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Get involved</h4>
            <ul>
              <li><Link to="/founders">For Founders</Link></li>
              <li><Link to="/team">Team &amp; Advisors</Link></li>
              <li><a href="https://www.foundryforgood.com/lets-chat/" target="_blank" rel="noopener noreferrer">Start a conversation</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Foundry for Good</h4>
            <ul>
              <li><a href="https://www.foundryforgood.com/" target="_blank" rel="noopener noreferrer">Main site</a></li>
              <li><a href="https://www.foundryforgood.com/portfolio/" target="_blank" rel="noopener noreferrer">Full portfolio</a></li>
              <li><a href="https://careers.foundryforgood.com/" target="_blank" rel="noopener noreferrer">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Foundry for Good. All rights reserved.</span>
          <span><em>Building for the missions that matter.</em></span>
        </div>
      </div>
    </footer>
  );
}
