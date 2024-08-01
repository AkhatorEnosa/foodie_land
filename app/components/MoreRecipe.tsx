import React from 'react'
import Recipe2 from './Recipe2'
import { MORERECIPE } from '../constants'
import Link from 'next/link'

const MoreRecipe = () => {
  return (
    <section className="more-recipe w-full py-[180px] px-20 ">
        <div className='flex justify-between items-center gap-[155px] mb-20'>
            <h1 className="section-heading">Try this delicious recipe to make your day</h1>
            <p className='leading-7'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className="recipes w-full grid grid-cols-4 gap-10">
            
            {MORERECIPE.map((recipe) => (

            <Link href={{
                pathname: `${recipe.id}`,
                query:{
                    title: recipe.title,
                    imgSrc: recipe.imgSrc,
                    detailsTitle2: recipe.detailsTitle2,
                }
            }} key={recipe.id}>
                <Recipe2
                    id={recipe.id}
                    imgSrc={recipe.imgSrc} 
                    title={recipe.title} 
                    detailsTitle1={recipe.detailsTitle1} 
                    detailsTitle2={recipe.detailsTitle2} />
                </Link>
            ))}
        </div>
    </section>
  )
}

export default MoreRecipe