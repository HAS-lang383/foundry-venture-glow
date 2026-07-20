import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "The Vision: Foundry for Good Venture Studio" },
      {
        name: "description",
        content:
          "Why Foundry for Good builds companies for the social good economy: start with purpose, access capital, and scale through a network that believes business and impact aren't opposites.",
      },
      { property: "og:title", content: "The Vision: Foundry for Good Venture Studio" },
      {
        property: "og:description",
        content:
          "Why Foundry for Good builds companies for the social good economy: start with purpose, access capital, and scale through a network that believes business and impact aren't opposites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero ph-img">
        <img className="ph-bg" src="/assets/hero-thesis.jpg" alt="" aria-hidden="true" />
        <div className="ph-overlay" aria-hidden="true"></div>
        <div className="wrap">
          <img className="hero-mark reveal" src="/assets/ffg-mark.svg" alt="" />
          <h1 className="reveal d1">
            Further: <em>for Good.</em>
          </h1>
          <p className="lede reveal d2">
            FFG is building the next generation of mission-driven companies. Start with purpose. Access capital. Scale through a network that believes business and impact aren't opposites.
          </p>
        </div>
      </section>

      {/* ================= WHY WE EXIST ================= */}
      <section className="rich" data-bg="#f2ede5">
        <img className="deco deco-star" style={{ top: "8%", right: "6%" }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <span className="deco deco-ring navy" style={{ bottom: "14%", left: "4%" }} aria-hidden="true"></span>
        <div className="wrap">
          <div className="frow">
            <div className="reveal-left">
              <div className="prose">
                <p className="lead">The organizations doing the most important work in the world are too often served by the worst software and the thinnest support.</p>
                <p>Nonprofits, associations, and the companies that serve them control real budgets and reach millions of people. Yet the tools built for them are chronically dated, under-resourced, and treated as an afterthought by the broader technology market. It is one of the largest under-tooled markets in software, and mainstream venture has largely walked past it.</p>
                <p>We didn't reach that conviction from a spreadsheet. We reached it by building. Over fourteen years Foundry for Good has started and scaled seven companies in this economy, from Double the Donation, now embedded in tens of thousands of nonprofits, to Getting Attention, Nexus Marketing, and Tradewing. Together they are profitable businesses serving more than 8,000 clients across the sector.</p>
                <p>The studio is how we do it again, on purpose. We identify a specific, unserved problem, fund a company to solve it, and pair a founding team with the capital, people, and distribution that took fourteen years to assemble. Built from experience, focused on what comes next.</p>
              </div>
            </div>
            <div className="frow-media reveal-right">
              <img src="/assets/biz-strategy.jpg" alt="The Foundry for Good team mapping a new venture" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THREE MOVES ================= */}
      <section className="rich tight" data-bg="#e9edf2">
        <div className="wrap">
          <div className="frow" style={{ alignItems: "center", marginBottom: "clamp(44px,5vw,72px)" }}>
            <div className="shead" style={{ marginBottom: 0 }}>
              <span className="eyebrow reveal">How we will venture</span>
              <h2 className="reveal d1">
                Three moves, <em>one conviction.</em>
              </h2>
            </div>
            <div className="reveal-right" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 22px 46px -34px rgba(31,53,83,.5)" }}>
              <img
                src="/assets/biz-vision.jpg"
                alt="A founding team working through a shared plan"
                style={{ width: "100%", height: "clamp(220px,24vw,300px)", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
          <div className="cardgrid">
            <div className="dcard reveal">
              <div className="dc-k">01 · Start with purpose</div>
              <h3>Begin with a customer we can name</h3>
              <p>Every venture starts from a specific, unserved problem and a buyer we already understand: not a technology looking for a use. Purpose isn't the marketing layer; it's the wedge.</p>
            </div>
            <div className="dcard reveal d1">
              <div className="dc-k">02 · Access capital</div>
              <h3>Fund the company, empower the founder</h3>
              <p>We put real capital behind the idea so the founding team can build full-time from day one, without betting their savings or waiting years for permission to start.</p>
            </div>
            <div className="dcard reveal d2">
              <div className="dc-k">03 · Scale through a network</div>
              <h3>Compound on what already works</h3>
              <p>New ventures plug into a fourteen-year platform: a 140-person team, an owned network of domains, and 500+ partners: so they scale on proven rails instead of building from zero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS + IMPACT ================= */}
      <section className="rich" data-bg="#f7e6d7">
        <img className="deco deco-star sm" style={{ top: "12%", left: "6%" }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <div className="wrap">
          <div className="frow">
            <div className="frow-media">
              <img src="/assets/hero-team.jpg" alt="The Foundry for Good team at work" />
            </div>
            <div className="frow-body reveal-right">
              <span className="eyebrow" style={{ color: "var(--navy)", marginBottom: 20, display: "inline-flex" }}>
                The core belief
              </span>
              <h3>
                Business and impact <em>aren't opposites.</em>
              </h3>
              <p>The old story says you either build a real company or you do good in the world. We've never believed it. A durable, profitable business is the most reliable engine of impact there is: it can hire, invest, and keep serving its customers long after a grant runs out.</p>
              <p>So we build companies that are financially serious precisely because the mission is serious. Profit is what lets a venture keep its promises: to its customers, to its team, and to the causes its software ultimately serves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cohort">
        <img className="cohort-star" src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow reveal">Where the vision goes next</span>
          <h2 className="reveal d1">
            See how we <em>put it to work.</em>
          </h2>
          <p className="reveal d2">
            The vision is only as good as the model behind it. See exactly how funding, ownership, and the studio platform turn conviction into a company.
          </p>
          <div className="hero-ctas reveal d3" style={{ justifyContent: "center" }}>
            <a className="btn" href="/model">
              How the model works <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost-light" href="/platform">
              What the platform gives you <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
