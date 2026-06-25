import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { VITRINE } from '../data/content';

export default function Vitrine() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from('.vit-card', {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.vit-grid',
          start: 'top 78%',
          once: true,
        },
      });
    }, ref);
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="section-tag">Nosso catálogo</span>
          <h2 className="section-title">Escolha sua categoria</h2>
          <p className="section-subtitle mx-auto mt-3">
            Navegue, escolha a que mais combina e fale com a gente pelo WhatsApp.
          </p>
        </div>

        <div className="vit-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VITRINE.map(item => (
            <div
              key={item.id}
              className="vit-card group flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card top visual */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
                }}
              >
                {/* Abstract clothing shape */}
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  className="opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                >
                  <path
                    d="M40 8 L16 24 L24 32 L24 68 L56 68 L56 32 L64 24 Z"
                    stroke="#4A2C4A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <path
                    d="M32 8 Q40 16 48 8"
                    stroke="#4A2C4A"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Decorative ring */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: 'radial-gradient(circle at 70% 30%, white 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 bg-white p-5">
                <h3 className="font-display text-xl text-plum leading-tight">{item.title}</h3>
                <p className="text-xs font-semibold text-mauve uppercase tracking-[0.15em] mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-sm text-plum/60 leading-relaxed mb-5 flex-1">{item.description}</p>
                <a
                  href={item.waMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-coral hover:text-coral/80 transition-colors group-hover:gap-3 duration-200"
                >
                  <WhatsAppIcon size={14} />
                  Consultar pelo WhatsApp
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
