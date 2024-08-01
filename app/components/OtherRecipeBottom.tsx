import React from 'react'
import Recipe2 from './Recipe2'
import { MORERECIPE } from '../constants'
import Link from 'next/link'

const OtherRecipeBottom = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center px-20 gap-20 mb-[180px]'>
        <h1 className='text-4xl font-semibold leading-[43.57px] -tracking-[4%]'>You may like these recipe too</h1>

        <div className="recipes w-full grid grid-cols-4 gap-10">

          {MORERECIPE.filter((recipe, index) => index < 4).map((recipe) => (

                <Recipe2
                    key={recipe.id}
                    id={recipe.id}
                    imgSrc={recipe.imgSrc} 
                    title={recipe.title} 
                    detailsTitle1={recipe.detailsTitle1} 
                    detailsTitle2={recipe.detailsTitle2} />
            ))}
        </div>
    </section>
  )
}

export default OtherRecipeBottom