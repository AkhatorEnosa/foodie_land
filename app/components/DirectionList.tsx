import Image from 'next/image'
import React from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

// types declaration
type DirectionListProps  = {
    title: string,
    num: string,
    paragraph1: string,
    img: boolean,
    listImage?: string,
    paragraph2?: string,
}

const DirectionList = ({title, num, paragraph1, img, listImage, paragraph2} : DirectionListProps) => {
  return (
    <div className='w-full flex gap-[26px] border-b-[1px] border-black/10 py-12'>
        <RiCheckboxBlankCircleLine  className='text-2xl w-6 h-6 text-[#DBE2E5]'/>
        <div className='flex flex-col gap-6 -tracking-[2% max-w-[792px] text-justify]'>
            <h2 className='text-2xl font-semibold leading-[29.05px]'>{num}. {title} </h2>
            <div className={img ===  true ? 'flex flex-col gap-12 leading-[26px]' : 'flex flex-col leading-[26px]'}>

                <p>{paragraph1}</p>
                <div className='w-fit md:rounded-[20px] overflow-clip'>
                    {listImage && <Image src={listImage} width={792} height={400} alt='image'/>}
                </div>

                <p>{paragraph2}</p>
            </div>
        </div>

    </div>
  )
}

export default DirectionList