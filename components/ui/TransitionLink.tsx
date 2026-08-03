"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { usePageTransition } from "@/components/providers/TransitionProvider";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type TransitionLinkProps = React.ComponentProps<typeof Link> & {
  trackEvent?: AnalyticsEventName;
  trackParams?: Record<string, string | number | boolean>;
};

function isExternal(href: TransitionLinkProps["href"]): boolean {
  if (typeof href !== "string") return false;
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink({ href, onClick, trackEvent: trackEventName, trackParams, ...props }, ref) {
    const { navigate } = usePageTransition();

    return (
      <Link
        ref={ref}
        href={href}
        {...props}
        onClick={(e) => {
          onClick?.(e);
          if (e.defaultPrevented) return;

          if (trackEventName && typeof href === "string") {
            trackEvent(trackEventName, { href, ...trackParams });
          }

          if (
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            e.button !== 0 ||
            typeof href !== "string" ||
            isExternal(href)
          ) {
            return;
          }

          e.preventDefault();
          navigate(href);
        }}
      />
    );
  }
);

export default TransitionLink;
