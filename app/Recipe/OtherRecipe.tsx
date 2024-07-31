import Image from 'next/image'
import React from 'react'

type OtherRecipeProps = {
    imgSrc: string,
    title: string,
    author: string
}

const OtherRecipe = ({imgSrc, title, author} : OtherRecipeProps) => {
  return (
    <div className='relative flex gap-6 w-full items-center overflow-clip'>
        <div className='flex justify-center items-center w-[180px] h-[120px] rounded-[20px] overflow-clip'>
            <Image src={imgSrc} width={180} height={174.72} className='z-30' alt='recipe image'/>
        </div>
        <div className="details flex flex-col gap-4">
            <p className='font-semibold text-xl -tracking-[4%]'>{title}</p>
            <p className='font-medium text-sm leading-[16.94px] -tracking-[2%]'>By {author}</p>
        </div>
    </div>
  )
}

export default OtherRecipe