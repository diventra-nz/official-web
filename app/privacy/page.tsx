import type { Metadata } from "next";
import LegalPageLayout from "@/components/ui/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Diventra",
  description: "How Diventra collects, uses, and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      label="Privacy"
      title="Privacy Policy"
      intro="This policy explains how Diventra collects and uses personal information when you visit our website or contact us."
    >
      <h2>Information we collect</h2>
      <p>
        When you submit our contact form or email us, we may collect your name, work email, company,
        phone number, and any information you include in your message.
      </p>
      <p>
        We may also collect standard technical data such as browser type and pages visited through
        analytics tools, where enabled.
      </p>

      <h2>How we use information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to enquiries and provide services you request</li>
        <li>Improve our website and communications</li>
        <li>Meet legal and regulatory obligations</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We may share data with service providers who help us
        operate our website and communications (such as email delivery), subject to appropriate
        safeguards.
      </p>

      <h2>Retention</h2>
      <p>
        We retain enquiry information only as long as needed for the purposes above, unless a longer
        period is required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to or correction of personal information we hold about you by
        contacting{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)] hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        Diventra · {siteConfig.location} ·{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-accent)] hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </LegalPageLayout>
  );
}
