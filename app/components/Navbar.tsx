'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaHamburger, FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { FcCancel } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'

//Navbar section
const Navbar = () => {
    // initialise state
    const [nav, setNav] = useState(false);

    const handleMenu = () => {
        setNav(!nav); //toggle like state 
    }

  return (
    <section role='navbar' className='fixed top-0 py-10 lg:py-0 lg:relative w-full lg:mb-20 bg-white shadow-sm lg:shadow-none z-40'>
      <div className='w-full flex justify-between px-10 md:px-20 items-center'>
        <Link href='/'>
            <h1 className='logo text-2xl font-normal leading-[30px]'>Foodieland<span className='text-orange-500'>.</span></h1>
        </Link>
            <ul className='hidden lg:flex justify-betweeen items-center gap-[60px] font-medium text-base leading-[19.38px] -tracking-[2%]'>
                <li className='cursor-pointer hover:underline'>Home</li>
                <li className='cursor-pointer hover:underline'>Recipe</li>
                <li className='cursor-pointer hover:underline'>Blog</li>
                <li className='cursor-pointer hover:underline'>Contact</li>
                <li className='cursor-pointer hover:underline'>About Us</li>
            </ul>
            <div className='hidden socials lg:flex gap-10'>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaFacebookF /></p>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaTwitter /></p>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaInstagram /></p>
            </div>

            <div className='fixed lg:hidden right-10 rounded-full bg-white p-5 shadow-lg z-50' onClick={()=>handleMenu()}>
              {nav === true ? <IoMdClose className='menu-toggle text-3xl'/> : <FaHamburger className='menu-toggle text-3xl'/> }
            </div>
      </div>

      {/* Responsive Nav */}
      <div className={nav === false ? `hidden` : `fixed lg:hidden min-w-[50%] h-[100%] bg-white top-0 py-10 px-10 md:px-20 gap-20 shadow-md flex flex-col items-start text-left z-40 -left-0 opacity-100 transition-all duration-200`}>
            <Link href='/'>
                <h1 className='logo text-2xl font-normal leading-[30px]'>Foodieland<span className='text-orange-500'>.</span></h1>
            </Link>
            <ul className='lg:hidden flex flex-col gap-5 font-medium text-base leading-[19.38px] -tracking-[2%]'>
                <li className='cursor-pointer hover:underline'>Home</li>
                <li className='cursor-pointer hover:underline'>Recipe</li>
                <li className='cursor-pointer hover:underline'>Blog</li>
                <li className='cursor-pointer hover:underline'>Contact</li>
                <li className='cursor-pointer hover:underline'>About Us</li>
            </ul>
            <div className='socials flex gap-10 lg:hidden'>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaFacebookF /></p>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaTwitter /></p>
                    <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaInstagram /></p>
            </div>
      </div>
    </section>
  )
}

export default Navbar