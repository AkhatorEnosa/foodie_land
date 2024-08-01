'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import PersonIcon from '../../public/images/slider-person.png'
import { PiForkKnifeFill, PiTimerFill } from 'react-icons/pi'
import { FiPrinter, FiShare } from 'react-icons/fi'
// import RecipeImage1 from '../../public/images/recipe-img.png'
import { FaPlay } from 'react-icons/fa'
import { useSearchParams } from 'next/navigation'

const Main = () => {
    const searchParams = useSearchParams();
    const img = searchParams.get('imgSrc');
  return (
    <section id='main' className='w-full px-20 pb-20'>
        <div className='w-full flex justify-between mb-16'>
            <div className='flex flex-col gap-12'>
                <h1 className='w-[80%] font-semibold text-[64px] leading-[77.45px] -tracking-[4%]'>{searchParams.get('title')}</h1>
                <div className='flex items-center'>

                    <div className='person w-fit flex justify-center items-center gap-[18px] pr-[58px]'>
                        <Image src={PersonIcon} width={50} height={50} alt='slider person ' className='rounded-full'/>
                        <div className='flex flex-col'>
                            <p className='font-bold leading-[19.36px]'>John Smith</p>
                            <p className='font-medium text-sm text-black/60'>15 March 2022</p>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-center items-center px-8 border-l-[1px] border-black/10'>
                        <PiTimerFill className='text-2xl'/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs leading-[12.52px] tracking-widest'>PREP TIME</p>
                            <p className='text-xs leading-[16.94px] -tracking-[2%] text-black/60'>15 Minute</p>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-center items-center px-8 border-l-[1px] border-r-[1px] border-black/10'>
                        <PiTimerFill className='text-2xl'/>
                        <div className='flex flex-col gap-2'>
                            <p className='text-xs leading-[12.52px] tracking-widest'>COOK TIME</p>
                            <p className='text-xs leading-[16.94px] -tracking-[2%] text-black/60'>15 Minute</p>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-center items-center px-8 '>
                        <PiForkKnifeFill className='text-2xl'/>
                        <p className='text-xs leading-[16.94px] -tracking-[2%] text-black/60'>{searchParams.get('detailsTitle2')}</p>
                    </div>

                </div>
            </div>
            <div className='flex gap-8 justify-center items-center'>
                <div className="print p-7 bg-[#E7FAFE] rounded-full">
                    <FiPrinter className='text-2xl'/>
                </div>
                <div className="print p-7 bg-[#E7FAFE] rounded-full">
                    <FiShare className='text-2xl'/>
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center mb-20'>
            <div className='relative flex justify-center items-center w-[840px] h-[600px] overflow-clip rounded-[30px]'>
                <div className='absolute text-[#181945] text-[32px] p-11 bg-white/80 z-50 rounded-full'>
                    <FaPlay/>
                </div>
                <Image src={String(img)} width={915.21} height={623} alt='image' className='z-10'/>
            </div>
            <div className="info font-medium text-base leading-[21.78px] -tracking-[4%] p-8 bg-[#E7FAFE] rounded-[30px]">
                <h1 className='font-semibold text-2xl leading-[29.05px]  mb-6'>Nutritional Information</h1>
                <p className='w-full flex justify-between text-black/60 border-b-[1px] pb-4 border-black/10'>Calories <span className='text-black'>219.9 kcal</span></p>
                <p className='w-full flex justify-between text-black/60 border-b-[1px] pb-4 border-black/10'>Total Fat <span className='text-black'>10.7 g</span></p>
                <p className='w-full flex justify-between text-black/60 border-b-[1px] pb-4 border-black/10'>Protein <span className='text-black'>7.9 g</span></p>
                <p className='w-full flex justify-between text-black/60 border-b-[1px] pb-4 border-black/10'>Cabohydrate <span className='text-black'>22.3 g</span></p>
                <p className='w-full flex justify-between text-black/60 border-b-[1px] pb-4 border-black/10'>Cholesterol <span className='text-black mb-[167px]'>37.4 mg</span></p>

                <div className='leading-7 text-black/60 text-center'>
                    <p>adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>

        <p className='text-black/60 text-base leading-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
  )
}

export default Main