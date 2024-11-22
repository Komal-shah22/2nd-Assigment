import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import apple from '../../public/appleIcon.webp';
import window from '../../public/windowsIcon.webp';
import android from '../../public/androidIcon.webp';

const Footer = () => {
  return (
    <div className="bg-[#043873] w-full py-10">
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h1 className="font-bold text-3xl md:text-5xl text-white">
          Try Whitepace today
        </h1>
        <p className="text-white mt-4">Get started for free.</p>
        <p className="text-white">Add your whole team as your needs grow.</p>
        <button className="mb-5 mt-6 bg-[#4F9CF9] rounded-md px-6 py-3 text-white flex justify-center items-center mx-auto">
          Try Taskey Free
          <FaArrowRight className="ml-2" />
        </button>
        <p className="text-white">On a big team? Contact sales</p>
        <div className="flex justify-center items-center gap-4 mt-8">
          <Image src={apple} alt="apple" width={40} height={40} />
          <Image src={window} alt="window" width={40} height={40} />
          <Image src={android} alt="android" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;



