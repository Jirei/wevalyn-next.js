'use client';
import { useAppear } from '@/hooks/use-appear';
import { cn } from '@/lib/utils';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';

export default function ServicesIllustration() {
  const intersectionRef = useRef(null);
  const hasAppeared = useAppear(intersectionRef);
  return (
    <div
      ref={intersectionRef}
      className={cn('opacity-0 transition-opacity duration-3000 relative after:absolute after:m-auto after:inset-0 after:w-11/12 md:after:w-1/2 after:h-[150%] after:rounded-full after:bg-[rgb(0,105,181)]/20',
      hasAppeared && 'opacity-100')}
    >
      <Player
        className='w-3/5 md:w-1/3'
        autoplay
        loop
        src='/lottie/services-illustration.json'
      />
    </div>
  );
}
