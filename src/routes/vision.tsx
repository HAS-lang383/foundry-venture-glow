import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vision")({
  component: VisionPage,
});

function VisionPage() {
  return (
    <section className="page-hero" data-bg="#f2ede5">
      <div className="wrap">
        <p className="eyebrow reveal">FFG Venture Studio</p>
        <h1 className="reveal d1">Vision</h1>
        <p className="lede reveal d2">
          Placeholder — approved copy for the vision page will be ported from the reference source.
        </p>
      </div>
    </section>
  );
}
