import { cn } from '@/lib/utils';
import { FaWordpress } from 'react-icons/fa6';
import { FaElementor } from 'react-icons/fa6';

export default function ServicesList() {
  return (
    <ul className='flex flex-col items-center gap-y-6 px-2'>
      {services.map(({ logos, name, description, yellowRibbon }, index) => (
        <li
          key={index}
          className={cn(
            'relative w-full text-white rounded-[5px] overflow-hidden',
            yellowRibbon &&
              'after:h-14 after:w-full after:bg-[#EDDC40] after:absolute after:z-10 after:top-0 after:left-[35%] after:rotate-45'
          )}
        >
          <div className='flex flex-col gap-y-8 p-5 py-16 items-center bg-primary-gradient'>
            <div>
              <div className='flex gap-x-4'>{[...logos]}</div>
            </div>
            <h2 className='font-bold text-2xl text-center'>{name}</h2>
            <p className='text-center text-xl'>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const logos = {
  wordpress: <FaWordpress size='6em' />,
  elementor: <FaElementor size='6em' />,
};

const services = [
  {
    logos: [logos.wordpress],
    name: 'Customization of Existing WordPress Theme',
    description: 'We personalize a WordPress theme of your choosing.',
  },
  {
    logos: [logos.elementor, logos.wordpress],
    name: 'Custom Theme With Elementor',
    description: 'We create a custom Elementor theme according to your needs.',
  },
  {
    logos: [logos.wordpress],
    name: 'Custom WordPress Theme From Scratch',
    description:
      'We create a custom WordPress theme from scratch according to your needs.',
    yellowRibbon: true,
  },
];
