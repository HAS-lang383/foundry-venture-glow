export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <div className="topbar-right" style={{ marginLeft: "auto" }}>
          <a className="tb-btn tb-hide" href="https://www.foundryforgood.com/portfolio/" target="_blank" rel="noopener noreferrer">Full Portfolio</a>
          <a className="tb-btn tb-hide" href="https://careers.foundryforgood.com/" target="_blank" rel="noopener noreferrer">Careers</a>
          <a className="tb-btn" href="https://www.foundryforgood.com/" target="_blank" rel="noopener noreferrer">Back to Foundry for Good</a>
        </div>
      </div>
    </div>
  );
}
