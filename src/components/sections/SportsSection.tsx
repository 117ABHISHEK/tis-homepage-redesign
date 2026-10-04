import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { sports, sportsCopy } from "@/data/sports";

export default function SportsSection() {
  return (
    <section id="sports" aria-labelledby="sports-heading" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="sports-heading" className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
            {sportsCopy.title}
          </h2>
          <p className="mt-4 text-lg text-brand-navy/80">{sportsCopy.body}</p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sports.map((sport, i) => (
            <li key={sport.name}>
              <Reveal delay={(i % 4) * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <Image src={sport.icon} alt="" width={64} height={64} />
                  <span className="text-sm font-semibold text-brand-navy">{sport.name}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}