import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy — Diventra",
  description: "How Diventra uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      label="Cookies"
      title="Cookie Policy"
      intro="This policy explains how we use cookies and similar technologies on the Diventra website."
    >
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help sites
        function and can provide usage information.
      </p>

      <h2>How we use cookies</h2>
      <p>We may use cookies for:</p>
      <ul>
        <li>Essential site functionality</li>
        <li>Understanding how visitors use our website (analytics), where enabled</li>
      </ul>

      <h2>Managing cookies</h2>
      <p>
        You can control cookies through your browser settings. Blocking some cookies may affect site
        functionality.
      </p>

      <h2>Contact</h2>
      <p>
        Questions:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)] hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </LegalPageLayout>
  );
}
