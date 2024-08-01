import Image from 'next/image'
import React from 'react'
import Ad from '../../public/images/ad.png'
import AdImg from '../../public/images/ad-img.png'
import Recipe from './Recipe'

const Recipes = () => {
  return (
    <section className='flex flex-col w-full h-auto items-center justify-center px-20 text-center gap-24 mb-[143px]'>
        <div className="recipes-header flex flex-col w-[60%] gap-6 items-center">
            <h2 className='section-heading'>Simple and tasty recipes</h2>
            <p className='leading-7 w-[90%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="recipes w-full grid grid-cols-3 gap-10">
            <Recipe imgSrc='/images/recipee1.png' title='Big and Juicy Wagyu Beef Cheeseburger' detailsTitle1='30 Minutes' detailsTitle2='Snack'/>
            <Recipe imgSrc='/images/recipe2.png' title='Fresh Lime Roasted Salmon with Ginger Sauce' detailsTitle1='30 Minutes' detailsTitle2='Fish'/>
            <Recipe imgSrc='/images/recipe3.png' title='Strawberry Oatmeal Pancake with Honey Syrup' detailsTitle1='30 Minutes' detailsTitle2='Breakfast'/>
            <Recipe imgSrc='/images/recipe4.png' title='Fresh and Healthy Mixed Mayonnaise Salad' detailsTitle1='30 Minutes' detailsTitle2='Healthy'/>
            <Recipe imgSrc='/images/recipe5.png' title='Chicken Meatballs with Cream Cheese' detailsTitle1='30 Minutes' detailsTitle2='Meat'/>
            <div className='ad relative max-w-[400px] flex flex-col justify-center -items-center text-white'>
                <Image src={Ad} width={368} height={364} className='z-30' alt='image'/>
                <div className='absolute flex flex-col justify-center items-center z-50'>
                    <p className='ad-bold font-normal text-2xl'>Don’t forget to eat healthy food</p>
                    <Image src={AdImg}  width={368} height={364} className='z-30' alt="image"/>
                    <p className='font-medium text-sm'>www.foodieland.com</p>
                </div>
            </div>
            <Recipe imgSrc='/images/recipe6.png' title='Fruity Pancake with Orange & Blueberry' detailsTitle1='30 Minutes' detailsTitle2='Sweet'/>
            <Recipe imgSrc='/images/recipe7.png' title='The Best Easy One Pot Chicken and Rice' detailsTitle1='30 Minutes' detailsTitle2='Snack'/>
            <Recipe imgSrc='/images/recipe8.png' title='The Creamiest Creamy Chicken and Bacon Pasta' detailsTitle1='30 Minutes' detailsTitle2='Noodles'/>
        </div>
    </section>
  )
}

export default Recipes