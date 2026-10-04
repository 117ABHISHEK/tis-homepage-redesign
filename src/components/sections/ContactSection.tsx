import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/sections/EnquiryForm";
import { contact } from "@/data/contact";

export default function ContactSection() {
  return (
    <section id="enquire" aria-labelledby="enquire-heading" className="scroll-mt-16 bg-brand-navy py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <h2 id="enquire-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Enquire Now!
          </h2>
          <address className="mt-6 space-y-3 not-italic text-white/85">
            <p>{contact.address}</p>
            <p>
              Admission Helpline:{" "}
              <a href={contact.helplineHref} className="font-semibold text-brand-yellow">
                {contact.helpline}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-brand-yellow">
                {contact.email}
              </a>
            </p>
            <p>
              Landline:{" "}
              {contact.landlines.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && ", "}
                  <a href={l.href} className="text-brand-yellow">{l.label}</a>
                </span>
              ))}
            </p>
          </address>
          <iframe
            title="Tulas International School location map"
            src={contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 h-64 w-full rounded-2xl border-0"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}