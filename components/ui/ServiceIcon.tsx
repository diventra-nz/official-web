import { withBasePath } from "@/lib/paths";

interface ServiceIconProps {
  src: string;
  className?: string;
  size?: number;
  well?: boolean;
  tone?: "light" | "dark";
}

export default function ServiceIcon({
  src,
  className = "",
  size = 24,
  well = false,
  tone = "light",
}: ServiceIconProps) {
  const resolvedSrc = withBasePath(src);
  const textColor =
    tone === "dark" ? "text-[var(--color-brand-cyan)]" : "text-[var(--color-brand-violet)]";
  const wellBg =
    tone === "dark" ? "bg-[var(--color-accent-cyan-muted)]" : "bg-[var(--color-accent-muted)]";

  const icon = (
    <span
      className="block shrink-0 bg-current"
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${resolvedSrc})`,
        maskImage: `url(${resolvedSrc})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      aria-hidden="true"
    />
  );

  if (well) {
    const wellSize = Math.round(size * 2.1);
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] ${wellBg} ${textColor} ${className}`}
        style={{ width: wellSize, height: wellSize }}
        aria-hidden="true"
      >
        {icon}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${textColor} ${className}`}
      aria-hidden="true"
    >
      {icon}
    </span>
  );
}
