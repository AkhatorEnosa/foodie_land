import Image from 'next/image'
import React from 'react'
import Hotrecipes from '../../public/images/slider-item-image.png'
import PersonSlider from '../../public/images/slider-person.png'
import Badge from '../../public/images/badge.png'
import SliderImage from '../../public/images/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.jpeg'
import Details from './Details'
import { IoPlayCircle, IoPlayCircleOutline } from 'react-icons/io5'

const Slider = () => {
  return (
    <div className='relative slider w-[90%] -tracking-[2%] leading-[16.94px] rounded-[60px] bg-blue-300 overflow-hidden'>
        <div className='absolute w-[620px] h-[640px] p-[50px] col-span-1 bg-[#E7FAFE] rounded-l-[60px] z-30'>
            <div className='w-fit flex justify-between font-semibold text-sm mb-8 gap-3 px-5 py-[10px] bg-white rounded-[30px]'>
                <Image src={Hotrecipes} width={24} height={24} alt='hot recipes' className='w-6 h-6'/> 
                <span>Hot Recipes</span>
            </div>
            <div className='w-full flex flex-col gap-6 mb-[104px]'>
                <h1 className='font-semibold text-[64px] leading-[77.45px] -tracking-[4%]'>Spicy delicious chickens</h1>
                <p className='leading-7 mb-[6px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae magnam excepturi accusantium aliquam laudantium quas accusamus veniam! Quod facilis eveniet laboriosam quidem.</p>
                <div className='flex gap-4 w-fit'>
                    <Details title='30 Minutes' background='bg-black/5'/>
                    <Details title='something else' background='bg-black/5'/>
                </div>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='person w-fit flex justify-center items-center gap-[18px]'>
                    <Image src={PersonSlider} width={50} height={50} alt='slider person ' className='rounded-full'/>
                    <div className='flex flex-col'>
                        <p className='font-bold leading-[19.36px]'>John Smith</p>
                        <p className='font-medium text-sm text-black/60'>15 March 2022</p>
                    </div>
                </div>
                <div className='flex justify-center items-center px-9 py-[18px] gap-[15px] bg-black text-white rounded-2xl'>
                    View Recipes
                    <IoPlayCircle className='w-6 h-6' />
                </div>
            </div>
        </div>
        <div className='relative flex w-full  bg-blue-300 justify-end z-10'>
            <Image src={SliderImage} width={800} height={500} alt='slider main image' className='w-[982px] h-[640px]'/>
        </div>
        <div className='absolute w-full flex top-[50px] justify-center items-center z-50'>
            <Image src={Badge} width={150} height={150} alt='badge'/>
        </div>
    </div>
  )
}

export default Slider