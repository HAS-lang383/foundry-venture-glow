import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foundry for Good Venture Studio: Launch a mission-driven company with capital behind you" },
      {
        name: "description",
        content:
          "Foundry for Good is a venture studio that pairs ambitious operators with capital, a 140-person team, and a 14-year platform to launch and scale businesses for the social good economy.",
      },
      { property: "og:title", content: "Foundry for Good Venture Studio: Launch a mission-driven company with capital behind you" },
      {
        property: "og:description",
        content:
          "Foundry for Good is a venture studio that pairs ambitious operators with capital, a 140-person team, and a 14-year platform to launch and scale businesses for the social good economy.",
      },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  // Page-specific behaviors: 3D star, thesis ghost parallax, brand carousel drift, quote tabs.
  useEffect(() => {
    // hero video autoplay
    const v = document.querySelector<HTMLVideoElement>(".hero-bg-video");
    if (v) {
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }

    // thesis ghost parallax
    const ghost = document.getElementById("thesisGhost");
    const onScrollGhost = () => {
      if (ghost) ghost.style.transform = `translateY(-58%) rotate(${window.scrollY * 0.02}deg)`;
    };
    window.addEventListener("scroll", onScrollGhost, { passive: true });

    // 3D logo extrusion
    const s3 = document.getElementById("star3d");
    if (s3 && !s3.dataset.built) {
      const front = s3.querySelector("img");
      if (front) {
        const LAYERS = 48, DEPTH = 44;
        for (let li = 1; li < LAYERS; li++) {
          const t = li / (LAYERS - 1);
          const c = front.cloneNode() as HTMLImageElement;
          c.style.transform = `translateZ(${(-DEPTH * t).toFixed(2)}px)`;
          c.style.filter = `brightness(0) invert(1) brightness(${(0.92 - 0.5 * t).toFixed(3)})`;
          s3.appendChild(c);
        }
        (front as HTMLImageElement).style.transform = "translateZ(0)";
        (front as HTMLImageElement).style.filter = "brightness(0) invert(1)";
        s3.dataset.built = "1";
      }
    }

    // brand carousel drift
    const car = document.getElementById("wcarousel") as HTMLDivElement | null;
    let raf = 0;
    if (car && !car.dataset.built) {
      car.innerHTML += car.innerHTML;
      car.dataset.built = "1";
      const cards = car.querySelectorAll<HTMLElement>(".wcard");
      const half = cards.length / 2;
      let loopPoint = 0;
      const measure = () => { loopPoint = cards[half].offsetLeft - cards[0].offsetLeft; };
      measure();
      window.addEventListener("resize", measure);
      const cardStep = () => cards[0].getBoundingClientRect().width + 22;
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const SPEED = 0.6;
      let pos = 0, nudge = 0, hover = false, dragging = false;
      const wrapFn = () => {
        if (loopPoint > 0) {
          while (pos >= loopPoint) pos -= loopPoint;
          while (pos < 0) pos += loopPoint;
        }
      };
      const np = document.getElementById("wNext");
      const pp = document.getElementById("wPrev");
      np?.addEventListener("click", () => { nudge += cardStep(); });
      pp?.addEventListener("click", () => { nudge -= cardStep(); });
      const strip = document.querySelector(".wstrip");
      strip?.addEventListener("pointerenter", () => { hover = true; });
      strip?.addEventListener("pointerleave", () => { hover = false; });
      car.addEventListener("pointerdown", () => { dragging = true; });
      window.addEventListener("pointerup", () => {
        if (dragging) { dragging = false; pos = car.scrollLeft; wrapFn(); }
      });
      car.addEventListener("scroll", () => { if (dragging) pos = car.scrollLeft; });
      const frame = () => {
        if (!dragging) {
          let move = 0;
          if (!hover && !reduce) move += SPEED;
          if (nudge !== 0) {
            let d = nudge * 0.14;
            if (Math.abs(d) < 0.5) d = nudge;
            move += d; nudge -= d;
          }
          if (move !== 0) { pos += move; wrapFn(); car.scrollLeft = pos; }
        }
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("scroll", onScrollGhost);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const [activeQuote, setActiveQuote] = useState<"0" | "1">("0");

  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <video className="hero-bg-video" src="/assets/ffg-hero-bg.mp4" autoPlay loop muted playsInline aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="wrap hero-center">
          <img className="hero-mark reveal" src="/assets/ffg-mark.svg" alt="" />
          <h1 className="hero-h1 reveal d1">Become a<br /><span className="accent">Venture Lead</span></h1>
          <p className="hero-sub reveal d2">Elevate your trajectory. Foundry for Good empowers experienced leaders to co-found high-potential, mission-driven ventures. We bring the capital and strategic frameworks; you bring the leadership. We want to succeed with you by granting you major equity, operational scale, and definitive career acceleration.</p>
          <div className="hero-ctas reveal d3">
            <a className="btn btn-orange" href="/vision">Read the vision <span className="arrow">→</span></a>
            <a className="btn btn-ghost-light" href="/portfolio">See the portfolio <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="beststats">
        <div className="wrap">
          <div>
            <h2 className="reveal">From day one, you have full <em>backing.</em></h2>
            <p className="lede reveal d1">You gain access to an institutional ecosystem of vetted talent, specialized growth playbooks, and go-to-market strategies designed to bypass standard startup pitfalls. We back you with our experience and track record.</p>
            <div className="statrow" id="statrow">
              <div className="statcell reveal d1"><div className="num"><span className="counter" data-target="7">0</span></div><div className="lbl">Operating brands</div></div>
              <div className="statcell reveal d2"><div className="num"><span className="counter" data-target="14">0</span></div><div className="lbl">Years of growth</div></div>
              <div className="statcell reveal d3"><div className="num"><span className="counter" data-target="140">0</span><span className="suf">+</span></div><div className="lbl">Shared experts</div></div>
              <div className="statcell reveal d4"><div className="num"><span className="counter" data-target="95">0</span><span className="suf">%</span></div><div className="lbl">Client retention</div></div>
            </div>
          </div>
          <div className="star-side reveal-right">
            <div className="star3d" id="star3d" aria-hidden="true">
              <img src="/assets/ffg-mark.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="thesis" data-bg="#f2ede5">
        <img className="thesis-ghost" src="/assets/ffg-mark.svg" alt="" id="thesisGhost" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow reveal">Our vision</span>
          <h2 className="caps thesis-h reveal d1">More Good:<span className="slab-i">for Good</span></h2>
          <p className="reveal d2">We want to build more mission-driven companies and empower them through strategic integration within the FFG network. By finding the right operators, our synergistic portfolio can take the US mission-driven sector to new heights.</p>
          <p className="reveal d2" style={{ marginTop: 28 }}><a className="btn btn-ghost-navy" href="/vision">Read the full vision <span className="arrow">→</span></a></p>
        </div>
      </section>

      {/* BRAND CAROUSEL */}
      <section className="wstrip" aria-label="Portfolio brands" data-bg="#f2ede5">
        <div className="wrap wstrip-controls">
          <button className="car-btn" id="wPrev" aria-label="Previous companies">‹</button>
          <button className="car-btn" id="wNext" aria-label="Next companies">›</button>
        </div>
        <div className="wcarousel" id="wcarousel">
          <a className="wcard" href="https://doublethedonation.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Fundraising Tech</span><img src="/assets/co-dtd.jpg" alt="The Double the Donation team" /><span className="wlogo"><img src="/assets/logo-dtd.png" alt="Double the Donation" /></span></div>
            <div className="wfoot"><p>The industry-standard matching gift platform for nonprofits</p><span className="wmetric">30,000+ Nonprofits served</span></div>
          </a>
          <a className="wcard" href="https://gettingattention.org" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Google Ad Grants</span><img src="/assets/co-ga.jpg" alt="The Getting Attention marketing team" /><span className="wlogo"><img src="/assets/logo-getting-attention.png" alt="Getting Attention" /></span></div>
            <div className="wfoot"><p>Specialist agency turning $10K/mo in free Google ad spend into mission impact</p><span className="wmetric">$10K/mo Per nonprofit unlocked</span></div>
          </a>
          <a className="wcard" href="https://nxunite.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Community</span><img src="/assets/pexels-1181355.jpg" alt="NXUnite" /><span className="wlogo"><img src="/assets/logo-nxunite.png" alt="NXUnite" /></span></div>
            <div className="wfoot"><p>The largest open community network for nonprofit professionals</p><span className="wmetric">Sector-wide Community reach</span></div>
          </a>
          <a className="wcard" href="https://tradewing.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Association Software</span><img src="/assets/co-tradewing.jpg" alt="Association members networking, from Tradewing" /><span className="wlogo"><img src="/assets/logo-tradewing.png" alt="Tradewing" /></span></div>
            <div className="wfoot"><p>Modern community platform for trade and professional associations</p><span className="wmetric">+28% Client retention post-acquisition</span></div>
          </a>
          <a className="wcard" href="https://ecardwidget.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto wphoto-product"><span className="wcat">Donor Engagement</span><img src="/assets/co-ecard.webp" alt="eCardWidget product on laptop and phone" style={{ objectFit: "contain", padding: 20 }} /><span className="wlogo"><img src="/assets/logo-ecardwidget.png" alt="eCardWidget" /></span></div>
            <div className="wfoot"><p>Branded ecard tools that drive peer-to-peer fundraising at scale</p><span className="wmetric">Embedded In major nonprofits</span></div>
          </a>
          <a className="wcard" href="https://fullerfocus.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Consulting</span><img src="/assets/pexels-5668837.jpg" alt="Fuller Focus" /><span className="wlogo"><img src="/assets/logo-fuller-focus.png" alt="Fuller Focus" /></span></div>
            <div className="wfoot"><p>Operator-led advisory for mission-driven leaders navigating growth</p><span className="wmetric">Operator-led Advisory practice</span></div>
          </a>
          <a className="wcard" href="https://nexusmarketing.com" target="_blank" rel="noopener noreferrer">
            <div className="wphoto"><span className="wcat">Growth Agency</span><img src="/assets/co-nexus-team.png" alt="The Nexus Marketing team" /><span className="wlogo"><img src="/assets/logo-nexus.png" alt="Nexus Marketing" /></span></div>
            <div className="wfoot"><p>The only SEO agency specializing in the social good sector</p><span className="wmetric">10+ Years compounding</span></div>
          </a>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="workhero">
        <div className="wrap">
          <span className="eyebrow reveal">Our work</span>
          <h2 className="work-statement reveal d1">We work with mission-driven founders at the earliest stage, providing the platform, capital, and community to turn bold ideas into <em>businesses that create lasting change.</em></h2>
        </div>
      </section>

      {/* QUOTES */}
      <section className="quotes">
        <img className="deco deco-star sm" style={{ top: "14%", left: "8%", filter: "brightness(0) invert(1)", opacity: 0.35 }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <img className="deco deco-star sm" style={{ bottom: "16%", right: "7%", opacity: 0.6 }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow reveal">Proof points: The model in action. Real results from ventures built and acquired inside the studio.</span>
          <div className="qslide reveal d1">
            <div className={`qtext${activeQuote === "0" ? " active" : ""}`} data-q="0">
              Working with Foundry for Good has allowed me to accelerate my career learning and sharpen my entrepreneurial skills.
              <p className="qcase">Incubated inside FFG: a digital marketing firm equipping nonprofits to maximize Google's $10K/month Ad Grant. Founded with zero outside investment.</p>
              <span className="qbrand"><img src="/assets/quote-getting-attention.png" alt="Getting Attention" /></span>
            </div>
            <div className={`qtext${activeQuote === "1" ? " active" : ""}`} data-q="1">
              They provided us with the exact operational frameworks and strategic capital we needed. We haven't just grown: we've completely modernized.
              <p className="qcase">Acquired a heavily funded asset with untapped potential. Executed a full platform rebrand, built three new departments, and transformed the product cycle.</p>
              <span className="qbrand"><img src="/assets/quote-tradewing.png" alt="Tradewing" /></span>
            </div>
          </div>
          <div className="qwho reveal d2">
            <button className={`qtab${activeQuote === "0" ? " active" : ""}`} data-q="0" onClick={() => setActiveQuote("0")}>
              <img className="qface" src="/assets/jessica-king.jpg" alt="Jessica King" />
              <span className="qname"><strong>Jessica King</strong><span>Business Lead, Getting Attention · Venture Studio · Est. 2023</span></span>
            </button>
            <button className={`qtab${activeQuote === "1" ? " active" : ""}`} data-q="1" onClick={() => setActiveQuote("1")}>
              <img className="qface" src="/assets/lomesh-shah.jpg" alt="Lomesh Shah" />
              <span className="qname"><strong>Lomesh Shah</strong><span>CEO, Tradewing · Acquisition · Oct. 2024</span></span>
            </button>
          </div>
        </div>
      </section>

      {/* THE MODEL: in brief */}
      <section className="rich" data-bg="#f7e6d7">
        <img className="deco deco-star" style={{ top: "6%", right: "6%" }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <span className="deco deco-ring navy" style={{ bottom: "12%", left: "4%" }} aria-hidden="true" />
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow reveal">How it works</span>
            <h2 className="reveal d1">From experience to <em>executive leadership.</em></h2>
            <p className="lede reveal d2">We pair you with manpower: both on the technical and business side. And back you up with a playbook that has been successful for 14 years.</p>
          </div>
          <div className="frow" style={{ alignItems: "stretch" }}>
            <div className="steps">
              <div className="step reveal"><span className="step-n">01</span><div><h3>Vision</h3><p>We start discussing and connecting with your sharp and defensible view on the business. Then we connect you with an untapped market - an unserved corner of the social good economy: and a customer we can already name. This gives you key targets and key drivers to success.</p></div></div>
              <div className="step reveal d1"><span className="step-n">02</span><div><h3>Incubate</h3><p>We approve initial funding, design the shared infrastructure, and share the go-to-market engine. You can strategize and validate the system fast. Our ventures hit key milestones within six months.</p></div></div>
              <div className="step reveal d2"><span className="step-n">03</span><div><h3>Operate</h3><p>Venture leads graduate into independent companies with their own P&amp;L, leadership, and identity. We stay on as a long-term partner and an active investor. We want to hear your ideas and support you across any bottlenecks.</p></div></div>
              <div className="step reveal d3"><span className="step-n">04</span><div><h3>Compound</h3><p>As the business becomes profitable, you gain real optionality: you can take distributions, position for a future sale, or keep growing.</p></div></div>
            </div>
            <div className="reveal-right" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 22px 46px -34px rgba(31,53,83,.5)", minHeight: "clamp(360px,44vw,100%)" }}>
              <img src="/assets/home-journey.jpg" alt="A founding team mapping the path from thesis to scale" style={{ width: "100%", height: "100%", minHeight: 360, objectFit: "cover", display: "block" }} />
            </div>
          </div>
          <p className="reveal" style={{ marginTop: 34 }}><a className="btn btn-navy" href="/model">See the funding &amp; ownership model <span className="arrow">→</span></a></p>
        </div>
      </section>

      {/* THE PLATFORM: factstrip */}
      <section className="factstrip">
        <div className="wrap">
          <div className="shead split" style={{ marginBottom: 44 }}>
            <div>
              <span className="eyebrow reveal" style={{ color: "#fcd9c8" }}>The platform</span>
              <h2 className="reveal d1" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(30px,3.4vw,50px)", color: "#fff", maxWidth: "20ch", lineHeight: 1.08 }}>A fourteen-year head start, <em style={{ fontStyle: "italic", color: "var(--orange)" }}>shared with every venture.</em></h2>
            </div>
            <p className="reveal d2" style={{ color: "#e8e2d8b3", maxWidth: "42ch", fontSize: 17, marginBottom: 6 }}>New ventures don't start from zero. They plug into the capital, people, distribution, and brand that seven profitable companies were built on.</p>
          </div>
          <div className="factgrid">
            <div className="factcell reveal"><div className="fv">17</div><div className="fl">Domains owned across the Foundry for Good network</div></div>
            <div className="factcell reveal d1"><div className="fv">8,000<span className="suf">+</span></div><div className="fl">Clients served across the portfolio's businesses</div></div>
            <div className="factcell reveal d2"><div className="fv">140<span className="suf">+</span></div><div className="fl">Team members across engineering, growth, and operations</div></div>
            <div className="factcell reveal d3"><div className="fv">500<span className="suf">+</span></div><div className="fl">Partners in our social good network, ready to open doors</div></div>
          </div>
          <p className="reveal" style={{ marginTop: 40 }}><a className="btn btn-orange" href="/platform">Explore the platform <span className="arrow">→</span></a></p>
        </div>
      </section>

      {/* COHORT CTA */}
      <section className="cohort" id="cohort">
        <img className="cohort-star" src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow reveal">Fall 2026 Cohort: Ready for Candidates</span>
          <h2 className="reveal d1">Launch your rocketship. <em>Bet on yourself.</em></h2>
          <p className="reveal d2">We are actively sourcing 3–5 high-impact, mission-driven ventures and are looking for venture leads to join our upcoming Venture Studio cohort.</p>
          <a className="btn reveal d3" href="/founders">Become a Venture Lead <span className="arrow">→</span></a>
        </div>
      </section>

      {/* PARTNER */}
      <section className="partner" data-bg="#f7e6d7">
        <img className="deco deco-star" style={{ top: "14%", left: "8%" }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <img className="deco deco-star sm" style={{ top: "22%", right: "10%" }} src="/assets/ffg-mark.svg" alt="" aria-hidden="true" />
        <span className="deco deco-ring" style={{ bottom: "22%", right: "6%" }} aria-hidden="true" />
        <span className="deco deco-dot navy" style={{ bottom: "14%", left: "12%" }} aria-hidden="true" />
        <span className="deco deco-dot" style={{ top: "44%", left: "4%" }} aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow reveal">Partner with the studio</span>
          <h2 className="reveal d1">Would you like to <em>know more?</em></h2>
          <p className="lede reveal d2">We'd love for you to know more about Foundry for Good and why we're so passionate in getting this done. Whether you would like to read up more on our vision, or would like to have a direct chat with us, we have two portals below:</p>
          <div className="partner-ctas reveal d3">
            <a className="btn btn-orange" href="/vision">Our Vision <span className="arrow">→</span></a>
            <a className="btn btn-ghost-navy" href="https://www.foundryforgood.com/lets-chat/" target="_blank" rel="noopener noreferrer">Start a conversation</a>
          </div>
        </div>
      </section>
    </>
  );
}
