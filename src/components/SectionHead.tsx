import type { ReactNode } from 'react';

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode };

/** Eyebrow + big uppercase headline on the left, intro paragraph on the right. */
const SectionHead = ({ eyebrow, title, intro }: Props) => (
  <div className="mb-12 grid items-end gap-x-12 gap-y-6 md:grid-cols-2">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-4 text-[clamp(44px,6vw,76px)]">{title}</h2>
    </div>
    {intro && <p className="max-w-[52ch] text-muted-foreground">{intro}</p>}
  </div>
);

export default SectionHead;
