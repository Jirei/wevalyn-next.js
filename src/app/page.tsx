import CtaSection from '@/components/cta-section';
import DemoWebsites from '@/components/demo-websites';
import Hero from '@/components/hero';
import Services from '@/components/services';

export default function Home() {
  return (
    <>
      <main>
        <div className='flex flex-col gap-y-16 xl:gap-y-48'>
          <Hero />
          <Services />
          <DemoWebsites />
          <CtaSection />
        </div>
      </main>
    </>
  );
}
