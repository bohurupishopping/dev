import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ProgressBar from '@/components/shared/ProgressBar';
import CookieConsent from '@/components/layout/CookieConsent';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
}