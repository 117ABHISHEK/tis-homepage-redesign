import Reveal from "@/components/ui/Reveal";
import { rankings } from "@/data/rankings";

export default function RankingsSection() {
  return (
    <section aria-label="School rankings" className="bg-brand-navy py-20 sm:py-28">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {rankings.map((r, i) => (
          <li key={r.rank + r.region}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="h-full rounded-2xl border border-white/15 p-6">
                <p className="font-display text-6xl font-bold text-brand-yellow">{r.rank}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{r.region}</h3>
                <p className="mt-2 text-sm text-white/80">{r.title}</p>
                <p className="mt-4 text-xs uppercase tracking-wide text-white/60">by {r.source}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}