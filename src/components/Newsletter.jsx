import React from 'react'


const NewsletterPage = () => {
  return (
    <div className='w-full py-16 px-4 bg-black grid lg:grid-cols-3 '>
        <div className='col-span-2 max-w-[1240px]  text-white my-2 px-1 gap-2'>
            <h1 className='font-bold text-2xl md:text-4xl sm:text-3xl'>Want tips & tricks to optimize your flow ?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>

        <div className='my-2'>
            <div className='flex sm:flex-row flex-col items-center justify-between w-full gap-4'>
                <input className='p-3 flex w-full rounded-md bg-white' type="email" placeholder='Enter email' />
                <button className='button bg-[#00df9a] w-[200px] rounded-md font-medium py-3 button '>Notify Me!</button>
            </div> 
            <p className='text-white mt-2'>We care about the protection of your data. Read our <span className='text-[#00df9a] button'>Privacy Policy </span></p> 
        </div>


    </div>
  )
}

export default NewsletterPage