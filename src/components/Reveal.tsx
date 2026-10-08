import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Stagger within a group, in ms. */
  delay?: number;
  className?: string;
};

/**
 * Fades content up as it scrolls into view, once.
 *
 * Starts in the visible state and only hides once the observer is attached,
 * so the content is readable if JS never runs. The hidden style is scoped to
 * `prefers-reduced-motion: no-preference` in index.css, so nothing moves for
 * visitors who asked for less motion.
 */
const Reveal = ({ children, delay = 0, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    setShown(false);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={shown ? 'shown' : 'hidden'}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
};

export default Reveal;
