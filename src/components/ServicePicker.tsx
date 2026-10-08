import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/site';
import { toneAt } from '@/lib/tones';
import { cn } from '@/lib/utils';

/** Hero panel: visitors pick what they're building and see the matching service. */
const ServicePicker = () => {
  const [active, setActive] = useState(0);
  const s = services[active];
  const Icon = s.icon;

  return (
    <aside
      aria-label="Find the right service"
      className="relative animate-rise overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_30px_80px_-30px_rgba(15,23,60,0.35)] [animation-delay:200ms]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <i className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <i className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <i className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_hsl(var(--success)/0.2)]" />
          Taking new projects
        </span>
      </div>

      <div className="px-5 pb-6 pt-5">
        <p id="picker-q" className="font-display text-[17px] font-bold">
          What are you building?
        </p>
        <div role="group" aria-labelledby="picker-q" className="mt-3.5 flex flex-wrap gap-2">
          {services.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={cn(
                'rounded-full border px-3.5 py-2.5 text-[13.5px] font-medium leading-none transition-all',
                i === active
                  ? 'border-transparent bg-gradient-to-r from-brand to-brand-violet text-white shadow-[0_6px_18px_-8px_hsl(var(--brand)/0.8)]'
                  : 'border-line bg-ground text-ink hover:border-brand/40 hover:text-brand-ink',
              )}
            >
              {item.chip}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-5 overflow-hidden rounded-2xl border border-line bg-ground">
          <div className="relative">
            <img
              key={s.id}
              src={s.image}
              alt=""
              width={1600}
              height={900}
              className="aspect-[16/7] w-full animate-in fade-in object-cover duration-500"
            />
            <span className="absolute bottom-3 left-3 rounded-xl bg-paper shadow-md">
              <span className={cn('grid h-11 w-11 place-items-center rounded-xl ring-1', toneAt(active).chip)}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
            </span>
          </div>
          <div className="p-[18px]">
            <h3 className="display text-[22px]">{s.title}</h3>
            <p className="mt-2 text-[14.5px] text-muted-foreground">{s.description}</p>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {s.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-brand/20 bg-brand-tint px-2 py-1 font-mono text-[11.5px] text-brand-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={`#svc-${s.id}`}
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink"
            >
              See the service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServicePicker;
