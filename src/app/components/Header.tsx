import React from "react";

const Header = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-[48px] font-light leading-none tracking-[-0.005em] font-manrope">
        Evolving the drive with{" "}
        <span className="font-semibold">360-degree</span>
      </h2>
      <h2 className="text-[48px] font-light leading-none tracking-[-0.005em] font-manrope">
        nonwoven solutions
      </h2>
      <div className="mt-32 text-[17.85px] font-normal leading-none tracking-[-0.005em] font-inter">
        <p>Click anywhere for next slide</p>
        <p>(Only written for prototype)</p>
      </div>
    </div>
  );
};

export default Header;
