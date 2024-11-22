import React from 'react';
import Image from 'next/image';
import apple from '../../public/Apple.webp';
import google from '../../public/Google.webp';
import slack from '../../public/Slack.webp';
import microsoft from '../../public/Microsoft.webp'

const Sponser = () => {
  return (
    <div className='w-full h-auto'>
        <h1 className='font-extrabold text-[50px] text-center w-full h-[100px] mb-0'>Our sponsors</h1>
        <div className='flex justify-evenly items-center mt-0 mb-12'>
            <Image src={apple} alt='apple' width={50} height={50}/>
            <Image src={google} alt='google' width={100} height={100}/>
            <Image src={slack} alt='slack' width={100} height={100}/>
            <Image src={microsoft} alt='microsoft' width={100} height={100}/>
        </div>    
            
    </div> 
  );
};

export default Sponser;