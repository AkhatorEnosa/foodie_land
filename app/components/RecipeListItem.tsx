'use client'

import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

const RecipeListItem = () => {
  const [check , setCheck] = useState(false)

  const handleCheck = () => {
        setCheck(!check);
  }
  
  return (
    <div className='flex gap-6 justify-start items-center hover:cursor-pointer' onClick={()=>handleCheck()}>
        {check  === false ? <RiCheckboxBlankCircleLine  className='text-2xl'/> : <RiCheckboxCircleFill  className='text-2xl'/>}
        <p className={check  === false ? '' : 'line-through text-black/60' }>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default RecipeListItem