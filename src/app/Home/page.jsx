'use client'
import React, { useState, useEffect} from 'react'
import { redirect, useRouter} from 'next/navigation';
import axios from 'axios';

// COMPONENTS
import { useAuth,  SignOutButton} from "@clerk/nextjs";
import Payment from '../../components/payment/Payment';
import Image from 'next/image'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'


// IMAGES
import Necklace from '../../../public/assets/Necklace.jpg'

// ICONS 
import { BeakerIcon } from '@heroicons/react/24/solid'



export default function Page() {

    const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();

    const router = useRouter();

    const [users, setUsers] = useState(['']);

    useEffect(() => {
        if (!isLoaded || !userId) {
            router.push('/');
        } else {
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
        }
    }, [isLoaded, userId, router])

    

    // console.log("user: ", users[0].name);
    // console.log("user: ", users[0].email)
    // <BeakerIcon className="size-6 text-blue-500" /> 

    return (
        <>
        {users && (
            <div className='flex flex-col w-full relative h-[4000px]'>
                    <Header />
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
                            width={300}
                            height={300}
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

