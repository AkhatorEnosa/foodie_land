import Image from 'next/image'
import React from 'react'
import LearnMoreImg from "../../public/images/learnMore.png"

const LearnMore = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-11 mb-[160px] px-20 justify-center items-center'>
        <div className='w-full flex flex-col text-center justify-center items-center md:items-start md:text-left md:w-[50%]'>
            <h1 className='section-heading mb-6'>Everyone can be a <br/> chef in their own kitchen</h1>
            <p className='leading-7 mb-[72px] w-[90%] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

            <div role="button" className='flex justify-center w-[180px] items-center px-9 py-[18px] gap-[15px] bg-black text-white rounded-2xl'>
                Learn More
            </div>
        </div>
          <Image src={LearnMoreImg} width={710} height={579} alt='learn more' className=''/>
    </div>
  )
}

export default LearnMore