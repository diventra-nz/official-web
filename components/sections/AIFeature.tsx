"use client";

import { useEffect, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import LottiePlayer from "@/components/ui/LottiePlayer";
import {
  STICKY_BASE,
  StickyStack,
  StickyStackCard,
  StickyStackItem,
} from "@/components/ui/StickyStack";

const stages = [
  {
    title: "Discover opportunities",
    description:
      "We assess where AI can reduce friction, improve decisions, or unlock new capabilities — grounded in your workflows, not hype.",
    lottie: "/lottie/enterprise-data-ai.json",
    lottieAlt: "Animation illustrating enterprise data and AI discovery",
  },
  {
    title: "Prototype solutions",
    description:
      "Rapid proof-of-concepts validate feasibility and value before significant investment, with clear success criteria.",
    lottie: "/lottie/ai-prototype-solutions.json?v=3",
    lottieAlt: "Animation illustrating prototyping and asset management",
  },
  {
    title: "Integrate and scale",
    description:
      "Production-ready AI woven into your platforms with governance, monitoring, and responsible deployment practices.",
    lottie: "/lottie/ai-integrate-scale.json",
    lottieAlt: "Animation illustrating IT managed services and platform integration",
  },
];

export default function AIFeature() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative overflow-x-clip bg-surface-void section-pad">
      <div className="container-content relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          <div
            className="mb-12 lg:sticky lg:mb-0 lg:self-start"
            style={{ top: STICKY_BASE }}
          >
            <SectionLabel index="03" label="AI & Automation" dark />

            <h2 className="display-xl mb-4 max-w-[18ch] text-[var(--color-void-text)]">
              Practical AI that delivers{" "}
              <em className="not-italic text-[var(--color-accent-light)]">real outcomes.</em>
            </h2>
            <p className="mb-8 max-w-[48ch] text-lg leading-relaxed text-[var(--color-void-muted)]">
              We help organisations move beyond experimentation — identifying where AI creates
              measurable value, then building solutions that integrate with how your teams already
              work.
            </p>
            <MagneticButton href="/services/ai-solutions" variant="primary" context="violet">
              Explore AI Solutions
            </MagneticButton>
          </div>

          <StickyStack numCards={stages.length}>
            {stages.map((stage, index) => {
              const isLight = index % 2 === 1;

              return (
                <StickyStackItem key={stage.title} index={index}>
                  <StickyStackCard index={index} reduceMotion={reduceMotion}>
                    <div
                      className="relative mb-5 aspect-square w-full max-w-[10rem]"
                      role="img"
                      aria-label={stage.lottieAlt}
                    >
                      <LottiePlayer
                        src={stage.lottie}
                        className="h-full w-full"
                        playOnHover
                        autoplay={false}
                      />
                    </div>
                    <h3
                      className={`display-md relative z-[1] mb-2 ${
                        isLight
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-void-text)]"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className={`relative z-[1] leading-relaxed ${
                        isLight
                          ? "text-[var(--color-ink-soft)]"
                          : "text-[var(--color-void-muted)]"
                      }`}
                    >
                      {stage.description}
                    </p>
                  </StickyStackCard>
                </StickyStackItem>
              );
            })}
          </StickyStack>
        </div>
      </div>
    </section>
  );
}
