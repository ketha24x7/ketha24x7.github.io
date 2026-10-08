import { clients } from '@/data/site';

/**
 * Wordmark strip. Deliberately static — a moving logo rail would need pause,
 * keyboard and reduced-motion controls to be accessible, and buys nothing
 * at this list length. The tech marquee already carries the page's motion.
 */
const ClientLogos = () => {
  if (clients.length === 0) return null;

  return (
    <section aria-labelledby="clients-heading" className="py-[clamp(40px,6vw,64px)]">
      <div className="container">
        <h2 id="clients-heading" className="text-center font-mono text-[12.5px] uppercase tracking-[0.08em] text-muted-foreground">
          Teams we've built for
        </h2>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-[clamp(28px,6vw,72px)] gap-y-6">
          {clients.map((name) => (
            <li
              key={name}
              className="font-display text-[clamp(20px,2.4vw,28px)] font-bold uppercase leading-none tracking-[0.01em] text-muted-foreground transition-colors hover:text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ClientLogos;
