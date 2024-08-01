import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <section role='navbar' className='w-full flex justify-between px-20 items-center mb-20'>
        <h1 className='logo text-2xl font-normal leading-[30px]'>Foodieland<span className='text-orange-500'>.</span></h1>
        <ul className='flex justify-betweeen items-center gap-[60px] font-medium text-base leading-[19.38px] -tracking-[2%]'>
            <li className='cursor-pointer hover:underline'>Home</li>
            <li className='cursor-pointer hover:underline'>Recipe</li>
            <li className='cursor-pointer hover:underline'>Blog</li>
            <li className='cursor-pointer hover:underline'>Contact</li>
            <li className='cursor-pointer hover:underline'>About Us</li>
        </ul>
        <div className='socials flex gap-10'>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaFacebookF /></p>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaTwitter /></p>
                <p className='cursor-pointer hover:text-black/50 text-[22px]'><FaInstagram /></p>
        </div>
    </section>
  )
}

export default Navbar