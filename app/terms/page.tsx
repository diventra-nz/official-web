import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Diventra",
  description: "Terms governing use of the Diventra website.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      label="Terms"
      title="Terms of Service"
      intro="These terms apply to your use of the Diventra website. Separate agreements govern client projects and services."
    >
      <h2>Use of this website</h2>
      <p>
        Content on this site is provided for general information about Diventra&apos;s services. It
        does not constitute professional advice. You must not misuse the site or attempt to
        interfere with its operation.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless stated otherwise, content on this website is owned by Diventra and may not be copied
        or reused without permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site may link to external websites. We are not responsible for their content or privacy
        practices.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, Diventra is not liable for loss arising from use of this
        website. Nothing in these terms limits rights that cannot be excluded under New Zealand law.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the site constitutes acceptance of the updated terms.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)] hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </LegalPageLayout>
  );
}
