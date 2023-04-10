import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/img/person.png';
import { Transition } from '@headlessui/react';

const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="hero mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-items-center">
                    <div className="w-1/2 mt-20">
                        <p className="text-5xl font-semibold ">
                            Hello, I'm <span className="text-amber-500">Rocco Rizz</span>
                        </p>
                        <h1 className="my-5 text-lime-600 text-3xl font-bold">
                            City's most acceptable realtor you can trust.
                        </h1>
                        <p className="py-6">
                            Since 2010, I have assisted over 1500 customers in saving over $85 million on their real estate transactions. I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as assistance in obtaining a home loan, with complete transparency and flawless service.
                        </p>
                        <button
                            className="btn btn-active btn-link font-bold"
                            onClick={() => setIsOpen(true)}
                        >
                            More About Me?
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img
                            src={person}
                            className="h-[600px] rounded-lg shadow-xl"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 max-w-lg mx-auto">
                        <h2 className="text-3xl font-bold text-lime-600 mb-6">About Me</h2>
                        <p className="mb-4">
                            I am a passionate and experienced realtor with over 10 years of experience in the industry. I have helped hundreds of clients buy, sell, and rent properties throughout the city with complete transparency and flawless service.
                        </p>
                        <p className="mb-4">
                            My mission is to provide my clients with a personalized experience that meets their unique needs and exceeds their expectations. I work tirelessly to ensure that every transaction is smooth and successful, and I am committed to helping my clients achieve their real estate goals.
                        </p>
                        <p>
                            If you are looking for a reliable and trustworthy realtor who will put your needs first, look no further than Rocco Rizz.
                        </p>
                        <button
                            className="mt-8 btn btn-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
    );
};

export default About;
