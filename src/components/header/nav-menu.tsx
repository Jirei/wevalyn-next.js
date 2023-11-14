import { ImCross } from 'react-icons/im';
import { cn } from '@/lib/utils';
import type { Dispatch, SetStateAction } from 'react';

export default function NavMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={cn(
        'flex flex-col items-center justify-center bg-white/50 fixed top-0 translate-x-full duration-700 w-screen overflow-hidden h-screen z-50 transition-all',
        isOpen && 'translate-x-0'
      )}
      onClick={() => setIsOpen(false)}
    >
      <div className='relative flex flex-col gap-y-5 rounded-xl text-primary bg-white w-3/4 md:w-1/2 p-5 py-16 border border-primary'>
        <ImCross
          className='text-2xl absolute top-6 right-6'
          onClick={() => setIsOpen(false)}
        />
        <h2 className='text-center text-2xl font-bold'>Menu</h2>
        <ul className='flex flex-col gap-y-3 text-xl justify-center items-center'>
          <li>
            <a className='p-2' href='#' onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a className='p-2' href='#NoWhere' onClick={() => setIsOpen(false)}>
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
  );
}
