import Image from "next/image"
import { TrashIcon } from '@heroicons/react/24/solid'
import { useEffect, useState, useMemo } from "react";

import TestingImg from '../../../public/assets/Necklace.jpg'

// COMPONENTS
import {
    Select,
    MenuItem
} from '@mui/material'

export default function CartCard({cartDetails, updatedCardData}) {

    const [quantity, setQuantity] = useState(cartDetails.quantity);
    const [variant, setVariant] = useState(cartDetails.chosen_variant)

    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if(quantity <= 1){
            return null;
        }else{
            setQuantity(quantity - 1);
        }
    }

    const handleChangeVariant = (event) => {
        setVariant(event.target.value);
    };
    

    const cartData = useMemo(() => {
        return {
            ...cartDetails,
            quantity: quantity,
            chosen_variant: variant,
            subtotal: cartDetails.price * quantity,
        };
    }, [cartDetails, quantity, variant])
    
    useEffect(() => {
        updatedCardData(cartData);
    }, [quantity, variant]);



    let displayName = cartDetails?.name || '';

    if (typeof displayName === 'string' && displayName.length > 10) {
        const index = displayName.indexOf(' ', 10);
        if (index !== -1) {
            displayName = displayName.slice(0, index) + '<br>' + displayName.slice(index + 1);
        }
    }


    return (
        <div
            className="flex flex-row h-[144px] justify-between w-full border-[#6C7275] border-b sm:px-2"
        >
            <div
                className='flex flex-row items-center justify-center gap-4'
            >
                <div
                    className='w-[80px] h-[96px]'
                >
                    <Image 
                    src={TestingImg}
                    priority={true}
                    width="0"
                    height="0"
                    className='h-full w-full relative'
                    alt='product image'
                    />
                </div>
                <div
                    className='flex flex-col gap-2 lg:text-lsm text-black sm:text-sm'
                >
                    <p dangerouslySetInnerHTML={{ __html: displayName }}></p>
                    <Select
                        value={variant}
                        onChange={handleChangeVariant}
                        sx={{
                            height: {lg:'30px', xs: '30px'},
                            width: {lg:'150px', xs: '100px'},
                            fontSize: {lg: '14px',xs: '10px'}
                        }}
                    >
                        {
                            cartDetails.variation.map((variant, index)=>(
                                <MenuItem value={variant} key={index}>
                                    {variant}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <button 
                        className='flex inline gap-2 text-black hover:ml-2 hover:text-cyan items-center ease-in duration-200'
                    >
                        <TrashIcon className="size-5 text-blue-500"/>
                        <p>Remove</p>
                    </button>
                </div>
            </div>
            <div
                className="flex lg:flex-row h-auto lg:gap-12 lg:items-center lg:justify-center lg:mt-0 sm:flex-col sm:gap-2 lg:items-start lg:justify-start sm:mt-2"
            >
                <div
                    className='flex flex-row items-center border border-black rounded-md p-0.5 text-black'
                >
                    <button
                        className='bg-white lg:w-[30px] lg:h-[30px] sm:w-[18px] sm:h-[18px]'
                        onClick={decreaseQuantity}
                    >
                        -
                    </button>
                    <div
                        className='lg:h-[30px] sm:w-[25px] sm:h-[25px]'
                    >
                        <textarea 
                            className='text-center w-full h-full' 
                            style={{resize: 'none'}} 
                            value={quantity} 
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                        />
                    </div>
                    <button
                        className='bg-white lg:w-[30px] lg:h-[30px] sm:w-[18px] sm:h-[18px]'
                        onClick={addQuantity}
                    >
                        +
                    </button>
                </div>
                <p className='text-lsm sm:text-right text-black'>₱ {cartDetails.price}</p>
                <p className='text-lsm font-bold lg:block sm:hidden text-black'>₱ {cartDetails.price * quantity}</p>
            </div>
        </div>    
    )
}


