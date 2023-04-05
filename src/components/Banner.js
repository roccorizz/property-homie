import React from 'react'
import Image from '../assets/img/house-banner.png'
import Search from './Search'
const Banner = () => {
    return (
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'><span className='text-violet-700 '>Buy/Sell/Rent</span> Your Dream House with us.</h1>
                    <p className='max-w-[480px] mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores voluptates, harum aliquid culpa sed animi perspiciatis blanditiis. Excepturi sed maxime quo.
                    </p>
                </div>
                {/* Image */}
                <div className='hidden flex-1 lg:flex justify-end items-end'>
                    <img src={Image} alt="" />
                </div>
            </div>
            <Search />
        </section>
    );
};

export default Banner;