import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/site';
import { toneAt } from '@/lib/tones';
import { cn } from '@/lib/utils';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

/**
 * Service cards: illustration, then the icon chip overlapping its lower edge,
 * then copy. Each card takes its own accent hue so the grid reads as six
 * distinct offers, with a gradient hairline on hover.
 */
const Services = () => {
  return (
    <section id="services" className="py-[clamp(72px,9vw,128px)]">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              Six ways we <span className="text-gradient">move you forward</span>
            </>
          }
          intro="Complete IT solutions shaped around your business, from the first website to the data and AI systems that run behind it."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description, features, image }, i) => {
            const tone = toneAt(i);
            return (
              <Reveal key={id} delay={(i % 3) * 80} className="h-full">
                <article
                  id={`svc-${id}`}
                  className="card-glow group flex h-full scroll-mt-24 flex-col rounded-3xl border border-line bg-paper shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_60px_-28px_rgba(15,23,60,0.45)] focus-within:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="relative p-2.5 pb-0">
                    <div className="overflow-hidden rounded-[18px]">
                      <img
                        src={image}
                        alt=""
                        width={1600}
                        height={900}
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-7 rounded-2xl bg-paper shadow-md">
                      <span className={cn('grid h-12 w-12 place-items-center rounded-2xl ring-1', tone.chip)}>
                        <Icon className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 px-7 pb-7 pt-11">
                    <h3 className="display flex items-start justify-between gap-3 text-[22px]">
                      {title}
                      <ArrowUpRight
                        className="mt-0.5 h-5 w-5 flex-none text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-[15px] text-muted-foreground">{description}</p>
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-line bg-ground px-3 py-1 text-[12.5px] font-medium text-ink/80"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mx-7 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100',
                      tone.bar,
                    )}
                  />
                  <span aria-hidden="true" className="h-5" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
