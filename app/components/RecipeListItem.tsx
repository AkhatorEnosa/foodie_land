'use client'

import React, { useState } from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri'

const RecipeListItem = () => {
  const [check , setCheck] = useState(false)

  const handleCheck = () => {
        setCheck(!check);
  }
  
  return (
    <div className='flex gap-6 justify-start items-center hover:text-black/60 hover:cursor-pointer' onClick={()=>handleCheck()}>
        {check  === false ? <RiCheckboxBlankCircleLine  className='text-2xl'/> : <RiCheckboxCircleFill  className='text-2xl'/>}
        <p className={check  === false ? '' : 'line-through' }>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default RecipeListItem