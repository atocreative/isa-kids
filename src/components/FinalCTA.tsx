import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhatsAppIcon from './WhatsAppIcon';
import { WA_DEFAULT } from '../data/content';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from('.fcta-inner > *', {
        y: 36,
        opacity: 0,
        stagger: 0.14,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 72%',
          once: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ backgroundColor: '#4A2C4A' }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-[-80px] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #f9accc 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-60px] left-[-80px] w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #4483c6 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="fcta-inner flex flex-col items-center gap-6">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            Fale com a gente
          </span>

          <h2
            className="font-display text-white leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Monte o look pelo{' '}
            <span className="italic text-gold">WhatsApp</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-md">
            Atendimento personalizado das 10h às 20h. Somos varejo — cada compra é tratada com atenção especial.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-coral text-white px-8 py-4 rounded-full font-medium text-base hover:bg-coral/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <WhatsAppIcon size={20} />
              Comprar agora
            </a>

            <a
              href="#categorias"
              className="inline-flex items-center gap-2 border border-white/30 text-white/80 px-7 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-200"
            >
              Ver categorias
            </a>
          </div>

          <p className="text-white/35 text-sm">
            Entregamos no DF · Enviamos para todo o Brasil · Somente varejo
          </p>
        </div>
      </div>
    </section>
  );
}
