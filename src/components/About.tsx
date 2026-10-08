import { Check, Rocket, TrendingUp, Users } from 'lucide-react';
import { highlights, projects, stats, values } from '@/data/site';
import { toneAt } from '@/lib/tones';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

const highlightIcons = [TrendingUp, Rocket, Users];

// Three covers from real work, so the collage shows what we actually build.
const mosaic = ['garment-production-system', 'ecommerce-platform', 'parent-student-app']
  .map((slug) => projects.find((p) => p.slug === slug)?.image)
  .filter((src): src is string => Boolean(src));

const About = () => {
  return (
    <section id="about" className="py-[clamp(72px,9vw,128px)]">
      <div className="container">
        <div className="grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-[1fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow">About Ketha24</p>
            <h2 className="display mt-5 text-[clamp(32px,4.4vw,54px)]">
              Technology for <span className="text-gradient">every business</span>
            </h2>
            <div className="mt-6 grid max-w-[60ch] gap-4 text-[17px] text-muted-foreground">
              <p>
                Ketha24 was founded with a vision to{' '}
                <strong className="font-semibold text-ink">democratize technology</strong>. We combine technical
                excellence with creative thinking to deliver solutions that meet and exceed expectations.
              </p>
              <p>We partner with startups and enterprises alike, helping them navigate the digital landscape and grow.</p>
            </div>

            <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-[15.5px] font-medium">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-to-br from-brand to-brand-violet text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {v}
                </li>
              ))}
            </ul>
          </div>

          {mosaic.length === 3 && (
            <Reveal className="relative min-w-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-br from-brand/20 via-brand-violet/15 to-brand-cyan/15 blur-3xl"
              />
              <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
                <img
                  src={mosaic[0]}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="row-span-2 h-full w-full rounded-3xl border border-line object-cover shadow-lg"
                />
                <img
                  src={mosaic[1]}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-3xl border border-line object-cover shadow-lg"
                />
                <img
                  src={mosaic[2]}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-3xl border border-line object-cover shadow-lg"
                />
              </div>
              {stats[0] && (
                <div className="absolute -bottom-6 left-6 flex animate-float items-center gap-3 rounded-2xl border border-line bg-paper/95 px-5 py-4 shadow-xl backdrop-blur sm:left-[-24px]">
                  <span className="display text-gradient text-[34px] leading-none">{stats[0].value}</span>
                  <span className="text-sm font-medium leading-tight text-muted-foreground">
                    {stats[0].label.split(' ')[0]}
                    <br />
                    {stats[0].label.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              )}
            </Reveal>
          )}
        </div>

        <div className="mt-[clamp(56px,7vw,96px)] grid gap-5 md:grid-cols-3">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <Reveal key={h.title} delay={i * 80} className="h-full">
                <div className="card-glow flex h-full flex-col rounded-3xl border border-line bg-paper p-7 shadow-sm transition-shadow hover:border-transparent hover:shadow-[0_24px_60px_-28px_rgba(15,23,60,0.4)]">
                  <div className="flex items-center justify-between">
                    <span className={cn('grid h-12 w-12 place-items-center rounded-2xl ring-1', toneAt(i).chip)}>
                      <Icon className="h-[22px] w-[22px]" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="display text-gradient text-[28px]">{h.key}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{h.title}</h3>
                  <p className="mt-1.5 text-[15px] text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
