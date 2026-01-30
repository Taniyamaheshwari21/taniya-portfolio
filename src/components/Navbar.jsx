const NavBar = ({ aboutRef, projectsRef, contactRef }) => {
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="
        flex items-center gap-2
        px-2 py-0.5
        rounded-full
        bg-gray-300/40
        backdrop-blur-lg
        border border-gray-400/20
        shadow-lg
        text-sm text-black
      ">
        <button
          onClick={() => scrollTo(aboutRef)}
          className="px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          ABOUT
        </button>

        <button
          onClick={() => scrollTo(projectsRef)}
          className="px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          PROJECTS
        </button>

        <button
          onClick={() => scrollTo(contactRef)}
          className="px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          CONTACT
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
