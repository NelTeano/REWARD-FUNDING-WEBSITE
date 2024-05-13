import React from 'react';
import PropTypes from 'prop-types'



// COMPONENTS
import Image from 'next/image';
import Link from 'next/link';


export default function OrganizationCard({product}) {




    return (
        <div className='flex flex-col w-[500px] py-6 px-10 min-h-[400px] h-auto bg-white text-gray gap-6 rounded-lg shadow-lg'>
            {/* {product.name}
            <Image 
                src={product.images[0]}
                alt={`Image of ${product.name}`}
                width={400}
                height={400}
                className='h-[250px] w-[250px]'
                priority={true}
            /> 
            {product.description}
            <Link
                href={product.metadata.link}
            >
                Donate now
            </Link>  */}
            <div className='flex justify-center items-center w-full text-md font-bold'>
                <div className='flex w-[500px] text-black'>
                    <p>Organization</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center text-lsm text-black font-medium'>
                <h1>{product.name}</h1>
                    <Image 
                    src={product.images[0]}
                    alt={`Image of ${product.name}`}
                    width={400}
                    height={400}
                    className='h-[80px] w-[100px]'
                    priority={true}
                    /> 
            </div>
            <div className='flex justify-center items-center w-full text-sm'>
                <div className='flex justify-center items-center w-[300px]'>
                    <p>{product.description}</p>
                </div>
            </div>
            <Link 
                href={product.metadata.link}
                className='flex justify-center items-center bg-black py-2 rounded-md text-white hover:bg-cyan hover:text-white ease-in duration-200'>
                Donate now
            </Link>

        </div>
    )
}




OrganizationCard.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    paymentLink: PropTypes.string
}


