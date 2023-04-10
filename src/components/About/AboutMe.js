import React from 'react';

import person from '../../assets/img/person.png'
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FcRating, FcBriefcase } from 'react-icons/fc';
import { RiUserHeartFill } from 'react-icons/ri';
import { VscDebugBreakpointData } from 'react-icons/vsc';

const AboutMe = () => {
    return (
        <div>
            <div className="mx-20 my-10">
                <div className="flex xl:flex-row flex-col lg:flex-row">

                    <div className='mt-20 w-1/2 pl-2'>
                        <p className=' text-5xl font-semibold '>Your Homie, <span className='text-amber-500 text-5xl'>Rocco Rizz</span></p>
                        <h1 className="my-5 text-lime-600 text-3xl font-bold">Real estate expert</h1>
                        <p className="py-6">Since 2010, I have assisted over 1500 customers in saving over $85 million on their real estate transactions. I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as assistance in obtaining a home loan, with complete transparency and flawless service.</p>
                        <h3 className='text-3xl font-semibold text-teal-600 py-2'>My expertise:</h3>
                        <div className='grid grid-cols-2'>
                            <div className='flex my-2'>

                                <h4 className='px-2 mt-0.5 text-2xl'><FcBriefcase /></h4> <h4 className='text-xl'>08 Years of Experiences</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2 mt-0.5 text-2xl'><RiUserHeartFill /></h4> <h4 className='text-xl'>1000+ Satisfied Clients</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2 mt-0.5 text-2xl'><FaMapMarkedAlt /></h4> <h4 className='text-xl'>30 Locations Covered</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2 mt-0.5 text-2xl'><FcRating /></h4> <h4 className='text-xl'>20+ Five Star Ratings</h4>
                            </div>



                        </div>
                        <div>
                            <h3 className='text-3xl font-semibold text-teal-600 py-2'>My Responsibilities:</h3>
                            <div className='flex my-2'>

                                <h4 className='px-2  text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Provide guidance and assist sellers and buyers in marketing and purchasing property for the right price under the best terms</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2  text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Determine clients’ needs and financials abilities to propose solutions that suit them</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2  text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Intermediate negotiation processes, consult clients on market conditions, prices, mortgages, legal requirements and related matters, ensuring a fair and honest dealing</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2  text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Perform comparative market analysis to estimate properties’ value</h4>
                            </div>
                            <div className='flex my-2'>

                                <h4 className='px-2  text-2xl'><VscDebugBreakpointData /></h4> <h4 className=''>Maintain and update listings of available properties
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <img src={person} className=" xl:w-[550px] xl:h-[830px] sw-[300px] h-[400px] rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;