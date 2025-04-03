import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-start px-10 py-8 flex-col bg-white text-black">
      {/* Logo on the Left */}
      <div className="mr-16">
        <Image
          src="/assets/Supreme_logos (3).png"
          alt="Logo"
          width={226}
          height={63}
        />
      </div>

      {/* Titles in One Line beside Logo */}
      <div className="grid grid-cols-4 gap-10 text-lg font-medium w-full mt-20">
        <div className="text-left">
          <h6 className="mb-32">Application</h6>
          <p className="mt-10 mb-10">Apperal</p>
          <p className="mb-10">Automotive</p>
          <p className="mb-10">Filtration</p>
          <p className="mb-10">Cousomised Solutions</p>
        </div>
        <div className="text-left">
          <h6 className="mb-32">Company</h6>
          <p className="mt-10 mb-10">Innovation</p>
          <p className="mb-10">Global Compitanvy</p>
          <p className="mb-10">About Us</p>
          <p className="mb-10">Conatct Us</p>
        </div>
        <div className="text-left">
          <h6 className="mb-32">More</h6>
          <p className="mt-10 mb-10">Careers</p>
          <p className="mb-10">Privacy Policy</p>
          <p className="mb-10">Terms and Conditions</p>
        </div>
        <div className="text-left">
          <h6 className="mb-32">Follow Us</h6>
          <p className="mt-10 mb-10">Twitter</p>
          <p className="mb-10">Linked In</p>
          <p className="mb-10">Instagram</p>
          <p className="mb-10">Medium</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
