import Image from 'next/image'
import React from 'react'
import LearnMoreImg from "../../public/images/learnMore.png"

const LearnMore = () => {
  return (
    <div className='w-full flex gap-11 justify-center items-center'>
        <div className='w-[50%]'>
            <h1 className='font-semibold text-5xl leading-[58.09px] -tracking-[4%] mb-6'>Everyone can be a <br/> chef in their own kitchen</h1>
            <p className='leading-7 mb-[72px] w-[90%] '>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br/> ad minim </p>

            <div className='flex justify-center w-[180px] items-center px-9 py-[18px] gap-[15px] bg-black text-white rounded-2xl'>
                Learn More
            </div>
        </div>
        <Image src={LearnMoreImg} width={710} height={579} alt='learn more' className=''/>
    </div>
  )
}

export default LearnMore