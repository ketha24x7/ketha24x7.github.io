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
      className="rounded-md border border-band-line px-3 py-2 text-[13px] font-medium leading-none text-band-fg hover:border-band-fg"
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
    <section id="contact" className="bg-band py-[clamp(64px,9vw,112px)] text-band-fg">
      <div className="container grid items-end gap-[clamp(32px,6vw,72px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <p className="eyebrow text-band-muted">Let's connect</p>
          <h2 className="display mt-5 text-[clamp(48px,9vw,120px)] [overflow-wrap:anywhere]">
            Have a project
            <br />
            in <span className="text-brand">mind?</span>
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg text-band-muted">
            Ready to turn your idea into reality? Tell us what you're building and we'll get back to you with next
            steps.
          </p>
          {time && (
            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-band-line px-3.5 py-2 font-mono text-[13px] text-band-muted">
              Kaduwela <b className="font-medium tabular-nums text-band-fg">{time}</b> UTC+5:30
            </p>
          )}
        </div>

        <div className="min-w-0">
          <dl className="border-t border-band-line">
            {channels.map((c) => (
              <div
                key={c.label}
                className="grid gap-x-4 gap-y-3 border-b border-band-line py-5 sm:grid-cols-[96px_1fr]"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-band-muted sm:pt-1.5">
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
                          <a href={v.href} className="hover:text-brand">
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
          <a href={`mailto:${company.email}?subject=New%20project%20enquiry`} className="btn-primary group mt-7">
            Email us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
