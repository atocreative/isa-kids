import { MapPin, Package, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WA_DELIVERY } from '../data/content';

const INFO = [
  {
    Icon: MapPin,
    title: 'Entregas no DF',
    description: 'Fazemos entregas em todo o Distrito Federal. Consulte prazos e condições pelo WhatsApp.',
  },
  {
    Icon: Package,
    title: 'Enviamos para o Brasil',
    description: 'Enviamos para qualquer cidade do país. Somente varejo, sem quantidade mínima.',
  },
  {
    Icon: Clock,
    title: 'Atendimento 10h às 20h',
    description: 'Nossa equipe está disponível todos os dias das 10h às 20h para te atender.',
  },
];

export default function Delivery() {
  return (
    <section id="entrega" className="py-20 md:py-28" style={{ backgroundColor: '#FFF3EC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <span className="section-tag">Onde estiver</span>
          <h2 className="section-title">Entrega em todo o Brasil</h2>
          <p className="section-subtitle mx-auto mt-3">
            Sua compra chega até você, seja no DF ou em qualquer cidade do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {INFO.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-start p-7 bg-white rounded-2xl shadow-sm border border-blush/50"
            >
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                <Icon size={22} strokeWidth={1.5} className="text-coral" />
              </div>
              <h3 className="font-display text-xl text-plum mb-2">{title}</h3>
              <p className="text-sm text-mauve leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WA_DELIVERY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon size={18} />
            Saber sobre entrega
          </a>
        </div>
      </div>
    </section>
  );
}
