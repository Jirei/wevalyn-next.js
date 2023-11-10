import languageSchoolImage from '../../../public/language-school-main.png';
import hairdresserImage from '../../../public/hairdresser-main.jpg';
import restaurantImage from '../../../public/restaurant-main.jpg';
import Image from 'next/image';

export default function DemoWebsites() {
  return (
    <div id="demos" className='flex flex-col items-center gap-y-16'>
      <h2 className='text-primary text-3xl'>Demo Websites</h2>
      <p className='text-primary rounded text-center mx-3 p-5 py-8 text-2xl bg-primary/20'>
        You can see below some of our creations.
      </p>
      <ul className='flex flex-col gap-y-32'>
        {demoWebsites.map((demoWebsite, index) => (
          <li key={index} className='flex flex-col items-center gap-y-9'>
            <h2 className='text-primary-light text-2xl'>{demoWebsite.name}</h2>
            <Image
              src={demoWebsite.imgUrl}
              alt={demoWebsite.name + ' site screenshot'}
            />
            <button className='bg-primary-gradient text-white text-xl px-6 py-4 rounded'>See live demo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const demoWebsites = [
  { name: 'Online Language School', imgUrl: languageSchoolImage },
  { name: 'Hairdresser', imgUrl: hairdresserImage },
  { name: 'Restaurant', imgUrl: restaurantImage },
];
