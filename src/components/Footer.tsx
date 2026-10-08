import { company, services } from '@/data/site';
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  const social = [
    { name: 'LinkedIn', href: company.social.linkedin },
    { name: 'Instagram', href: company.social.instagram },
  ].filter((s) => s.href);
  const legal = [
    { name: 'Privacy policy', href: company.legal.privacy },
    { name: 'Terms of service', href: company.legal.terms },
  ].filter((l) => l.href);

  const linkCls = 'text-ink/80 transition-colors hover:text-brand-ink';
  const headCls = 'mb-4 font-display text-sm font-bold text-ink';

  return (
    <footer className="relative bg-paper pb-8 pt-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-violet/60 to-transparent"
      />
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo className="h-[22px]" />
            <p className="mt-4 max-w-[36ch] text-[15px] text-muted-foreground">
              Transforming businesses through innovative technology. Your trusted partner in digital transformation.
            </p>
            <a href="#contact" className="btn-primary mt-6 px-4 py-3 text-sm">
              Start a project
            </a>
          </div>

          <div>
            <h4 className={headCls}>Services</h4>
            <ul className="grid gap-2 text-[15px]">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#svc-${s.id}`} className={linkCls}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headCls}>Company</h4>
            <ul className="grid gap-2 text-[15px]">
              <li><a href="#about" className={linkCls}>About us</a></li>
              <li><a href="#process" className={linkCls}>How we work</a></li>
              <li><a href="#contact" className={linkCls}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className={headCls}>Get in touch</h4>
            <ul className="grid gap-2 text-[15px]">
              <li>
                <a href={`mailto:${company.email}`} className={linkCls}>
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className={linkCls}>
                    {phone}
                  </a>
                </li>
              ))}
              <li className="text-muted-foreground">{company.location}</li>
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-sm text-muted-foreground">
          <span>© {year} Ketha24. All rights reserved.</span>
          {legal.length > 0 && (
            <div className="flex gap-5">
              {legal.map((l) => (
                <a key={l.name} href={l.href} className={linkCls}>
                  {l.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
