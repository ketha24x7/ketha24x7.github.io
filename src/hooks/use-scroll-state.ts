import { useEffect, useState } from 'react';

type ScrollState = {
  /** True once the page has moved off the very top. */
  scrolled: boolean;
  /** 0–1 progress through the document. */
  progress: number;
};

/**
 * One rAF-throttled scroll listener feeding both the header's condensed
 * state and its progress bar — two listeners would do the same work twice.
 */
export function useScrollState(threshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({ scrolled: false, progress: 0 });

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({
        scrolled: y > threshold,
        progress: max > 0 ? Math.min(1, Math.max(0, y / max)) : 0,
      });
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return state;
}
