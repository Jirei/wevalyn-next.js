'use client';
import { Player } from '@lottiefiles/react-lottie-player';

export default function ServicesIllustration(){
      return (
        <div className='relative after:absolute after:m-auto after:inset-0 after:w-11/12 after:h-[150%] after:rounded-full after:bg-[rgb(0,105,181)]/20'>
          <Player
            className='w-3/5'
            autoplay
            loop
            src='/lottie/services-illustration.json'
          />
        </div>
      );
}