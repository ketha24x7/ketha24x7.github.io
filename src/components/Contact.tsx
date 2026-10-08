import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { company } from '@/data/site';

function colomboTime() {
  try {
    return new Intl.DateTimeFormat('en-GB', { timeZone: company.timeZone, hour: '2-digit', minute: '2-digit' }).format(
      new Date(),
    );
  } catch {
    return null;
  }
}

const CopyButton = ({ value }: { value: string }) => {
  const [label, setLabel] = useState('Copy');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setLabel('Copied');
    } catch {
      setLabel('Copy failed');
    }
    setTimeout(() => setLabel('Copy'), 1600);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[13px] font-medium leading-none text-band-fg transition-colors hover:border-white/40 hover:bg-white/10"
    >
      {label}
    </button>
  );
};

const Contact = () => {
  const [time, setTime] = useState(colomboTime);

  useEffect(() => {
    const id = setInterval(() => setTime(colomboTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Each channel can carry more than one value (we list two phone numbers),
  // so every value gets its own link and copy button under a single label.
  const channels = [
    {
      label: 'Email',
      values: [{ text: company.email, href: `mailto:${company.email}`, copy: true }],
    },
    {
      label: 'Phone',
      values: company.phones.map((p) => ({
        text: p,
        href: `tel:${p.replace(/[^\d+]/g, '')}`,
        copy: true,
      })),
    },
    { label: 'Location', values: [{ text: company.location, href: undefined, copy: false }] },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-band py-[clamp(72px,9vw,128px)] text-band-fg">
      <div className="aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand/30 via-brand-violet/30 to-brand-cyan/25 blur-[120px]"
      />

      <div className="container relative grid items-center gap-[clamp(40px,6vw,80px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <p className="eyebrow border-white/15 bg-white/5 text-band-fg">Let's connect</p>
          <h2 className="display mt-5 text-[clamp(40px,6.4vw,80px)] [overflow-wrap:anywhere]">
            Have a project in <span className="text-gradient">mind?</span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg text-band-muted">
            Ready to turn your idea into reality? Tell us what you're building and we'll get back to you with next
            steps.
          </p>
          {time && (
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-band-muted backdrop-blur">
              <i className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_hsl(var(--success)/0.25)]" />
              Kaduwela <b className="font-semibold tabular-nums text-band-fg">{time}</b> UTC+5:30
            </p>
          )}
        </div>

        <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-[clamp(20px,3vw,32px)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <dl>
            {channels.map((c, i) => (
              <div
                key={c.label}
                className={`grid gap-x-4 gap-y-3 py-5 sm:grid-cols-[96px_1fr] ${i > 0 ? 'border-t border-white/10' : 'pt-1'}`}
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-band-muted sm:pt-1.5">
                  {c.label}
                </dt>
                <div className="grid gap-2.5">
                  {c.values.map((v) => (
                    <dd
                      key={v.text}
                      className="grid grid-cols-[1fr_auto] items-center gap-4"
                    >
                      <span className="min-w-0 break-words text-[clamp(18px,2vw,22px)] font-medium">
                        {v.href ? (
                          <a href={v.href} className="transition-colors hover:text-brand-cyan">
                            {v.text}
                          </a>
                        ) : (
                          v.text
                        )}
                      </span>
                      {v.copy && <CopyButton value={v.text} />}
                    </dd>
                  ))}
                </div>
              </div>
            ))}
          </dl>
          <a
            href={`mailto:${company.email}?subject=New%20project%20enquiry`}
            className="btn-primary group mt-5 w-full justify-center py-4"
          >
            Email us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
