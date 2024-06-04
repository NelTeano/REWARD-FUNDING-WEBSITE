'use client'
import React, { useEffect, useState} from 'react'
import { useParams } from 'next/navigation';
import axios from 'axios'

// COMPONENTS
import ProductCard from '@/components/Card/ProductCard'
import { useAuth, useUser} from "@clerk/nextjs";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Avatar,
    Menu,
    MenuItem,
    Paper,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Checkbox,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormLabel,
    Divider 
} from '@mui/material'
import Link from 'next/link';




const Page = () => {

    const params = useParams();
    const { user } = useUser();
    const { isLoaded } = useAuth();
    const { orgs , category } = params;
    // console.log(orgs, category);

    const decodeURIOrgs = decodeURI(orgs);
    const decodeURICategory = decodeURI(category);

    const [products, setProducts] = useState(['']);
    const [userDB, setUserDB] = useState(['']);

    const likeProduct = async (productId) => {

        const userEmail = user.primaryEmailAddress.emailAddress;
        const prodId = productId;

        try {
            const response = await axios.put(`https://express-testing-api.vercel.app/api/like-product/${userEmail}/${prodId}`)
                .then(response => {
                    console.log("Liked The Product", response.data);
                })
                .catch(error => {
                    console.log("error occured :", error);
                })
        } catch (error) {
            console.error("Register Function Error", error);
        }
    }


    useEffect(()=>{
        const getProducts = async () => {
            try {
                const getProducts = await axios.get(`https://express-testing-api.vercel.app/api/filtered-products/${orgs.toLowerCase()}/${category.toLowerCase()}`);
                setProducts(getProducts.data);
                console.log(products);
            } catch (error) {
                console.error("Register Function Error", error);
            }
        }

        if(user){
            const getUserById = async () => {
                try {
                    const response = await axios.get(`https://express-testing-api.vercel.app/api/users/${user.primaryEmailAddress.emailAddress}`);
                    setUserDB(response.data);
                    console.log(userDB);
                } catch (error) {
                    console.error("Register Function Error", error);
                }
            }
            getUserById();
        }

        getProducts();
    },[products])

    const categories = [
        "All",
        "Necklace",
        "Hand Bags", 
        "Wallets",
        "Bracelet",
        // "Watches",
        // "Rings",
        // "Hats", 
        // "Earrings", 
        // "Scarf", 
        // "Sunglasses",
        // "Umbrella",
    ]

    const organizations = [
        "All",
        "Unicef",
        "Gawad Kalinga", 
        "Bantay Bata", 
        "PAWS", 
        "Waves for Water",
        "Kapuso Foundation", 
        // "Haribon",
        // "SpringBoard Foundation",
        // "Red Cross", 
        // "Angat Buhay"
    ]

    // products.map((product) => {
    //     const isAlreadyLiked = userDB.product_liked.includes(product._id);

    //     return(
    //         console.log(isAlreadyLiked)
    //     )
    // })

    
    if(isLoaded && userDB[0] && user){
        console.log("product liked", userDB[0].product_liked.includes("665d6a0e7aca75374445d42b"))

        return (
            <div className='flex flex-col w-full lg:h-auto sm:h-auto'>
                <div className="flex flex-col items-center justify-center mb-[200px]">
                    <div className="flex lg:flex-row lg:gap-2 h-auto lg:w-[1300px] lg:mt-[100px] text-black sm:flex-col sm:w-full sm:mt-4 sm:gap-8">
                        <div className="flex flex-col lg:w-[20%] lg:min-h-[1300px] lg:ml-0 sm:min-h-[300px] gap-4 sm:w-[80%] sm:ml-4">
                            <div>
                                <h1 className='py-2 text-md font-medium'>Organization</h1>
                                <Divider />
                                <div className='flex lg:flex-col sm:flex-row sm:flex-wrap sm:gap-2'>
                                    {organizations.map((organizations, index) => (
                                        organizations.replace(/\s/g, '').toLowerCase() === decodeURIOrgs.replace(/\s/g, '').toLowerCase() ? (
                                            <p className='text-lsm mt-1 text-cyan' key={index}>{organizations}</p>
                                        ) : (
                                            <Link 
                                                href={`/shop/${organizations}/${category}`}
                                                key={index}
                                            >
                                                <p className='text-lsm mt-1'>
                                                    {organizations}
                                                </p>
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className='py-2 text-md font-medium'>Categories</h1>
                                <Divider />
                                <div className='flex lg:flex-col sm:flex-row sm:flex-wrap sm:gap-2'>
                                    {categories.map((categories, index) => (
                                        categories.replace(/\s/g, '').toLowerCase() === decodeURICategory.replace(/\s/g, '').toLowerCase() ? (
                                            <p className='text-lsm mt-1 text-cyan' key={index}> {categories}</p>
                                        ) : (
                                            <Link 
                                            href={`/shop/${orgs}/${categories}`}
                                            key={index}
                                            >
                                                <p className='text-lsm mt-1' key={index}>{categories}</p> 
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className='py-2 text-md font-medium'>Gender</h1>
                                <Divider />
                                <FormControl>
                                    <FormGroup 
                                        sx={{
                                            display: 'flex',
                                            flexDirection: {xs: 'row', md: 'column', lg: 'column'},
                                            fontSize: '16px',
                                        }}  
                                    >
                                        <FormControlLabel
                                            value="Male"
                                            control={<Checkbox />}
                                            label="Male"
                                            labelPlacement="end"
                                        />
                                        <FormControlLabel
                                            value="Female"
                                            control={<Checkbox />}
                                            label="Female"
                                            labelPlacement="end"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:w-[70%] min-h-[1300px] sm:w-full lg:items-start lg:justify-start sm:items-center sm:justify-center">
                            <h1 className='text-lg lg:ml-6 font-bold uppercase sm:ml-0'>accessories</h1>
                            <div className='flex flex-row items-center justify-center flex-wrap gap-1 w-full h-auto '>
                                {
                                    products && (
                                        products.map((products, index)=>{
                                            const isAlreadyLiked = userDB[0].product_liked.includes(products._id);

                                            return(
                                                <ProductCard 
                                                    productDetails={products} 
                                                    likeOnClick={likeProduct}
                                                    isAlreadyLiked={isAlreadyLiked}
                                                    key={index} 
                                                />
                                            )
                                        })
                                    )
                                }
                            </div>
                            <div className='flex items-center justify-center lg:w-full sm:w-[80%]'>
                                <Button sx={{
                                    backgroundColor: '#13ADB7',
                                    width: '371px',
                                    height: '51px',
                                    color: '#E9ECEB',
                                    '&:hover': {
                                        backgroundColor: '#079fa9',
                                    },
                                }}>
                                        Load More Products
                                </Button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page