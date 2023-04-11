import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://propertyhomierocco-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mx-auto'>

            <div className='text-center  my-4 bg-[url(https://i.ibb.co/kXRrQ2Z/image-3033200-1280.jpg)] h-[50px]'>
                <div className='w-full h-full backdrop-blur'>

                    <p className='text-5xl font-bold text-white'>All Services</p>
                </div>
            </div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;