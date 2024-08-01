import React from 'react'
import Recipe2 from './Recipe2'

const OtherRecipeBottom = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center px-20 gap-20 mb-[180px]'>
        <h1 className='text-4xl font-semibold leading-[43.57px] -tracking-[4%]'>You may like these recipe too</h1>

        <div className="recipes w-full grid grid-cols-4 gap-10">
            <Recipe2 imgSrc='/images/recipe21.png' title='Mixed Tropical Fruit Salad with Superfood Boosts ' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc='/images/recipe22.png' title='Big and Juicy Wagyu Beef Cheeseburger' detailsTitle1='30 Minutes' detailsTitle2='Western'/>
            <Recipe2 imgSrc='/images/recipe23.png' title='Healthy Japanese Fried Rice with Asparagus' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc='/images/recipe22.png' title='Cauliflower Walnut Vegetarian Taco Meat' detailsTitle1='30 Minutes' detailsTitle2='Eastern'/>
        </div>
    </section>
  )
}

export default OtherRecipeBottom