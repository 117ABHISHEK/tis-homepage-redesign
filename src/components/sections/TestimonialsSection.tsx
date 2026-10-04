import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="voices-heading" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 id="voices-heading" className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
            Google Reviews
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.author}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm">
                  <blockquote className="text-brand-navy/90">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-brand-navy">{t.author}</p>
                    {t.relation && <p className="text-sm text-brand-navy/70">{t.relation}</p>}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}