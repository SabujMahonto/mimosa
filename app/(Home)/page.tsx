import Community from '@/components/Home/Community';
import CommunityGathered from '@/components/Home/CommunityGathered';
import Gallery from '@/components/Home/Gallery';
import Hero from '@/components/Home/Hero';
import Packages from '@/components/Home/Packages';
import Products from '@/components/products/products';
import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Products />
        <CommunityGathered />
        <Community />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
