'use client'
import React, { useState, useEffect} from 'react';
import axios from 'axios';

// COMPONENTS
import { useAuth,  SignOutButton} from "@clerk/nextjs";
import Payment from '../../components/payment/Payment';
import Image from 'next/image';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card';


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
} from '../../../public/assets/Companies/Companies'

// ICONS 
import { BeakerIcon } from '@heroicons/react/24/solid'


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
            <div className='flex flex-col w-full relative h-[4000px]'>
                    <div className='flex flex-col items-center justify-center w-full h-[1000px] bg-cyan'>
                            <p className='text-center'>Happiness comes from <br /> your action.</p>
                            <p>Be a part of the breakthrough and make someone’s dream come true.</p>
                            <div className='flex flex-row gap-10 '>
                                <button>Donate now</button>
                                <button> Watch video</button>
                            </div>
                    </div>
                    <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center px-[187px] py-[80px]'>
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
                                {[0,1,2,3,4,5,6,7,8,9].map((card, index) => (
                                    <Card key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>  


                    <div className='flex flex-col items-center justify-center w-full h-[1000px] bg-lightGray gap-[90px]'>
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





                    <div className='flex flex-col w-full h-[1000px] bg-gray'>
                            
                    </div>












                    <div className='flex flex-col w-full h-[1000px] bg-white'>
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
                    </div>
                </div>
            )}
        </>
        
    )
}

