import React from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

const RecipeListItem = () => {
  return (
    <div className='flex gap-6 justify-start items-center hover:cursor-pointer'>
        <RiCheckboxBlankCircleLine  className='text-2xl'/>
        <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default RecipeListItem