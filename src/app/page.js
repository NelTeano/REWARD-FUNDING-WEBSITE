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
import OrgImage from '../../public/assets/CharityOrg.jpg'

// ICONS 
import { 
    ChevronRightIcon,
    BanknotesIcon
} from '@heroicons/react/24/solid'


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
            <div className='flex flex-col  w-full relative h-[5600px] sm:h-auto'>
                    <div 
                        className='flex flex-col relative items-center justify-center w-full h-[100vh] text-center text-white gap-5 bg-black'
                    >   
                        <span className='text-xxl leading-[70px]'>
                            <span className='text-cyan'>Happiness</span> comes from <br /> 
                            <span className='text-cyan'>your action.</span>
                        </span>
                        <p className='text-lsm'>
                            Be a part of the breakthrough and make someone&apos;s dream come true.
                        </p>
                        <div className='flex lg:flex-row gap-4 font-medium mt-5 sm:flex-col'>
                            <button className='rounded-full w-[166px] h-[55px] bg-cyan  '>Donate now</button>
                            <SignOutButton>
                                <button className='rounded-full w-[166px] h-[55px] bg-transparent border-white border'>About us</button>
                            </SignOutButton>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center px-[187px] py-[80px] gap-8 sm:px-2 '>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex inline gap-2 text-[32px]'>
                                <h1 className='text-black'>
                                    Open
                                </h1>
                                <h1 className='text-cyan '>
                                    donations
                                </h1>
                            </div>
                            <div className='flex lg:flex-row flex-wrap lg:w-[1067px] gap-10 sm:flex-col sm:items-center sm:justify-center sm:w-full'>
                                {[1,2,3,4,5,6].map((card, index) => (
                                    <DonationCard key={index}/>
                                ))}
                            </div>
                        </div>
                        <Link
                            className='flex inline gap-2 text-black hover:ml-4 hover:text-cyan ease-in duration-200 sm:w-[300px] sm:items-center sm:justify-center'
                            href={'/charity'}
                        >
                            See more <ChevronRightIcon className='size-6 text-blue-500' />
                        </Link>
                    </div>  

                    <div className='flex lg:flex-row lg:items-center lg:justify-center lg:w-full lg:h-[1000px] bg-lightGray gap-[87px] sm:flex-col sm:h-[700px] sm:h-[1000px]'>
                        <div className='flex flex-col gap-12 z-10'>
                            <div className='flex flex-col gap-1 sm:text-center lg:text-left'>
                                <p className='text-gray lg:text-sm font-medium'>
                                    HUMANITARIAN MISSION
                                </p>
                                <h1 className='text-black text-lg font-bold'>
                                    Help the Affected by <br />
                                    <span className='text-cyan'>Disasters, Shortages,</span> and <br />
                                    <span className='text-cyan'>Emergency Relief</span>.
                                </h1>
                            </div>
                            <div className='flex flex-row gap-10 lg:text-md lg:p-0 text-black font-medium sm:text-lsm sm:p-4'>
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
                            className='lg:h-[454px] lg:w-[454px] lg:relative lg:left-[100px] lg:top-[120px] lg:opacity-100 sm:left-0 sm:top-[4300px] z-1 sm:opacity-40 sm:absolute'
                            alt='product image'
                        />
                    </div>

                    
                    <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center gap-12 lg:px-[187px] lg:py-[80px] sm:px-2 sm:py-[200px]'>
                        <div className='flex flex-col gap-3 '>
                            <p className='text-gray text-sm lg:text-left sm:text-center '>OUR PRODUCTS</p>
                            <span className='text-lg text-left font-bold text-black lg:leading-5 sm:leading-10 sm:text-center '>
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
                        <div className='flex flex-row flex-wrap justify-center items-center lg:w-[900px] lg:gap-4 sm:gap-1 sm:items-center sm:justify-center sm:w-full'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((image, index) => (
                                        <ProductCard key={index}/>
                                    ))}
                            
                        </div>
                        <Link
                            className='flex inline gap-2 text-black hover:ml-4 hover:text-cyan ease-in duration-200 sm:w-[300px] sm:items-center sm:justify-center'
                            href={'/shop'}
                        >
                            See more <ChevronRightIcon className='size-6 text-blue-500' />
                        </Link>
                    </div>
                    
                                    
                    <div className='flex flex-col items-center justify-center w-full h-[1000px] pb-[100px] bg-lightGray gap-[90px] sm:h-full sm:py-8'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-gray text-sm lg:text-left sm:text-center '>OUR PARTNERS</p>
                            <span className='text-lg text-left text-black font-bold lg:leading-5 sm:text-center sm:leading-10 text-black'>
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
                        <div className='flex lg:flex-row items-center justify-center gap-3 sm:flex-col'>
                            <div className='flex lg:flex-row flex-wrap lg:w-[879.12px] gap-3 sm:w-full sm:items-center sm:justify-center'>
                                {CompaniesImages.map((image, index) => (
                                    <div 
                                        className='flex items-center justify-center h-[94.09px] lg:w-[210.09px] bg-white rounded-md shadow-lg hover:scale-125 hover:cursor-pointer ease-in duration-150 sm:w-[300px]'
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
                            <div className='flex items-center justify-center text-lsm lg:h-[204px] lg:w-[160px] bg-white sm:w-[300px] sm:h-[94.09px]'>
                                <p className='text-black'>and 42 mores</p>
                            </div>
                        </div>
                    </div> 


                    <div className='flex items-center justify-center w-full lg:h-[500px] bg-lightGray sm:h-[600px]'>
                        <div className='flex lg:flex-row lg:w-[1000px] h-[400px] bg-white shadow-xl lg:text-left lg:justify-normal lg:items-normal sm:flex-col sm:w-[300px] sm:items-center sm:justify-center sm:text-center sm:rounded-md'>
                            <div className='flex flex-col items-center justify-center w-[50%] '>
                                <div className='flex flex-col gap-4 w-[300px] lg:justify-normal lg:items-normal sm:items-center sm:justify-center'>
                                    <h1 className='text-black font-bold text-lg leading-8'>Organization Fundraise for a <span className='text-cyan'>great cause</span></h1>
                                    <p className='text-black'>Group of organization aims to support poverty, environment and animals <br />
                                        with any amount of your money can help and support these organizations goal.
                                    </p>
                                    <Link 
                                        className='flex items-center justify-center rounded-lg w-[166px] h-[55px] bg-black text-white gap-2'
                                        href={'/Organizations'}
                                    >
                                        Donate now <BanknotesIcon className='size-6 text-blue-500' />
                                    </Link>
                                </div>
                            </div>
                            <div className='bg-white w-[50%] h-full lg:block sm:hidden'>
                                <Image 
                                    src={OrgImage}
                                    priority={true}
                                    width="0"
                                    height="0"
                                    className='h-full w-full relative'
                                    alt='product image'
                                />
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

