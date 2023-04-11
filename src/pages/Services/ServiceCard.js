import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, balance, name, about } = service;
    return (
        <div className="bg-base-100 shadow-xl w-96 transform transition duration-300 ease-in-out hover:scale-105 border rounded-xl mb-3">
            <div className="aspect-w-16 aspect-h-9 ">
                <img src={picture} alt="" className="object-cover h-52 w-full" />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-xl text-red-600 font-semibold mb-4">
                    Starting from {balance}
                </p>
                <p className="text-base text-slate-500 mb-4">{about}</p>
                <div className="flex justify-end ">
                    <Link to={`/singleservice/${_id}`}>
                        <button className="bg-orange-900 p-3 hover:bg-primary-700 text-white">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;