import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-[#949494] text-white">
      <div className="flex flex-col justify-center items-center flex-grow">
        <p className="text-[17.85px] font-normal leading-none tracking-[-0.005em] font-inter">
          Performance in motion
        </p>
        <h2 className="text-[48px] font-light leading-none tracking-[-0.005em] font-manrope">
          Soft Trims and NVH Solutions
        </h2>
        <h2 className="text-[48px] font-light leading-none tracking-[-0.005em] font-manrope">
          for seamless rides
        </h2>
      </div>
    </div>
  );
};

export default Hero;
