import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <header className='py-3 mb-12 border-b'>
            <div className='container mx-auto flex justify-between items-center'>
                {/*  logo  */}
                <div>
                    <Link className='flex flex-row items-center gap-x-2' to='/'>
                        <img
                            className='lg:w-16 lg:h-14 xl:w-16 xl:h-14 w-14 h-12'
                            src={logo}
                            alt=''
                        />
                        <h2 className='lg:text-2xl xl:text-2xl font-semibold text-sm'>
                            Property<span className='text-orange-400'>Homie</span>
                        </h2>
                    </Link>
                </div>

                {/* buttons */}
                <div className='hidden lg:flex items-center gap-6 lg:text-[13px] xl:text-[15px] text-[10px]'>
                    <Link className='hover:text-orange-900' to=''>
                        Log In
                    </Link>
                    <Link
                        className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition'
                        to=''
                    >
                        Sign Up
                    </Link>
                </div>

                {/* mobile sidebar */}
                <div className='lg:hidden'>
                    <button
                        className='flex items-center justify-center'
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >

                        <svg
                            className='w-6 h-6 text-gray-500'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            {isSidebarOpen ? (
                                <path d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path d='M3 12h18M3 6h18M3 18h18' />
                            )}
                        </svg>

                    </button>

                    {isSidebarOpen && (
                        <div className='fixed inset-0 z-10 bg-white shadow-lg'>
                            <div className='p-4'>
                                <div style={{ float: 'right' }}>
                                    <button
                                        className='block mt-4 text-center hover:text-orange-900'
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        <svg
                                            className='w-6 h-6 text-gray-500'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        >
                                            <path d='M18 6L6 18M6 6l12 12' />
                                        </svg>
                                    </button>
                                </div>
                                <Link
                                    className='block mt-12 mb-4 text-center hover:text-orange-900'
                                    to=''
                                >
                                    Log In
                                </Link>
                                <Link
                                    className='block bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition text-center'
                                    to=''
                                >
                                    Sign Up
                                </Link>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </header >
    )
}

export default Header;
