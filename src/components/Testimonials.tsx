import { Quote } from 'lucide-react';
import { testimonials } from '@/data/site';
import { toneAt } from '@/lib/tones';
import { cn } from '@/lib/utils';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

/**
 * Static grid rather than a carousel: three quotes fit without hiding any,
 * which sidesteps the auto-rotation / pause-control accessibility burden
 * entirely. Revisit only if the list grows well past four.
 */
const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-[clamp(72px,9vw,128px)]">
      <div className="container">
        <SectionHead
          eyebrow="In their words"
          title={
            <>
              What clients <span className="text-gradient">say afterwards</span>
            </>
          }
          intro="The part that matters is not how a project starts, but how people describe it once they have lived with what we built."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, company }, i) => (
            <li key={i} className="flex min-w-0">
              <Reveal delay={i * 80} className="flex w-full">
                <figure className="card-glow relative flex h-full w-full min-w-0 flex-col gap-6 overflow-visible rounded-3xl border border-line bg-paper p-8 shadow-sm transition-shadow duration-300 hover:border-transparent hover:shadow-[0_24px_60px_-28px_rgba(15,23,60,0.4)]">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-violet text-white shadow-[0_8px_20px_-8px_hsl(var(--brand)/0.8)]"
                  >
                    <Quote className="h-5 w-5" fill="currentColor" strokeWidth={0} />
                  </span>
                  <blockquote className="text-[16.5px] leading-relaxed text-ink">{quote}</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3.5 border-t border-line pt-5">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'grid h-11 w-11 flex-none place-items-center rounded-full font-display text-lg font-bold ring-1',
                        toneAt(i).chip,
                      )}
                    >
                      {name.trim().charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[15px] font-semibold">{name}</span>
                      <span className="block text-[13px] leading-snug text-muted-foreground">
                        {role}, {company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
