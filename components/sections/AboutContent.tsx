import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import { aboutValues, aboutLinks } from "@/lib/about";

export default function AboutContent() {
  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="About" label="Diventra" />
          <div className="max-w-[48rem]">
            <h1 className="display-xl text-[var(--color-ink)] mb-4">
              A digital partner for organisations that need to{" "}
              <em className="not-italic text-[var(--color-accent)]">move forward.</em>
            </h1>
            <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed mb-8">
              Diventra is a Wellington-based AI and digital agency. We help New Zealand
              organisations modernise customer experiences, operations, and technology
              platforms — through strategy, design, engineering, and long-term partnership.
            </p>
            <MagneticButton href="/contact" variant="primary">
              Book a Consultation
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display-lg text-[var(--color-ink)] mb-4 max-w-[18ch]">
              We bridge strategy and{" "}
              <em className="not-italic text-[var(--color-accent)]">delivery.</em>
            </h2>
          </div>
          <div className="space-y-6 text-[var(--color-ink-soft)] leading-relaxed">
            <p>
              Many organisations know where they want to go digitally — but struggle to connect
              strategy, design, and engineering into something that actually ships and scales.
            </p>
            <p>
              We work as a long-term partner, not a project factory. That means clear
              communication, pragmatic technology choices, and delivery processes designed for
              real-world constraints — budgets, timelines, legacy systems, and the people who use
              them every day.
            </p>
            <p>
              From websites and mobile applications to AI-powered platforms and cloud
              infrastructure, we bring the depth needed for complex work without the overhead of
              a large consultancy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-4">What we stand for</h2>
          <p className="text-[var(--color-ink-soft)] mb-12 max-w-[48rem] leading-relaxed">
            Principles that guide how we work with every client and every project.
          </p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {aboutValues.map((value) => (
              <li
                key={value.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-6 md:p-8"
              >
                <ServiceIcon src={value.icon} size={22} well className="mb-4" />
                <h3 className="text-lg font-medium text-[var(--color-ink)] mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-ink)] mb-10">Explore Diventra</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutLinks.map((link) => (
              <li key={link.href}>
                <TransitionLink
                  href={link.href}
                  className="group flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-grey-border)] p-6 transition-[border-color] hover:border-[var(--color-accent)] md:p-8"
                >
                  <h3 className="display-md text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--color-grey)] leading-relaxed flex-1">
                    {link.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-[var(--color-accent)]">
                    Learn more →
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <p className="label-caps mb-3 text-[var(--color-accent-light)]">Wellington, New Zealand</p>
          <h2 className="display-lg text-[var(--color-void-text)] mb-4">
            Let&apos;s build something that lasts.
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            Tell us about your organisation and the digital challenge you&apos;re facing.
          </p>
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
