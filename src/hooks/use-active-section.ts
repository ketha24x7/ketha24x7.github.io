import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view, for nav highlighting.
 *
 * Picks the last section whose top has passed the sticky header, which keeps
 * the active item stable while scrolling through a tall section — a pure
 * IntersectionObserver ratio test flickers between neighbours on short ones.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = 100; // just below the 68px sticky header
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      // At the very bottom the last section may never cross the line.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
