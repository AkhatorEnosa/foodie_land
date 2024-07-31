import React from 'react'
import Details from './Details'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

type RecipeProps = {
    imgSrc: string,
    title: string,
    detailsTitle1: string,
    detailsTitle2: string
}

const Recipe = ({imgSrc, title, detailsTitle1, detailsTitle2} : RecipeProps) => {
  return (
    <div className="recipe max-w-[400px] px-4 pt-4 pb-8 flex flex-col gap-6">
        <div className='relative flex w-[368px] h-[250px] justify-center items-center overflow-clip rounded-[30px]'>
            <Image src={imgSrc} width={368} height={364} className='z-30' alt='recipe image'/>
            <span className='absolute p-3 bg-white rounded-full text-[#DBE2E5] hover:text-[#FF6363] z-50 text-2xl right-5 top-5'><FaHeart /></span>
        </div>

        <div className='w-full text-2xl -tracking-[-4%] text-left '>
            <p className="recipe-title">Big and Juicy Wagyu Beef Cheeseburger</p>
        </div>

        <div className='flex gap-4 w-fit'>
            <Details title={detailsTitle1} background=''/>
            <Details title={detailsTitle2} background=''/>
        </div>
    </div>
  )
}

export default Recipe