import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhatsAppIcon from './WhatsAppIcon';
import { PRODUTOS } from '../data/content';

export default function Produtos() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      gsap.from('.ptag', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      });

      gsap.from('.prod-card', {
        opacity: 0,
        y: 60,
        scale: 0.92,
        stagger: 0.18,
        duration: 0.9,
        ease: 'back.out(1.3)',
        scrollTrigger: {
          trigger: '.prod-grid',
          start: 'top 78%',
          once: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="ptag mb-12 md:mb-16 text-center">
          <span className="section-tag">Direto da nossa loja</span>
          <h2 className="section-title">Looks reais da Isa Kids</h2>
          <p className="section-subtitle mx-auto mt-3">
            Fotos dos nossos clientes usando as peças. Gostou? Consulte pelo WhatsApp.
          </p>
        </div>

        <div className="prod-grid grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {PRODUTOS.map(p => (
            <a
              key={p.id}
              href={p.waMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="prod-card group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 block"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/95 text-plum text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-sm">
                    {p.tag}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <span className="flex items-center gap-2 bg-coral text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg">
                    <WhatsAppIcon size={15} />
                    Consultar modelo
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-mauve text-sm">
          Veja mais no{' '}
          <a
            href="https://www.instagram.com/isakidseteens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral font-semibold hover:underline"
          >
            Instagram @isakidseteens
          </a>
        </p>
      </div>
    </section>
  );
}
