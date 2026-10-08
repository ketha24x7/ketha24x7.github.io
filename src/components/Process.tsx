import { Compass, PenTool, Code2, Rocket } from 'lucide-react';
import { processSteps } from '@/data/site';
import SectionHead from './SectionHead';
import Reveal from './Reveal';

const stepIcons = [Compass, PenTool, Code2, Rocket];

/**
 * Four steps as connected cards on a dark band. The connector is drawn once
 * on the list rather than per card, so it never dangles past the last step
 * when the grid wraps to one or two columns.
 */
const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-band py-[clamp(72px,9vw,128px)] text-band-fg">
      <div className="aurora pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(hsl(var(--band-line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--band-line))_1px,transparent_1px)] bg-[size:56px_56px] opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent)]"
      />

      <div className="container relative [&_.eyebrow]:border-white/15 [&_.eyebrow]:bg-white/5 [&_.eyebrow]:text-band-fg">
        <SectionHead
          eyebrow="How we work"
          title={
            <>
              Short loops, <span className="text-gradient">steady delivery</span>
            </>
          }
          intro={
            <span className="text-band-muted">
              Rapid iterations and continuous delivery get your product to market faster, with you in the loop at
              every step.
            </span>
          }
        />

        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-brand via-brand-violet to-brand-cyan opacity-60 lg:block"
          />
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <li key={step.title} className="h-full">
                <Reveal delay={i * 90} className="h-full">
                  <div className="group relative flex h-full flex-col rounded-3xl border border-band-line bg-white/[0.03] p-7 backdrop-blur transition-colors hover:border-brand/50 hover:bg-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-violet text-white shadow-[0_10px_30px_-10px_hsl(var(--brand)/0.9)]">
                        <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="font-display text-[40px] font-extrabold leading-none tracking-tight text-white/10 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="display mt-6 text-[22px]">{step.title}</h3>
                    <p className="mt-2.5 text-[15px] text-band-muted">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Process;
