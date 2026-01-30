const TitleHeader = ({ title, sub }) => {
  return (
    <div className="mb-2 text-center">
      <p className="text-white mb-3">{sub}</p>
      <h2 className="text-white md:text-5xl py-20 font-bold">{title}</h2>
    </div>
  );
};

export default TitleHeader;
