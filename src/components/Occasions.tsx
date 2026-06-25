import { ArrowRight } from 'lucide-react';
import { OCCASIONS, wa } from '../data/content';

const BG_COLORS = ['#fce8f4', '#d0e4f7', '#fdf0d8', '#fcd5e7', '#e8f0fc', '#fef6e8'];

export default function Occasions() {
  return (
    <section id="ocasioes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="section-tag">Para cada momento</span>
          <h2 className="section-title">O look certo para cada ocasião</h2>
          <p className="section-subtitle mx-auto mt-3">
            Da rotina à festa, temos o que a sua criança precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OCCASIONS.map((occ, i) => (
            <a
              key={occ.id}
              href={wa(`Olá! Vim pelo site da Isa Kids e Teens e quero ver opções para ${occ.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-2xl border border-transparent hover:border-plum/10 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BG_COLORS[i % BG_COLORS.length] }}
            >
              <span className="font-display text-xl text-plum mb-1">{occ.name}</span>
              <p className="text-sm text-mauve leading-relaxed flex-1 mb-4">{occ.description}</p>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-coral uppercase tracking-wider group-hover:gap-3 transition-all duration-200">
                Ver pelo WhatsApp
                <ArrowRight size={12} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
