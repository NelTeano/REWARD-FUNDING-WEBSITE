'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import axios from 'axios'

// COMPONENTS
import ProductCard from '@/components/Card/ProductCard'
import { useAuth, useUser } from "@clerk/nextjs";

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
import Loader from '@/components/Loader/Loader'

// RECOMMENDATION CALCULATE FUNCTIONS
import { RecommendationAlgorithm } from '../../../../../public/assets/recommendKNN'



const Page = () => {

    const params = useParams();
    const { user } = useUser();
    const { isLoaded } = useAuth();
    const { orgs, category } = params;

    const decodeURIOrgs = decodeURI(orgs);
    const decodeURICategory = decodeURI(category);

    const [products, setProducts] = useState([]);
    const [userDB, setUserDB] = useState(null); // Changed to null to indicate loading state
    const [likedProducts, setLikedProducts] = useState([]);

    const likeProduct = async (productId) => {
        const userEmail = user.primaryEmailAddress.emailAddress;

        try {
            const response = await axios.put(`https://express-testing-api.vercel.app/api/like-product/${userEmail}/${productId}`)
            console.log("Liked The Product", response.data);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    const addToCart = async (productId) => {
        const userEmail = user.primaryEmailAddress.emailAddress;

        try {
            const response = await axios.put(`https://express-testing-api.vercel.app/api/add-product-cart/${userEmail}/${productId}`)
            console.log("Add To Cart The Product", response.data);
        } catch (error) {
            console.error("Add To Cart Error occurred :", error);
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`https://express-testing-api.vercel.app/api/filtered-products/${orgs.toLowerCase()}/${category.toLowerCase()}`);
                setProducts(response.data);
                console.log("Products: ", response.data);
                console.log("Length: ", response.data.length);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        if (user) {
            const getUserById = async () => {
                try {
                    const response = await axios.get(`https://express-testing-api.vercel.app/api/users/${user.primaryEmailAddress.emailAddress}`);
                    setUserDB(response.data);
                    console.log("user : ", response.data);
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            }

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
            getUserById();
        }

        getProducts();
    }, [orgs, category, user]); // Removed products from dependency array

    const categories = [
        "All",
        "Necklace",
        "Hand Bags",
        "Wallets",
        "Bracelet",
    ]

    const organizations = [
        "All",
        "Unicef",
        "Gawad Kalinga",
        "Bantay Bata",
        "PAWS",
        "Waves for Water",
        "Kapuso Foundation",
    ]

    if (!isLoaded || userDB === null || !user) {
        // return <div>Loading...</div>; // Return loading state if data is not yet loaded
        return (
            <div className="flex flex-col items-center justify-center h-[600px] w-full">
                <Loader />
            </div>
        )
    }


    const recommendedProducts = orgs.toLowerCase() == 'all' && category.toLowerCase() == 'all' ? 
    (
        likedProducts.length < 1 ? products : RecommendationAlgorithm(likedProducts, products, 50)
    ) : products;
    
    console.log("recommended products :", recommendedProducts);
    console.log("length of your liked product: ", likedProducts.length)
    

    return (
        <div className='flex flex-col w-full lg:h-auto sm:h-auto'>
            <div className="flex flex-col items-center justify-center mb-[200px]">
                <div className="flex lg:flex-row lg:gap-2 h-auto lg:w-[1300px] lg:mt-[100px] text-black sm:flex-col sm:w-full sm:mt-4 sm:gap-8">
                    <div className="flex flex-col lg:w-[20%] lg:min-h-[1300px] lg:ml-0 sm:min-h-[300px] gap-4 sm:w-[80%] sm:ml-4">
                        <div>
                            <h1 className='py-2 text-md font-medium'>Organization</h1>
                            <Divider />
                            <div className='flex lg:flex-col sm:flex-row sm:flex-wrap sm:gap-2'>
                                {organizations.map((organization, index) => (
                                    organization.replace(/\s/g, '').toLowerCase() === decodeURIOrgs.replace(/\s/g, '').toLowerCase() ? (
                                        <p className='text-lsm mt-1 text-cyan' key={index}>{organization}</p>
                                    ) : (
                                        <Link 
                                            href={`/shop/${organization}/${category}`}
                                            key={index}
                                        >
                                            <p className='text-lsm mt-1'>
                                                {organization}
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
                                {categories.map((category, index) => (
                                    category.replace(/\s/g, '').toLowerCase() === decodeURICategory.replace(/\s/g, '').toLowerCase() ? (
                                        <p className='text-lsm mt-1 text-cyan' key={index}>{category}</p>
                                    ) : (
                                        <Link 
                                            href={`/shop/${orgs}/${category}`}
                                            key={index}
                                        >
                                            <p className='text-lsm mt-1'>{category}</p>
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
                                        flexDirection: { xs: 'row', md: 'column', lg: 'column' },
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
                        <h1 className='text-lg lg:ml-6 font-bold uppercase sm:ml-0'>{decodeURI(category)}</h1>
                        <div className='flex flex-row items-center justify-center flex-wrap gap-1 w-full h-auto '>
                            {recommendedProducts.map((product, index) => {
                                const isAlreadyLiked = userDB[0].product_liked.includes(product._id);

                                if(!isAlreadyLiked){
                                    return (
                                        <ProductCard 
                                            productDetails={product} 
                                            likeOnClick={likeProduct}
                                            addCartOnClick={addToCart}
                                            // isAlreadyLiked={isAlreadyLiked}
                                            key={index} 
                                        />
                                    )
                                }
                            })}
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

export default Page;
