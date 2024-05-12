'use client'
import React, { useState, useEffect} from 'react';
import axios from 'axios';

// COMPONENTS
import { useAuth,  SignOutButton} from "@clerk/nextjs";
import Payment from '@/components/payment/Payment';
import Image from 'next/image';
import DonationCard from '@/components/Card/DonationCard';
import ProductCard from '@/components/Card/ProductCard';
import Link from 'next/link';

// IMAGES
import {
    Img1,
    Img2,
    Img3, 
    Img4, 
    Img5, 
    Img6, 
    Img7, 
    Img8,
} from '../../public/assets/Companies/Companies'

import BoardImage from '../../public/assets/BoardImage.png'

// ICONS 
import { ChevronRightIcon } from '@heroicons/react/24/solid'


const CompaniesImages = [
    { src: Img1, width: '153.71px', height: '32.88px' },
    { src: Img2, width: '178.12px', height: '106.87px' },
    { src: Img3, width: '196.39px', height: '60.29px' },
    { src: Img4, width: '135.19px', height: '47.5px' },
    { src: Img5, width: '155.29px', height: '62.11px' },
    { src: Img6, width: '139.76px', height: '40.19px' },
    { src: Img7, width: '128.8px', height: '45.67px' },
    { src: Img8, width: '116.01px', height: '86.78px' }
];



