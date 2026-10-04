import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { leaders, personalities } from "@/data/people";

export default function PersonalitiesSection() {
  return (
    <section id="events" aria-labelledby="people-heading" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 id="people-heading" className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
            Influential Personalities On Campus
          </h2>
        </Reveal>

        <ul
          tabIndex={0}
          aria-label="Sports persons and influencers, scroll horizontally"
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {personalities.map((p) => (
            <li key={p.slug} className="w-60 shrink-0 snap-start">
              <figure className="overflow-hidden rounded-2xl bg-brand-cream">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`/images/people/${p.slug}.webp`}
                    alt={p.name}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="font-display text-lg font-bold text-brand-navy">{p.name}</p>
                  <p className="mt-1 text-sm text-brand-navy/80">{p.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <details className="mt-12 rounded-2xl border border-brand-navy/15 p-6">
          <summary className="cursor-pointer font-display text-xl font-bold text-brand-navy">
            Leaders of India
          </summary>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((l) => (
              <li key={l.name}>
                <p className="font-semibold text-brand-navy">{l.name}</p>
                <p className="text-sm text-brand-navy/75">{l.role}</p>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}