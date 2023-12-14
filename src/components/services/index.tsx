import ServicesIllustration from './services-illustration';
import ServicesList from './services-list';

export default function Services() {
  return (
    <div id='services' className='mt-14 flex flex-col items-center gap-y-20 md:gap-y-36'>
      <h2 className='text-primary text-3xl'>Services</h2>
      <ServicesIllustration />
      <ServicesList />
    </div>
  );
}
