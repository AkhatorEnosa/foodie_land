import React from 'react'
import { PiForkKnifeFill, PiTimerFill } from 'react-icons/pi'

type detailsProps = {
    title1: string,
    title2: string,
    // icon: string,
    background?: string 
    padding?: string 
}

const Details = ({ title1, title2, background, padding}: detailsProps) => {
  return (
    <div className={`w-fit flex gap-6 justify-center items-center ${padding} text-sm font-medium`}>
        <div className={`flex gap-[10px] justify-center items-center ${padding} ${background} rounded-[30px]`}>
          <PiTimerFill className='text-2xl'/> <span>{title1}</span>
        </div>
        <div className={`flex gap-[10px] justify-center items-center ${padding} ${background} rounded-[30px]`}>
          <PiForkKnifeFill className='text-2xl'/> <span>{title2}</span>
        </div>
    </div>
  )
}

export default Details