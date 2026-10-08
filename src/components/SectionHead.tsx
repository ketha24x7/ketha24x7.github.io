import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; className?: string };

/** Eyebrow pill + headline on the left, intro paragraph on the right. */
const SectionHead = ({ eyebrow, title, intro, className }: Props) => (
  <div className={cn('mb-14 grid items-end gap-x-12 gap-y-5 md:grid-cols-[1.1fr_0.9fr]', className)}>
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-[clamp(32px,4.4vw,54px)]">{title}</h2>
    </div>
    {intro && <p className="max-w-[52ch] text-[17px] text-muted-foreground">{intro}</p>}
  </div>
);

export default SectionHead;
