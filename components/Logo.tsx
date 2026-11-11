import Link from "next/link";
import { Zap } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label="StrikeBits home">
      <span className="grid size-9 place-items-center rounded-xl bg-lime text-pine-900">
        <Zap className="size-5" strokeWidth={2.2} fill="currentColor" />
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        StrikeBits
      </span>
    </Link>
  );
}
