import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <section className="page-hero" data-bg="#f2ede5">
      <div className="wrap">
        <p className="eyebrow reveal">FFG Venture Studio</p>
        <h1 className="reveal d1">Portfolio</h1>
        <p className="lede reveal d2">
          Placeholder — approved copy for the portfolio page will be ported from the reference source.
        </p>
      </div>
    </section>
  );
}
