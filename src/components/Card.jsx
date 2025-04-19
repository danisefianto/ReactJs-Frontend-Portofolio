import React from 'react'

const CardPage = () => {
  return (
    <div className='py-16 px-4 bg-white'>
        <div className='mx-auto max-w-[1240px] w-full grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 mx-auto items-center gap-10'>
            <img src="single.png" alt="card1" className='w-[150px]' />
            <h1 className='font-medium md:text-3xl sm:text-2xl txt-xl text-center '>Single User</h1>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl text-center'> $149</h1>
            <div className='text-center font-medium w-full '>
            <p className='border-b border-gray-600 py-1'>500 GB Storage</p>
            <p className='border-b border-gray-600 mt-2 py-1'>1 Granted User</p>
            <p className='border-b border-gray-600 mt-2 py-1 mb-8'>Send up to 2 GB</p>
            <button className='button bg-[#00df9a] rounded-md py-3 px-12 mx-auto font-medium'>Start Trial</button>
            </div>
        </div>
        <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 mx-auto items-center gap-10'>
            <img src="double.png" alt="card1" className='w-[150px]' />
            <h1 className='font-medium md:text-3xl sm:text-2xl txt-xl text-center '>Multiple User</h1>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl text-center'> $250</h1>
            <div className='text-center font-medium w-full '>
            <p className='border-b border-gray-600 py-1'>500 GB Storage</p>
            <p className='border-b border-gray-600 mt-2 py-1'>1 Granted User</p>
            <p className='border-b border-gray-600 mt-2 py-1 mb-8'>Send up to 2 GB</p>
            <button className='button bg-black text-[#00df9a] rounded-md py-3 px-12 mx-auto font-medium'>Start Trial</button>
            </div>
        </div>

        <div className='w-full shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300 mx-auto items-center gap-10'>
            <img src="triple.png" alt="card1" className='w-[150px]' />
            <h1 className='font-medium md:text-3xl sm:text-2xl txt-xl text-center '>Triple User</h1>
            <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl text-center'> $299</h1>
            <div className='text-center font-medium w-full '>
            <p className='border-b border-gray-600 py-1'>500 GB Storage</p>
            <p className='border-b border-gray-600 mt-2 py-1'>1 Granted User</p>
            <p className='border-b border-gray-600 mt-2 py-1 mb-8'>Send up to 2 GB</p>
            <button className='button bg-[#00df9a] rounded-md py-3 px-12 mx-auto font-medium'>Start Trial</button>
            </div>
        </div>
        </div>
    </div>
  )


}

export default CardPage

// class dalam tailwind yang ketika di hover akan menggunakan jari
