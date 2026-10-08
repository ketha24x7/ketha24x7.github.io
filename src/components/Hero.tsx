import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { stats } from '@/data/site';
import ServicePicker from './ServicePicker';

const assurances = [
  { Icon: ShieldCheck, text: 'You own the code' },
  { Icon: Zap, text: 'Two-week sprints' },
  { Icon: Sparkles, text: 'Fixed-price phases' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-[clamp(56px,8vw,104px)] pt-[clamp(40px,7vw,88px)]">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container relative grid items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="min-w-0 [&>*]:animate-rise">
          <p className="eyebrow">Next-Gen IT Solutions</p>

          <h1 className="display mt-6 text-[clamp(40px,6.2vw,76px)] [animation-delay:60ms]">
            Transforming ideas into <span className="text-gradient">digital reality</span>
          </h1>

          <p className="mt-6 max-w-[54ch] text-[clamp(16.5px,1.5vw,19px)] text-muted-foreground [animation-delay:120ms]">
            We blend robust web, mobile and cloud architecture with scalable AI solutions. Whether we're building
            new systems or improving the ones you already run, we help your business lead the next wave of
            innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 [animation-delay:180ms]">
            <a href="#contact" className="btn-primary group">
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className="btn-ghost">
              See our work
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted-foreground [animation-delay:220ms]">
            {assurances.map(({ Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid max-w-[520px] grid-cols-3 gap-3 [animation-delay:260ms]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse rounded-2xl border border-line bg-paper/70 px-4 py-4 shadow-sm backdrop-blur"
              >
                <dt className="mt-1 text-[13px] leading-snug text-muted-foreground">{stat.label}</dt>
                <dd className="display text-gradient text-[clamp(28px,3vw,36px)] leading-none tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-brand/25 via-brand-violet/20 to-brand-cyan/20 blur-3xl"
          />
          <ServicePicker />
        </div>
      </div>
    </section>
  );
};

export default Hero;
