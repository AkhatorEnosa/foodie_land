import Image from 'next/image'
import React from 'react'
import Insta1 from '../../public/images/ig1.png'
import Insta2 from '../../public/images/ig2.png'
import Insta3 from '../../public/images/ig3.png'
import Insta4 from '../../public/images/ig4.png'
import { FaInstagram } from 'react-icons/fa'

const InstaPosts = () => {
  return (
    <section className='w-full flex flex-col px-20 justify-center items-center py-20 gap-20 insta-posts'>
        <div className='w-[70%] flex flex-col justify-center items-center text-center gap-6'>
            <h1 className='section-heading'>Check out @foodieland on Instagram</h1>
            <p className='leading-7 w-fit'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqut enim ad minim </p>
        </div>
        <div className="insta-images flex justify-center items-center gap-10 w-full">
            <Image src={Insta1} width={290} height={445.44} alt='instagram post'/>
            <Image src={Insta2} width={290} height={445.44} alt='instagram post'/>
            <Image src={Insta3} width={290} height={445.44} alt='instagram post'/>
            <Image src={Insta4} width={290} height={445.44} alt='instagram post'/>
        </div>

        <div className='flex justify-center w-fit items-center px-9 py-[18px] gap-[15px] bg-black text-white rounded-2xl'>
            Visit Our Instagram <FaInstagram className='text-[22px]'/>
        </div>
    </section>
  )
}

export default InstaPosts