import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { awards } from "@/data/awards";

export default function AwardsSection() {
  return (
    <section aria-labelledby="awards-heading" className="bg-brand-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 id="awards-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Awards
          </h2>
          <p className="mt-3 text-white/80">
            We believe in celebrating the hard work and perseverance of the best!
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {awards.map((a, i) => (
            <li key={a.src}>
              <Reveal delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                  <Image src={a.src} alt={a.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}