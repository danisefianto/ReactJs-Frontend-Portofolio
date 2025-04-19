import React from 'react'

import { ReactTyped, Typed } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center gap-2'>
          <p className='text-[#00df9a] font-bold'> GROWING WITH DATA ANALYTICS</p>
          <h1 className='font-bold text-xl sm:text-3xl md:text-4xl'>Grow With Data</h1>
          <div className='flex justify-center items-center'>
          <p>Fast, flexible financing for</p>
          <ReactTyped className='md:pl-2 ' 
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={40}  
            backSpeed={60}
            loop
          />
          </div>
          <p className='mt-4 mb-3  text-stone-500'>Monirtor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
          <button className='button bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 '>Get Started</button>
          </div>
    </div>
    
  )
}
// max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center

export default Hero

 