import wordmark from '@/assets/ketha24-wordmark.png';
import wordmarkInverse from '@/assets/ketha24-wordmark-inverse.png';
import { cn } from '@/lib/utils';

/** Full Ketha24 logo. Swaps to the light-ink version when the visitor uses dark mode. */
const Logo = ({ className }: { className?: string }) => (
  <>
    <img src={wordmark} alt="Ketha24" className={cn('w-auto dark:hidden', className)} />
    <img src={wordmarkInverse} alt="Ketha24" className={cn('hidden w-auto dark:block', className)} />
  </>
);

export default Logo;
