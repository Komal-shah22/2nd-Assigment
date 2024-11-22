import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.webp';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="bg-[#043873] w-full h-16">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-20 py-3">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={35} height={35} />
          <h1 className="text-white font-serif font-extrabold text-lg sm:text-xl lg:text-2xl">
            whitespace
          </h1>
        </div>
        <div className="md:hidden text-white text-2xl">
          <HiMenuAlt3 />
        </div>
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-white text-xs sm:text-sm lg:text-base font-light">
          <li className="flex items-center gap-1">
            Products <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-1">
            Solutions <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-1">
            Resources <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-1">
            Pricing <MdOutlineKeyboardArrowDown />
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-[#FFE492] rounded-md px-4 py-2 text-sm lg:px-6 lg:py-2">
            Login
          </button>
          <button className="bg-[#4F9CF9] rounded-md px-4 py-2 text-white text-sm lg:px-6 lg:py-2 flex items-center gap-2">
            Try Whitespace Free <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
