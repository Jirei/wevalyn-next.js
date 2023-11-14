import backgroundImage from '../../../public/hero.jpg';
import Image from 'next/image';

export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //source of the "hack" for the background image: https://github.com/vercel/next.js/discussions/18357
    <div>
      <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,105,181)]/40'>
        <Image
          priority
          fill
          className='object-center object-cover pointer-events-none '
          src={backgroundImage}
          alt={'background image of the hero'}
        />
        <div className='relative h-[80vh] 2xl:h-[90vh] z-10 flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            <svg
            className='w-[98vw] md:w-[80vw] lg:w-[75vw] 2xl:w-[50vw]'
              // height='100vh'
              viewBox='0 0 213 105'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <ellipse
                width='100%'
                height='100%'
                cx='106.019'
                cy='52.1803'
                rx='106.019'
                ry='52.1803'
                fill='#0069B5'
                fillOpacity='0.6'
              />
            </svg>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
