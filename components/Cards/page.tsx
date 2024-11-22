
import React from 'react';
import Image from 'next/image';
import Quot from '../../public/blueQuote.webp';
import card1 from '../../public/card1 (1).webp';
import Quot2 from '../../public/whiteQuote.webp';
import card2 from '../../public/card2 (1).webp';
import card3 from '../../public/card3 (1).webp';

const Cards = () => {
  return (
    <div className="px-4 pb-14">
      <h1 className="text-center font-bold text-[32px] md:text-[50px] mt-16 w-full mb-10">
        What Our Clients Says
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="w-full md:w-[320px] h-[350px] bg-slate-100 rounded-lg p-6">
          <Image src={Quot} alt="quot" width={50} height={50} />
          <p className="pt-6 text-sm md:text-base">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <div className="w-full h-1 bg-black mt-6"></div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <span>
              <Image src={card1} alt="card" width={80} height={80} className="rounded-full" />
            </span>
            <div>
              <h2 className="text-sm md:text-lg font-bold">Oberon Shaw, MCH</h2>
              <p className="text-xs md:text-sm">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[320px] h-[350px] bg-[#72b0f8] rounded-xl p-6">
          <Image src={Quot2} alt="quot" width={50} height={50} />
          <p className="pt-6 text-sm md:text-base text-white">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <div className="w-full h-1 bg-white mt-6"></div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <span>
              <Image src={card2} alt="card" width={80} height={80} className="rounded-full" />
            </span>
            <div>
              <h2 className="text-sm md:text-lg font-bold">Oberon Shaw, MCH</h2>
              <p className="text-xs md:text-sm text-white">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[320px] h-[350px] bg-[#72b0f8] rounded-lg p-6">
          <Image src={Quot2} alt="quot" width={50} height={50} />
          <p className="pt-6 text-sm md:text-base text-white">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <div className="w-full h-1 bg-white mt-6"></div>
          <div className="flex justify-center items-center gap-4 mt-10">
            <span>
              <Image src={card3} alt="card" width={80} height={80} className="rounded-full" />
            </span>
            <div>
              <h2 className="text-sm md:text-lg font-bold">Oberon Shaw, MCH</h2>
              <p className="text-xs md:text-sm text-white">
                Head of Talent Acquisition, North America
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
