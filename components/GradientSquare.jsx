const GradientSquare = ({ className = '', children }) => {
  return (
    <div className={`relative -rotate-45  ${className}`}>
      <div
        className={` w-[4.75rem] h-[4.75rem] sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-r-square rounded-md grid place-content-center shadow-lg`}
      >
        <h6 className="text-white text-xs font-medium rotate-45 text-center">
          {children}
        </h6>
      </div>
      <div className="absolute w-3/4 h-3/4 bg-[#027FCA] rounded-lg -top-1 -left-1 -z-10 "></div>
      <div className="absolute w-3/4 h-3/4 bg-[#027FCA] rounded-lg -bottom-1 -right-1 -z-10"></div>
    </div>
  );
};

export default GradientSquare;
