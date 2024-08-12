import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';

import homeLogo from '@/public/home-logo.png';
import eagle from '@/public/eagle.png';

export default function Home() {
  return (
    <main className=" text-white relative ">
      <Navbar />

      <section className="flex flex-col justify-center items-center container py-14">
        <Image
          src={homeLogo}
          alt="home logo"
          className="w-1/2 lg:w-4/12 mb-2 "
        />
        <p className="text-base md:text-lg lg:text-xl text-white font-medium mb-10">
          Ultra Targeted Leads & Sales, Let's Prey
        </p>
        <Image
          src={eagle}
          alt="home logo"
          className="w-1/2 md:w-1/3 lg:w-1/4"
        />

        <Heading level={2} className="font-bold" color="blue">
          Huge Updates On-The-Way
        </Heading>
        <li className="font-medium text-lg text-center">
          xpanding in existing markets: Canada, UK, and US and promoting our
          upgraded leads services there
        </li>
        <li>Entering new targeted markets: UAE</li>
      </section>
    </main>
  );
}
