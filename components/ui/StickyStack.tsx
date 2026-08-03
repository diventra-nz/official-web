"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

export const STICKY_BASE =
  "calc(var(--header-height) + var(--announcement-height) + 1.5rem)";
const STICKY_STEP = 1.5;
export const STACK_SPACER_HEIGHT = "4rem";

export function stickyTop(index: number) {
  return `calc(${STICKY_BASE} + ${index * STICKY_STEP}rem)`;
}

interface StickyStackProps {
  numCards: number;
  children: ReactNode;
}

export function StickyStack({ numCards, children }: StickyStackProps) {
  return (
    <div
      className="services-stack flex flex-col gap-6 md:gap-8 lg:gap-4"
      style={{ "--numcards": numCards } as CSSProperties}
    >
      {children}
      <div
        className="hidden shrink-0 lg:block"
        style={{ height: STACK_SPACER_HEIGHT }}
        aria-hidden="true"
      />
    </div>
  );
}

interface StickyStackItemProps {
  index: number;
  children: ReactNode;
}

export function StickyStackItem({ index, children }: StickyStackItemProps) {
  return (
    <article
      className="lg:sticky"
      style={
        {
          top: stickyTop(index),
          zIndex: index + 1,
          "--index": index + 1,
        } as CSSProperties
      }
    >
      {children}
    </article>
  );
}

interface StickyStackCardProps {
  index: number;
  reduceMotion: boolean;
  children: ReactNode;
  className?: string;
}

export function StickyStackCard({
  index,
  reduceMotion,
  children,
  className = "",
}: StickyStackCardProps) {
  const isLight = index % 2 === 1;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`services-stack-card group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border p-6 transition-[border-color,box-shadow] duration-300 hover:border-[var(--color-brand-yellow)] hover:shadow-[0_0_0_1px_var(--color-accent-muted-surface)] md:p-8 ${
        isLight
          ? "border-[var(--color-grey-border)] bg-[var(--color-canvas)]"
          : "border-[var(--color-void-border)] bg-[var(--color-void-surface)]"
      } ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
