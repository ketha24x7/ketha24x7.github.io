import { testimonials } from '@/data/site';
import SectionHead from './SectionHead';

/**
 * Static grid rather than a carousel: three quotes fit without hiding any,
 * which sidesteps the auto-rotation / pause-control accessibility burden
 * entirely. Revisit only if the list grows well past four.
 */
const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="In their words"
          title={
            <>
              What clients
              <br />
              say afterwards
            </>
          }
          intro="The part that matters is not how a project starts, but how people describe it once they have lived with what we built."
        />

        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, company }, i) => (
            <li key={i} className="flex min-w-0">
              <figure className="flex h-full w-full min-w-0 flex-col gap-6 rounded-xl border border-line bg-paper p-7">
                <span aria-hidden="true" className="font-display text-5xl leading-[0.6] text-brand">
                  &ldquo;
                </span>
                <blockquote className="text-[17px] leading-relaxed text-ink">{quote}</blockquote>
                <figcaption className="mt-auto flex items-center gap-3.5 border-t border-line pt-5">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-tint font-display text-lg font-bold text-brand"
                  >
                    {name.trim().charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[15px] font-semibold">{name}</span>
                    <span className="block truncate text-[13px] text-muted-foreground">
                      {role}, {company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
