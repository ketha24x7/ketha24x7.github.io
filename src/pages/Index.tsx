import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Cohesive futuristic backdrop behind every section */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] aurora bg-neon-blue/10 animate-aurora" />
        <div className="absolute bottom-[10%] right-[-10%] w-[36rem] h-[36rem] aurora bg-neon-violet/10 animate-aurora" style={{ animationDelay: '-9s' }} />
      </div>

      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Services />
        {/* <Portfolio /> */}
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