export default function Page() {

    const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();

    const [users, setUsers] = useState(['']);

    useEffect(() => {
        
            const getAllUsers = async () => {
                try {
                    const getUsers = await axios.get('https://deploy-express-vercel-ashy.vercel.app/api/users');
                    setUsers(getUsers.data);
                    console.log(getUsers.data);
                } catch (error) {
                    console.log("Fetch Data Error", error)
                }
            }

            getAllUsers();
    }, [isLoaded, userId])

    

    // console.log("user: ", users[0].name);
    // console.log("user: ", users[0].email)
    // <BeakerIcon className="size-6 text-blue-500" /> 


    return (
        <>
        {users && (
            <div className='flex flex-col w-full relative h-[5600px]'>
                    <div 
                        className='flex flex-col relative items-center justify-center w-full h-[90vh] text-center text-white gap-5 bg-black'
                    >   
                        <span className='text-xxl leading-[70px]'>
                            <span className='text-cyan'>Happiness</span> comes from <br /> 
                            <span className='text-cyan'>your action.</span>
                        </span>
                        <p className='text-lsm'>
                            Be a part of the breakthrough and make someone&apos;s dream come true.
                        </p>
                        <div className='flex flex-row gap-4 font-medium mt-5'>
                            <button className='rounded-full w-[166px] h-[55px] bg-cyan'>Donate now</button>
                            <button className='rounded-full w-[166px] h-[55px] bg-transparent border-white border'>About us</button>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center px-[187px] py-[80px] gap-8'>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex inline gap-2 text-[32px]'>
                                <h1 className='text-black'>
                                    Open
                                </h1>
                                <h1 className='text-cyan '>
                                    donations
                                </h1>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <button className='border text-[16px] text-white border-cyan rounded-lg w-[50px] h-[38px] bg-cyan'>
                                    All
                                </button>

                                {["Homeless", "Food Crisis", "Disaster", "Education"].map((categories, index) => (
                                    <button 
                                        className='border text-[16px] text-cyan border-cyan rounded-lg w-[93px] h-[38px] hover:text-white hover:bg-cyan'
                                        key={index}
                                    >
                                        {categories}
                                    </button>
                                ))}
                            </div>
                            <div className='flex flex-row flex-wrap w-[1067px] gap-10'>
                                {[1,2,3,4,5,6,7,8,9].map((card, index) => (
                                    <DonationCard key={index}/>
                                ))}
                            </div>
                        </div>
                        <Link
                            className='flex inline gap-4 hover:ml-4 hover:text-cyan ease-in duration-200'
                            href={'/donations'}
                        >
                            See more <ChevronRightIcon className='size-6 text-blue-500' />
                        </Link>
                    </div>  



                    <div className='flex flex-row items-center justify-center w-full h-[1000px] bg-lightGray gap-[87px]'>
                        <div className='flex flex-col gap-12'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-gray text-sm font-medium'>
                                    HUMANITARIAN MISSION
                                </p>
                                <h1 className='text-black text-lg font-bold'>
                                    Help the Affected by <br />
                                    <span className='text-cyan'>Disasters, Shortages,</span> and <br />
                                    <span className='text-cyan'>Emergency Relief</span>.
                                </h1>
                            </div>
                            <div className='flex flex-row gap-10 text-md text-black font-medium'>
                                <div className='flex flex-col gap-5'>
                                    <p>
                                        <span className='text-cyan'>22,690</span> &nbsp;  
                                        Donations have been <br /> 
                                        verified and still active.
                                    </p>
                                    <p>
                                        <span className='text-cyan'>6,450</span>  &nbsp; 
                                        Donations have been <br />
                                        distributed to disaster- <br />
                                        affected areas.
                                    </p>
                                    <p>
                                        <span className='text-cyan'>1.4 Billion</span>  &nbsp; 
                                        total funds raised <br />
                                        so far.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <p>
                                        <span className='text-cyan'>10,517</span>  &nbsp; 
                                        donations have been <br />
                                        distributed to the needy.
                                    </p>
                                    <p>
                                        <span className='text-cyan'>5,058</span>  &nbsp; 
                                        donations were <br />
                                        distributed to social foundations <br />
                                        and orphanages.
                                    </p>
                                    <p>
                                        <span className='text-cyan'>4,803</span>  &nbsp; 
                                        donations have been <br />
                                        distributed to people in <br />
                                        emergency situations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image 
                            src={BoardImage}
                            priority={true}
                            width="0"
                            height="0"
                            className='h-[454px] w-[454px] relative left-[100px] top-[120px]'
                            alt='product image'
                        />
                    </div>


                    <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center gap-12 px-[187px] py-[80px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-gray text-sm text-left'>OUR PRODUCTS</p>
                            <span className='text-lg text-left font-bold leading-5'>
                                E-commerce platform for &nbsp; 
                                <span className='text-cyan'>
                                    Organizations &nbsp;
                                </span>
                                and &nbsp;
                                <span className='text-cyan'>
                                    Institutions &nbsp;
                                </span>
                                to help them raise more money
                            </span>
                        </div>
                        <div className='flex flex-row flex-wrap justify-center items-center w-[1467px] gap-10'>
                            {[1, 2, 3, 4, 5, 6, 7, 8,].map((image, index) => (
                                        <ProductCard key={index}/>
                                    ))}
                            
                        </div>
                        <Link
                            className='flex inline gap-4 hover:ml-4 hover:text-cyan ease-in duration-200'
                            href={'/products'}
                        >
                            See more <ChevronRightIcon className='size-6 text-blue-500' />
                        </Link>
                    </div>

                    <div className='flex flex-col items-center justify-center w-full h-[1000px] pb-[100px] bg-lightGray gap-[90px]'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-gray text-sm text-left'>OUR PARTNERS</p>
                            <span className='text-lg text-left font-bold leading-5'>
                                More than 50 &nbsp; 
                                <span className='text-cyan'>
                                    Companies &nbsp;
                                </span>
                                and &nbsp;
                                <span className='text-cyan'>
                                    Institutions &nbsp;
                                </span>
                                that trust us over the years
                            </span>
                        </div>
                        <div className='flex flex-row items-center justify-center gap-3'>
                            <div className='flex flex-row flex-wrap w-[879.12px] gap-3'>
                                {CompaniesImages.map((image, index) => (
                                    <div 
                                        className='flex items-center justify-center h-[94.09px] w-[210.09px] bg-white rounded-md shadow-lg hover:scale-125 hover:cursor-pointer ease-in duration-150'
                                        key={index}
                                    >
                                        <Image 
                                            src={image.src}
                                            priority={true}
                                            width="0"
                                            height="0"
                                            style={{width: image.width, height: image.height}}
                                            alt='product image'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center text-lsm h-[204px] w-[160px] bg-white'>
                                <p>and 42 mores</p>
                            </div>
                        </div>
                    </div>















                    {/* <div className='flex flex-col w-full h-[1000px] bg-white'>
                        <p>Hello {users[0].name} and email {users[0].email} user id : {userId}  your current active session is {sessionId} Click the button below to Buy Bracelets</p>

                        <SignOutButton >
                            <button>Sign out</button>
                        </SignOutButton>

                        <Image 
                            src={'https://files.stripe.com/links/MDB8YWNjdF8xUEI3M25QNnRDSWVidmp5fGZsX3Rlc3RfQlhJVXgxSXY0NURkMDBxd0Y3dWNxTTk200Cbzl7q2S'}
                            priority={true}
                            width="0"
                            height="0"
                            className='h-200 w-200'
                            alt='product image'
                        />
                        <div>
                            <Payment />
                        </div>
                    </div> */}


                </div>
            )}
        </>
        
    )
}

