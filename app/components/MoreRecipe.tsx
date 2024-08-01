import React from 'react'
import Recipe2 from './Recipe2'
import ImgRecipe1 from '../../public/images/recipe21.png'
import ImgRecipe2 from '../../public/images/recipe22.png'
import ImgRecipe3 from '../../public/images/recipe23.png'
import ImgRecipe4 from '../../public/images/recipe24.png'
import ImgRecipe5 from '../../public/images/recipe25.png'
import ImgRecipe6 from '../../public/images/recipe26.png'
import ImgRecipe7 from '../../public/images/recipe27.png'
import ImgRecipe8 from '../../public/images/recipe28.png'

const MoreRecipe = () => {
  return (
    <section className="more-recipe w-full py-[180px] px-20 ">
        <div className='flex justify-between items-center gap-[155px] mb-20'>
            <h1 className="section-heading">Try this delicious recipe to make your day</h1>
            <p className='leading-7'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className="recipes w-full grid grid-cols-4 gap-10">
            <Recipe2 imgSrc={ImgRecipe1} title='Mixed Tropical Fruit Salad with Superfood Boosts ' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc={ImgRecipe2} title='Big and Juicy Wagyu Beef Cheeseburger' detailsTitle1='30 Minutes' detailsTitle2='Western'/>
            <Recipe2 imgSrc={ImgRecipe3} title='Healthy Japanese Fried Rice with Asparagus' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc={ImgRecipe4} title='Cauliflower Walnut Vegetarian Taco Meat' detailsTitle1='30 Minutes' detailsTitle2='Eastern'/>
            <Recipe2 imgSrc={ImgRecipe5} title='Rainbow Chicken Salad with Almond Honey Mustard Dressing' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe2 imgSrc={ImgRecipe6} title='Barbeque Spicy Sandwiches with Chips ' detailsTitle1='30 Minutes' detailsTitle2='Snack'/>
            <Recipe2 imgSrc={ImgRecipe7} title='Fresh Lime Roasted Salmon with Ginger Sauce' detailsTitle1='30 Minutes' detailsTitle2='Seafood'/>
            <Recipe2 imgSrc={ImgRecipe8} title='Firecracker Vegan Lettuce Wraps - Spicy!' detailsTitle1='30 Minutes' detailsTitle2='Japanese'/>
        </div>
    </section>
  )
}

export default MoreRecipe