const socials = [
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    link: "https://github.com/Taniyamaheshwari21",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/taniya-maheshwari-81758624a/",
  },
  {
    name: "Resume",
    icon: "/icons/resume.svg",
    link: "https://drive.google.com/file/d/1Em_zI27wvTDevTNdFpDbm1EJ8GNGOlDJ/view?usp=sharing", 
  },
];

const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float-btn"
        >
          <img src={item.icon} alt={item.name} className="svg-white"  />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocials;
