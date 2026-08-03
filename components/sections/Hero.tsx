"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import LottiePlayer from "@/components/ui/LottiePlayer";
import { agencySubcopy, agencyTagline } from "@/lib/services";
import { analyticsEvents } from "@/lib/analytics";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;

    async function init() {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      const lines = sectionRef.current?.querySelectorAll("[data-hero-line]");
      if (lines) {
        gsap.fromTo(
          lines,
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.08, delay: 0.15, ease: "power4.out" }
        );
      }

      const label = sectionRef.current?.querySelector("[data-hero-label]");
      if (label) {
        gsap.fromTo(label, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
      }

      const sub = sectionRef.current?.querySelector("[data-hero-sub]");
      if (sub) {
        gsap.fromTo(sub, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power2.out" });
      }

      const ctas = sectionRef.current?.querySelector("[data-hero-ctas]");
      if (ctas) {
        gsap.fromTo(ctas, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.65, ease: "power2.out" });
      }

      const visual = sectionRef.current?.querySelector("[data-hero-visual]");
      if (visual) {
        gsap.fromTo(
          visual,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, delay: 0.55, ease: "power2.out" }
        );
      }
    }

    init();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-x-clip bg-surface-accent-glow pt-[calc(var(--header-height)+var(--announcement-height)+2rem)] pb-[var(--spacing-section)]"
    >
      <div className="container-content relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex max-w-2xl flex-col gap-8">
            <p data-hero-label className="label-caps opacity-0">
              Wellington, New Zealand
            </p>

            <h1 className="display-xl text-[var(--color-ink)] max-w-[16ch]">
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  Digital products
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-hero-line className="block">
                  that move your{" "}
                  <em className="not-italic text-[var(--color-brand-violet)]">business forward.</em>
                </span>
              </span>
            </h1>

            <p
              data-hero-sub
              className="text-lg text-[var(--color-ink-soft)] max-w-[48ch] leading-relaxed opacity-0"
            >
              {agencyTagline} {agencySubcopy}
            </p>

            <div
              data-hero-ctas
              className="flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center"
            >
              <MagneticButton
                href="/contact"
                variant="primary"
                trackEvent={analyticsEvents.startProjectClick}
              >
                Start a Project
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href="/services" variant="secondary">
                Explore Our Services
              </MagneticButton>
            </div>

            <p className="text-sm text-[var(--color-grey)]">
              Trusted by organisations across New Zealand for web, mobile, and AI delivery.
            </p>
          </div>

          <div
            data-hero-visual
            className="mx-auto aspect-[665/661] w-full max-w-md overflow-visible p-10 opacity-0 sm:p-12 lg:mx-0 lg:max-w-xl lg:p-14"
          >
            <LottiePlayer src="/lottie/hero-earth.json" className="h-full w-full overflow-visible" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M1 7h12M7.5 1.5L13 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
