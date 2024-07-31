import React from 'react'
import Recipe2 from '../Hompage/Recipe2'
import ImgRecipe1 from '../../public/images/recipe21.png'
import ImgRecipe2 from '../../public/images/recipe22.png'
import ImgRecipe3 from '../../public/images/recipe23.png'
import ImgRecipe4 from '../../public/images/recipe24.png'

const OtherRecipeBottom = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center px-20 gap-20 mb-[180px]'>
        <h1 className='text-4xl font-semibold leading-[43.57px] -tracking-[4%]'>You may like these recipe too</h1>

        <div className="recipes w-full grid grid-cols-4 gap-10">
            <Recipe2 imgSrc={ImgRecipe1} title='Mixed Tropical Fruit Salad with Superfood Boosts ' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc={ImgRecipe2} title='Big and Juicy Wagyu Beef Cheeseburger' detailsTitle1='30 Minutes' detailsTitle2='Western'/>
            <Recipe2 imgSrc={ImgRecipe3} title='Healthy Japanese Fried Rice with Asparagus' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc={ImgRecipe4} title='Cauliflower Walnut Vegetarian Taco Meat' detailsTitle1='30 Minutes' detailsTitle2='Eastern'/>
        </div>
    </section>
  )
}

export default OtherRecipeBottom