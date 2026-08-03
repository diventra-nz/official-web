import type { CaseStudyDetail } from "@/lib/case-studies";
import type { Project } from "@/lib/projects";
import { getService } from "@/lib/services";
import CaseStudyHero from "@/components/sections/CaseStudyHero";
import CaseStudyGallery from "@/components/sections/CaseStudyGallery";
import CaseStudyLiveCta from "@/components/sections/CaseStudyLiveCta";
import NextProjectCta from "@/components/sections/NextProjectCta";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import TransitionLink from "@/components/ui/TransitionLink";

interface CaseStudyPageTemplateProps {
  project: Project;
  caseStudy: CaseStudyDetail;
}

function ContentSection({
  title,
  children,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "soft";
}) {
  return (
    <section
      className={
        variant === "soft"
          ? "section-pad bg-surface-soft border-t border-[var(--color-grey-border)]"
          : "section-pad border-t border-[var(--color-grey-border)] bg-[var(--color-canvas)]"
      }
    >
      <div className="container-content grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-16">
        <Reveal>
          <h2 className="display-md text-[var(--color-ink)] lg:sticky lg:top-32 lg:self-start">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>{children}</Reveal>
      </div>
    </section>
  );
}

function ProseBlock({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[var(--color-ink-soft)] leading-relaxed text-lg">{children}</p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[var(--color-ink-soft)] leading-relaxed">
          <span className="text-[var(--color-accent)] shrink-0" aria-hidden="true">
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPageTemplate({
  project,
  caseStudy,
}: CaseStudyPageTemplateProps) {
  const relatedServices = caseStudy.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter(Boolean);

  return (
    <article>
      <div className="page-top">
        <div className="container-content mb-10">
          <TransitionLink
            href="/work"
            className="inline-flex items-center gap-2 label-caps text-[var(--color-grey)] hover:text-[var(--color-ink)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M13 7H1M6.5 1.5L1 7l5.5 5.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to case studies
          </TransitionLink>
        </div>

        <CaseStudyHero project={project} />
      </div>

      <section className="pb-16 md:pb-20 border-b border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
        <div className="container-content">
          <Reveal>
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="label-caps text-[var(--color-grey)] mb-1">Client</dt>
              <dd className="text-[var(--color-ink)]">{caseStudy.client}</dd>
            </div>
            <div>
              <dt className="label-caps text-[var(--color-grey)] mb-1">Industry</dt>
              <dd className="text-[var(--color-ink)]">{caseStudy.industry}</dd>
            </div>
            <div>
              <dt className="label-caps text-[var(--color-grey)] mb-1">Year</dt>
              <dd className="text-[var(--color-ink)]">{project.year}</dd>
            </div>
            <div>
              <dt className="label-caps text-[var(--color-grey)] mb-1">Role</dt>
              <dd className="text-[var(--color-ink)]">{project.role}</dd>
            </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <ContentSection title="Challenge">
        <ProseBlock>{caseStudy.challenge}</ProseBlock>
      </ContentSection>

      <ContentSection title="Discovery" variant="soft">
        <ProseBlock>{caseStudy.discovery}</ProseBlock>
      </ContentSection>

      <ContentSection title="Approach">
        <ProseBlock>{caseStudy.approach}</ProseBlock>
      </ContentSection>

      <ContentSection title="Design" variant="soft">
        <ProseBlock>{caseStudy.design}</ProseBlock>
      </ContentSection>

      <ContentSection title="Technical solution">
        <ProseBlock>{caseStudy.technical}</ProseBlock>
      </ContentSection>

      <ContentSection title="Key features" variant="soft">
        <BulletList items={caseStudy.keyFeatures} />
      </ContentSection>

      <section className="section-pad border-t border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-ink)] mb-6">Technology</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 border border-[var(--color-grey-border)] text-[var(--color-grey)] rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {caseStudy.challengesOvercome.length > 0 ? (
        <ContentSection title="Challenges overcome" variant="soft">
          <BulletList items={caseStudy.challengesOvercome} />
        </ContentSection>
      ) : null}

      <ContentSection title="Outcome">
        <div className="space-y-8">
          <BulletList items={caseStudy.outcomes} />
          {caseStudy.metrics.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[var(--radius-sm)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] px-5 py-4"
                >
                  <p className="display-md text-[var(--color-accent)] mb-1">{metric.value}</p>
                  <p className="text-sm text-[var(--color-ink-soft)]">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </ContentSection>

      {caseStudy.showGallery ? <CaseStudyGallery slug={project.slug} /> : null}

      {relatedServices.length > 0 ? (
        <section className="section-pad border-t border-[var(--color-grey-border)] bg-surface-soft">
          <div className="container-content">
            <h2 className="display-md text-[var(--color-ink)] mb-8">Related services</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <li key={service!.slug}>
                  <TransitionLink
                    href={`/services/${service!.slug}`}
                    className="group flex items-start gap-4 rounded-[var(--radius-sm)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-5 transition-colors hover:border-[var(--color-accent)]"
                  >
                    <ServiceIcon src={service!.icon} size={24} />
                    <div>
                      <p className="text-[var(--color-ink)] font-medium mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                        {service!.title}
                      </p>
                      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                        {service!.shortDescription}
                      </p>
                    </div>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {project.liveUrl ? <CaseStudyLiveCta project={project} /> : null}

      <section className="section-pad border-t border-[var(--color-grey-border)] bg-[var(--color-canvas)]">
        <div className="container-content">
          <NextProjectCta currentSlug={project.slug} />
        </div>
      </section>

      <FinalCTA />
    </article>
  );
}
