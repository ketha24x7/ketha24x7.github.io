import { clients } from '@/data/site';

/**
 * Wordmark strip. Deliberately static — a moving logo rail would need pause,
 * keyboard and reduced-motion controls to be accessible, and buys nothing
 * at this list length. The tech marquee already carries the page's motion.
 */
const ClientLogos = () => {
  if (clients.length === 0) return null;

  return (
    <section aria-labelledby="clients-heading" className="py-[clamp(40px,5vw,56px)]">
      <div className="container">
        <h2
          id="clients-heading"
          className="text-center text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          Teams we've built for
        </h2>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-[clamp(28px,5vw,64px)] gap-y-5">
          {clients.map((name) => (
            <li
              key={name}
              className="font-display text-[clamp(18px,2vw,22px)] font-bold tracking-[-0.02em] text-muted-foreground/70 transition-colors hover:text-ink"
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
