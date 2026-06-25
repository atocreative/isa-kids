import { MessageSquare, Images, Package, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WA_DEFAULT, HOW_TO_BUY } from '../data/content';

const STEP_ICONS = [MessageSquare, Images, Package, MapPin];

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 md:mb-20 text-center">
          <span className="section-tag">Simples e rápido</span>
          <h2 className="section-title">Como comprar pelo WhatsApp</h2>
          <p className="section-subtitle mx-auto mt-3">
            Atendimento personalizado das 10h às 20h. Escolha, pergunte e receba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blush via-lavender to-blush" />

          {HOW_TO_BUY.map((item, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center shadow-sm relative z-10">
                    <Icon size={22} strokeWidth={1.5} className="text-plum" />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-coral text-white text-xs font-bold flex items-center justify-center z-20"
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl text-plum mb-2">{item.title}</h3>
                <p className="text-sm text-mauve leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            <WhatsAppIcon size={18} />
            Iniciar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
