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
                        <img className='w-16 h-14' src={logo} alt='' />
                        <h2 className='lg:text-2xl font-semibold text-sm '>Property Homie</h2>
                    </Link>
                </div>

                {/* buttons */}
                <div className='flex items-center gap-6 lg:text-lg text-sm '>
                    <Link className='hover:text-orange-900' to=''>Log In</Link>
                    <Link className='bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg transition' to=''>Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header