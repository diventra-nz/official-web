import TransitionLink from "@/components/ui/TransitionLink";

export default function AnnouncementBar() {
  return (
    <div
      className="relative z-[60] border-b border-[var(--color-void-border)] bg-[var(--color-navy)] text-[var(--color-void-text)]"
      style={{ minHeight: "var(--announcement-height)" }}
    >
      <div className="container-content flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-sm">
        <span className="min-w-0 text-[var(--color-void-muted)]">
          AI Opportunity Assessment for New Zealand Businesses.
        </span>
        <TransitionLink
          href="/services/ai-solutions"
          className="shrink-0 text-[var(--color-brand-yellow)] link-underline whitespace-nowrap font-medium"
        >
          Learn more
        </TransitionLink>
      </div>
    </div>
  );
}
