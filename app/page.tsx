import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import TopSellers from '@/components/TopSellers/TopSellers';
import NewLaunches from '@/components/NewLaunches/NewLaunches';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <TopSellers />
      <NewLaunches />
      <Footer />
    </main>
  );
}