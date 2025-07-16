import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
