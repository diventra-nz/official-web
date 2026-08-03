import TransitionLink from "@/components/ui/TransitionLink";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section className="page-top page-bottom bg-surface-accent-glow">
      <div className="container-content text-center">
        <p className="label-caps mb-4 text-[var(--color-grey)]">404</p>
        <h1 className="display-xl text-[var(--color-ink)] mb-4 mx-auto max-w-[16ch]">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-lg text-[var(--color-ink-soft)] mb-10 mx-auto max-w-[42ch] leading-relaxed">
          The link may be outdated, or the page may have moved. Head back home or get in touch if
          you need help finding something.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href="/" variant="primary">
            Back to home
          </MagneticButton>
          <TransitionLink href="/contact" className="text-link">
            Contact us
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
