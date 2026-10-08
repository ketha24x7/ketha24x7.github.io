import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const links = [
  { name: 'Our services', href: '/#services' },
  { name: 'Selected work', href: '/#work' },
  { name: 'How we work', href: '/#process' },
  { name: 'Contact us', href: '/#contact' },
];

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-line">
        <div className="container flex h-[68px] items-center justify-between">
          <a href="/" aria-label="Ketha24 home" className="flex items-center">
            <Logo className="h-6" />
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main className="relative flex flex-1 items-center overflow-hidden py-[clamp(48px,10vw,120px)]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

        <div className="container relative grid items-center gap-[clamp(32px,6vw,72px)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="eyebrow">Error 404</p>
            <h1 className="display mt-5 text-[clamp(64px,13vw,150px)] leading-[0.85]">
              Page not
              <br />
              <span className="text-brand">found</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-muted-foreground">
              The page you were after does not exist, or it has moved. Nothing is broken on your end.
            </p>
            {pathname && pathname !== '/' && (
              <p className="mt-4 break-all font-mono text-[13px] text-muted-foreground">
                Requested: <span className="text-ink">{pathname}</span>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/" className="btn-primary group">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </a>
              <a href="/#contact" className="btn-ghost">
                Contact us
              </a>
            </div>
          </div>

          <nav aria-label="Popular pages" className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
              Try one of these
            </p>
            <ul className="mt-4 border-t border-line">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="group flex items-center justify-between gap-4 border-b border-line py-4 text-lg font-medium transition-colors hover:text-brand"
                  >
                    {l.name}
                    <ArrowRight className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
