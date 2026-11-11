import Reveal from "../Reveal";
import AppCard from "./AppCard";
import { apps } from "@/data/portfolio";

// Pastels rotate in the site order: sage, butter, peach, sky
const tones = ["bg-sage", "bg-butter", "bg-peach", "bg-sky"];

/** Grid of StrikeBits' own Shopify apps. */
export default function AppShowcase() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <span className="tag">Our apps</span>
          <h2 className="heading">
            Built by us, <span className="font-bold">run by us.</span>
          </h2>
          <p className="lead">Designed, built and supported in-house, and made to fit your theme without code.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.08} className="h-full">
              <AppCard app={app} tone={tones[i % tones.length]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
