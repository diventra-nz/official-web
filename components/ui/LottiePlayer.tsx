"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  /** Play only while the nearest `.group` (or the player itself) is hovered/focused. */
  playOnHover?: boolean;
}

function isDotLottieSource(src: string) {
  return src.endsWith(".lottie");
}

function getHoverTarget(el: HTMLElement) {
  return (el.closest(".group") as HTMLElement | null) ?? el;
}

export default function LottiePlayer({
  src,
  className = "",
  loop = true,
  autoplay = true,
  playOnHover = false,
}: LottiePlayerProps) {
  const isDotLottie = isDotLottieSource(src);

  if (isDotLottie) {
    return (
      <DotLottiePlayer
        src={src}
        className={className}
        loop={loop}
        autoplay={autoplay}
        playOnHover={playOnHover}
      />
    );
  }

  return (
    <JsonLottiePlayer
      src={src}
      className={className}
      loop={loop}
      autoplay={autoplay}
      playOnHover={playOnHover}
    />
  );
}

function JsonLottiePlayer({
  src,
  className,
  loop,
  autoplay,
  playOnHover,
}: Required<
  Pick<LottiePlayerProps, "src" | "className" | "loop" | "autoplay" | "playOnHover">
>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(src);
        if (!res.ok) return;
        const data = (await res.json()) as object;
        if (!cancelled) setAnimationData(data);
      } catch {
        // Decorative — fail silently
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!animationData || !containerRef.current) return;

    const el = containerRef.current;

    if (playOnHover) {
      const target = getHoverTarget(el);

      const play = () => {
        if (reducedMotion) return;
        lottieRef.current?.play();
      };

      const stop = () => {
        lottieRef.current?.goToAndStop(0, true);
      };

      if (reducedMotion) {
        stop();
        return;
      }

      target.addEventListener("pointerenter", play);
      target.addEventListener("pointerleave", stop);
      target.addEventListener("focusin", play);
      target.addEventListener("focusout", stop);

      return () => {
        target.removeEventListener("pointerenter", play);
        target.removeEventListener("pointerleave", stop);
        target.removeEventListener("focusin", play);
        target.removeEventListener("focusout", stop);
      };
    }

    const syncPlayback = (isIntersecting: boolean) => {
      const instance = lottieRef.current;
      if (!instance) return;

      if (reducedMotion) {
        instance.goToAndStop(0, true);
        return;
      }

      if (isIntersecting && autoplay) {
        instance.play();
      } else {
        instance.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        syncPlayback(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationData, autoplay, playOnHover, reducedMotion]);

  return (
    <div ref={containerRef} className={`lottie-player ${className}`.trim()} aria-hidden="true">
      {animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={reducedMotion ? false : loop}
          autoplay={false}
          className="h-full w-full"
          onDOMLoaded={() => {
            const el = containerRef.current;
            if (!el) return;

            if (reducedMotion || playOnHover) {
              lottieRef.current?.goToAndStop(0, true);
              return;
            }

            const rect = el.getBoundingClientRect();
            const inView =
              rect.top < window.innerHeight &&
              rect.bottom > 0 &&
              rect.width > 0 &&
              rect.height > 0;

            if (inView && autoplay) {
              lottieRef.current?.play();
            }
          }}
        />
      ) : null}
    </div>
  );
}

function DotLottiePlayer({
  src,
  className,
  loop,
  autoplay,
  playOnHover,
}: Required<
  Pick<LottiePlayerProps, "src" | "className" | "loop" | "autoplay" | "playOnHover">
>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    if (playOnHover) {
      const target = getHoverTarget(el);

      const play = () => {
        if (reducedMotion) return;
        dotLottieRef.current?.play();
      };

      const stop = () => {
        const instance = dotLottieRef.current;
        if (!instance) return;
        instance.setFrame(0);
        instance.pause();
      };

      if (reducedMotion) {
        stop();
        return;
      }

      target.addEventListener("pointerenter", play);
      target.addEventListener("pointerleave", stop);
      target.addEventListener("focusin", play);
      target.addEventListener("focusout", stop);

      return () => {
        target.removeEventListener("pointerenter", play);
        target.removeEventListener("pointerleave", stop);
        target.removeEventListener("focusin", play);
        target.removeEventListener("focusout", stop);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const instance = dotLottieRef.current;
        if (!instance) return;

        if (reducedMotion) {
          instance.setFrame(0);
          instance.pause();
          return;
        }

        if (entry.isIntersecting) {
          if (autoplay) instance.play();
        } else {
          instance.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplay, playOnHover, reducedMotion]);

  return (
    <div ref={containerRef} className={`lottie-player ${className}`.trim()} aria-hidden="true">
      <DotLottieReact
        src={src}
        loop={reducedMotion ? false : loop}
        autoplay={reducedMotion || playOnHover ? false : autoplay}
        dotLottieRefCallback={(instance) => {
          dotLottieRef.current = instance;
          if ((reducedMotion || playOnHover) && instance) {
            instance.setFrame(0);
            instance.pause();
          }
        }}
        className="h-full w-full"
      />
    </div>
  );
}
