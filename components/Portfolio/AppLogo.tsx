import Image from "next/image";
import { Package } from "lucide-react";
import type { PortfolioApp } from "@/data/portfolio";

/** App icon, or a coloured placeholder tile when the app has no logo yet. */
export default function AppLogo({
  app,
  size,
  className = "",
  decorative = false,
}: {
  app: PortfolioApp;
  /** Rendered size in px */
  size: number;
  /** Size and radius classes, e.g. "size-16 rounded-2xl" */
  className?: string;
  /** True when the app name is already next to it (empty alt) */
  decorative?: boolean;
}) {
  if (app.logo && app.logoInset) {
    // Non-square mark: fit the whole logo inside a white tile with breathing room
    return (
      <span className={`grid shrink-0 place-items-center bg-white ${className}`}>
        <Image
          src={app.logo}
          alt={decorative ? "" : `${app.name} logo`}
          width={size}
          height={size}
          className="size-[72%] object-contain"
        />
      </span>
    );
  }

  if (app.logo) {
    return (
      <Image
        src={app.logo}
        alt={decorative ? "" : `${app.name} logo`}
        width={size}
        height={size}
        className={`shrink-0 bg-white object-cover ${className}`}
      />
    );
  }

  const Icon = app.placeholder?.icon ?? Package;
  return (
    <span
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `${app.name} logo`}
      aria-hidden={decorative || undefined}
      className={`grid shrink-0 place-items-center ${app.placeholder?.tone ?? "bg-mist text-pine-800"} ${className}`}
    >
      <Icon style={{ width: size * 0.45, height: size * 0.45 }} />
    </span>
  );
}
