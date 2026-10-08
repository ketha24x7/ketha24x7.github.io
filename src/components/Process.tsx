import { processSteps } from '@/data/site';
import SectionHead from './SectionHead';

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

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink pt-7 last:border-brand">
              <span className="font-mono text-[13px] text-brand-ink">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="display mt-2.5 text-[30px] leading-none">{step.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
