import { useState } from 'react';
import { MapPin, Clock, ShoppingBag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { INSTAGRAM, FACEBOOK, WA_DEFAULT, WA_DELIVERY } from '../data/content';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function FooterLogo() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className="flex flex-col gap-1 items-start">
      {!imgErr && (
        <img
          src="/logo-isa-kids.png"
          alt="Isa Kids e Teens"
          className="h-14 w-auto object-contain"
          onError={() => setImgErr(true)}
        />
      )}
      {imgErr && (
        <p className="font-display text-3xl leading-none">
          <span className="italic text-rose">Isa</span>
          <span className="text-white"> Kids e Teens</span>
        </p>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2e4a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <FooterLogo />
            <p className="text-white/40 text-sm leading-relaxed">
              Roupa bebê, infantil e juvenil.<br />Somente varejo.
            </p>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-coral text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-coral/90 transition-colors w-fit"
            >
              <WhatsAppIcon size={16} />
              (61) 98479-7416
            </a>

            <div className="flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/60 hover:bg-rose hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/60 hover:bg-coral hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Delivery column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">Entrega</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="text-rose mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">Entregas em todo o Distrito Federal</span>
              </li>
              <li className="flex items-start gap-3">
                <ShoppingBag size={15} strokeWidth={1.5} className="text-rose mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">Enviamos para todo o Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} strokeWidth={1.5} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">Atendimento das 10h às 20h</span>
              </li>
            </ul>
            <a
              href={WA_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-rose/80 hover:text-rose transition-colors mt-1"
            >
              Consultar frete pelo WhatsApp
            </a>
          </div>

          {/* Categories column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">Categorias</h3>
            <ul className="flex flex-col gap-2.5">
              {['Bebê', 'Infantil', 'Juvenil', 'Meninas', 'Meninos', 'Acessórios'].map(cat => (
                <li key={cat}>
                  <a
                    href="#categorias"
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Isa Kids e Teens. Todos os direitos reservados.
          </p>
          <a
            href="https://atodev.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
          >
            <span className="text-xs">Desenvolvido por</span>
            <img
              src="/ato-compacto-branca%20(2).svg"
              alt="Ato Dev"
              className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
