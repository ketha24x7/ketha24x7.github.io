import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import TechMarquee from '@/components/TechMarquee';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

/*
  Section order follows a trust-first structure for B2B services:
  credibility up front (hero + client proof), then capability (services,
  work), then how we operate (process, about), then objection handling
  (FAQ) immediately before the CTA. Backgrounds alternate ground/paper
  so adjacent sections never merge into one slab.
*/
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Navbar />
      <main id="top">
        <Hero />
        <ClientLogos />
        <TechMarquee />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
