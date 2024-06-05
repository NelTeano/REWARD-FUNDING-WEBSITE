'use client'

import { useEffect, useState } from "react"
import axios from 'axios'
import { useAuth, useUser } from "@clerk/nextjs";


// COMPONENTS
import Link from "next/link"
import ProductCard from "@/components/Card/ProductCard"
import { HeartIcon } from '@heroicons/react/24/solid'

const Page = ({}) => {

    const [likedProducts, setLikedProducts] = useState([]);
    const { user } = useUser();
    const { isLoaded } = useAuth();

    useEffect(() => {
        if (user) {

            const getLikedProducts = async () => {
                try {
                    const response = await axios.get(`https://express-testing-api.vercel.app/api/product-liked/${user.primaryEmailAddress.emailAddress}`);
                    setLikedProducts(response.data.Products);
                    console.log("products liked : ", response.data.Products);
                } catch (error) {
                    console.error("Error fetching user data:", error);   
                }
            }

            getLikedProducts();
        }
    }, [user]); // Removed products from dependency array


    return (
        <div className='flex flex-col w-full relative h-[5600px] bg-black sm:h-auto'>
            <div
                className='flex flex-col gap-12 relative w-full h-[2000px] gap-5 bg-lightGray mt-20 text-black'
            >
                <div
                    className="flex flex-col justify-center items-center w-full h-auto bg-lightGray py-[200px] gap-4"
                >   
                    <div
                        className="flex inline items-center gap-4 text-cyan"
                    >
                        <p className="text-lg">
                            Liked Products
                        </p>
                        <HeartIcon className="size-9 " /> 
                    </div>
                    <div
                        className='flex flex-row flex-wrap justify-center items-center lg:w-[90%] lg:gap-4 sm:gap-1 sm:items-center sm:justify-center sm:w-full ml-5'
                    >
                        {                       
                            isLoaded && (
                                likedProducts.map((products, index) => {
                                        return (
                                            <ProductCard 
                                                productDetails={products} 
                                                isAlreadyLiked={true}
                                                key={index} 
                                            />
                                        )
                                })
                            )
                        }
                    </div>
                </div>
                {/* <div
                    className="flex flex-col w-full h-auto bg-white"
                >   
                    <div
                        className="flex ml-10"
                    >
                        <p>Supported Organizations</p>
                    </div>
                    <div
                        className="w-[1090px] h-[600px] bg-lightGray ml-10"
                    >
                        
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Page
