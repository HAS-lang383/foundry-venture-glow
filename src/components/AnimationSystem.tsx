import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Global animations from the reference vs.js:
 * - .visible reveal via IntersectionObserver
 * - stat counters on #statrow when in view
 * - body background-color morph based on section[data-bg]
 * - 3s fallback: reveal all + snap counters if observers never fire
 */
export function AnimationSystem() {
  const location = useLocation();

  useEffect(() => {
    // reveal
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // stat counters
    const statrow = document.getElementById("statrow");
    let cio: IntersectionObserver | null = null;
    if (statrow) {
      let done = false;
      cio = new IntersectionObserver(
        (es) => {
          for (const e of es) {
            if (!e.isIntersecting || done) continue;
            done = true;
            statrow.querySelectorAll<HTMLElement>(".counter").forEach((el) => {
              const t = parseInt(el.getAttribute("data-target") || "0", 10) || 0;
              let start: number | null = null;
              const step = (ts: number) => {
                if (start === null) start = ts;
                const k = Math.min((ts - start) / 1200, 1);
                el.textContent = String(Math.round(t * (1 - Math.pow(1 - k, 3))));
                if (k < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            });
            cio!.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      cio.observe(statrow);
    }

    // color morph
    const tinted = Array.from(document.querySelectorAll<HTMLElement>("section[data-bg]"));
    const updateBg = () => {
      const mid = window.innerHeight * 0.5;
      for (const s of tinted) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          const bg = s.getAttribute("data-bg");
          if (bg) document.body.style.backgroundColor = bg;
          return;
        }
      }
    };
    window.addEventListener("scroll", updateBg, { passive: true });
    window.addEventListener("resize", updateBg);
    updateBg();

    // fallback
    const fb = window.setTimeout(() => {
      if (document.querySelectorAll(".reveal.visible,.reveal-left.visible,.reveal-right.visible").length === 0) {
        document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach((el) => el.classList.add("visible"));
        document.querySelectorAll<HTMLElement>(".counter").forEach((el) => {
          el.textContent = el.getAttribute("data-target") || "0";
        });
      }
    }, 3000);

    return () => {
      io.disconnect();
      cio?.disconnect();
      window.removeEventListener("scroll", updateBg);
      window.removeEventListener("resize", updateBg);
      window.clearTimeout(fb);
    };
  }, [location.pathname]);

  return null;
}
