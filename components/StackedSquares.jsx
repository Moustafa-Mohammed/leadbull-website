import React from 'react';
import { K2D } from 'next/font/google';

import GradientSquare from '@/components/GradientSquare';
import topLeftArrow from '@/public/top-left.png';
import topRightArrow from '@/public/top-right.png';
import bottomLeftArrow from '@/public/bottom-left.png';
import bottomRightArrow from '@/public/bottom-right.png';
import middleLeftArrow from '@/public/middle-left.png';
import middleRightArrow from '@/public/middle-right.png';
import Image from 'next/image';

const k2d = K2D({ subsets: ['latin'], weight: ['500'] });

const StackedSquares = () => {
  return (
    <>
      <div className="grid place-items-center">
        <GradientSquare>Unlimited Data Centers</GradientSquare>
        <GradientSquare className={`right-[85%] bottom-[5%]`}>
          Targeted Servers
        </GradientSquare>
        <GradientSquare className="bottom-[10%]">Lead Handling</GradientSquare>
      </div>
      <div className="hidden sm:grid place-items-center">
        <div className="border-4 border-[#027FCA] bg-transparent rounded-full p-2">
          <div
            className={`relative bg-gradient-to-br from-[#001826] to-[#014167] w-32 h-32 md:w-36 md:h-36 lg:w-38 lg:h-38 xl:w-48 xl:h-48 font-medium text-white rounded-full grid place-content-center ${k2d.className} `}
          >
            APPROACH
            <Image
              src={topLeftArrow}
              alt="top left arrow"
              className="absolute bottom-full right-2/3"
            />
            <Image
              src={middleLeftArrow}
              alt="top left arrow"
              className="absolute bottom-1/2 right-full"
            />
            <Image
              src={bottomLeftArrow}
              alt="top left arrow"
              className="absolute top-full right-2/3"
            />
            <Image
              src={topRightArrow}
              alt="top left arrow"
              className="absolute bottom-full left-2/3"
            />
            <Image
              src={middleRightArrow}
              alt="top left arrow"
              className="absolute bottom-1/2 left-full"
            />
            <Image
              src={bottomRightArrow}
              alt="top left arrow"
              className="absolute top-full left-2/3"
            />
          </div>
        </div>
      </div>
      <div className="grid place-items-center">
        <GradientSquare> Consistent Sales</GradientSquare>
        <GradientSquare className={`left-[85%] bottom-[5%]`}>
          24/7 Support Channels
        </GradientSquare>
        <GradientSquare className="bottom-[10%]">
          Compliance (Privacy & Regulations)
        </GradientSquare>
      </div>
    </>
  );
};

export default StackedSquares;
