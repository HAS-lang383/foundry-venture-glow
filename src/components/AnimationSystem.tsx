import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Global animation system:
 * - Scroll reveal via IntersectionObserver (.reveal / .reveal-left / .reveal-right)
 * - Stat counters (data-target, animates once when in view)
 * - Scroll color morph based on data-bg on sections
 * - 3s fallback: reveal all if nothing has revealed
 */
export function AnimationSystem() {
  const location = useLocation();

  useEffect(() => {
    // --- Scroll reveal ---
    const revealables = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
    );
    let revealedAny = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealedAny = true;
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach((el) => io.observe(el));

    const fallbackTimer = window.setTimeout(() => {
      if (!revealedAny) {
        revealables.forEach((el) => el.classList.add("is-visible"));
      }
    }, 3000);

    // --- Stat counters ---
    const stats = Array.from(document.querySelectorAll<HTMLElement>("[data-target]"));
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const statIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          const target = Number(el.dataset.target || "0");
          const start = performance.now();
          const duration = 1200;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const val = Math.round(target * easeOutCubic(p));
            el.textContent = val.toLocaleString();
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          statIo.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    stats.forEach((el) => statIo.observe(el));

    // --- Scroll color morph ---
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-bg]"));
    let ticking = false;
    const updateBg = () => {
      ticking = false;
      const mid = window.innerHeight / 2;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          const bg = s.dataset.bg;
          if (bg) document.body.style.backgroundColor = bg;
          break;
        }
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateBg);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateBg();

    return () => {
      io.disconnect();
      statIo.disconnect();
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);

  return null;
}
