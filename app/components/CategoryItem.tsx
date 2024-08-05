import React from 'react'
import Image from 'next/image'

//declating types
type CategoryProps = {
    itemImg: string,
    addClass: string,
    title: string,
    imgClass:string
}

const CategoryItem = ({itemImg, addClass, title, imgClass} : CategoryProps) => {
  return (
    
    <div className={`${addClass} relative flex flex-col gap-11 justify-center items-center group w-40 md:w-auto pb-[30px] pt-[100px] sm:px-[20px] md:px-[50px] rounded-[30px] cursor-pointer`}>
        <Image src={itemImg} width={100} height={100} alt='category-item' className={`${imgClass} absolute -top-[26px] group-hover:-top-[32px] w-[100px] h-[100px] drop-shadow-lg transition-all duration-200`}/>
        <p>{title}</p>
    </div>
  )
}

export default CategoryItem