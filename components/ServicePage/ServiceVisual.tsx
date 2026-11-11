import type { ReactNode } from "react";
import { Check, GripVertical, LayoutDashboard, ShoppingCart } from "lucide-react";

/**
 * Small illustrations for the service pages, drawn with plain shapes in the
 * site's colours (no image files). One per service, chosen by its slug.
 */

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-3xl bg-pine-900 p-5 shadow-2xl shadow-pine-900/20 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-pine-700" />
          <span className="size-2.5 rounded-full bg-pine-700" />
          <span className="size-2.5 rounded-full bg-lime" />
        </div>
        <span className="truncate rounded-pill bg-pine-800 px-3 py-1 text-[11px] text-pine-200">{label}</span>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

const Bar = ({ className = "" }: { className?: string }) => <span className={`block h-2 rounded-full ${className}`} />;

function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`absolute inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium text-ink shadow-xl shadow-pine-900/15 ${className}`}>
      {children}
    </div>
  );
}

function AppVisual() {
  return (
    <>
      <Frame label="Shopify admin">
        <div className="grid grid-cols-[4rem_1fr] gap-3">
          <div className="space-y-2.5 rounded-2xl bg-pine-800 p-3">
            <Bar className="w-full bg-pine-600" />
            <Bar className="w-4/5 bg-pine-600" />
            <Bar className="w-full bg-lime" />
            <Bar className="w-3/5 bg-pine-600" />
            <Bar className="w-4/5 bg-pine-600" />
          </div>
          <div className="rounded-2xl bg-white p-4">
            <div className="flex items-center justify-between">
              <Bar className="h-2.5 w-24 bg-pine-900" />
              <span className="rounded-pill bg-lime px-3 py-1 text-[10px] font-semibold text-pine-900">Save</span>
            </div>
            <div className="mt-4 space-y-3">
              {[true, true, false].map((on, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl bg-mist px-3 py-2.5">
                  <Bar className={`bg-pine-200 ${i === 1 ? "w-20" : "w-28"}`} />
                  <span className={`flex h-4 w-7 items-center rounded-full p-0.5 ${on ? "justify-end bg-pine-600" : "bg-ink-muted/40"}`}>
                    <span className="size-3 rounded-full bg-white" />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-sage p-3">
                <Bar className="w-10 bg-pine-900/25" />
                <Bar className="mt-2 h-3 w-14 bg-pine-900/60" />
              </div>
              <div className="rounded-xl bg-butter p-3">
                <Bar className="w-10 bg-pine-900/25" />
                <Bar className="mt-2 h-3 w-10 bg-pine-900/60" />
              </div>
            </div>
          </div>
        </div>
      </Frame>
      <Chip className="-bottom-5 -left-3 sm:-left-6">
        <span className="grid size-8 place-items-center rounded-full bg-lime text-pine-900">
          <LayoutDashboard className="size-4" />
        </span>
        Embedded in the admin
      </Chip>
    </>
  );
}

function StoreVisual() {
  return (
    <>
      <Frame label="yourstore.com">
        <div className="rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="size-5 rounded-full bg-pine-800" />
            <div className="flex gap-3">
              <Bar className="w-8 bg-pine-200" />
              <Bar className="w-8 bg-pine-200" />
              <Bar className="w-8 bg-pine-200" />
            </div>
            <ShoppingCart className="size-4 text-pine-800" />
          </div>
          <div className="mt-4 rounded-xl bg-peach p-4">
            <Bar className="h-3 w-32 bg-pine-900/70" />
            <Bar className="mt-2 w-24 bg-pine-900/25" />
            <span className="mt-3 inline-block rounded-pill bg-pine-800 px-3 py-1 text-[10px] font-semibold text-white">Shop now</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {["bg-sage", "bg-butter", "bg-sky"].map((color) => (
              <div key={color}>
                <div className={`${color} aspect-square rounded-xl`} />
                <Bar className="mt-2 w-full bg-pine-200" />
                <Bar className="mt-1.5 w-1/2 bg-pine-900/60" />
              </div>
            ))}
          </div>
        </div>
      </Frame>
      <Chip className="-right-3 -bottom-5 sm:-right-6">
        <span className="grid size-8 place-items-center rounded-full bg-lime text-pine-900">
          <Check className="size-4" strokeWidth={3} />
        </span>
        Added to cart
      </Chip>
    </>
  );
}

function ThemeVisual() {
  const sections = ["Header", "Hero banner", "Featured collection", "Reviews", "Footer"];
  return (
    <Frame label="Theme editor">
      <div className="grid grid-cols-[1fr_1.15fr] gap-3">
        <ul className="space-y-2">
          {sections.map((name, i) => (
            <li
              key={name}
              className={`flex items-center gap-1.5 rounded-xl px-2 py-2 text-[11px] ${
                i === 2 ? "bg-lime font-semibold text-pine-900" : "bg-pine-800 text-pine-100"
              }`}
            >
              <GripVertical className="size-3.5 shrink-0 opacity-60" />
              <span className="truncate">{name}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2 rounded-2xl bg-white p-3">
          <div className="flex items-center justify-between">
            <span className="size-3.5 rounded-full bg-pine-800" />
            <Bar className="w-12 bg-pine-200" />
          </div>
          <div className="rounded-lg bg-sage p-3">
            <Bar className="w-16 bg-pine-900/60" />
            <Bar className="mt-1.5 w-10 bg-pine-900/25" />
          </div>
          <div className="rounded-lg p-2 outline-2 outline-offset-1 outline-lime-deep outline-dashed">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="aspect-square rounded-md bg-butter" />
              <div className="aspect-square rounded-md bg-peach" />
              <div className="aspect-square rounded-md bg-sky" />
            </div>
          </div>
          <div className="rounded-lg bg-mist p-2.5">
            <Bar className="w-full bg-pine-200" />
          </div>
          <Bar className="h-3 w-full bg-pine-800" />
        </div>
      </div>
    </Frame>
  );
}

function PlusVisual() {
  return (
    <>
      <Frame label="Checkout">
        <div className="grid grid-cols-[1.2fr_1fr] gap-3">
          <div className="space-y-2.5 rounded-2xl bg-white p-3.5">
            <Bar className="w-14 bg-pine-900/60" />
            <span className="block h-7 rounded-lg border border-line" />
            <div className="grid grid-cols-2 gap-2">
              <span className="block h-7 rounded-lg border border-line" />
              <span className="block h-7 rounded-lg border border-line" />
            </div>
            <div className="rounded-lg p-2.5 outline-2 outline-offset-1 outline-lime-deep outline-dashed">
              <div className="flex items-center gap-2">
                <span className="grid size-4 place-items-center rounded bg-pine-700">
                  <Check className="size-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-[11px] font-medium text-ink">Add a gift note</span>
              </div>
            </div>
            <span className="block h-7 rounded-lg bg-pine-800" />
          </div>
          <div className="space-y-2.5 rounded-2xl bg-pine-800 p-3.5">
            {["bg-sage", "bg-peach"].map((color) => (
              <div key={color} className="flex items-center gap-2">
                <span className={`${color} size-7 shrink-0 rounded-md`} />
                <Bar className="flex-1 bg-pine-600" />
              </div>
            ))}
            <span className="block h-px bg-pine-700" />
            <span className="inline-block rounded-pill bg-lime px-2.5 py-1 text-[10px] font-semibold text-pine-900">
              Wholesale prices
            </span>
            <div className="flex items-center justify-between text-[11px] font-semibold text-white">
              Total <Bar className="h-2.5 w-10 bg-white" />
            </div>
          </div>
        </div>
      </Frame>
    </>
  );
}

function SupportVisual() {
  const done = ["API version updated", "Theme update tested", "Bug fix deployed"];
  return (
    <Frame label="Store health">
      <div className="flex items-center gap-2.5 text-sm font-medium text-white">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2.5 rounded-full bg-lime" />
        </span>
        All systems normal
      </div>
      <div className="mt-4 flex h-10 items-end gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className={`flex-1 rounded-sm ${i === 17 ? "h-1/2 bg-pine-600" : "h-full bg-lime"}`} />
        ))}
      </div>
      <p className="mt-2 text-[11px] text-pine-200">Last 30 days</p>
      <ul className="mt-4 space-y-2 rounded-2xl bg-white p-3">
        {done.map((item) => (
          <li key={item} className="flex items-center gap-2.5 rounded-xl bg-mist px-3 py-2.5 text-xs font-medium text-ink">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-pine-700">
              <Check className="size-3 text-white" strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Frame>
  );
}

const visuals: Record<string, () => ReactNode> = {
  "shopify-app-development": AppVisual,
  "shopify-store-development": StoreVisual,
  "shopify-theme-development": ThemeVisual,
  "shopify-plus-development": PlusVisual,
  "ongoing-support": SupportVisual,
};

export default function ServiceVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug] ?? AppVisual;
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <Visual />
    </div>
  );
}
