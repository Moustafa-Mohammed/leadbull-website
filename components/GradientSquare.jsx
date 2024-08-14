const GradientSquare = ({ className = '', children }) => {
  return (
    <div className={`relative -rotate-45  ${className}`}>
      <div
        className={` w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-r-square rounded-md grid place-content-center shadow-lg`}
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
