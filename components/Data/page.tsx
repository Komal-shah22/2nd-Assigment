import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import data from '../../public/data.webp'

const Data = () => {
  return (
    <div className="bg-[white] w-full h-[600px]">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] lg:h-[600px] mt-12 lg:mt-48 px-6 lg:px-14 text-center lg:text-left">
          <h1 className="font-bold text-[30px] lg:text-[50px]  leading-tight">
          100% your data
          </h1>
          <p className="mt-4 lg:mt-8">
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          <button className="mt-6 lg:mt-8 bg-[#4F9CF9] rounded-md px-6 py-4 text-white text-sm flex items-center justify-center mx-auto lg:ml-0">
            Try Taskey Free
            <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] flex justify-center items-center mt-6 lg:mt-0">
          <Image src={data} alt='data'/>
        </div>
      </div>
    </div>
  );
};

export default Data;
