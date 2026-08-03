"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { footerColumns, legalLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-grey-border)] bg-[var(--color-brand-violet-deep)] text-[var(--color-void-text)]">
      <div className="container-content section-pad">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="label-caps-dark mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <TransitionLink
                      href={link.href}
                      className="text-sm text-[var(--color-void-muted)] transition-colors hover:text-[var(--color-brand-yellow)]"
                    >
                      {link.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label-caps-dark mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-[var(--color-void-muted)]">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[var(--color-brand-yellow)]"
                  onClick={() => trackEvent(analyticsEvents.emailClick, { email: siteConfig.email })}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[var(--color-brand-yellow)]"
                >
                  LinkedIn
                </a>
              </li>
              {siteConfig.nzbn ? <li>NZBN {siteConfig.nzbn}</li> : null}
            </ul>
          </div>
        </div>

        <div className="section-rule-dark mt-12 mb-6" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[var(--color-void-muted)]">
            <span>© {year} {siteConfig.name}</span>
            <span className="mx-2 text-[var(--color-void-border)]">·</span>
            <span>AI &amp; Digital Agency</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-void-muted)] transition-colors hover:text-[var(--color-brand-yellow)]"
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
