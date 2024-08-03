import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'


// Footer section
const Footer = () => {
  return (
    <footer className='w-full flex flex-col px-20 gap-24'>
        <div className='top-footer flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center'>
            <div className="top-left flex flex-col gap-4">
                <h1 className='logo text-2xl font-normal leading-[30px]'>Foodieland<span className='text-orange-500'>.</span></h1>
                <p className='leading-7 w-full md:w-fit'>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <ul className='flex flex-col lg:flex-row gap-[60px]'>
                <li className='cursor-pointer hover:underline'>Recipe</li>
                <li className='cursor-pointer hover:underline'>Blog</li>
                <li className='cursor-pointer hover:underline'>Contact</li>
                <li className='cursor-pointer hover:underline'>About Us</li>
            </ul>
        </div>

        <div className="relative w-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-center text-center bottom-footer py-12 border-t-[1px] border-black/10">
            <p className='text-lg leading-[22.68px]'>© 2020 Flowbase. Powered by <span className='text-orange-500'>Webflow</span></p>
            <div className='socials lg:absolute right-20 flex gap-10'>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaFacebookF /></p>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaTwitter /></p>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaInstagram /></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer