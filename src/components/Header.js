import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
function Header() {
    return (
        <header className='py-3 mb-12 border-b'>
            <div className='container mx-auto flex justify-between items-center'>
                {/*  logo  */}
                <div>

                    <Link className='flex flex-row items-center gap-x-2 ' to='/'>
                        <img className='lg:w-16 lg:h-14 xl:w-16 xl:h-14 w-14 h-12' src={logo} alt='' />
                        <h2 className='lg:text-2xl xl:text-2xl font-semibold text-sm '>Property<span className='text-orange-400'>Homie</span></h2>
                    </Link>
                </div>

                {/* buttons */}
                <div className='flex items-center gap-6 lg:text-[13px] xl:text-[15px] text-[10px] '>
                    <Link className='hover:text-orange-900' to=''>Log In</Link>
                    <Link className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition' to=''>Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header