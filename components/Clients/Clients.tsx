import Image from "next/image";
import Reveal from "../Reveal";

// Edit client logos here (files live in /public/clients).
// `height` evens out how big each logo looks — adjust if one looks too big or small.
const clients = [
  { name: "Bloom Robbins", src: "/clients/bloomrobbins.avif", width: 436, height: 86, size: "h-6 md:h-8" },
  { name: "Codex Labs", src: "/clients/codex.webp", width: 600, height: 160, size: "h-8 md:h-10" },
  { name: "Dedoles", src: "/clients/dedoles.avif", width: 210, height: 65, size: "h-7 md:h-9" },
  { name: "Driveto", src: "/clients/driveto.webp", width: 690, height: 192, size: "h-7 md:h-9" },
  { name: "Freshlabels", src: "/clients/freshlabelsl.avif", width: 400, height: 96, size: "h-7 md:h-9" },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 md:gap-24 md:pr-24"
      aria-hidden={hidden || undefined}
    >
      {clients.map((c) => (
        <li key={c.name} className="shrink-0">
          <Image
            src={c.src}
            alt={hidden ? "" : c.name}
            width={c.width}
            height={c.height}
            className={`${c.size} w-auto opacity-45 grayscale transition duration-300 hover:opacity-100`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  return (
    <section aria-labelledby="clients-heading">
      <div className="wrap">
        <Reveal className="flex items-center gap-4">
          <span className="h-px flex-1 bg-line" />
          <h2 id="clients-heading" className="tag shrink-0 font-sans">
            Trusted by growing Shopify brands
          </h2>
          <span className="h-px flex-1 bg-line" />
        </Reveal>

        {/* Scrolling logo strip (still row for reduced-motion users) */}
        <Reveal delay={0.1} className="group mt-10 flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
