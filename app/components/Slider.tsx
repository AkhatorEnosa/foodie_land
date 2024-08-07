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
    <div className='relative flex flex-col lg:flex-row slide min-w-full lg:min-w-[90%] snap-always snap-center leading-[16.94px] rounded-2xl lg:rounded-[60px] overflow-x-hidden shadow-lg lg:shadow-none'>
        <div className='lg:absolute flex flex-col justify-center lg:w-[620px] lg:h-[640px] p-5 md:p-[50px] pb-[] col-span-1 bg-[#E7FAFE] rounded-2xl lg:rounded-l-[60px] z-30 py-5 lg:py-0'>
            <div className='w-fit flex justify-between items-center font-semibold sm:text-xs lg:text-base mb-8 gap-3 px-5 py-[10px] bg-white rounded-2xl lg:rounded-[30px]'>
                <Image src={Hotrecipes} width={24} height={24} alt='hot recipes' className='w-6 h-6'/> 
                <span>Hot Recipes</span>
            </div>
            <div className='w-full flex flex-col gap-6 pb-[105px]'>
                <h1 className='font-semibold section-heading lg:text-[64px] leading-[77.45px] -tracking-[4%] '>Spicy delicious chickens</h1>
                <p className='leading-7 mb-[6px] text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae magnam excepturi accusantium aliquam laudantium quas accusamus veniam! Quod facilis eveniet laboriosam quidem.</p>
                <div className='grid grid-col-3 lg:flex lg:justify-center items-center gap-4 w-full lg:w-fit'>
                    <Details title1="30 Minutes" title2="Chicken" background='bg-black/5' padding='px-4 py-2'/>
                    <div className='absolute right-6 lg:hidden flex justify-center cols-span-1 z-30'>
                        <Image src={Badge} width={75} height={75} alt='badge'/>
                    </div>
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
                 <div role="button" className='flex justify-center items-center px-9 py-[18px] gap-[15px] bg-black text-white rounded-2xl'>
                    View Recipes
                    <IoPlayCircle className='w-6 h-6' />
                </div>
            </div>
        </div>
        <div className='hidden relative lg:flex w-full justify-end z-10'>
            <Image src={SliderImage} width={800} height={500} alt='slider main image' className='w-[982px] h-[640px]'/>
        </div>
        <div className='hidden absolute w-full lg:flex top-[50px] justify-center items-center z-30'>
            <Image src={Badge} width={150} height={150} alt='badge'/>
        </div>
    </div>
  )
}

export default Slider