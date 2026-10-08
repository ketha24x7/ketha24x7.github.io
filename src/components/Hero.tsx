import { ArrowRight } from 'lucide-react';
import { stats } from '@/data/site';
import ServicePicker from './ServicePicker';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-[clamp(40px,6vw,72px)] pt-[clamp(48px,8vw,96px)]">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="container relative grid items-center gap-[clamp(32px,5vw,64px)] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0 [&>*]:animate-rise">
          <p className="eyebrow">Next-Gen IT Solutions · Kaduwela, Sri Lanka</p>

          <h1 className="display mt-6 text-[clamp(48px,9vw,112px)] [overflow-wrap:anywhere] [animation-delay:60ms]">
            Transforming ideas into <span className="text-brand">digital reality</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-[clamp(17px,1.6vw,19px)] text-muted-foreground [animation-delay:120ms]">
            We blend robust web, mobile and cloud architecture with scalable AI solutions. Whether we're building
            new systems or improving the ones you already run, we help your business lead the next wave of
            innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 [animation-delay:180ms]">
            <a href="#contact" className="btn-primary group">
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-ghost">
              Our services
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-[clamp(24px,5vw,56px)] border-t border-line pt-7 [animation-delay:240ms]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-[44px] font-bold leading-none tabular-nums">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ServicePicker />
      </div>
    </section>
  );
};

export default Hero;
