import Image from 'next/image'
import React from 'react'
import ImgLeft from '../../public/images/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png'
import ImgRight from '../../public/images/right-deliciousness.png'
import Rucola from '../../public/images/rucola-png.png'

const ContactUs = () => {
  return (
    <section className="contact-us w-full px-20 mb-[160px]">
        <div className='relative flex flex-col items-center justify-center bg-[#E7F9FD] rounded-[60px] py-20 gap-16 overflow-clip'>
            <div className='w-[70%] flex flex-col justify-center items-center text-center gap-6'>
                <h1 className="section-heading">Deliciousness to your inbox</h1>
                 <p className='leading-7 w-fit'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqut enim ad minim </p>
            </div>
            <div className='w-[480px] p-[10px] bg-white flex justify-between items-center text-sm leading-[16.94px] -tracking-[2%] rounded-3xl'>
                <input type="text" placeholder='Your email address...' className='px-[22px] outline-none border-none z-50 placeholder:text-black/40'/>

                <div role="button" className='flex justify-center w-fit items-center px-[46px] py-[22px] bg-black text-white rounded-2xl z-50'>
                    Subscribe
                </div>
            </div>
            <div className='absolute w-screen flex justify-between -bottom-36'>
                <Image src={ImgLeft} width={409.54} height={400.08} alt='image' className='relative rotate-[30deg] bottom-12'/>
                <div className='relative -bottom-11 -right-12'>
                    <Image src={Rucola} width={90} height={90.96} alt='image' className='absolute -left-32 top-6'/>
                    <Image src={ImgRight} width={355.07} height={355.62} alt='image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs