import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="bg-white px-5 lg:px-14 py-5 flex justify-between items-center">
      <Image
        src="/logo.png"
        width={100}
        height={50}
        className="w-auto"
        alt="Logo"
      ></Image>

      <div className="lg:hidden">
        <GiHamburgerMenu size={25} />
      </div>

      <div className="lg:flex gap-8 items-center hidden">
        <ul className="flex gap-8 font-medium text-[#0F1629]">
          <li>Crypto Taxes</li>
          <li>Free tools</li>
          <li>Resource Center</li>
        </ul>

        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white px-6 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
