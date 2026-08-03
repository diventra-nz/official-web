import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/LegalPageLayout";
import TransitionLink from "@/components/ui/TransitionLink";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility — Diventra",
  description: "Diventra's commitment to accessible digital experiences.",
};

export default function AccessibilityPage() {
  return (
    <LegalPageLayout
      label="Accessibility"
      title="Accessibility Statement"
      intro="Diventra is committed to making our website and the digital products we build accessible to diverse audiences."
    >
      <h2>Our commitment</h2>
      <p>
        We aim to meet WCAG 2.2 Level AA for our own website and build client products with
        accessibility as a core requirement — not an afterthought.
      </p>

      <h2>This website</h2>
      <p>We work to ensure our site provides:</p>
      <ul>
        <li>Keyboard navigable interfaces</li>
        <li>Sufficient colour contrast</li>
        <li>Visible focus indicators</li>
        <li>Semantic structure and form labels</li>
        <li>Support for reduced motion preferences</li>
      </ul>

      <h2>Feedback</h2>
      <p>
        If you encounter accessibility barriers on this site, please contact us at{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)] hover:underline">
          {siteConfig.email}
        </a>
        . We will respond and work to address the issue.
      </p>

      <h2>Client work</h2>
      <p>
        Accessibility is part of our delivery process for client projects. See our{" "}
        <TransitionLink href="/how-we-work" className="text-[var(--color-accent)] hover:underline">
          How We Work
        </TransitionLink>{" "}
        page for more on quality practices.
      </p>
    </LegalPageLayout>
  );
}
