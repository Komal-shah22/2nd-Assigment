import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  return (
    <div className="bg-[white] w-full h-[600px]">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] lg:h-[600px] mt-12 lg:mt-48 px-6 lg:px-14 text-center lg:text-left">
          <h1 className="font-bold text-[30px] lg:text-[50px]  leading-tight">
          Project Management
          </h1>
          <p className="text-white mt-4 lg:mt-8">
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="mt-6 lg:mt-8 bg-[#4F9CF9] rounded-md px-6 py-4 text-white text-sm flex items-center justify-center mx-auto lg:ml-0">
            Get Started <FaArrowRight className="ml-2" />
          </button>
        </div>
        <div className="w-full lg:w-[50%] h-[300px] lg:h-[600px] flex justify-center items-center mt-6 lg:mt-0">
          <div className="bg-blue-100 w-[90%] sm:w-[550px] h-[200px] sm:h-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
