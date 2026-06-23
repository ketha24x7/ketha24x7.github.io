const techs = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Azure',
  'Docker', 'Kubernetes', 'GraphQL', 'PostgreSQL', 'React Native', 'Flutter',
  'TensorFlow', 'Rust', 'Go', 'Redis', 'Terraform',
];

const TechMarquee = () => {
  // Duplicated list so the loop is seamless.
  const row = [...techs, ...techs];

  return (
    <section className="relative py-10 border-y border-border/60 overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-4 sm:gap-6">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex-shrink-0 px-4 sm:px-5 py-2 rounded-full glass text-sm sm:text-base font-display font-medium text-muted-foreground hover:text-neon-cyan transition-colors whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
