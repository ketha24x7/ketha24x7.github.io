import { services } from '@/data/site';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

/**
 * Service cards: illustration, then the icon chip overlapping its lower edge,
 * then copy. Cards are separate surfaces rather than cells in a shared border
 * grid — with artwork in each one, the old grid lines read as a table.
 */
const Services = () => {
  return (
    <section id="services" className="py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              Six ways we
              <br />
              move you forward
            </>
          }
          intro="Complete IT solutions shaped around your business, from the first website to the data and AI systems that run behind it."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description, features, image }, i) => (
            <Reveal key={id} delay={(i % 3) * 80} className="h-full">
            <article
              id={`svc-${id}`}
              className="group flex h-full scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_18px_40px_-24px_rgba(11,13,18,0.45)] focus-within:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="relative">
                <img
                  src={image}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover"
                />
                <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-brand shadow-sm">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 px-6 pb-7 pt-10">
                <h3 className="display text-[30px] leading-none">{title}</h3>
                <p className="text-[15px] text-muted-foreground">{description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {features.map((f) => (
                    <li key={f} className="rounded border border-line bg-ground px-2.5 py-1 font-mono text-xs">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
