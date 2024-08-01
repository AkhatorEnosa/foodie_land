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
    
    <div className={`${addClass} flex flex-col gap-11 justify-center items-center pb-[30px] pt-[100px] px-[50px] rounded-[30px]`}>
        <Image src={itemImg} width={100} height={100} alt='category-item' className={`${imgClass} absolute -top-[26px] w-[100px] h-[100px] drop-shadow-lg`}/>
        <p>{title}</p>
    </div>
  )
}

export default CategoryItem