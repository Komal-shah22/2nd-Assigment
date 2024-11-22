import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import facebook from '../../public/facebook.webp';
import twitter from '../../public/twitter.webp';
import logo from '../../public/logo.webp';

const Main = () => {
  return (
    <footer className="w-full bg-[#043873] text-white sm:px-24 px-5">
      <div>
        <section className="flex items-start sm:justify-evenly justify-center flex-wrap">
          <Whitespace />
          <Product />
          <Resources />
          <Company />
          <TryItToday />
        </section>
        <hr className='ml-4 mr-4'/>
        <div className='flex justify-center items-center'>
            <div className='text-white'>
                <span className=' ml-4 '>English</span>
                <span className=' ml-4'>terms & privacy</span>
                <span className=' ml-4'>security</span>
                <span className=' ml-4'>status</span>
                <span className=' ml-4'>©2021 Whitepace LLC.</span>
            </div>
            <div className='flex justify-center items-center gap-4 ml-[600px] pt-4'>
               <Image src={facebook} alt='facebook' width={10} height={10}/>
               <Image src={twitter} alt='twitter' width={20} height={20}/>
            </div>
    </div>

      </div>
    </footer>
  );
};

export default Main;

const Product = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["product", "overview", "pricing", "customer status"].map((val, ind) => (
        <li key={ind} className={`capitalize ${ind === 0 && "font-semibold"} my-2`}>
          {val}
        </li>
      ))}
    </ul>
  );
};

const Resources = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["resources", "blog", "Guides & tutorials", "Help center"].map(
        (val, ind) => (
          <li
            key={ind}
            className={`capitalize ${ind === 0 && "font-semibold"} my-2`}
          >
            {val}
          </li>
        )
      )}
    </ul>
  );
};

const Company = () => {
  return (
    <ul className="w-40 my-5 sm:text-start text-center">
      {["company", "about us", "careers", "media kit"].map((val, ind) => (
        <li key={ind} className={`capitalize ${ind === 0 && "font-semibold"} my-2`}>
          {val}
        </li>
      ))}
    </ul>
  );
};

const Whitespace = () => {
  return (
    <aside className="w-40 my-10">
      <div className="flex items-center justify-center gap-2 my-1">
        <span className="relative h-5 w-5 inline-block">
          <Image src={logo} alt="logo" fill={true} className="object-contain" />
        </span>
        <h1 className="text-2xl font-semibold">whitespace</h1>
      </div>
      <p className="text-sm sm:text-start text-center">
        whitepace was created for the new ways we live and work. We make a
        better workspace around the world
      </p>
    </aside>
  );
};

const TryItToday = () => {
  return (
    <div className="w-40 flex flex-col gap-3 my-5 sm:text-start text-center">
      <h1 className="text-2xl font-semibold capitalize">try it today</h1>
      <p className="text-sm">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <button className="mt-6 lg:mt-8 bg-[#4F9CF9] rounded-md px-6 py-4 text-white text-sm flex items-center justify-center mx-auto lg:ml-0">
            Let&apos;s Go <FaArrowRight className="ml-2" />
          </button>
    </div>
  );
};