import Image from 'next/image'
import React from 'react'
import Cat1 from '../../public/images/cat1.png'
import Cat2 from '../../public/images/cat-2.png'
import Cat3 from '../../public/images/cat-3.png'
import Cat4 from '../../public/images/cat-4.png'
import Cat5 from '../../public/images/cat-5.png'
import Cat6 from '../../public/images/cat-6.png'
import CategoryItem from './CategoryItem'

const Category = () => {
  return (
    <section className='flex flex-col w-full h-full px-20 gap-20 mb-[180px]'>
        <div className="category-header flex justify-between items-center">
            <h1 className='section-heading'>Categories</h1>
            <span className='capitalize px-[26px] py-5 bg-[#E7FAFE] rounded-2xl'>View all categories</span>
        </div>
        <div className="category-items relative flex justify-between w-full">
            <CategoryItem title='Breakfast' itemImg={Cat1} addClass='category-item-1' imgClass="item-image-1"/>
            <CategoryItem title='Vegan' itemImg={Cat2} addClass='category-item-2' imgClass="item-image-2"/>
            <CategoryItem title='Meat' itemImg={Cat3} addClass='category-item-3' imgClass="item-image-3"/>
            <CategoryItem title='Dessert' itemImg={Cat4} addClass='category-item-4' imgClass="item-image-4"/>
            <CategoryItem title='Lunch' itemImg={Cat5} addClass='category-item-5' imgClass="item-image-5"/>
            <CategoryItem title='Chocolate' itemImg={Cat6} addClass='category-item-6' imgClass="item-image-6"/>
        </div>
    </section>
  )
}

export default Category