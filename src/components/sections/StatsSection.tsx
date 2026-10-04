import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import { about, stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2
            id="about-heading"
            className="mx-auto max-w-3xl text-center font-display text-2xl font-bold leading-snug text-brand-navy sm:text-3xl"
          >
            {about}
          </h2>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl bg-brand-cream p-6 text-center">
                <dt className="order-2 mt-2 text-sm font-medium uppercase tracking-wide text-brand-navy/70">
                  {s.label}
                </dt>
                <dd className="font-display text-4xl font-bold text-brand-navy sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}