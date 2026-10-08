import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { company, faqs } from '@/data/site';
import SectionHead from './SectionHead';

/** Answers the questions that otherwise arrive by email before anyone enquires. */
const FAQ = () => {
  return (
    <section id="faq" className="border-y border-line bg-paper py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="Questions"
          title={
            <>
              Before you
              <br />
              get in touch
            </>
          }
          intro="The things people usually want to know first. If yours is not here, ask — we answer plainly."
        />

        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-[1.4fr_0.6fr]">
          <Accordion type="single" collapsible className="min-w-0 border-t border-line">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-line">
                <AccordionTrigger className="gap-6 py-6 text-left text-[18px] font-semibold hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-6 text-[16px] leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <aside className="h-fit rounded-xl border border-line bg-ground p-7">
            <h3 className="display text-[28px] leading-none">Still unsure?</h3>
            <p className="mt-3.5 text-[15px] text-muted-foreground">
              A short discovery call costs nothing and usually clears things up faster than email.
            </p>
            <a href="#contact" className="btn-primary mt-6 w-full justify-center">
              Talk to us
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block break-all text-center font-mono text-[13px] text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
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
