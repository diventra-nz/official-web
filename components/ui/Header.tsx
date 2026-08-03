"use client";

import { useState, useEffect, useRef } from "react";
import TransitionLink from "@/components/ui/TransitionLink";
import AnnouncementBar from "@/components/ui/AnnouncementBar";
import MagneticButton from "@/components/ui/MagneticButton";
import { analyticsEvents } from "@/lib/analytics";
import { mobileNavSections, primaryNav, serviceNavItems } from "@/lib/navigation";
import { getLenis } from "@/lib/scroll";

const SCROLL_THRESHOLD = 48;
const SCROLL_DELTA = 8;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScroll = (scrollY: number) => {
      setScrolled(scrollY > SCROLL_THRESHOLD);

      if (open) {
        setVisible(true);
        lastScrollY.current = scrollY;
        return;
      }

      if (scrollY <= SCROLL_THRESHOLD) {
        setVisible(true);
      } else {
        const delta = scrollY - lastScrollY.current;
        if (delta > SCROLL_DELTA) {
          setVisible(false);
        } else if (delta < -SCROLL_DELTA) {
          setVisible(true);
        }
      }

      lastScrollY.current = scrollY;
    };

    let lenisUnsubscribe: (() => void) | null = null;
    let windowOff: (() => void) | null = null;
    let rafId = 0;
    let attempts = 0;

    const bindLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;

      const onLenisScroll = () => updateScroll(lenis.scroll);
      lenisUnsubscribe = lenis.on("scroll", onLenisScroll);
      updateScroll(lenis.scroll);
      return true;
    };

    const bindWindow = () => {
      const onWindowScroll = () => updateScroll(window.scrollY);
      window.addEventListener("scroll", onWindowScroll, { passive: true });
      windowOff = () => window.removeEventListener("scroll", onWindowScroll);
      updateScroll(window.scrollY);
    };

    if (!bindLenis()) {
      bindWindow();

      const retryLenis = () => {
        if (bindLenis()) {
          windowOff?.();
          windowOff = null;
          return;
        }

        attempts += 1;
        if (attempts < 60) {
          rafId = requestAnimationFrame(retryLenis);
        }
      };

      rafId = requestAnimationFrame(retryLenis);
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenisUnsubscribe?.();
      windowOff?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const lenis = getLenis();
    lenis?.stop();

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const preventTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    document.addEventListener("touchmove", preventTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventTouchMove);
      document.body.style.overflow = previousBodyOverflow;
      lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      header.style.transform = visible ? "translateY(0)" : "translateY(-100%)";
      return;
    }

    let cancelled = false;

    async function animateHeader() {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      gsap.to(header, {
        yPercent: visible ? 0 : -100,
        duration: visible ? 0.5 : 0.3,
        ease: visible ? "power3.out" : "power2.in",
        overwrite: true,
      });
    }

    animateHeader();

    return () => {
      cancelled = true;
    };
  }, [visible]);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    if (!line1 || !line2) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      line1.style.transform = open ? "translateY(3.25px) rotate(45deg)" : "";
      line2.style.transform = open ? "translateY(-3.25px) rotate(-45deg)" : "";
      return;
    }

    let cancelled = false;

    async function animateHamburger() {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      if (open) {
        gsap.to(line1, { y: 3.25, rotation: 45, duration: 0.4, ease: "power2.inOut" });
        gsap.to(line2, { y: -3.25, rotation: -45, duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(line1, { y: 0, rotation: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(line2, { y: 0, rotation: 0, duration: 0.4, ease: "power2.inOut" });
      }
    }

    animateHamburger();

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    const mega = megaRef.current;
    if (!mega || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    async function animateMega() {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      if (servicesOpen) {
        gsap.fromTo(
          mega,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
      }
    }

    if (servicesOpen) animateMega();

    return () => {
      cancelled = true;
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) setOpenMobileSection(null);
  }, [open]);

  function toggleMobileSection(sectionId: string) {
    setOpenMobileSection((prev) => (prev === sectionId ? null : sectionId));
  }

  return (
    <>
      <div
        ref={overlayRef}
        className={`mobile-menu fixed inset-0 z-[55] flex flex-col overflow-hidden overscroll-none bg-[var(--color-brand-violet)] px-8 pb-10 pt-24 text-[var(--color-void-text)] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        } ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <nav className="relative flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-5">
            {mobileNavSections.map((section) => (
              <li key={section.id}>
                {section.type === "link" ? (
                  <TransitionLink
                    href={section.href}
                    onClick={() => setOpen(false)}
                    className="display-md !text-[var(--color-void-text)] transition-colors hover:!text-[var(--color-brand-yellow)]"
                    data-cursor
                  >
                    {section.label}
                  </TransitionLink>
                ) : (
                  <>
                    <div className="flex w-full items-center justify-between gap-3">
                      <TransitionLink
                        href={section.href}
                        onClick={() => setOpen(false)}
                        className="display-md !text-[var(--color-void-text)] transition-colors hover:!text-[var(--color-brand-yellow)]"
                        data-cursor
                      >
                        {section.label}
                      </TransitionLink>
                      <button
                        type="button"
                        className="flex h-10 w-10 shrink-0 items-center justify-center !text-[var(--color-void-text)] transition-colors hover:!text-[var(--color-brand-yellow)]"
                        aria-expanded={openMobileSection === section.id}
                        aria-label={`${openMobileSection === section.id ? "Collapse" : "Expand"} ${section.label} submenu`}
                        onClick={() => toggleMobileSection(section.id)}
                      >
                        <ChevronDown open={openMobileSection === section.id} />
                      </button>
                    </div>

                    {openMobileSection === section.id && (
                      <ul className="mt-4 flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-brand-yellow)]/25 bg-[var(--color-brand-violet-deep)]/60 p-3">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <TransitionLink
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-[var(--radius-sm)] px-3 py-2.5 !text-[var(--color-void-text)] transition-colors hover:bg-[var(--color-brand-violet-soft)]/50"
                              data-cursor
                            >
                              <span className="block text-base font-medium !text-[var(--color-brand-yellow)]">
                                {link.label}
                              </span>
                              {link.description && (
                                <span className="mt-0.5 block text-sm leading-snug !text-[var(--color-void-text)]">
                                  {link.description}
                                </span>
                              )}
                            </TransitionLink>
                          </li>
                        ))}
                        {section.viewAll && (
                          <li className="border-t border-[var(--color-brand-yellow)]/20 pt-2">
                            <TransitionLink
                              href={section.viewAll.href}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2 text-sm font-medium !text-[var(--color-brand-cyan)] transition-colors hover:!text-[var(--color-void-text)]"
                              data-cursor
                            >
                              {section.viewAll.label}
                            </TransitionLink>
                          </li>
                        )}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-6 shrink-0 border-t border-[var(--color-brand-violet-soft)] pt-6"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <MagneticButton
            href="/contact"
            variant="primary"
            context="violet"
            className="!flex w-full !justify-center"
            trackEvent={analyticsEvents.consultationCtaClick}
          >
            Book a Consultation
          </MagneticButton>
        </div>
      </div>

      <div
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 ${open ? "z-[60]" : "z-50"}`}
      >
        <div className={open ? "max-lg:hidden" : ""}>
          <AnnouncementBar />
        </div>

        <header
          className={`relative z-10 border-b transition-[background-color,border-color] duration-300 ${
            open
              ? "border-transparent bg-transparent"
              : scrolled
                ? "border-[var(--color-grey-border)] bg-[var(--color-canvas)]/95 backdrop-blur-md"
                : "border-transparent bg-transparent"
          }`}
        >
          <div className="container-content">
            <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
              <TransitionLink
                href="/"
                className="relative z-10 justify-self-start transition-opacity duration-200 hover:opacity-80"
                data-cursor
                aria-label="Diventra home"
              >
                <img
                  src="/icons/Diventra.svg"
                  alt="Diventra"
                  width={136}
                  height={29}
                  className={`h-6 w-auto md:h-7 ${open ? "brightness-0 invert lg:brightness-100 lg:invert-0" : ""}`}
                />
              </TransitionLink>

              <nav className="hidden items-center justify-center gap-6 lg:flex">
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className="label-caps flex items-center gap-1.5 text-[var(--color-grey)] hover:text-[var(--color-ink)]"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span className="link-underline">Services</span>
                    <ChevronDown open={servicesOpen} />
                  </button>

                  {servicesOpen && (
                    <div
                      ref={megaRef}
                      className="absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-4 shadow-[var(--shadow-card)]">
                        <div className="mb-3 flex items-center justify-between border-b border-[var(--color-grey-border)] pb-3">
                          <span className="label-caps text-[var(--color-grey)]">Services</span>
                          <TransitionLink
                            href="/services"
                            className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                          >
                            View all
                          </TransitionLink>
                        </div>
                        <ul className="grid grid-cols-2 gap-1">
                          {serviceNavItems.map((item) => (
                            <li key={item.href}>
                              <TransitionLink
                                href={item.href}
                                className="block rounded-[var(--radius-sm)] p-3 transition-colors hover:bg-[var(--color-canvas-warm)]"
                              >
                                <span className="block text-sm font-medium text-[var(--color-ink)]">
                                  {item.label}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-[var(--color-grey)]">
                                  {item.description}
                                </span>
                              </TransitionLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <ul className="flex items-center gap-6">
                  {primaryNav.map((link) => (
                    <li key={link.href}>
                      <TransitionLink
                        href={link.href}
                        className="label-caps link-underline text-[var(--color-grey)] hover:text-[var(--color-ink)]"
                        data-cursor
                      >
                        {link.label}
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="relative z-10 flex items-center justify-self-end gap-4">
                <MagneticButton
                  href="/contact"
                  variant="primary"
                  className="!hidden !px-5 !py-3 sm:!px-6 sm:!py-3.5 sm:!min-h-0 lg:!inline-flex"
                  trackEvent={analyticsEvents.consultationCtaClick}
                >
                  Book a Consultation
                </MagneticButton>

                <button
                  type="button"
                  className={`hamburger-btn relative z-50 flex h-8 w-8 flex-col justify-center gap-[5px] lg:hidden ${
                    open ? "hamburger-btn--open" : ""
                  }`}
                  onClick={() => setOpen((prev) => !prev)}
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <span ref={line1Ref} className="hamburger-line" />
                  <span ref={line2Ref} className="hamburger-line" />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
