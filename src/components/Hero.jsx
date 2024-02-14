import { styles } from "../styles";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto pt-32">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ed2647]" />
          <div className="w-1 md:h-40 h-20 red-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ed2647]">Yash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Websites using <br className="md:block hidden" />
            React JS, HTML, CSS and other frameworks.
          </p>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center">
          <img src={profile} alt="Profile Photo" className="w-96 h-96 rounded-full object-cover redish-gradient p-[2px]" />
        </div>
      </div>

      <div className="md:hidden mx-auto flex justify-center mt-10 ">
        <img src={profile} alt="Profile Photo" className="w-96 h-96 rounded-full object-cover redish-gradient p-[2px]" />
      </div>
    </section>
  );
};

export default Hero;
