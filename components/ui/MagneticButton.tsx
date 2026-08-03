"use client";

import React, { useEffect, useRef, isValidElement } from "react";
import { subscribePointer, getPointer } from "@/lib/pointer-motion";
import { usePageTransition } from "@/components/providers/TransitionProvider";
import { trackEvent } from "@/lib/analytics";

const RADIUS = 120;
const WRAPPER_STRENGTH = 0.25;
const TEXT_STRENGTH = 0.4;
const ICON_STRENGTH = 0.55;

type MagneticButtonBaseProps = {
  variant: "primary" | "secondary";
  context?: "light" | "violet";
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
  trackEvent?: import("@/lib/analytics").AnalyticsEventName;
  trackParams?: Record<string, string | number | boolean>;
};

type MagneticButtonLinkProps = MagneticButtonBaseProps & {
  href: string;
  type?: never;
  disabled?: never;
};

type MagneticButtonNativeProps = MagneticButtonBaseProps & {
  href?: never;
  type: "button" | "submit";
  disabled?: boolean;
};

type MagneticButtonProps = MagneticButtonLinkProps | MagneticButtonNativeProps;

function splitChildren(children: React.ReactNode) {
  const textParts: React.ReactNode[] = [];
  const iconParts: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      textParts.push(child);
    } else if (isValidElement(child)) {
      iconParts.push(child);
    }
  });

  return { textParts, iconParts };
}

function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function getVariantClasses(
  variant: "primary" | "secondary",
  context: "light" | "violet",
): string {
  if (variant === "primary") {
    return context === "violet"
      ? "magnetic-btn magnetic-btn--on-violet"
      : "magnetic-btn magnetic-btn--primary";
  }

  return context === "violet"
    ? "magnetic-btn magnetic-btn--secondary-on-violet"
    : "magnetic-btn magnetic-btn--secondary";
}

export default function MagneticButton(props: MagneticButtonProps) {
  const {
    variant,
    context = "light",
    children,
    className = "",
    "aria-label": ariaLabel,
    trackEvent: trackEventName,
    trackParams,
  } = props;

  const wrapperRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const hoveringRef = useRef(false);
  const { navigate } = usePageTransition();

  const base =
    "relative inline-flex items-center gap-3 overflow-hidden px-7 py-5 sm:px-12 sm:py-9 sm:min-h-14 label-caps will-change-transform";
  const classes = `${base} ${getVariantClasses(variant, context)} ${className}`.trim();

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let xTo: ((v: number) => void) | null = null;
    let yTo: ((v: number) => void) | null = null;
    let textXTo: ((v: number) => void) | null = null;
    let textYTo: ((v: number) => void) | null = null;
    let iconXTo: ((v: number) => void) | null = null;
    let iconYTo: ((v: number) => void) | null = null;

    import("gsap").then(({ gsap }) => {
      xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power2.out" });
      yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power2.out" });
      if (textRef.current) {
        textXTo = gsap.quickTo(textRef.current, "x", { duration: 0.35, ease: "power2.out" });
        textYTo = gsap.quickTo(textRef.current, "y", { duration: 0.35, ease: "power2.out" });
      }
      if (iconRef.current) {
        iconXTo = gsap.quickTo(iconRef.current, "x", { duration: 0.3, ease: "power2.out" });
        iconYTo = gsap.quickTo(iconRef.current, "y", { duration: 0.3, ease: "power2.out" });
      }
    });

    function applyOffset(px: number, py: number) {
      if (!el || !hoveringRef.current) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < RADIUS) {
        xTo?.(dx * WRAPPER_STRENGTH);
        yTo?.(dy * WRAPPER_STRENGTH);
        textXTo?.(dx * TEXT_STRENGTH);
        textYTo?.(dy * TEXT_STRENGTH);
        iconXTo?.(dx * ICON_STRENGTH);
        iconYTo?.(dy * ICON_STRENGTH);
      } else {
        xTo?.(0);
        yTo?.(0);
        textXTo?.(0);
        textYTo?.(0);
        iconXTo?.(0);
        iconYTo?.(0);
      }
    }

    const unsubscribe = subscribePointer((px, py) => applyOffset(px, py));

    function onEnter() {
      hoveringRef.current = true;
      const { x, y } = getPointer();
      applyOffset(x, y);
    }

    function onLeave() {
      hoveringRef.current = false;
      import("gsap").then(({ gsap }) => {
        const targets = [el, textRef.current, iconRef.current].filter(Boolean);
        gsap.to(targets, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.35)",
          overwrite: true,
        });
      });
    }

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      unsubscribe();
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  function renderInner(content: React.ReactNode) {
    const { textParts, iconParts } = splitChildren(content);

    if (textParts.length === 0 && iconParts.length === 0) {
      return content;
    }

    return (
      <>
        {textParts.length > 0 && (
          <span ref={textRef} data-magnetic-text className="relative z-[1] inline-flex items-center">
            {textParts}
          </span>
        )}
        {iconParts.length > 0 && (
          <span ref={iconRef} data-magnetic-icon className="relative z-[1] inline-flex items-center">
            {iconParts}
          </span>
        )}
      </>
    );
  }

  function handleTrackEvent(href?: string) {
    if (trackEventName) {
      trackEvent(trackEventName, { ...(href ? { href } : {}), ...trackParams });
    }
  }

  if ("type" in props && props.type) {
    const { type, disabled } = props;

    return (
      <button
        ref={wrapperRef as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={`${classes} disabled:opacity-60`}
        data-cursor
        aria-label={ariaLabel}
        onClick={() => handleTrackEvent()}
      >
        {renderInner(children)}
      </button>
    );
  }

  const { href } = props;
  const external = isExternalHref(href);

  return (
    <a
      ref={wrapperRef as React.Ref<HTMLAnchorElement>}
      href={href}
      className={classes}
      data-cursor
      aria-label={ariaLabel}
      target={external && href.startsWith("http") ? "_blank" : undefined}
      rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        handleTrackEvent(href);

        if (
          e.defaultPrevented ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.button !== 0 ||
          external
        ) {
          return;
        }
        e.preventDefault();
        navigate(href);
      }}
    >
      {renderInner(children)}
    </a>
  );
}
