import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Occasions from './components/Occasions';
import HowToBuy from './components/HowToBuy';
import Delivery from './components/Delivery';
import Vitrine from './components/Vitrine';
import Produtos from './components/Produtos';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Occasions />
        <HowToBuy />
        <Delivery />
        <Vitrine />
        <Produtos />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
