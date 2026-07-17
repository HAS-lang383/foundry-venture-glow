import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <>
      <section className="page-hero" data-bg="#f2ede5">
        <div className="wrap">
          <p className="eyebrow reveal">FFG Venture Studio</p>
          <h1 className="reveal d1">
            Building software companies that serve{" "}
            <span className="slab-i">nonprofits &amp; associations.</span>
          </h1>
          <p className="lede reveal d2">
            Placeholder overview copy. Final approved copy will be ported from the reference
            source when it arrives.
          </p>
        </div>
      </section>
    </>
  );
}
