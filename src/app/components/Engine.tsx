import React from "react";
import Image from "next/image";

const Engine = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      {/* Headings */}
      <div className="w-[778.24px]">
        <h2 className="text-[48px] font-light leading-none tracking-[-0.005em] font-manrope">
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span>
        </h2>
        <h2 className="text-[48px] leading-none tracking-[-0.005em] font-manrope">
          nonwoven solutions
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-8 mt-20 w-[778.24px]">
        {/* Left Text */}
        <div className="text-left">
          <h5 className="text-[28px] font-bold leading-none tracking-[-0.005em] font-manrope mt-20">
            Passenger vehicles
          </h5>

          <div className="text-[14px] font-normal leading-none tracking-[-0.005em] font-manrope mt-4">
            <p>Revving up Nonwoven innovation from</p>
            <p>interior to exterior.</p>
          </div>
        </div>

        {/* Right Image (Placeholder) */}
        <div className=" w-full h-[200px] flex items-center justify-center">
          <video
            src="/assets/front.mp4" // Replace with the actual filename
            controls
            autoPlay
            loop
            muted
            className="w-[1063px] h-[240px] object-contain"
            // assignment\public\assets\
          />
        </div>
      </div>
      <div
        className="w-[246px] h-[44px] top-[788.46px] left-[816.48px] 
                 font-inter font-normal text-[12.85px] leading-none tracking-[-0.5%] 
                 text-center mt-20"
      >
        <p>Click anywhere for next slide</p>
        <p>(Only written for prototype)</p>
      </div>

      <div className="grid grid-cols-4 w-full mt-10 ml-10">
        <div className="col-start-3">
          <Image
            src="/assets/Frame-2.png"
            alt="Frame"
            width={523}
            height={112}
          />
        </div>
        <div className="col-start-4 justify-self-end mr-20">
          <Image
            src="/assets/Group 1321314182.png"
            alt="Frame"
            width={51}
            height={51}
          />
        </div>
      </div>
    </div>
  );
};

export default Engine;
