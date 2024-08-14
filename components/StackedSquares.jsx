import React from 'react';
import GradientSquare from '@/components/GradientSquare';

const StackedSquares = () => {
  return (
    <>
      <div>
        <GradientSquare>Unlimited Data Centers</GradientSquare>
        <GradientSquare className={`right-[85%] bottom-[5%]`}>
          Targeted Servers
        </GradientSquare>
        <GradientSquare className="bottom-[10%]">Lead Handling</GradientSquare>
      </div>
      <div className="hidden md:block">Image</div>
      <div>
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
