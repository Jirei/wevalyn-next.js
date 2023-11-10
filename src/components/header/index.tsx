'use client';
import { useLockBodyScroll } from 'react-use';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);
  return (
    <header>
      <span
        className='rounded text-white border border-white overflow-hidden bg-primary fixed top-[1.5rem] right-2 z-50'
        onClick={() => setIsOpen(true)}
      >
        <BiMenu className='text-inherit bg-inherit' size={'3em'} />
      </span>
      <nav
        className={cn(
          'flex flex-col items-center justify-center bg-white/50 fixed top-0 left-[100vw] w-0 overflow-hidden h-screen z-50 transition-all',
          isOpen && 'left-0 w-screen'
        )}
        onClick={() => setIsOpen(false)}
      >
        <div className='relative flex flex-col gap-y-5 rounded-xl text-primary bg-white w-3/4 p-5 py-16'>
          <ImCross
            className='text-2xl absolute top-6 right-6'
            onClick={() => setIsOpen(false)}
          />
          <h2 className='text-center text-2xl font-bold'>Menu</h2>
          <ul className='flex flex-col gap-y-2 text-xl justify-center items-center'>
            <li>
              <a className='p-2' href='#' onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a
                className='p-2'
                href='#NoWhere'
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className='p-2'
                href='#services'
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a className='p-2' href='#demos' onClick={() => setIsOpen(false)}>
                Demos
              </a>
            </li>
            <li className='p-2'>Contact</li>
            <li className='p-2 text-red-500' onClick={() => setIsOpen(false)}>
              Close
            </li>
          </ul>
        </div>
      </nav>
      <div className='flex items-center justify-between h-24 p-2'>
        <div className='flex flex-col justify-center'>
          <p className='font-sans text-primary font-bold text-3xl'>Wevalyn</p>
        </div>
      </div>
    </header>
  );
}
