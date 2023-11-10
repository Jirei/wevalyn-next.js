'use client';
import { useState } from 'react';
import ArrowLottie from './arrow-lottie';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col gap-y-10'>
      <ContactButtonWithLottie onClick={() => setIsOpen(prev => !prev)} />
      <div className={cn('border border-[#C171C2]  transition-all  h-0 overflow-hidden w-10/12 m-auto',isOpen && 'h-auto')}>
        <form className='flex flex-col'>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
          <label>Name:</label>
        </form>
      </div>
    </div>
  );
}

function ContactButtonWithLottie({ onClick }: { onClick: () => void }) {
  return (
    <div className='flex gap-x-4 justify-center items-center'>
      {/* Keep the left margin matched with the width of the arrow to keep the button centered /!\ */}
      <button
        onClick={onClick}
        className='bg-[#C171C2] ml-[4rem] text-white text-xl px-20 py-3 rounded-xl'
      >
        Contact
      </button>
      <ArrowLottie className='w-16 rotate-180' />
    </div>
  );
}
