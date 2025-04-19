import { useState } from 'react'
// import { set } from 'react-hook-form'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className='w-full font-bold uppercase text-3xl text-[#00df9a] m-4'>React.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 button'>Home</li>
                <li className='p-4 button'>Company</li>
                <li className='p-4 button'>Resouces</li>
                <li className='p-4 button'>About</li>
                <li className='p-4 button'>Contact</li>
     
            </ul>
          <div onClick={handleNav} className='md:hidden'> {nav ? <AiOutlineMenu size={20} />:<AiOutlineClose size={20} />    } </div>
  
          <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'  : 'fixed left-[-100%]'}>
          <h1 className='w-full font-bold uppercase text-3xl text-[#00df9a] m-4'>React.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600 button'>Home</li>
                <li className='p-4 border-b border-gray-600 button'>Company</li>
                <li className='p-4 border-b border-gray-600 button'>Resources</li> 
                <li className='p-4 border-b border-gray-600 button'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            
          </div>
    </div>
    )
    }

export default Navbar


