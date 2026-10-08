import { useMemo, useState } from 'react';
import { Building2 } from 'lucide-react';
import { projectCategories, projects } from '@/data/site';
import { cn } from '@/lib/utils';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

/**
 * Project grid with category filtering.
 *
 * Filter chips wrap rather than clip — hiding options behind an overflow
 * edge makes the set look shorter than it is. The result count is in a
 * live region so filtering is announced to screen readers, which otherwise
 * get no feedback that the grid changed underneath them.
 */
const Work = () => {
  const [active, setActive] = useState(projectCategories[0]);

  const shown = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="work" className="relative overflow-hidden border-y border-line bg-paper py-[clamp(72px,9vw,128px)]">
      <div className="aurora pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container relative">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Systems running <span className="text-gradient">real businesses</span>
            </>
          }
          intro="Factories, service centres, classrooms and storefronts. Most of what we build is the unglamorous operational software a business runs on every day."
        />

        <div
          className="mb-10 inline-flex flex-wrap gap-1.5 rounded-2xl border border-line bg-ground/80 p-1.5 backdrop-blur"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={cn(
                  'rounded-xl px-4 py-2.5 text-sm font-semibold transition-all',
                  isActive
                    ? 'bg-paper text-brand-ink shadow-[0_4px_14px_-6px_rgba(15,23,60,0.3)] ring-1 ring-line'
                    : 'text-muted-foreground hover:text-ink',
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {shown.length} of {projects.length} projects
          {active === 'All' ? '' : ` in ${active}`}.
        </p>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(({ slug, category, title, client, summary, capabilities, image }, i) => (
            <li key={slug} className="h-full">
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="card-glow group flex h-full min-w-0 flex-col rounded-3xl border border-line bg-paper p-2.5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_60px_-28px_rgba(15,23,60,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative overflow-hidden rounded-[18px] bg-ground">
                    <img
                      src={image}
                      alt=""
                      width={1600}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur">
                      {category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                    <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-ink">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {client}
                    </p>

                    <h3 className="display mt-2 text-[21px] leading-[1.15]">{title}</h3>

                    <p className="mt-3 text-[14.5px] text-muted-foreground">{summary}</p>

                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                      {capabilities.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-line bg-ground px-2.5 py-1 text-xs font-medium text-ink/80"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
