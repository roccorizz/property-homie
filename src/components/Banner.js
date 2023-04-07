import React from 'react'
import video from '../assets/Video/VID_20221221125454.mp4'
import Search from './Search'
const Banner = () => {
    return (
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='relative'>
                <div className='absolute  ml-5 lg:ml-16 xl:ml-[100px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 lg:mt-10 xl:mt-10 mt-6'>
                    <h1 className='text-[20px] xl:text-6xl lg:text-[45px] md:text-[40px]
                 font-semibold leading-none mb-6 border-white'><span className='text-orange-500 '>Buy, Sell or Rent</span><br /><span className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Your <span className='text-blue-300'>Dream</span> House<br />with us.</span></h1>
                    <p className='invisible lg:visible xl:visible md:visible max-w-[480px] mb-8 text-white '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores voluptates, harum aliquid culpa sed animi perspiciatis blanditiis. Excepturi sed maxime quo.
                    </p>
                </div>

                <div className=' flex-1 lg:flex px-3 sm:px-10'>
                    <video src={video} autoPlay loop muted
                        alt=''
                        className="w-full h-full rounded-xl " />
                    {/* Image */}
                </div>
            </div>
            <Search />
        </section>
    );
};

export default Banner;