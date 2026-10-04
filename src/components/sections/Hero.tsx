import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-navy"
    >
      <Image
        src="/images/hero.jpg"
        alt="Tulas International School campus in Dehradun"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/30"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-yellow">
              {hero.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 font-display text-xl text-brand-yellow sm:text-2xl">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              {hero.body}
            </p>
          </Reveal>
          <Reveal delay={0.32} className="mt-8 flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-navy transition-transform hover:scale-105"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-navy"
            >
              {hero.secondaryCta.label}
            </a>
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/50 text-white"
      >
        <ArrowDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}