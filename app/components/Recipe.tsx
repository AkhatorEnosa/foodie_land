// To inform next js, this is a client component
"use client";

import React, { useState } from 'react'
import Details from './Details'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link';

// type declaration
type RecipeProps = {
    id: number,
    imgSrc: string,
    title: string,
    detailsTitle1: string,
    detailsTitle2: string
}

const Recipe = ({id, imgSrc, title, detailsTitle1, detailsTitle2} : RecipeProps) => {
    // initialise state
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like); //toggle like state 
    }
  return (
    <div className="recipe max-w-[400px] px-4 pt-4 pb-8 flex flex-col gap-6 group">
            <div className='relative flex w-[368px] h-[250px] justify-center items-center overflow-clip rounded-[30px]'>
                <Image src={imgSrc} width={368} height={364} className='z-30' alt='recipe image'/>
                <span className={like === false ? 'cursor-pointer absolute p-3 bg-white rounded-full text-[#DBE2E5] group-hover:text-[#FF6363] z-50 text-2xl right-5 top-5 transition-all duration-200' : 'absolute p-3 bg-white rounded-full text-[#FF6363] z-50 text-2xl right-5 top-5 cursor-pointer'} onClick={()=>handleLike()}><FaHeart /></span>
            </div>
            
            <Link href={{
                pathname: `${id}`,
                query:{
                    title: title,
                    imgSrc: imgSrc,
                    detailsTitle2: detailsTitle2
                }
            }}>
                <div className='w-full text-2xl -tracking-[-4%] text-left hover:underline cursor-pointer'>
                    <p className="recipe-title">{title}</p>
                </div>
            
            </Link>

            <div className='flex gap-4 w-fit'>
                <Details title1={detailsTitle1} title2={detailsTitle2} background='' padding=''/>
            </div>
    </div>
  )
}

export default Recipe