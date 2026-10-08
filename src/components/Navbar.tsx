import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/85 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between gap-5">
        <a href="#top" aria-label="Ketha24 home" className="flex items-center">
          <Logo className="h-6" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-ink"
            >
              {link.name}
            </a>
          ))}
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-lg font-medium text-ink"
              >
                {link.name}
              </a>
            ))}
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
