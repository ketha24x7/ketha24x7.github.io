import { MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { company, faqs } from '@/data/site';
import SectionHead from './SectionHead';

/** Answers the questions that otherwise arrive by email before anyone enquires. */
const FAQ = () => {
  return (
    <section id="faq" className="border-y border-line bg-paper py-[clamp(72px,9vw,128px)]">
      <div className="container">
        <SectionHead
          eyebrow="Questions"
          title={
            <>
              Before you <span className="text-gradient">get in touch</span>
            </>
          }
          intro="The things people usually want to know first. If yours is not here, ask — we answer plainly."
        />

        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.4fr_0.6fr]">
          <Accordion type="single" collapsible className="grid min-w-0 content-start gap-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-line bg-ground px-6 transition-colors data-[state=open]:border-brand/40 data-[state=open]:bg-paper data-[state=open]:shadow-[0_16px_40px_-24px_rgba(15,23,60,0.35)]"
              >
                <AccordionTrigger className="gap-6 py-5 text-left font-display text-[17px] font-bold hover:no-underline [&[data-state=open]]:text-brand-ink">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-6 text-[15.5px] leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <aside className="relative h-fit overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-violet to-[hsl(270_80%_45%)] p-8 text-white shadow-[0_24px_60px_-24px_hsl(var(--brand-violet)/0.7)] lg:sticky lg:top-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-2xl"
            />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="display relative mt-5 text-[26px]">Still unsure?</h3>
            <p className="relative mt-3 text-[15px] text-white/85">
              A short discovery call costs nothing and usually clears things up faster than email.
            </p>
            <a
              href="#contact"
              className="btn relative mt-6 w-full justify-center bg-white text-brand-ink shadow-lg hover:-translate-y-0.5 dark:text-[hsl(217_100%_42%)]"
            >
              Talk to us
            </a>
            <a
              href={`mailto:${company.email}`}
              className="relative mt-3.5 block break-all text-center font-mono text-[13px] text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {company.email}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
