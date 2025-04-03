"use client";

import Image from "next/image";
import React from "react";

const Navbar = () => {
  //   const handleContactClick = () => {
  //     if (typeof window !== "undefined") {
  //       document.getElementById("contact-section")?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  return (
    <div className="bg-white flex items-center justify-around py-4 h-[80px]">
      {/* Logo */}
      <div>
        <Image
          src="/assets/Supreme_logos (3).png"
          alt="Logo"
          width={146}
          height={41}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 m-4">
        {/* Contact Us Button */}
        <button
          //   onClick={handleContactClick}
          className="text-black px-4 py-2 cursor-pointer bg-[#5CD6FF] rounded-full"
        >
          Contact Us
        </button>

        {/* LinkedIn Icon */}
        <div>
          <Image
            src="/assets/bxl-linkedin.svg.png"
            alt="LinkedIn"
            height={24}
            width={24}
          />
        </div>

        {/* Language Icon */}
        <div>
          <Image
            src="/assets/Language.png"
            alt="Language"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
