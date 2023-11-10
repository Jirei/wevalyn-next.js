import Contact from './contact';

export default function CtaSection() {
  return (
    <div className='flex flex-col gap-y-14 mt-10'>
      <div className='flex flex-col gap-y-5 text-primary text-center text-xl'>
        <p className='leading-relaxed'>
          Do you want to request a quote? <br />
          Do you have any questions?
        </p>
        <p>Drop us a line and we’ll get back to you shortly.</p>
      </div>
      <Contact />
    </div>
  );
}
