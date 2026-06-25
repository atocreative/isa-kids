import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Sun, Zap, Crown, Shield, Tag, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/content';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  bebe: Heart,
  infantil: Sun,
  juvenil: Zap,
  meninas: Crown,
  meninos: Shield,
  acessorios: Tag,
};

export default function Categories() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from('.cat-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.cat-grid',
          start: 'top 78%',
          once: true,
        },
      });
    }, ref);
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section id="categorias" ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="section-tag">Para cada fase</span>
          <h2 className="section-title">Escolha a categoria</h2>
          <p className="section-subtitle mx-auto mt-3">
            Roupas pensadas para cada idade, com qualidade, conforto e muito estilo.
          </p>
        </div>

        <div className="cat-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map(cat => {
            const Icon = ICONS[cat.id];
            return (
              <a
                key={cat.id}
                href={cat.waMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="cat-card group flex flex-col p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: cat.bgColor }}
              >
                <div className="mb-5">
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-white/50 flex items-center justify-center shadow-sm">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <h3 className="font-display text-2xl text-plum leading-tight">{cat.name}</h3>
                <p className="text-[0.68rem] font-semibold text-mauve uppercase tracking-[0.18em] mb-2.5 mt-0.5">
                  {cat.age}
                </p>
                <p className="text-sm text-plum/65 leading-relaxed mb-5 flex-1">{cat.description}</p>

                <div className="flex items-center gap-1.5 text-plum text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Consultar
                  <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
