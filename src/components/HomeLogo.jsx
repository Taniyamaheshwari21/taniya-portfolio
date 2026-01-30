const HomeLogo = ({ heroRef }) => {
  return (
    <div className="fixed top-5 left-6 z-50">
      <button
        onClick={() =>
          heroRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="
          w-10 h-10 flex items-center justify-center
          rounded-full
          bg-white/20 backdrop-blur-xl
          border border-white/30 shadow-lg
          font-poppins font-medium
          hover:scale-105 transition
        "
      >
        TM
      </button>
    </div>
  );
};

export default HomeLogo;
