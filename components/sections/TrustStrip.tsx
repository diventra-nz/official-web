"use client";

import StackIcon from "tech-stack-icons";
import type { IconName } from "tech-stack-icons";

const technologies: { label: string; icon: IconName }[] = [
  { label: "Next.js", icon: "nextjs" },
  { label: "React", icon: "react" },
  { label: "TypeScript", icon: "typescript" },
  { label: "AWS", icon: "aws" },
  { label: "Vercel", icon: "vercel" },
  { label: "GraphQL", icon: "graphql" },
  { label: "GSAP", icon: "gsap" },
  { label: "Node.js", icon: "nodejs" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-grey-border)] bg-[var(--color-canvas)] section-pad-sm">
      <div className="container-content">
        <p className="label-caps mb-8 text-center text-[var(--color-grey)]">
          Technologies we work with
        </p>
        <ul className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 sm:gap-x-12">
          {technologies.map((tech) => (
            <li key={tech.label} className="flex w-20 flex-col items-center gap-2.5">
              <StackIcon
                name={tech.icon}
                variant="grayscale"
                className="h-9 w-9 opacity-80 transition-opacity hover:opacity-100"
              />
              <span className="text-center text-xs font-medium text-[var(--color-grey)]">
                {tech.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
