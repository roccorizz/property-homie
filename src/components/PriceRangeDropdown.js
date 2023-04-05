import React, { useContext, useEffect, useState } from 'react';
import { HouseContext } from './HouseContext';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

import { Menu } from '@headlessui/react';
const PriceRangeDropdown = () => {
    const { price, setPrice } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    const prices = [
        {
            value: 'Price range (any)',
        },
        {
            value: '10000-12999',
        },
        {
            value: '13000-15999',
        },
        {
            value: '13000-15999',
        },
        {
            value: '16000-18999',
        },
        {
            value: '19000-21999',
        },
        {
            value: '22000-29999',
        },
        {
            value: '30000-40000',
        }

    ]

    return <Menu as='div' className='dropdown relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)}
            className='dropdown-btn w-full text-left'
        >
            <RiWallet3Line className='dropdown-icon-primary' />
            <div>
                <div className='text-[15px] font-medium leading-tight'>{price}</div>
                <div className='text-[13px]'>Choose price range</div>

            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
            )}
        </Menu.Button>
        <Menu.Items className='dropdown-menu'>
            {prices.map((price, index) => {
                return (

                    <Menu.Item
                        onClick={() => setPrice(price.value)} className='cursor-pointer hover:text-orange-700 transition' as='li' key={index}>
                        {price.value}
                    </Menu.Item>
                );
            })}
        </Menu.Items>
    </Menu>

};

export default PriceRangeDropdown;