'use client'
import React, { useEffect, useState} from 'react'
import axios from 'axios'

// COMPONENTS
import ProductCard from '@/components/Card/ProductCard'

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



const Page = () => {

    const [products, setProducts] = useState(['']);

    useEffect(()=>{

        const getProducts = async () => {
            try {
                const getProducts = await axios.get(`https://express-testing-api.vercel.app/api/shop-products`);
                setProducts(getProducts.data);
                console.log(products);
            } catch (error) {
                console.error("Register Function Error", error);
            }
        }

        getProducts();
    },[products])



    return (
        <div className='flex flex-col w-full lg:h-auto sm:h-auto'>
            <div className="flex flex-col items-center justify-center mb-[200px]">
                <div className="flex lg:flex-row lg:gap-2 h-auto lg:w-[1300px] lg:mt-[100px] text-black sm:flex-col sm:w-full sm:mt-4 sm:gap-8">
                    <div className="flex flex-col lg:w-[20%] lg:min-h-[1300px] lg:ml-0 sm:min-h-[300px] gap-4 sm:w-[80%] sm:ml-4">
                        <div>
                            <h1 className='py-2 text-md font-medium'>Organization</h1>
                            <Divider />
                            <div className='flex lg:flex-col sm:flex-row sm:flex-wrap sm:gap-2'>
                                {[
                                    "Unicef",
                                    "Haribon",
                                    "SpringBoard Foundation",
                                    "PAWS", 
                                    "Red Cross", 
                                    "Bantay Bata", 
                                    "Gawad Kalinga", 
                                    "Angat Buhay", 
                                    "Waves for Water"
                                    
                                ].map((organizations, index) => (
                                    <p className='text-lsm mt-1' key={index}>{organizations}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className='py-2 text-md font-medium'>Categories</h1>
                            <Divider />
                            <div className='flex lg:flex-col sm:flex-row sm:flex-wrap sm:gap-2'>
                                {[
                                    "Necklace",
                                    "Bracelets",
                                    "Watches",
                                    "Rings",
                                    "Hats", 
                                    "Earrings", 
                                    "Sun Glasses", 
                                    "Hand Bags", 
                                    "Scarf", 
                                    "Wallets",
                                    "Sunglasses",
                                    "Umbrella",
                                ].map((category, index) => (
                                    <p className='text-lsm mt-1' key={index}>{category}</p>
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
                                    products.map((products, index)=>(
                                        <ProductCard productDetails={products} key={index} />
                                    ))
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

export default Page