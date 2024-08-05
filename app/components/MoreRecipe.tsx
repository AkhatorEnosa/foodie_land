import React from 'react'
import Recipe2 from './Recipe2'
import { MORERECIPE } from '../constants'
import Link from 'next/link'

const MoreRecipe = () => {
  return (
    <section className="more-recipe w-full flex flex-col py-[180px] px-20 ">
        <div className='flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-5 md:gap-[155px] mb-20'>
            <h1 className="section-heading text-3xl lg:text-5xl">Try this delicious recipe to make your day</h1>
            <p className='leading-7'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className="recipes w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
            {/* Iterate through MORERECIPE array then return something */}
            {MORERECIPE.map((recipe) => (
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

export default MoreRecipe