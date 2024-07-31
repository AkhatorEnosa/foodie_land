import React from 'react'
import { PiTimerFill } from 'react-icons/pi'

type detailsProps = {
    title: string,
    icon: string,
    background?: string 
}

const Details = ({icon, title, background}: detailsProps) => {
  return (
    <div className={`w-fit flex gap-[10px] justify-center items-center ${background} p-2 rounded-[30px] text-sm font-medium`}>
        <PiTimerFill className='w-6 h-6'/> <span>{title}</span>
    </div>
  )
}

export default Details