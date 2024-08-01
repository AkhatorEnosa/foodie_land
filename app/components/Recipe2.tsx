'use client'

import React, { useState } from 'react'
import Details from './Details'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'

type RecipeProps = {
    id: number,
    imgSrc: string,
    title: string,
    detailsTitle1: string,
    detailsTitle2: string
}

const Recipe2 = ({id, imgSrc, title, detailsTitle1, detailsTitle2} : RecipeProps) => {

    // initialise state
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);  //toggle like state 
    }
  return (
    <div className="recipe2 max-w-[290px] flex flex-col group">
        <div className='relative flex w-[290px] h-[200px] mb-4 justify-center items-center overflow-clip rounded-[20px]'>
            <Image src={imgSrc} width={290} height={291.2} className='z-30' alt='recipe2 image rounded-[20px]'/>
            <span className={like === false ? 'absolute p-3 bg-white rounded-full text-[#DBE2E5] hover:text-[#FF6363] z-50 text-2xl right-4 -top-16 transition-all duration-200 group-hover:top-4  cursor-pointer' : 'absolute p-3 bg-white rounded-full text-[#FF6363] z-50 text-2xl right-4 top-4 cursor-pointer'} onClick={()=>handleLike()}><FaHeart /></span>
        </div>

            
        <Link href={{
            pathname: `${id}`,
            query:{
                title: title,
                imgSrc: imgSrc,
                detailsTitle2: detailsTitle2
            }
        }}>
            <div className='w-full text-lg leading-[26px] mb-6 -tracking-[-4%] text-left hover:underline'>
                <p className="recipe-title">{title}</p>
            </div>
        </Link>
        <div className='flex gap-4 w-fit'>
            <Details title1={detailsTitle1} title2={detailsTitle2} background='' padding=''/>
        </div>
    </div>
  )
}

export default Recipe2