import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaGithubSquare, FaDribbbleSquare } from 'react-icons/fa'

const FooterPage = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
        <div className='w-full '>
            <h1 className='font-bold uppercase text-3xl text-[#00df9a] '>React.</h1>
            <p className='text-white py-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere eos distinctio. Quas voluptate reiciendis rerum atque, ad blanditiis error voluptas illum debitis cum nemo exercitationem voluptatibus eum dignissimos quam?</p>
            <div className='flex justify-between w-full lg:w-[75%] my-4'>
                {/* beri warna grey pada icon*/}
                <FaFacebookSquare size={30} className='icon' />
                <FaInstagram size={30} className='icon'/>
                <FaTwitter size={30} className='icon'/>
                <FaGithubSquare size={30} className='icon'/>
                <FaDribbbleSquare size={30} className='icon'/>
            </div>
        </div>  
       <div className='lg:col-span-2 gap-8 flex justify-between '>
         <div className='flex flex-col gap-4'> 
            <h6 className='font-bold text-white'>Solutions</h6>
            <ul className='font-medium text-white flex flex-col gap-2'>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
           </ul>
        </div>

        <div className='flex flex-col gap-4'> 
            <h6 className='font-bold text-white'>Supports</h6>
            <ul className='font-medium text-white flex flex-col gap-2'>
                <li>Pricing</li>
                <li>Documentions</li>
                <li>Guides</li>
                <li>Api Status</li>
           </ul>
        </div>


        <div className='flex flex-col gap-4'> 
            <h6 className='font-bold text-white'>Company</h6>
            <ul className='font-medium text-white flex flex-col gap-2'>
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Careers</li>
           </ul>
        </div>


        <div className='flex flex-col gap-4'> 
            <h6 className='font-bold text-white'>Legals</h6>
            <ul className='font-medium text-white flex flex-col gap-2'>
                <li>Claims</li>
                <li>Policy</li>
                <li>Terms</li>
                <li>Privacy</li>
           </ul>
        </div>

        
       </div>

       
        
    </div>
  )
}

export default FooterPage