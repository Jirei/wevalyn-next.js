export default function Footer(){
  return (
    <footer className="mt-20">
      <div className='flex flex-col gap-y-5 items-center bg-primary text-white p-5 py-10'>
        <h2 className='font-sans font-bold text-2xl'>Wevalyn</h2>
        <ul className="flex flex-col gap-y-1 font-sans">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Demos</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='bg-[#474646] text-white text-sm font-roboto text-center p-2 py-3'>
        <p>© 2024 www.wevalyn.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
}