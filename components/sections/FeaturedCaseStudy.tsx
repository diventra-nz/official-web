import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { getCaseStudy } from "@/lib/case-studies";
import { projects } from "@/lib/projects";
import { analyticsEvents } from "@/lib/analytics";

const featured = projects[0];
const featuredCaseStudy = getCaseStudy(featured.slug)!;

export default function FeaturedCaseStudy() {
  return (
    <section className="bg-surface-void section-pad">
      <div className="container-content">
        <SectionLabel index="07" label="Featured work" dark />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-void-surface)]">
              {featured.image.endsWith(".mp4") ? (
                <video
                  src={featured.image}
                  poster={featured.imagePoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="label-caps mb-3 text-[var(--color-accent-light)]">
                {featuredCaseStudy.industry}
              </p>
              <h2 className="display-lg text-[var(--color-void-text)] mb-4">{featured.name}</h2>
              <p className="text-[var(--color-void-muted)] leading-relaxed mb-6">{featured.impact}</p>

              <dl className="mb-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="label-caps mb-1 text-[var(--color-void-muted)]">Challenge</dt>
                  <dd className="text-sm text-[var(--color-void-text)]">
                    {featuredCaseStudy.challenge.split(".")[0]}.
                  </dd>
                </div>
                <div>
                  <dt className="label-caps mb-1 text-[var(--color-void-muted)]">Outcome</dt>
                  <dd className="text-sm text-[var(--color-void-text)]">
                    {featuredCaseStudy.outcomes[0]}
                  </dd>
                </div>
              </dl>

              <div className="mb-8 flex flex-wrap gap-2">
                {featured.stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[var(--radius-sm)] border border-[var(--color-void-border)] px-2.5 py-1 text-xs text-[var(--color-void-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <MagneticButton
                href={`/work/${featured.slug}`}
                variant="primary"
                context="violet"
                trackEvent={analyticsEvents.caseStudyClick}
                trackParams={{ slug: featured.slug }}
              >
                View Case Study
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
