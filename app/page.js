import Image from 'next/image';
import { K2D } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import Card from '@/components/Card';
import VideoBackground from '@/components/VideoBackground';
import UpdatesCategory from '@/components/UpdatesCategory';

import homeLogo from '@/public/home-logo.png';
import eagle from '@/public/eagle.png';
import aboutSection from '@/public/about-section.png';
import keyIndicator from '@/public/key-indicator.svg';
import stats from '@/public/stats.png';
import leadbullDirecor from '@/public/leadbull-director.png';

const k2d = K2D({ subsets: ['latin'], weight: ['400', '600'] });

export default function Home() {
  return (
    <main className=" text-white relative">
      <VideoBackground />

      <Navbar />

      {/* Home section */}
      <section className="flex flex-col justify-between items-center container py-12">
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

        <Heading level={2} color="blue" size="lg">
          Huge Updates On-The-Way
        </Heading>
        <li className="font-medium text-lg text-center">
          xpanding in existing markets: Canada, UK, and US and promoting our
          upgraded leads services there
        </li>
        <li>Entering new targeted markets: UAE</li>
      </section>

      {/* About section */}
      <section className=" flex flex-col justify-between items-center container">
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

      {/* Profile section */}
      <section className="flex flex-col justify-between items-center container pt-12">
        <Heading level={2} color="blue" size="lg" className="my-10">
          Profile
        </Heading>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex flex-col items-center gap-10 lg:gap-6">
              <Card
                className="sm:w-11/12 md:w-10/12 lg:q-9/12"
                variant="gradient"
                heading="Vision"
                body="We enhance our data centers to personalize the contractor clients experience through telemarketing"
              />
              <Card
                className="sm:w-11/12 md:w-10/12 lg:q-9/12"
                variant="gradient"
                heading="Mission"
                body="Our mission is to be the leading innovator in the telemarketing industry through our cloud based Lead-Gen solutions"
              />
            </div>
            <div className="flex flex-col items-center">
              <Card
                className="sm:w-11/12 md:w-10/12 lg:q-9/12"
                variant="gradient"
                heading="Values"
                body="Our core values include elimination of privacy concerns, and adherence to global marketing regulations"
              />
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <Image src={eagle} alt="eagle image" />
            <h6 className="text-lg sm:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-br from-[#FF0000] via-[#027FCA] to-[#027FCA]">
              LEADBULL LLC
            </h6>
          </div>
        </div>
      </section>

      {/* Our Approach section */}
      <section className="flex flex-col justify-between items-center container pt-12 text-center">
        <Heading level={2} color="blue" size="lg" className="my-6">
          OUR SOLUTION APPROACH
        </Heading>
        <p className="font-300 text-lg md:text-xl lg:text-2xl md:w-6/12 leading-relaxed">
          By offering tailored telemarketing and digital marketing solutions
          that are designed to meet the unique needs of each client, Leadbull
          LLC Technologies is able to provide unparalleled value pushing its
          clients to handle increased estimates.
        </p>
      </section>

      {/* Key Indicator section */}
      <section className="container  uppercase py-20">
        <Heading level={2} color="blue" size="lg" className="my-6 text-center">
          <span className="block">CANADA HVAC LEADS KEY INDICATOR</span>
          <span>(TOP SELLING)</span>
        </Heading>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col md:flex-row lg:flex-col gap-6  lg:w-3/12 justify-between">
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4">
                timing
              </Heading>
              <li>FLEXIBLE LEADS SCHEDULES</li>
              <li>YOU CHOOSE THE DATE & TIME</li>
              <li>UNLIMITED LEADS — WHATEVER QUANTITY</li>
            </div>
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4">
                quality
              </Heading>
              <li>EXCELLENT QUALITY (`A+ CLIENTS SATISFACTION)</li>
              <li>MULTIPLE QUALITY CHOICES & TIERS</li>
              <li>30-50% GUARANTEED MORE STIMATES IN THE FIRST 30 DAYS</li>
            </div>
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4 ">
                scope
              </Heading>
              <li>HIGHLY CUSTOMIZED LEADS CHANNELS</li>
              <li>DIRECT CONNECTION (LEADS X CLIENTS)</li>
              <li>EFFICIENT PROJECT MANAGEMENT</li>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src={keyIndicator} alt="key indicator image" />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-6  lg:w-3/12 justify-between">
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4">
                cost
              </Heading>
              <li>BUDGET FRIENDLY</li>
              <li>VARIOUS PAYMENT TIERS</li>
              <li>VARIOUS PAYMENT OPTIONS</li>
              <li>NO UPFRONT PAYMENTS</li>
            </div>
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4">
                resources
              </Heading>
              <li>OUR TEAMS ARE OUR INVESTMENT (100+ EXPLOYEES)</li>
              <li>5+ WORLDWIDE DATA CENTERS (UNLIMITED LEADS FUNNELS)</li>
              <li>
                6+ PRIVATE OWNED PROGRAMMED INTEGRATED TELEMARKETING SYSTEMS
              </li>
              <li>7+ LEADS TARGETING METHODS</li>
            </div>
            <div className="md:w-4/12 lg:w-full">
              <Heading level={4} color="blue" className="mb-4 ">
                environmental
              </Heading>
              <li>BAD LEADS RESULTS IN RE-WORK</li>
              <li>NO DELAYED PROGRESS</li>
              <li>DEPENDABILITY</li>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}

      <section className="container flex justify-between py-14">
        <Image src={stats} alt="stats" />
      </section>

      {/* Revenu section */}
      <section className="flex flex-col justify-between items-center container py-14 text-center">
        <Heading level={2} color="blue" size="lg" className="my-6">
          OVER $9 MILLION
        </Heading>
        <p className="font-300 text-lg md:text-xl lg:text-2xl md:w-6/12 leading-relaxed mb-10">
          Our services allow clients to gain a better chance of fulfilling
          customers needs and catching their interest, Leading to higher net
          revenue and sustained customer satisfaction and loyalty. Many top
          global contractors <a href="#">Read more</a>
        </p>
        <div
          className={`relative flex flex-col sm:flex-row items-center justify-center sm:stify-between rounded-xl py-4 px-2 bg-gradient-to-r from-[#53040B] to-[#0088D7] stats-before stats-after lg:w-8/12 ${k2d.className}`}
        >
          <div className="w-1/2 md:w-3/12 text-center  flex flex-col gap-6 py-4 md:py-0 sm:my-4">
            <h6 className="font-bold text-lg md:text-2xl">75+</h6>
            <p className={`md:text-lg ${k2d.className}`}>
              Independent Member Firms
            </p>
          </div>
          <div className="w-[2px]"></div>
          <div className="w-1/2 md:w-3/12 text-center  flex flex-col gap-6 py-4 md:py-0 sm:my-4 separator">
            <h6 className="font-bold text-lg md:text-2xl">35+</h6>
            <p className={`md:text-lg ${k2d.className}`}>Contracting LLCs</p>
          </div>
          <div className="w-1/2 md:w-3/12 text-center  flex flex-col gap-6 py-4 md:py-0 sm:my-4 separator">
            <h6 className="font-bold text-lg md:text-2xl">75+</h6>
            <p className={`md:text-lg ${k2d.className}`}>Countries</p>
          </div>
          <div className="w-1/2 md:w-3/12 text-center  flex flex-col gap-6 py-4 md:py-0 sm:my-4 separator">
            <h6 className="font-bold text-lg md:text-2xl">75+</h6>
            <p className={`md:text-lg ${k2d.className}`}>Countries</p>
          </div>
        </div>
      </section>

      {/* Updates section */}
      <section className="flex flex-col md:flex-row justify-between items-center py-14 text-center  bg-gradient-to-r-updates clip-path-sm clip-path-md clip-path-lg">
        <div className="container flex flex-col md:flex-row justify-between items-center sm:pt-16 gap-8">
          <div className="flex flex-col md:w-5/12 gap-6">
            <Heading
              level={3}
              color="blue"
              size="lg"
              className="uppercase md:text-start"
            >
              2024 updates
            </Heading>
            <p className="text-lg font-light leading-10 md:text-start">
              To increase our clients sales revenue and push their average
              workflow estimates, Our company is developing.
            </p>
            <p className="text-lg font-light leading-10 md:text-start">
              And will launch a wider variety of Lead-Gen models, Digital sales
              opportunities, & and ultra targeted Telemarketing services in the
              near future. Here’s a sneak peek at what’s in the works.
            </p>
          </div>
          <UpdatesCategory />
        </div>
      </section>

      {/* Director section */}

      <section className="container flex flex-col-reverse md:flex-row justify-between items-center py-14 gap-8">
        <div className="md:w-5/12">
          <Image src={leadbullDirecor} alt="leadbull director" />
        </div>
        <div className="md:w-6/12 flex flex-col gap-6">
          <div>
            <Heading
              level={3}
              color="blue"
              size="lg"
              className={`uppercase text-start ${k2d.className}`}
            >
              WILLIAM JOHNSON
            </Heading>
            <Heading level={6} color="blue" className="text-start">
              Regional Sales Director, Effective HVAC 
            </Heading>
          </div>
          <p className="text-xl md:ext-2xl font-light leading-10 text-start">
            In the end, Leadbull made sustainable improvements to our business
            lead gen strategy. We no longer conduct any door-knocking for
            prospecting, which frees up time for higher-value tasks. 
          </p>
          <p className="text-xl md:ext-2xl  font-light leading-10 text-start">
            Leadbull all-inclusive telemarketing and digital marketing solution
            also provided us a reliable source of high-quality leads, which
            allowed our sales reps to accelerate their goals.
          </p>
        </div>
      </section>
    </main>
  );
}
