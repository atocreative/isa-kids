import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WA_DEFAULT } from '../data/content';

const NAV_LINKS = [
  { label: 'Categorias', href: '#categorias' },
  { label: 'Como comprar', href: '#como-comprar' },
  { label: 'Entrega', href: '#entrega' },
];

function LogoMark({ dark = false }: { dark?: boolean }) {
  const [imgErr, setImgErr] = useState(false);

  if (!imgErr) {
    return (
      <img
        src="/logo-isa-kids.png"
        alt="Isa Kids e Teens"
        className="h-10 w-auto object-contain"
        onError={() => setImgErr(true)}
      />
    );
  }

  return (
    <span className="font-display text-xl leading-none">
      <span className={dark ? 'text-rose italic' : 'text-rose italic'}>Isa</span>
      <span className={dark ? 'text-plum' : 'text-plum'}> Kids e Teens</span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-cream/96 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="shrink-0 select-none">
            <LogoMark />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-plum/70 hover:text-plum px-4 py-2 rounded-full hover:bg-plum/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              <WhatsAppIcon size={16} />
              Comprar
            </a>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-coral text-white shadow-md"
              aria-label="Comprar pelo WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-plum/10 transition-colors"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open
                ? <X size={20} className="text-plum" />
                : <Menu size={20} className="text-plum" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-plum/10 px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-plum border-b border-plum/10 last:border-0 hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-3"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon size={18} />
            Comprar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
