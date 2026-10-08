import { useMemo, useState } from 'react';
import { projectCategories, projects } from '@/data/site';
import SectionHead from './SectionHead';

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
    <section id="work" className="border-y border-line bg-paper py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title={
            <>
              Systems running
              <br />
              <span className="text-brand">real businesses</span>
            </>
          }
          intro="Factories, service centres, classrooms and storefronts. Most of what we build is the unglamorous operational software a business runs on every day."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-ground text-muted-foreground hover:border-ink hover:text-ink'
                }`}
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

        <ul className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(({ slug, category, title, client, summary, capabilities, image }) => (
            <li key={slug}>
              <article className="group flex h-full min-w-0 flex-col">
                <div className="overflow-hidden rounded-xl border border-line bg-ground">
                  <img
                    src={image}
                    alt=""
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>

                <p className="eyebrow mt-6">{category}</p>

                <h3 className="display mt-3 text-[28px] leading-[0.97]">{title}</h3>

                <p className="mt-2 font-mono text-[12.5px] uppercase tracking-[0.06em] text-muted-foreground">
                  {client}
                </p>

                <p className="mt-3.5 text-[15px] text-muted-foreground">{summary}</p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {capabilities.map((c) => (
                    <li key={c} className="rounded border border-line bg-ground px-2.5 py-1 font-mono text-xs">
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
