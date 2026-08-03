import type { Industry } from "@/lib/industries";
import { getService } from "@/lib/services";
import { getProject } from "@/lib/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceIcon from "@/components/ui/ServiceIcon";
import MagneticButton from "@/components/ui/MagneticButton";
import TransitionLink from "@/components/ui/TransitionLink";
import LottiePlayer from "@/components/ui/LottiePlayer";

interface IndustryPageTemplateProps {
  industry: Industry;
}

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const relatedServices = industry.serviceSlugs
    .map((slug) => getService(slug))
    .filter(Boolean);

  const relatedProjects = industry.relatedProjectSlugs
    .map((slug) => getProject(slug))
    .filter(Boolean);

  return (
    <>
      <section className="page-top bg-surface-accent-glow pb-16 md:pb-20">
        <div className="container-content">
          <SectionLabel index="Industry" label="Industries" />
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div className="max-w-[48rem]">
              <h1 className="display-xl text-[var(--color-ink)] mb-4">{industry.title}</h1>
              <p className="text-xl text-[var(--color-ink-soft)] leading-relaxed mb-8">
                {industry.heroDescription}
              </p>
              <MagneticButton href="/contact" variant="primary">
                Discuss your project
              </MagneticButton>
            </div>
            {industry.media?.type === "lottie" ? (
              <div
                className="relative aspect-square w-[40dvh] max-w-full shrink-0 overflow-hidden p-6"
                role="img"
                aria-label={industry.media.alt}
              >
                <LottiePlayer src={industry.media.src} className="h-full w-full" />
              </div>
            ) : (
              <ServiceIcon src={industry.icon} size={36} well />
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-md text-[var(--color-ink)] mb-4">Industry challenges</h2>
            <p className="text-[var(--color-ink-soft)] mb-6 leading-relaxed">
              Organisations in {industry.title.toLowerCase()} often face a distinct set of digital
              pressures.
            </p>
            <ul className="space-y-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-[var(--color-ink-soft)]">
                  <span className="text-[var(--color-accent)]" aria-hidden="true">
                    —
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-md text-[var(--color-ink)] mb-4">Common use cases</h2>
            <ul className="space-y-3">
              {industry.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-[var(--radius-sm)] border border-[var(--color-grey-border)] bg-[var(--color-canvas-warm)] px-4 py-3 text-sm text-[var(--color-ink-soft)]"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-soft">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-ink)] mb-8">Recommended solutions</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {industry.solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-[var(--radius-md)] border border-[var(--color-grey-border)] bg-[var(--color-canvas)] p-6"
              >
                <h3 className="text-lg font-medium text-[var(--color-ink)] mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-[var(--color-grey)] leading-relaxed">
                  {solution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-content">
          <h2 className="display-md text-[var(--color-ink)] mb-8">Relevant services</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) =>
              service ? (
                <li key={service.slug}>
                  <TransitionLink
                    href={`/services/${service.slug}`}
                    className="group flex h-full items-start gap-4 rounded-[var(--radius-md)] border border-[var(--color-grey-border)] p-5 transition-[border-color] hover:border-[var(--color-accent)]"
                  >
                    <ServiceIcon src={service.icon} size={20} well />
                    <div>
                      <h3 className="font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-grey)]">
                        {service.shortDescription}
                      </p>
                    </div>
                  </TransitionLink>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section-pad bg-surface-void bg-grid-dark">
          <div className="container-content">
            <h2 className="display-md text-[var(--color-void-text)] mb-8">Related work</h2>
            <ul className="grid gap-5 md:grid-cols-2">
              {relatedProjects.map((project) =>
                project ? (
                  <li key={project.slug}>
                    <TransitionLink
                      href={`/work/${project.slug}`}
                      className="group block rounded-[var(--radius-md)] border border-[var(--color-void-border)] bg-[var(--color-void-surface)] p-6 transition-[border-color] hover:border-[var(--color-accent-on-dark)]"
                    >
                      <p className="label-caps mb-2 text-[var(--color-accent-light)]">
                        Case study
                      </p>
                      <h3 className="display-md text-[var(--color-void-text)] mb-2 group-hover:text-[var(--color-accent-light)] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-[var(--color-void-muted)] leading-relaxed">
                        {project.impact}
                      </p>
                    </TransitionLink>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </section>
      )}

      <section className="section-pad bg-surface-soft">
        <div className="container-content max-w-[48rem]">
          <h2 className="display-md text-[var(--color-ink)] mb-8">Common questions</h2>
          <dl className="space-y-6">
            {industry.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-[var(--color-grey-border)] pb-6 last:border-0"
              >
                <dt className="text-lg font-medium text-[var(--color-ink)] mb-2">
                  {faq.question}
                </dt>
                <dd className="text-[var(--color-grey)] leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-surface-deep text-center">
        <div className="container-content">
          <h2 className="display-lg text-[var(--color-void-text)] mb-4">
            Ready to discuss your {industry.title.toLowerCase()} project?
          </h2>
          <p className="text-[var(--color-void-muted)] mb-8 mx-auto max-w-[40ch]">
            Tell us about your organisation and we&apos;ll recommend a practical path forward.
          </p>
          <MagneticButton href="/contact" variant="secondary" context="violet">
            Book a Consultation
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
