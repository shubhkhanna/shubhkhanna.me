import React from "react";
import { Icons } from "../../assets";
import { skills } from "../../utils/data/skills";

const SkillSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
        I got the experience.
        <br />
        Here is my toolbelt for success.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src={Icons.skills_laptop}
          alt="laptop"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src={Icons.skills_codetag}
          alt="codetag"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src={Icons.skills_youtube}
          alt="youtube"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src={Icons.skills_fillStar}
          alt="fillStar"
        />
      </h2>
      {/* Skills SVG */}
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {React.Children.toArray(
          skills.map((item) => (
            <div className="w-10 mx-auto flex items-center flex-col justify-center">
              <img src={item.icon} alt={item.title} style={item.style} />
              <p className="text-xs text-gray-400 font-semibold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillSection;
