import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import VideoBackground from '@/components/VideoBackground';

import homeLogo from '@/public/home-logo.png';
import eagle from '@/public/eagle.png';
import aboutSection from '@/public/about-section.png';

export default function Home() {
  return (
    <main className=" text-white relative ">
      <VideoBackground />

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

      <section className=" flex flex-col justify-center items-center container py-14">
        <div className="hidden md:flex justify-center">
          <Image
            src={aboutSection}
            alt="about section image"
            className="w-9/12"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <Card
            className="md:w-5/12 lg:w-4/12 xl:w-3/12"
            heading="History"
            body="As the leading company in the marketing industry with a passion for innovation and A+ excellence, Leadbull has become a household name in the digital sales world, known for its groundbreaking lead generation"
          />
          <Card
            className="md:w-5/12 lg:w-4/12 xl:w-3/12"
            heading="About us"
            body="Leadbull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its marketing services with the client’s expectations worldwide."
          />
        </div>
      </section>
    </main>
  );
}
