import React from 'react'
import RecipeListItem from './RecipeListItem'
import Image from 'next/image'
import OtherRecipe from './OtherRecipeSide'
import Ad from '../../public/images/ad.png'
import AdImg from '../../public/images/ad-img.png'

const Ingredients = () => {
  return (
    <section className="w-full ingredients grid grid-cols-1 md:grid-cols-7 items-left px-10 md:px-20">
        <div className="left col-span-4">
            <h1 className='mb-12 text-[36px] font-semibold leading-[43.57px] -tracking-[4%]'>Ingredients</h1>
            <div className='flex flex-col gap-8 mb-16'>
                <h2 className='font-semibold text-2xl leading-[29.05px] -tracking-[4%]'>For main dish</h2>
                <div className='w-full flex flex-col gap-16'>
                    <RecipeListItem />
                    <RecipeListItem />
                    <RecipeListItem />
                    <RecipeListItem />
                    <RecipeListItem />
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h2 className='font-semibold text-2xl leading-[29.05px] -tracking-[4%]'>For the Sauce</h2>
                <div className='w-full flex flex-col gap-16'>
                    <RecipeListItem />
                    <RecipeListItem />
                    <RecipeListItem />
                </div>
            </div>
        </div>
        <div className="right col-span-3 hidden md:block">
            <h1 className='text-[32px] font-semibold leading-[38.73px] -tracking-[4%] mb-8'>Other Recipe</h1>
            <div className="recipes flex flex-col gap-6">
                <OtherRecipe title='Chicken Meatball with Creamy Chees...' imgSrc='/images/recipe5.png' author='Andreas Paula'/>
                <OtherRecipe title='The Creamiest Creamy Chicken an...' imgSrc='/images/recipe8.png' author='Andreas Paula'/>
                <OtherRecipe title='The Best Easy One Pot Chicken and Rice' imgSrc='/images/recipe7.png' author='Andreas Paula'/>
                <div className='ad relative min-w-[200px] max-w-[400px] h-fit flex flex-col justify-center items-center text-white z-30'>
                    <div className='relative w-full flex flex-col items-center z-50'>
                        <p className='ad-bold font-normal textlg md:text-2xl p-3 md:p-0 text-center'>Don’t forget to eat healthy food</p>
                        <Image src={AdImg}  width={368} height={364} className='z-30' alt="image"/>
                        <p className='font-medium text-xs lg:text-sm'>www.foodieland.com</p>
                    </div>
                    <Image src={Ad} width={368} height={364} className='absolute z-30' alt='image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ingredients