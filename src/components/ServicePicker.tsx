import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/site';
import { cn } from '@/lib/utils';

/** Hero panel: visitors pick what they're building and see the matching service. */
const ServicePicker = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <aside
      aria-label="Find the right service"
      className="animate-rise overflow-hidden rounded-[20px] border border-line bg-paper shadow-[0_1px_0_hsl(var(--line)),0_24px_48px_-28px_rgba(11,13,18,0.28)] [animation-delay:200ms]"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4 font-mono text-xs text-muted-foreground">
        <span>ketha24 / start-a-project</span>
        <span className="inline-flex items-center gap-2">
          <i className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_hsl(var(--success)/0.2)]" />
          Taking new projects
        </span>
      </div>

      <div className="px-5 pb-6 pt-5">
        <p id="picker-q" className="text-[15px] font-semibold">
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
                'rounded-full border px-3.5 py-2.5 text-sm font-medium leading-none transition-colors',
                i === active
                  ? 'border-ink bg-ink text-ground'
                  : 'border-line bg-ground text-ink hover:border-ink',
              )}
            >
              {item.chip}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-5 rounded-xl bg-brand-tint p-[18px]">
          <h3 className="display text-[30px] leading-none">{s.title}</h3>
          <p className="mt-2.5 text-[15px]">{s.description}</p>
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {s.stack.map((t) => (
              <span
                key={t}
                className="rounded border border-brand/25 bg-paper px-2 py-1 font-mono text-xs text-brand-ink"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={`#svc-${s.id}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ink"
          >
            See the service <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ServicePicker;
