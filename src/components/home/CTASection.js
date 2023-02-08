import React from "react";
import { Icons } from "../../assets";

const CTASection = () => {
  return (
    <div className="pt-28 relative w-full">
      <img className="w-30 m-auto mb-2" src={Icons.lineBreak} />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Hope you enjoyed my portfolio!
        </h2>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src={Icons.cta_fancyLines}
      />
    </div>
  );
};

export default CTASection;
