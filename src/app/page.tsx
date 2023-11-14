import CtaSection from '@/components/cta-section';
import DemoWebsites from '@/components/demo-websites';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='flex flex-col gap-y-16 xl:gap-y-56'>
          <Hero />
          <Services />
          <DemoWebsites />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
