export const WHATSAPP  = '5561984797416';
export const INSTAGRAM = 'https://www.instagram.com/isakidseteens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
export const FACEBOOK  = 'https://www.facebook.com/profile.php?id=61583418186923&ref=NONE_xav_ig_profile_page_web#';

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT  = wa('Olá! Vim pelo site da Isa Kids e Teens e quero comprar pelo WhatsApp.');
export const WA_DELIVERY = wa('Olá! Vim pelo site da Isa Kids e Teens e quero saber sobre entrega ou envio.');

export interface Category {
  id: string;
  name: string;
  age: string;
  description: string;
  bgColor: string;
  waMessage: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'bebe',
    name: 'Bebê',
    age: '0 a 2 anos',
    description: 'Peças delicadas, macias e seguras para os primeiros anos da vida.',
    bgColor: '#fcd5e7',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções de Bebê.'),
  },
  {
    id: 'infantil',
    name: 'Infantil',
    age: '3 a 8 anos',
    description: 'Looks práticos, coloridos e cheios de estilo para o dia a dia.',
    bgColor: '#d0e4f7',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções de Infantil.'),
  },
  {
    id: 'juvenil',
    name: 'Juvenil',
    age: '9 a 14 anos',
    description: 'Moda jovem, atual e com personalidade para os maiores.',
    bgColor: '#fde8f4',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções de Juvenil.'),
  },
  {
    id: 'meninas',
    name: 'Meninas',
    age: 'Todas as idades',
    description: 'Uma coleção encantadora pensada especialmente para as meninas.',
    bgColor: '#fce0ed',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções para Meninas.'),
  },
  {
    id: 'meninos',
    name: 'Meninos',
    age: 'Todas as idades',
    description: 'Estilo e conforto para os meninos em todas as fases.',
    bgColor: '#d4eaff',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções para Meninos.'),
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    age: 'Para todos',
    description: 'Tiaras, meias, mochilas e muito mais para completar qualquer look.',
    bgColor: '#fdf0d8',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver opções de Acessórios.'),
  },
];

export interface Occasion {
  id: string;
  name: string;
  description: string;
}

export const OCCASIONS: Occasion[] = [
  { id: 'dia-a-dia',    name: 'Dia a dia',     description: 'Conforto e estilo para a rotina de quem não para.' },
  { id: 'passeio',      name: 'Passeio',       description: 'Looks pensados para saídas especiais com a família.' },
  { id: 'festa',        name: 'Festa',         description: 'Produções encantadoras para datas e momentos especiais.' },
  { id: 'conjuntinhos', name: 'Conjuntinhos',  description: 'Peças coordenadas para facilitar a produção do dia.' },
  { id: 'conforto',     name: 'Conforto',      description: 'Tecidos macios e peças soltas para ficar em casa.' },
  { id: 'novidades',    name: 'Novidades',     description: 'As chegadas mais recentes da loja, fresquinhas.' },
];

export const HOW_TO_BUY = [
  { step: 1, title: 'Escolha a categoria',  description: 'Navegue pelas categorias por idade ou ocasião e encontre o que está buscando.' },
  { step: 2, title: 'Fale pelo WhatsApp',   description: 'Entre em contato e informe o que você quer. Atendimento das 10h às 20h.' },
  { step: 3, title: 'Receba as opções',     description: 'A equipe envia fotos, tamanhos, cores e disponibilidade em tempo real.' },
  { step: 4, title: 'Combine a entrega',    description: 'Escolha retirada no DF ou envio para qualquer cidade do Brasil.' },
];

export interface VitrineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgFrom: string;
  bgTo: string;
  waMessage: string;
}

export const VITRINE: VitrineItem[] = [
  {
    id: 'bebe-vitrine',
    title: 'Bebê',
    subtitle: 'Do macacão ao vestidinho',
    description: 'Peças macias e delicadas para os momentos mais especiais.',
    bgFrom: '#fcd5e7',
    bgTo: '#f9accc',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver o catálogo de Bebê.'),
  },
  {
    id: 'meninas-vitrine',
    title: 'Meninas',
    subtitle: 'Vestidos, saias e conjuntos',
    description: 'Estilo e fofura em cada peça para as pequenas da família.',
    bgFrom: '#d0e4f7',
    bgTo: '#4483c6',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver meninas infantil.'),
  },
  {
    id: 'meninos-vitrine',
    title: 'Meninos',
    subtitle: 'Bermudas, camisetas e conjuntos',
    description: 'Conforto e estilo para os pequenos exploradores.',
    bgFrom: '#fce0ed',
    bgTo: '#f9accc',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver meninos infantil.'),
  },
  {
    id: 'juvenil-vitrine',
    title: 'Juvenil',
    subtitle: 'Moda atual e com personalidade',
    description: 'Para os que já têm seu próprio estilo bem definido.',
    bgFrom: '#fdf0d8',
    bgTo: '#e3ba4e',
    waMessage: wa('Olá! Vim pelo site da Isa Kids e Teens e quero ver o juvenil.'),
  },
];

export interface Produto {
  id: string;
  src: string;
  alt: string;
  tag: string;
  waMessage: string;
}

export const PRODUTOS: Produto[] = [
  {
    id: 'p1',
    src: '/SaveClip.App_712543694_18185726029383905_4708473859432967162_n.jpg',
    alt: 'Look menino — camisa Brasil e conjunto Festa Junina',
    tag: 'Infantil Masculino',
    waMessage: wa('Olá! Vi o look masculino no site da Isa Kids e Teens e quero saber mais sobre esse modelo.'),
  },
  {
    id: 'p2',
    src: '/SaveClip.App_714805404_18001053347942930_6908441518391993842_n.jpg',
    alt: 'Look menina — camiseta Brasil e boné',
    tag: 'Infantil Feminino',
    waMessage: wa('Olá! Vi o look feminino no site da Isa Kids e Teens e quero saber mais sobre esse modelo.'),
  },
  {
    id: 'p3',
    src: '/SaveClip.App_717140065_18617937010032638_187716299927163598_n.jpg',
    alt: 'Look menina — vestido Festa Junina estampado',
    tag: 'Look Festa',
    waMessage: wa('Olá! Vi o vestido de festa no site da Isa Kids e Teens e quero saber mais sobre esse modelo.'),
  },
];
