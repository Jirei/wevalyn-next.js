import languageSchoolImage from '../../../public/language-school-main.png';
import hairdresserImage from '../../../public/hairdresser-main.jpg';
import restaurantImage from '../../../public/restaurant-main.jpg';
import { DemoWebsiteItem } from './demo-website-item';

export default function DemoWebsites() {
  return (
    <section id='demos' className='flex flex-col items-center gap-y-16'>
      <h2 className='text-primary text-3xl'>Demo Websites</h2>
      <p className='text-primary rounded text-center mx-3 p-5 py-8 text-2xl bg-primary/20'>
        You can see below some of our creations.
      </p>
      <ul className='flex flex-col gap-y-32'>
        {demoWebsites.map(({ name, imgURL }, index) => (
          <DemoWebsiteItem key={index} name={name} imgURL={imgURL} />
        ))}
      </ul>
    </section>
  );
}

const demoWebsites = [
  { name: 'Online Language School', imgURL: languageSchoolImage },
  { name: 'Hairdresser', imgURL: hairdresserImage },
  { name: 'Restaurant', imgURL: restaurantImage },
];
