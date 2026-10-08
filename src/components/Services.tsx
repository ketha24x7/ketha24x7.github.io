import { services } from '@/data/site';
import SectionHead from './SectionHead';

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

        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description, features }) => (
            <article
              key={id}
              id={`svc-${id}`}
              className="flex min-w-0 scroll-mt-24 flex-col gap-3.5 border-b border-r border-line bg-ground px-7 pb-[30px] pt-8 transition-colors hover:bg-paper target:bg-paper"
            >
              <div className="grid h-11 w-11 place-items-center rounded-[10px] bg-brand-tint text-brand">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <h3 className="display mt-2 text-[32px] leading-none">{title}</h3>
              <p className="text-base text-muted-foreground">{description}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {features.map((f) => (
                  <li key={f} className="rounded border border-line bg-paper px-2.5 py-1 font-mono text-xs">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
