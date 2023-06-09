import React from 'react';

import person from '../../assets/img/person.png'
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FcRating, FcBriefcase } from 'react-icons/fc';
import { RiUserHeartFill } from 'react-icons/ri';
import { VscDebugBreakpointData } from 'react-icons/vsc';

const AboutMe = () => {
    return (

        <div className="mx-20 my-5 md:my-10">
            <div className="flex  flex-col lg:flex-row items-center gap-2">
                <div className='relative transform -scale-x-100 '>
                    <img src={person} className=" xl:w-[550px] xl:h-[830px] lg:w-[500px] lg:h-[750px] w-full h-auto md:w-[300px] md:h-[450px] rounded-lg" alt="" />
                    {/* <div className="absolute bottom-0 left-[64px] right-[32px] md:left-[84px] md:right-[41px] lg:left-[129px] lg:right-[64px] xl:left-[153px] xl:right-[76px] h-8  justify-center bg-gradient-to-b from-transparent via-gray-200 to-white"></div> */}
                </div>
                <div className='mt-10 md:mt-14 lg:mt-14 lg:w-1/2 w-full '>
                    <p className=' lg:text-3xl md:text-3xl text-lg font-semibold '>Your Homie, <span className='text-amber-500 lg:text-4xl md:text-3xl text-xl'>Rocco Rizz</span></p>
                    <h1 className="my-2 md:my-3 lg:my-4 text-lime-600 text-md md:text-2xl lg:text-2xl xl:text-3xl font-bold">Real estate expert</h1>
                    <p className="py-2 md:py-4 lg:py-5 text-sm md:text-md lg:text-lg">Since 2010, I have assisted over 1500 customers in saving over $85 million on their real estate transactions. I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as assistance in obtaining a home loan, with complete transparency and flawless service.</p>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-teal-600 py-2'>My expertise:</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='flex my-2'>

                            <h4 className='px-2 mt-0.5 text-lg md:text-2xl'><FcBriefcase /></h4> <h4 className='text-md md:text-lg lg:text-xl'>08 Years of Experiences</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2 mt-0.5 text-lg md:text-2xl'><RiUserHeartFill /></h4> <h4 className='text-md md:text-lg lg:text-xl'>1000+ Satisfied Clients</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2 mt-0.5 text-lg md:text-2xl'><FaMapMarkedAlt /></h4> <h4 className='text-md md:text-lg lg:text-xl'>30 Locations Covered</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2 mt-0.5 text-lg md:text-2xl'><FcRating /></h4> <h4 className='text-md md:text-lg lg:text-xl'>20+ Five Star Ratings</h4>
                        </div>



                    </div>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-teal-600 py-2'>My Responsibilities:</h3>
                        <div className='flex my-2'>

                            <h4 className='px-2  text-xl md:text-2xl'><VscDebugBreakpointData /></h4> <h4 className='tex'>Provide guidance and assist sellers and buyers in marketing and purchasing property for the right price under the best terms</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2  text-xl md:text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Determine clients’ needs and financials abilities to propose solutions that suit them</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2  text-xl md:text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2  text-xl md:text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Perform comparative market analysis to estimate properties’ value</h4>
                        </div>
                        <div className='flex my-2'>

                            <h4 className='px-2  text-xl md:text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Maintain and update listings of available properties
                            </h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default AboutMe;