import { techs } from '@/data/site';

const TechMarquee = () => {
  return (
    <section aria-label="Technologies we work with" className="group overflow-hidden border-y border-line bg-paper py-[18px]">
      <ul className="flex w-max animate-marquee gap-11 group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
        {[...techs, ...techs].map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            aria-hidden={i >= techs.length || undefined}
            className="flex items-center gap-11 whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-[0.02em] text-muted-foreground after:h-1.5 after:w-1.5 after:rotate-45 after:bg-brand after:content-[''] motion-reduce:[&:nth-child(n+26)]:hidden"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechMarquee;
