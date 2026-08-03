import SectionLabel from "@/components/ui/SectionLabel";

const commitments = [
  "Clear weekly communication",
  "Accessible digital products",
  "Secure development practices",
  "Performance-focused engineering",
  "Maintainable code and documentation",
];

export default function DeliveryCommitments() {
  return (
    <section className="border-y border-[var(--color-grey-border)] bg-[var(--color-canvas)] section-pad">
      <div className="container-content">
        <SectionLabel index="06" label="Our commitments" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <h2 className="display-lg text-[var(--color-ink)] max-w-[20ch]">
            How we work with every client
          </h2>
          <ul className="space-y-4">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-[var(--color-grey-border)] pb-4 text-[var(--color-ink-soft)]"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
