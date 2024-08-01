import React from 'react'
import Recipe2 from './Recipe2'

const MoreRecipe = () => {
  return (
    <section className="more-recipe w-full py-[180px] px-20 ">
        <div className='flex justify-between items-center gap-[155px] mb-20'>
            <h1 className="section-heading">Try this delicious recipe to make your day</h1>
            <p className='leading-7'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className="recipes w-full grid grid-cols-4 gap-10">
            <Recipe2 imgSrc='/images/recipe21.png' title='Mixed Tropical Fruit Salad with Superfood Boosts ' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc='/images/recipe22.png' title='Big and Juicy Wagyu Beef Cheeseburger' detailsTitle1='30 Minutes' detailsTitle2='Western'/>
            <Recipe2 imgSrc='/images/recipe23.png' title='Healthy Japanese Fried Rice with Asparagus' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc='/images/recipe24.png' title='Cauliflower Walnut Vegetarian Taco Meat' detailsTitle1='30 Minutes' detailsTitle2='Eastern'/>
            <Recipe2 imgSrc='/images/recipe25.png' title='Rainbow Chicken Salad with Almond Honey Mustard Dressing' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc='/images/recipe26.png' title='Barbeque Spicy Sandwiches with Chips ' detailsTitle1='30 Minutes' detailsTitle2='Snack'/>
            <Recipe2 imgSrc='/images/recipe27.png' title='Fresh Lime Roasted Salmon with Ginger Sauce' detailsTitle1='30 Minutes' detailsTitle2='Seafood'/>
            <Recipe2 imgSrc='/images/recipe28.png' title='Firecracker Vegan Lettuce Wraps - Spicy!' detailsTitle1='30 Minutes' detailsTitle2='Japanese'/>
        </div>
    </section>
  )
}

export default MoreRecipe