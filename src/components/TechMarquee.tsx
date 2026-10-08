import { techs } from '@/data/site';

const TechMarquee = () => {
  return (
    <section
      aria-label="Technologies we work with"
      className="group relative overflow-hidden border-y border-line bg-paper py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <ul className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
        {[...techs, ...techs].map((tech, i) => (
          <li
            key={`${tech}-${i}`}
            aria-hidden={i >= techs.length || undefined}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-ground px-4 py-2 text-[14.5px] font-semibold text-ink/75 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-brand before:to-brand-violet before:content-[''] motion-reduce:[&:nth-child(n+19)]:hidden"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechMarquee;
