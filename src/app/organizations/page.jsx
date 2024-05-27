'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS
import OrgCard from '@/components/Card/OrganizationCard';
import Image from 'next/image';

// IMAGES 
import BannerImg from '../../../public/assets/BannerImg.png'

export default function Page() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const getAllOrganization = async () => {
            try {
                const response = await axios.get('https://deploy-express-vercel-ashy.vercel.app/api/products/12');
                setOrganizations(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log("Fetch Data Error", error);
            }
        }

        getAllOrganization();
    }, []);

    return (
        <React.Fragment>
            {organizations && (
                <div className='flex flex-col w-full relative h-auto bg-lightGray'>

            <div className="flex flex-col items-center justify-center gap-4 bg-black lg:h-[450px] w-full sm:h-[350px] lg:mt-0 sm:mt-10">
                <h1 className="text-white lg:text-xxl text-center font-bold sm:text-lg">Donations for Organizations</h1>
                <p className="text-white lg:text-md font-medium text-center sm:text-sm">
                    Support and donate through RewFund, help us raise funds for charitable organizations. <br /> 
                    Your contribution makes a difference!                </p>
            </div>

                    <div className='flex w-full h-[200px] bg-lightGray py-8 text-md text-black items-center lg:justify-start sm:justify-center '>
                        <div className='flex flex-row relative lg:ml-[70px] lg:gap-16 sm:ml-2 sm:gap-2'>
                            <Image 
                                src={BannerImg}
                                priority={true}
                                width="0"
                                height="0"
                                className='lg:h-[140px] lg:w-[249px] relative sm:h-[120px] sm:w-[170px]'
                                alt='product image'
                            />
                            <p className='lg:leading-8 lg:text-md sm:text-sm'>
                                You&apos;re supporting <strong>Organizations that Helps People</strong> <br />
                                Your donation will benefit <strong>People and Environment</strong>
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row flex-wrap lg:w-[1200px] py-10 justify-center items-center gap-10 sm:w-full'>
                            {organizations.map((details, index) => (
                                <OrgCard 
                                    key={index}
                                    product={details}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
