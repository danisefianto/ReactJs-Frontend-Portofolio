import React from 'react'


const ArticlePage = () => {
  return (
    <div className='bg-white w-full py-12 px-4 gap-4 grid md:grid-cols-2'>
    <div className='py-4 mx-auto max-w-[1240px] '>
        <img className='mx-auto w-[500px]' src="laptop.jpg " alt="laptop" />
    </div> 
    <div className='flex flex-col items-start max-w-[1240px] mx-auto'>
        <p className='uppercase text-[#00df9a] font-bold '>Data Analytics Dashboard</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4 '>Manage Data Analytics Centrally</h1>
        <p className='text-justify mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque dolore est doloribus quis laudantium, aut quos perspiciatis quam aspernatur numquam ipsum asperiores voluptatem eveniet placeat. Odio commodi voluptatem facere!
        Sint ullam earum labore nulla necessitatibus numquam ipsam molestiae sapiente animi facere tempora quod architecto minima debitis optio vitae accusantium tempore placeat molestias minus, nihil sit! Nesciunt quidem aut dolore.</p>
        <button className='button bg-black text-[#00df9a] px-4 py-2 rounded-md font-medium font-weigh'>Get Started!</button>
    </div> 
    </div>
  )
}

export default ArticlePage