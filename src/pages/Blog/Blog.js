import React from 'react';



import { useState } from "react";
import { Disclosure } from "@headlessui/react";

function Blog() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "An Expert Makes All the Difference When You Sell Your House",
            content: "Home price appreciation has moderated this year. If you sell your house on your own, you may be more likely to overshoot your asking price because you're not as aware of where prices are today. Pricing your house too high can deter buyers or cause your house to sit on the market for longer.Real estate professionals look at a variety of factors, like the condition of your home and any upgrades you've made, with an unbiased eye.They compare your house to recently sold homes in your area to find the best price for todays market so your house sells quickly.",
        },
        {
            id: 2,
            title: "One Major Benefit of Investing in a Home",
            content: "One of the many reasons to buy a home is that it’s a major way to build wealth and gain financial stability. According to Freddie Mac says,'Building equity through your monthly principal payments and appreciation is a critical part of homeownership that can help you create financial stability.' With spring approaching, now's a great time to consider if buying a home makes sense for you. The best way to figure that out is to talk with a trusted real estate professional.The Largest Part of Most Homeowners' Net Worth Is Their Equity.You may be surprised to learn just how much of a homeowner's net worth actually comes from owning their home. The National Association of Realtors (NAR) shares:'Homeownership is the largest source of wealth among families, with the median value of a primary residence worth about ten times the median value of financial assets held by families. Housing wealth (home equity or net worth) gains are built up through price appreciation and by paying off the mortgage.'",
        },
        {
            id: 3,
            title: "How Homeownership Is Life Changing for Many Women",
            content: "The rise in women pursuing homeownership hasn't just made an impact on the housing market. It's also been an asset for those buyers and their households. That's because homeownership has many benefits, both financial and personal.On the financial side, housing proves to be the key to building wealth for single women. Ksenia Potapov, Economist at First American, says: “For single women, housing has always made up a large share of total assets. Over the last 30 years, the average single woman's wealth has increased 88% on an inflation-adjusted basis, from just over $142,000 in 1989 to $267,000 in 2019, and housing has remained the single largest component of their wealth.” The financial security and independence homeownership provides can be life changing, too. And when you factor in the personal motivations behind buying a home, that impact becomes even clearer.",
        },
    ]);

    return (
        <div className="max-w-xl mx-auto h-[100vh]">
            <h1 className='text-3xl text-center py-5 font-bold text-orange-600'>Blog</h1>
            {items.map((item) => (
                <Disclosure key={item.id}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 my-2  text-sm font-medium text-left text-white bg-orange-500 rounded-lg hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ">
                                <span>{item.title}</span>
                                <svg
                                    className={`${open ? "transform rotate-180" : ""
                                        } w-5 h-5 text-white`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-orange-100">
                                {item.content}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}

export default Blog;
