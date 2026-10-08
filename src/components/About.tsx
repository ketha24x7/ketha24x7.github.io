import { Check } from 'lucide-react';
import { highlights, values } from '@/data/site';

const About = () => {
  return (
    <section id="about" className="py-[clamp(64px,9vw,120px)]">
      <div className="container grid gap-[clamp(32px,6vw,80px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <p className="eyebrow">About Ketha24</p>
          <h2 className="display mt-4 text-[clamp(44px,6vw,76px)]">
            Technology for
            <br />
            every business
          </h2>
          <div className="mt-7 grid max-w-[60ch] gap-4 text-lg text-muted-foreground">
            <p>
              Ketha24 was founded with a vision to <strong className="font-semibold text-ink">democratize technology</strong>.
              We combine technical excellence with creative thinking to deliver solutions that meet and exceed
              expectations.
            </p>
            <p>We partner with startups and enterprises alike, helping them navigate the digital landscape and grow.</p>
          </div>

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-2.5 text-base font-medium">
                <span className="grid h-[18px] w-[18px] flex-none place-items-center rounded-full bg-brand-tint text-brand">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {v}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid content-start gap-3.5">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="grid grid-cols-[auto_1fr] items-start gap-x-[18px] gap-y-1.5 rounded-xl border border-line bg-paper p-6"
            >
              <div className="row-span-2 min-w-[108px] font-display text-4xl font-extrabold uppercase leading-[0.95] text-brand">
                {h.key}
              </div>
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="text-[15px] text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
