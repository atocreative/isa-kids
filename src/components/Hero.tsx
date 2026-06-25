import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WA_DEFAULT } from '../data/content';

const PILLS = [
  { label: 'Bebê',     pos: 'top-[10%] right-[8%]' },
  { label: 'Infantil', pos: 'top-[44%] right-[-3%]' },
  { label: 'Juvenil',  pos: 'bottom-[14%] right-[10%]' },
  { label: 'Varejo',   pos: 'top-[26%] left-[4%]' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      // Entrance animation
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hw', { y: 80, opacity: 0, stagger: 0.12, duration: 0.9 })
        .from('.hs', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hc > *', { y: 16, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.hv', { scale: 0.82, opacity: 0, duration: 1.1, ease: 'power2.out' }, '<-0.6');

      // Continuous blob morphing
      gsap.to('.hero-blob-main', {
        borderRadius: '40% 60% 60% 40% / 40% 60% 40% 60%',
        duration: 5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to('.hero-blob-sec', {
        borderRadius: '60% 40% 40% 60% / 50% 40% 60% 50%',
        duration: 7,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[100dvh] bg-cream flex items-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24">

        {/* Left: copy */}
        <div className="flex flex-col">
          <h1
            className="font-display leading-[1.04] text-plum mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
          >
            <span className="hw block">Moda para</span>
            <span className="hw block italic text-rose">cada fase</span>
            <span className="hw block">da infância.</span>
          </h1>

          <p className="hs text-mauve text-lg md:text-xl leading-relaxed mb-8 max-w-md">
            Roupa bebê, infantil e juvenil com atendimento personalizado pelo WhatsApp. Entregamos no DF e enviamos para todo o Brasil.
          </p>

          <div className="hc flex flex-wrap gap-3">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon size={18} />
              Comprar pelo WhatsApp
            </a>
            <a href="#categorias" className="btn-secondary">
              Ver categorias
              <ChevronDown size={16} />
            </a>
          </div>
        </div>

        {/* Right: decorative visual */}
        <div className="hv relative h-[380px] md:h-[480px] flex items-center justify-center">
          {/* Primary blob (pink) */}
          <div
            className="hero-blob-main absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
            style={{
              background: 'linear-gradient(135deg, #fcd5e7 0%, #f9accc 60%, #e8c2d8 100%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              opacity: 0.65,
            }}
          />

          {/* Secondary blob (blue) */}
          <div
            className="hero-blob-sec absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
            style={{
              background: 'linear-gradient(135deg, #4483c6 0%, #c2d8f4 100%)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              opacity: 0.35,
              transform: 'translate(60px, -35px)',
            }}
          />

          {/* Gold accent blob */}
          <div
            className="absolute w-[120px] h-[120px]"
            style={{
              background: 'radial-gradient(circle, #e3ba4e 0%, transparent 70%)',
              opacity: 0.3,
              transform: 'translate(-100px, 120px)',
            }}
          />

          {/* Vecteezy illustration — framed */}
          <div className="relative z-10 w-[260px] md:w-[340px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80"
            style={{ aspectRatio: '3/4' }}>
            <img
              src="/assets/images/girl-outfits.jpg"
              alt="Moda infantil — looks para cada fase"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Floating pills */}
          {PILLS.map(({ label, pos }) => (
            <div
              key={label}
              className={`absolute ${pos} bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1.5 shadow-md border border-white`}
            >
              <span className="text-xs font-semibold text-plum">{label}</span>
            </div>
          ))}

          {/* Decorative dots */}
          <div className="absolute top-[8%] left-[20%] w-3 h-3 rounded-full" style={{ backgroundColor: '#e3ba4e', opacity: 0.7 }} />
          <div className="absolute bottom-[13%] left-[8%] w-2 h-2 rounded-full bg-rose/60" />
          <div className="absolute top-[65%] right-[44%] w-2 h-2 rounded-full bg-blue/40" />
        </div>
      </div>
    </section>
  );
}
