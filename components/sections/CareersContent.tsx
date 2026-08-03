import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import { careerValues, careerBenefits, openRoles } from "@/lib/careers";
import { siteConfig } from "@/lib/site";

export default function CareersContent() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Careers" label="Join us" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              Build digital products that{" "}
              <em className="not-italic text-[var(--color-accent)]">matter.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed">
              We&apos;re a small, senior team helping New Zealand organisations modernise how they
              serve customers and run operations — through strategy, design, and engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-lg text-[var(--color-ink)] mb-4">How we work</h2>
            <p className="text-[var(--color-ink-soft)] leading-relaxed mb-6">
              Diventra is built for people who want ownership, variety, and work that connects to
              real organisational outcomes — not ticket factories or slide decks that never ship.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-ink-soft)]">
              {careerBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="text-[var(--color-accent)]" aria-hidden="true">
                    —
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-lg text-[var(--color-ink)] mb-6">What we value</h2>
            <ul className="space-y-5">
              {careerValues.map((value) => (
                <li
                  key={value.title}
                  className="border-b border-[var(--color-grey-border)] pb-5 last:border-0"
                >
                  <h3 className="font-medium text-[var(--color-ink)] mb-1">{value.title}</h3>
                  <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-8">Open roles</h2>
          {openRoles.length > 0 ? (
            <ul className="space-y-4">
              {openRoles.map((role) => (
                <li key={role.title}>
                  <TransitionLink
                    href={role.href}
                    className="flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-6 transition-[border-color] hover:border-[var(--color-accent)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <h3 className="font-medium text-[var(--color-ink)]">{role.title}</h3>
                      <p className="text-sm text-[var(--color-grey)]">
                        {role.type} · {role.location}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--color-accent)]">View role →</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-8 md:p-10 max-w-[48rem]">
              <p className="text-lg text-[var(--color-ink)] mb-2">No open roles right now</p>
              <p className="text-[var(--color-grey)] leading-relaxed mb-6">
                We&apos;re not actively hiring for specific positions, but we&apos;re always
                interested in hearing from experienced designers, engineers, and strategists who
                align with how we work.
              </p>
              <MagneticButton
                href={`mailto:${siteConfig.email}?subject=Expression%20of%20interest%20%E2%80%94%20Diventra`}
                variant="secondary"
              >
                Send an expression of interest
              </MagneticButton>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-void-text)] mb-4">
            Prefer to start a client conversation?
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8">
            If you&apos;re looking for a project partner rather than a role, we&apos;d love to hear
            from you.
          </p>
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Contact us
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
