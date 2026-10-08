import { processSteps } from '@/data/site';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

/**
 * Four steps as connected cards. The connector is drawn with a pseudo-element
 * on the list rather than per-card borders, so it never dangles past the last
 * step when the grid wraps to one or two columns.
 */
const Process = () => {
  return (
    <section id="process" className="border-y border-line bg-paper py-[clamp(64px,9vw,120px)]">
      <div className="container">
        <SectionHead
          eyebrow="How we work"
          title={
            <>
              Short loops,
              <br />
              <span className="text-brand">steady delivery</span>
            </>
          }
          intro="Rapid iterations and continuous delivery get your product to market faster, with you in the loop at every step."
        />

        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-line lg:block"
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 80} className="h-full">
                <div className="relative flex h-full flex-col rounded-2xl border border-line bg-ground p-6 transition-colors hover:border-ink/25">
                  <span
                    className={`grid h-[52px] w-[52px] place-items-center rounded-xl font-display text-xl font-bold tabular-nums ${
                      i === processSteps.length - 1 ? 'bg-brand text-white' : 'bg-ink text-ground'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display mt-5 text-[30px] leading-none">{step.title}</h3>
                  <p className="mt-3 text-[15px] text-muted-foreground">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
