import React, { useEffect, useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import ServiceCard from './ServiceCard';


const AllServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://propertyhomierocco-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
    }, [])
    return (
        <div className='container mx-auto '>


            <div className='w-full h-full'>

                <p className='text-4xl font-bold text-center lg:text-end my-5 text-orange-600'>All Services</p><hr className=' border-t-2 border-orange-700 my-5' />
            </div>

            {isLoading ?
                <ImSpinner2 className='mx-auto animate-spin text-orange-700 text-4xl my-52' />
                :
                <div className='grid gap-0 md:gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mb-10 mx-auto  text-center '>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AllServices;