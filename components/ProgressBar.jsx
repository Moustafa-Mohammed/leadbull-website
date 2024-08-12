const ProgressBar = ({ width }) => {
  return (
    <div className="w-full h-2 bg-white rounded-full">
      <div
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: width }}
      ></div>
    </div>
  );
};

export default ProgressBar;
