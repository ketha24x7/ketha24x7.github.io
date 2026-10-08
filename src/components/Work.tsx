import { ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/site';
import SectionHead from './SectionHead';

/** Case studies: the proof layer between what we claim and what we've shipped. */
const Work = () => {
  return (
    <section id="work" className="border-y border-line bg-paper py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Problems we've
              <br />
              <span className="text-brand">actually solved</span>
            </>
          }
          intro="A look at what we build and the difference it made. Every engagement starts with the same question: what is this costing you today?"
        />

        <div className="grid gap-x-7 gap-y-12 lg:grid-cols-3">
          {caseStudies.map(({ slug, sector, title, summary, metrics, stack, image, href }) => {
            const Wrapper = href ? 'a' : 'div';
            return (
              <article key={slug} className="group flex min-w-0 flex-col">
                <Wrapper
                  {...(href ? { href } : {})}
                  className="block overflow-hidden rounded-xl border border-line bg-ground"
                >
                  <img
                    src={image}
                    alt=""
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </Wrapper>

                <p className="eyebrow mt-6">{sector}</p>

                <h3 className="display mt-3 text-[30px] leading-[0.95]">
                  {href ? (
                    <a href={href} className="inline-flex items-start gap-1.5 hover:text-brand">
                      {title}
                      <ArrowUpRight className="mt-1 h-5 w-5 flex-none" aria-hidden="true" />
                    </a>
                  ) : (
                    title
                  )}
                </h3>

                <p className="mt-3 text-[15px] text-muted-foreground">{summary}</p>

                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5">
                  {metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse">
                      <dt className="text-[13px] text-muted-foreground">{m.label}</dt>
                      <dd className="font-display text-[32px] font-bold leading-none tabular-nums text-brand">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {stack.map((s) => (
                    <li key={s} className="rounded border border-line bg-ground px-2.5 py-1 font-mono text-xs">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
