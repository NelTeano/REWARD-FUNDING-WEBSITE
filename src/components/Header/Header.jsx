'use client'
import React from 'react'


export default function Header() {
    return (
        <React.Fragment>
            <nav className='flex flex-row fixed top-0 justify-around items-center h-20 w-full bg-white z-50'>
                <div>
                    <p>Logo</p>
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
