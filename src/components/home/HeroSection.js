import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Icons } from "../../assets";

const HeroSection = () => {
  return (
    <div
      className="relative heroSection w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
      style={{ maxWidth: "1200px" }}
    >
      <p className="text-xl mb-5">Hey, I'm Shubh.</p>
      <h1 className="heroSubTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
        I enjoy <span className="text-sky-400">building</span> and{" "}
        <span className="text-sky-400">designing</span> for the web & app.
        <img
          className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
          style={{ animationDelay: "0.1s" }}
          src={Icons.hero_html}
          alt="html"
        />
        <img
          className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
          style={{ animationDelay: "0.3s" }}
          src={Icons.hero_coding}
          alt="coding"
        />
        <img
          className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
          style={{ animationDelay: "0.4s" }}
          src={Icons.hero_js}
          alt="js"
        />
        <img
          className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
          style={{ animationDelay: "0.5s" }}
          src={Icons.hero_dino}
          alt="dino"
        />
        <img
          className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
          style={{ animationDelay: "0.6s" }}
          src={Icons.hero_paintbrush}
          alt="paintbrush"
        />
        <img
          className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
          src={Icons.hero_flower}
          alt="flower"
        />
        <img
          className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
          style={{ animationDelay: "0.8s" }}
          src={Icons.hero_codetag}
          alt="codetag"
        />
      </h1>
      <ScrollLink
        activeClass="active"
        to="projects"
        spy={true}
        offset={-30}
        smooth={true}
        duration={500}
      >
        <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-white bg-darkshade1 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
          Tell me more
        </div>
      </ScrollLink>
    </div>
  );
};

export default HeroSection;
