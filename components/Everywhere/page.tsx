import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Everywhere = () => {
  return (
    <div className="bg-[#043873] w-full h-auto text-center px-4 lg:px-20 py-8 lg:py-14">
      <h1 className="text-white text-[30px] lg:text-[50px] font-bold">
        Your work, everywhere you are
      </h1>
      <p className="text-white text-sm lg:text-base mt-6 lg:mt-8 mx-auto max-w-[700px]">
        Access your notes from your computer, phone, or tablet by synchronising with various services, 
        including Whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, 
        and iOS. A terminal app is also available!
      </p>
      <button className="mt-8 lg:mt-10 bg-[#4F9CF9] rounded-md px-6 py-3 text-white flex items-center justify-center mx-auto text-sm lg:text-base">
        Try it Now <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Everywhere;
