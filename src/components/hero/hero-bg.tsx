import backgroundImage from '../../../public/hero.jpg';
import Image from 'next/image';

export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //source of the "hack" for the background image: https://github.com/vercel/next.js/discussions/18357
    <div className='relative'>
      <span className='absolute top-0 right-0 z-50 w-screen overflow-hidden hidden lg:block'>
        <svg
          width='100%'
          viewBox='0 0 1640 114'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            width='100%'
            d='M-0.5 0H1640.5V114L-0.5 61V0Z'
            fill='url(#paint0_linear_3_45)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_3_45'
              x1='806.5'
              y1='-93.5'
              x2='895'
              y2='451.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0069B5' />
              <stop offset='1' stopColor='#6FBAF0' />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {/*clipPath:'inset(0)' is used to hide the fixed image inside of it
      source of the solution: https://stackoverflow.com/a/68466386/14131879
      */}
      <div
        style={{ clipPath: 'inset(0)' }}
        className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgb(0,105,181)]/40'
      >
        <Image
          priority
          className='object-center object-cover pointer-events-none fixed left-0 top-0 h-full'
          src={backgroundImage}
          alt={'background image of the hero'}
        />
        <div className='relative h-[80vh] lg:h-[90vh] z-10 flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            <svg
              className='w-[22rem] md:min-w-[35rem] md:w-[60vw] lg:w-[35rem]'
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
