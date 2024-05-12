'use client'
import React, { useState, useEffect } from 'react'


import { HomeModernIcon } from '@heroicons/react/24/solid'



export default function Header() {

    const [headerColor, setHeaderColor] = useState({
        color: 'white',
        bgColor: 'transparent',
        shadow: 'none'
    });

    

    useEffect(() => {
        const listenScrollEvent = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY < 73) {
                    setHeaderColor({
                        color: 'white',
                        bgColor: 'transparent',
                        fontWeight: '600',
                        shadow: 'none'
                    });
                } else if (window.scrollY > 70) {
                    setHeaderColor({
                        color: '#13ADB7',
                        bgColor: '#E9ECEB',
                        fontWeight: '600',
                        shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                    });
                }
            }
        };
    
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', listenScrollEvent);
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', listenScrollEvent);
            }
        };
    }, []);
    
    

    return (
        <React.Fragment>
            <nav 
                className='flex flex-row fixed top-0 justify-around items-center h-20 w-full bg-transparent text-white z-50 ease-in duration-200'
                style={{
                    backgroundColor: headerColor.bgColor,
                    color: headerColor.color,
                    boxShadow: headerColor.shadow
                }}
            >
                <div className='flex inline items-center gap-1'>
                    <HomeModernIcon className="size-7 text-blue-500"/>
                    <span>
                        Rew 
                        <span className='font-bold'>Fund</span>
                    </span>
                </div>
                <div className='flex flex-row gap-10'>
                    <p>About</p>
                    <p>Charity</p>
                    <p>Shop</p>
                    <p>Organizations</p>
                </div>
            </nav>
        </React.Fragment>
    )
}
