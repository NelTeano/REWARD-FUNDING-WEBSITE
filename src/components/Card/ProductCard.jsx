import DemoPicture from '../../../public/assets/Necklace.jpg'
import OrgImage from '../../../public/assets/Companies/unicef.png'
import Image from 'next/image'

import { ShoppingCartIcon,} from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react';

import {
    Button,
} from '@mui/material'

export default function ProductCard({productDetails}) {

    let displayName = productDetails?.name || '';

    if (typeof displayName === 'string' && displayName.length > 10) {
        const index = displayName.indexOf(' ', 10);
        if (index !== -1) {
            displayName = displayName.slice(0, index) + '<br>' + displayName.slice(index + 1);
        }
    }
    

    return (
        <React.Fragment>
            { productDetails && (
                <div className='flex flex-col lg:h-[270px] lg:w-[200px] bg-white rounded-md shadow-lg sm:w-[150px] sm:h-auto sm:min-h-[303px] sm:mt-2'>
                    <div className='relative'>
                        <button 
                            className='flex justify-center items-center absolute bg-transparent h-9 w-9 text-white border rounded-full right-2 top-2 hover:bg-white hover:text-cyan ease-in duration-200'>
                            <HeartIcon className="size-4" />
                        </button>
                        <Image 
                            src={DemoPicture}
                            priority={true}
                            width="0"
                            height="0"
                            className='lg:h-[150px] w-full sm:h-[120px]'
                            alt='product image'
                        />
                    </div>
                    <div className='flex flex-col p-2 gap-2'>
                        <div className='flex lg:flex-row justify-between lg:text-sm text-cyan font-medium sm:text-sm sm:flex-col'>
                            
                            <p dangerouslySetInnerHTML={{ __html: displayName }}></p>
                            
                            <p>
                                ₱ {productDetails.price}
                            </p>
                        </div>
                        <div className='flex lg:flex-col text-sm gap-2 text-black'>
                            <div className='lg:flex lg:flex-row justify-between sm:flex-col'>
                                <p className='text-sm font-medium lg:text-right sm:text-left'>Organization :</p>
                                <p className='text-sm text-cyan lg:text-right sm:text-left'>{productDetails.organization_owner.split(" ", 1)}</p>
                            </div>
                        </div>
                        <footer className='flex flex-row gap-2'>
                            <button className='flex lg:w-[44px] lg:h-[37px] rounded items-center justify-center bg-transparent border border-cyan text-cyan ease-in duration-150 sm:w-[44px] sm:h-[30px] hover:bg-cyan hover:text-white'>
                                <ShoppingCartIcon className="size-4 text-blue-500" />
                            </button>
                            <button className='lg:w-[170px] lg:h-[37px] bg-cyan rounded border border-cyan text-white ease-in duration-150 sm:w-[170px] sm:h-[30px] hover:bg-darkCyan hover:text-white'>
                                Buy now
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
