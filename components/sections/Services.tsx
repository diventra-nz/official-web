"use client";

import { useEffect, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import LottiePlayer from "@/components/ui/LottiePlayer";
import {
  STICKY_BASE,
  StickyStack,
  StickyStackCard,
  StickyStackItem,
} from "@/components/ui/StickyStack";
import { featuredServices } from "@/lib/services";
import { analyticsEvents } from "@/lib/analytics";

function formatIndex(index: number) {
  return `(${String(index + 1).padStart(2, "0")})`;
}

export default function Services() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-x-clip bg-surface-void section-pad"
    >
      <div className="container-content relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <div
            className="mb-12 lg:sticky lg:mb-0 lg:self-start"
            style={{ top: STICKY_BASE }}
          >
            <SectionLabel index="02" label="Services" dark />

            <h2 className="display-xl mb-4 text-[var(--color-void-text)]">
              End-to-end digital{" "}
              <em className="not-italic text-[var(--color-accent-light)]">capability.</em>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-[var(--color-void-muted)] lg:mb-8">
              From strategy and design to engineering, cloud, and AI — we help organisations
              modernise how they work and how they serve customers.
            </p>

            <LottiePlayer
              src="/lottie/website-homepage.json"
              className="mx-auto aspect-[738/493] w-full max-w-md lg:mx-0 lg:max-w-none"
            />
          </div>

          <StickyStack numCards={featuredServices.length}>
            {featuredServices.map((service, index) => {
              const isLight = index % 2 === 1;

              return (
                <StickyStackItem key={service.id} index={index}>
                  <StickyStackCard index={index} reduceMotion={reduceMotion}>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <ServiceIcon
                        src={service.icon}
                        size={36}
                        tone={isLight ? "light" : "dark"}
                        className="relative z-[1] transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                      <span
                        className={`font-mono text-xs tracking-widest ${
                          isLight
                            ? "text-[var(--color-ink-soft)]"
                            : "text-[var(--color-void-muted)]"
                        }`}
                        aria-hidden="true"
                      >
                        {formatIndex(index)}
                      </span>
                    </div>

                    <h3
                      className={`display-md relative z-[1] mb-2 ${
                        isLight
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-void-text)]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`relative z-[1] mb-5 leading-relaxed ${
                        isLight
                          ? "text-[var(--color-ink-soft)]"
                          : "text-[var(--color-void-muted)]"
                      }`}
                    >
                      {service.shortDescription}
                    </p>
                    <ul className="relative z-[1] mb-6 flex-1 space-y-2">
                      {service.capabilities.slice(0, 4).map((cap) => (
                        <li
                          key={cap}
                          className={`flex items-start gap-2 text-sm ${
                            isLight
                              ? "text-[var(--color-ink)]"
                              : "text-[var(--color-void-text)]"
                          }`}
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-brand-yellow)]"
                            aria-hidden="true"
                          />
                          {cap}
                        </li>
                      ))}
                    </ul>
                    <TransitionLink
                      href={`/services/${service.slug}`}
                      className={`relative z-[1] inline-flex items-center gap-2 text-sm font-medium transition-[gap] duration-300 group-hover:gap-3 ${
                        isLight
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-brand-cyan)]"
                      }`}
                      trackEvent={analyticsEvents.serviceCardClick}
                      trackParams={{ service: service.slug }}
                    >
                      Learn more
                      <ArrowRight />
                    </TransitionLink>
                  </StickyStackCard>
                </StickyStackItem>
              );
            })}
          </StickyStack>
        </div>

        <div className="mt-10 text-center lg:mt-16">
          <MagneticButton href="/services" variant="secondary" context="violet">
            View all services
          </MagneticButton>
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
