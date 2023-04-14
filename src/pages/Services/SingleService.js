import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import { useAuth0 } from '@auth0/auth0-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import AddReview from '../Review/AddReview';
import { toast } from 'react-hot-toast';

const SingleService = () => {
    const { name, balance, picture, description } = useLoaderData();
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    const [isOpen, setIsOpen] = useState(false);


    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function handleReviewSubmit() {
        closeModal();
        toast('Review added successfully!', { appearance: 'success' });
    }

    return (
        <div className='mx-10 mb-20  '>

            <PhotoProvider>
                <form>
                    <h2 className="text-4xl my-5 text-center">{name}</h2>
                    <PhotoView src={picture}><img src={picture} alt="" /></PhotoView>
                    <h3 className="text-4xl my-5 text-center">Service Fee: {balance}</h3>
                    <h3 className="text-4xl my-5 text-center">{description}</h3>
                </form>
            </PhotoProvider>

            {isAuthenticated ?
                <>
                    <button onClick={openModal} className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-8 hover:bg-blue-700'>Add a Review</button>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModal}
                        >
                            <div className="min-h-screen px-4 text-center">
                                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                    &#8203;
                                </span>
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <AddReview user={user} closeModal={handleReviewSubmit} />
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </> :
                <h2 className='text-3xl text-center'>
                    <button onClick={() => loginWithRedirect()}><Link className='hover:text-orange-900 border border-orange-600 px-4 py-2' >Log In
                    </Link></button> to give a review
                </h2>
            }
        </div >
    );
};

export default SingleService;
