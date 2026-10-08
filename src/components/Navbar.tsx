import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { company } from '@/data/site';
import { useActiveSection } from '@/hooks/use-active-section';
import { useScrollState } from '@/hooks/use-scroll-state';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// Module-level so the array identity stays stable across renders.
const sectionIds = navLinks.map((l) => l.href.slice(1));

/**
 * Fixed-geometry sticky header — the bar never moves, resizes or detaches.
 * Scrolling only deepens the surface (more opaque, stronger blur, a soft
 * shadow under the hairline) so the page reads as passing beneath it.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrolled, progress } = useScrollState();
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the mobile panel and hands focus back to the control that
  // opened it; the body is locked so the page behind cannot scroll away.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 motion-reduce:transition-none',
        scrolled
          ? 'border-line bg-paper/85 shadow-[0_1px_24px_-12px_rgba(11,13,18,0.4)] backdrop-blur-xl'
          : 'border-transparent bg-ground/70 backdrop-blur-sm',
      )}
    >
      <div className="container flex h-[68px] items-center justify-between gap-5">
        <a href="#top" aria-label="Ketha24 home" className="flex flex-none items-center">
          <Logo className="h-6" />
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative rounded-lg px-3.5 py-2 text-[14.5px] font-medium transition-colors duration-200 motion-reduce:transition-none',
                  isActive
                    ? 'bg-brand-tint text-brand-ink'
                    : 'text-muted-foreground hover:bg-ink/[0.04] hover:text-ink dark:hover:bg-white/[0.06]',
                )}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-x-3.5 -bottom-[13px] h-[2px] origin-center rounded-full bg-gradient-to-r from-brand to-brand-violet transition-transform duration-200 motion-reduce:transition-none',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <a href="#contact" className="btn-primary group hidden px-4 py-3 text-sm sm:inline-flex">
            Get a quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink transition-colors hover:bg-ink/[0.06] md:hidden dark:hover:bg-white/[0.08]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Reading progress along the header's hairline. Decorative — the same
          information is already in the scrollbar. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-[2px] overflow-hidden">
        <div
          className="h-full origin-left bg-gradient-to-r from-brand via-brand-violet to-brand-cyan transition-[transform] duration-150 ease-out motion-reduce:transition-none"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'rounded-lg border-l-2 px-3 py-3 text-lg font-medium transition-colors',
                    isActive
                      ? 'border-brand bg-brand-tint text-brand-ink'
                      : 'border-transparent text-ink hover:bg-ink/[0.04] dark:hover:bg-white/[0.06]',
                  )}
                >
                  {link.name}
                </a>
              );
            })}

            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full justify-center">
              Get a quote
            </a>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3">
              <a
                href={`mailto:${company.email}`}
                className="truncate font-mono text-[13px] text-muted-foreground hover:text-brand-ink"
              >
                {company.email}
              </a>
              <ThemeToggle className="flex-none sm:hidden" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
