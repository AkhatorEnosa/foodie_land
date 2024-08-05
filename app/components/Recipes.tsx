import Image from 'next/image'
import React from 'react'
import Ad from '../../public/images/ad.png'
import AdImg from '../../public/images/ad-img.png'
import Recipe from './Recipe'
import { RECIPE1PART1, RECIPE1PART2, RECIPE1PART3 } from '../constants'
import Link from 'next/link'

const Recipes = () => {
  return (
    <section className='flex flex-col w-full h-auto items-center justify-center px-20 text-center gap-24 mb-[143px]'>
        <div className="recipes-header flex flex-col w-[60%] gap-6 items-center">
            <h2 className='section-heading text-3xl lg:text-5xl'>Simple and tasty recipes</h2>
            <p className='leading-7 w-[90%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <div className="recipes w-full grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">

        {/* get recipes */}
        {RECIPE1PART1.map((recipe) => (
            <Recipe
                key={recipe.id}
                id={recipe.id}
                imgSrc={recipe.imgSrc} 
                title={recipe.title} 
                detailsTitle1={recipe.detailsTitle1} 
                detailsTitle2={recipe.detailsTitle2} />
        ))}
            
        {RECIPE1PART2.map((recipe) => (
            <Recipe
                key={recipe.id}
                id={recipe.id}
                imgSrc={recipe.imgSrc} 
                title={recipe.title} 
                detailsTitle1={recipe.detailsTitle1} 
                detailsTitle2={recipe.detailsTitle2} />
        ))}
            <div className='ad relative max-w-[400px] flex flex-col justify-center -items-center text-white z-30'>
                <Image src={Ad} width={368} height={364} className='z-30' alt='image'/>
                <div className='absolute flex flex-col justify-center items-center z-50'>
                    <p className='ad-bold font-normal text-2xl'>Don’t forget to eat healthy food</p>
                    <Image src={AdImg}  width={368} height={364} className='z-30' alt="image"/>
                    <p className='font-medium text-sm'>www.foodieland.com</p>
                </div>
            </div>
            
        {RECIPE1PART3.map((recipe) => (

            <Recipe
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

export default Recipes