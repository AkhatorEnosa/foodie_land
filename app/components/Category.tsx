import Image from 'next/image'
import React from 'react'
import CategoryItem from './CategoryItem'

// Category section
const Category = () => {
  return (
    <section className='flex flex-col w-full h-full px-10 md:px-20 gap-20 mb-[180px]'>
        <div className="category-header flex justify-between items-center">
            <h1 className='section-heading text-3xl lg:text-5xl'>Categories</h1>
            <span className='capitalize px-4 md:px-[26px] py-3 md:py-5 bg-[#E7FAFE] rounded-2xl text-xs md:text-base'>View all categories</span>
        </div>
        {/* All categories */}
        <div className="category-items w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-16 sm:gap-10 md:gap-10 lg:gap-5 justify-center items-center xl:justify-between">
            <CategoryItem title='Breakfast' itemImg='/images/cat1.png' addClass='category-item-1' imgClass="item-image-1"/>
            <CategoryItem title='Vegan' itemImg='/images/cat-2.png' addClass='category-item-2' imgClass="item-image-2"/>
            <CategoryItem title='Meat' itemImg='/images/cat-3.png' addClass='category-item-3' imgClass="item-image-3"/>
            <CategoryItem title='Dessert' itemImg='/images/cat-4.png' addClass='category-item-4' imgClass="item-image-4"/>
            <CategoryItem title='Lunch' itemImg='/images/cat-5.png' addClass='category-item-5' imgClass="item-image-5"/>
            <CategoryItem title='Chocolate' itemImg='/images/cat-6.png' addClass='category-item-6' imgClass="item-image-6"/>
        </div>
    </section>
  )
}

export default Category