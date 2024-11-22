import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import app from '../../public/Apps.webp'

const Contant = () => {
  return (
    <div className="bg-[#043873] w-full h-[600px]">
      <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] flex justify-center items-center mt-6 lg:mt-0">
          <Image src={app} alt='app' width={500} height={500}/>
        </div>
        <div className="w-full lg:w-[50%] lg:h-[600px] mt-12 lg:mt-48 px-6 lg:px-14 text-center lg:text-left">
          <h1 className="font-bold text-[30px] lg:text-[50px] text-white leading-tight">
          Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="text-white mt-4 lg:mt-8">
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button className="mt-6 lg:mt-8 bg-[#4F9CF9] rounded-md px-6 py-3 text-white text-sm flex items-center justify-center mx-auto lg:ml-0">
            Read More <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contant;
