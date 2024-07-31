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

const Recipe2 = ({imgSrc, title, detailsTitle1, detailsTitle2} : RecipeProps) => {
  return (
    <div className="recipe2 max-w-[290px] flex flex-col cursor-pointer group">
        <div className='relative flex w-[290px] h-[200px] mb-4 justify-center items-center overflow-clip rounded-[20px]'>
            <Image src={imgSrc} width={290} height={291.2} className='z-30' alt='recipe2 image rounded-[20px]'/>
            <span className='absolute p-3 bg-white rounded-full text-[#DBE2E5] group-hover:text-[#FF6363] z-50 text-2xl right-4 top-4'><FaHeart /></span>
        </div>

        <div className='w-full text-lg leading-[26px] mb-6 -tracking-[-4%] text-left '>
            <p className="recipe-title">{title}</p>
        </div>
        <div className='flex gap-4 w-fit'>
            <Details title1={detailsTitle1} title2={detailsTitle2} background='' padding=''/>
        </div>
    </div>
  )
}

export default Recipe2