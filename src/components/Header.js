import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { useAuth0 } from "@auth0/auth0-react";
// import AuthContext from '../Contexts/Authprovider/Authprovider'
function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const { isAuthenticated, loading, loginWithRedirect, logout } = useAuth0();
    // const { user, logOut } = useContext();
    // const handleLogOut = () => {
    //     logOut()
    //         .then()
    //         .catch();

    // }
    const menuItems = <>
        <li className='font-semibold '><Link className='group text-orange-600 transition  duration-300' to='/'>Home <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
        <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/aboutme'>About Me <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
        <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/blog'>Blog <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
        <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/allservices'>All Services <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
        <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/contact'>Contact <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>

        {
            isAuthenticated ?
                <>
                    <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/addaservice'>Add a Service <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
                    <li className='font-semibold'><Link className='group text-orange-600 transition duration-300' to='/myreviews'>My Review <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span></Link></li>
                    <li className='font-semibold'><Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='group text-black transition duration-300' >Logout <span className="block mt-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-900"></span>
                    </Link>
                    </li>
                </>
                :
                <>


                    <li>

                        <button onClick={() => loginWithRedirect()}><Link className='hover:text-orange-900 border border-orange-600 px-4 py-2' >Log In
                        </Link></button>
                    </li>
                </>


        }

    </>
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
                <div className="flex flex-row items-center gap-x-2">
                    <ul className="hidden lg:flex items-center gap-8 lg:text-[13px] xl:text-[15px] text-[10px]">
                        {menuItems}
                    </ul>
                </div>
                {/* buttons */}
                <div className='hidden lg:flex items-center gap-6 lg:text-[13px] xl:text-[15px] text-[10px]'>

                    {
                        !isAuthenticated ?
                            <>
                                <Link
                                    className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition'
                                    to=''
                                >
                                    Sign Up
                                </Link>
                            </>
                            :
                            <>
                            </>

                    }


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
                                        className='block mt-2 text-center hover:text-orange-900'
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
                                <ul className='mt-12'>
                                    <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/'>Home</Link></li>
                                    <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/aboutme'>About Me</Link></li>
                                    <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/blog'>Blog</Link></li>
                                    <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/allservices'>All Services</Link></li>
                                    <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/contact'>Contact</Link></li>
                                    {
                                        isAuthenticated ?
                                            <>
                                                <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/addaservice'>Add a Service</Link></li>
                                                <li className='font-semibold'><Link className='block  mb-4 text-center hover:bg-orange-700 hover:text-white py-3 rounded-lg transition' to='/myreviews'>My Review </Link></li>
                                                <li className='font-semibold'><Link onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='block border border-orange-700 mb-4 rounded-lg py-3 text-center hover:text-white hover:bg-orange-700' >Logout
                                                </Link>
                                                </li>
                                            </>
                                            :
                                            <>


                                                <li>

                                                    <Link onClick={() => loginWithRedirect()} className='block border border-orange-700 mb-4 rounded-lg py-3 text-center hover:text-white hover:bg-orange-700' >Log In
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className='block bg-orange-700 hover:bg-white hover:text-orange-700 text-white px-4 py-3 rounded-lg transition text-center'
                                                        to=''
                                                    >
                                                        Sign Up
                                                    </Link>
                                                </li>
                                            </>


                                    }


                                </ul>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </header >
    )
}

export default Header;
