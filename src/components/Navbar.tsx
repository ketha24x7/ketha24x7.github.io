import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

// Module-level so the array identity is stable across renders.
const sectionIds = navLinks.map((l) => l.href.slice(1));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/85 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between gap-5">
        <a href="#top" aria-label="Ketha24 home" className="flex items-center">
          <Logo className="h-6" />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'relative py-1 text-[15px] font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 after:content-[""] hover:text-ink hover:after:scale-x-100 motion-reduce:after:transition-none',
                  isActive ? 'text-ink after:scale-x-100' : 'text-muted-foreground',
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:flex" />
          <a href="#contact" className="btn-primary hidden px-4 py-3 text-sm sm:inline-flex">
            Get a quote
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-paper md:hidden" aria-label="Mobile">
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
                    'border-l-2 py-2.5 pl-3 text-lg font-medium transition-colors',
                    isActive ? 'border-brand text-brand-ink' : 'border-transparent text-ink',
                  )}
                >
                  {link.name}
                </a>
              );
            })}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
              Get a quote
            </a>
            <ThemeToggle className="mt-3 self-start sm:hidden" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
