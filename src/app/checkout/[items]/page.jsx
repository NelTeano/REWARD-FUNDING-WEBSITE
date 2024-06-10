'use client'

import TestingImg from '../../../../public/assets/Necklace.jpg'
import Link from "next/link"
import Image from "next/image"

import CartCard from '@/components/Card/CartCard'
// COMPONENTS
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
    ButtonGroup,
    TextField
} from '@mui/material'

import ProductCard from '@/components/Card/ProductCard'
import Loader from '@/components/Loader/Loader'


import { TrashIcon } from '@heroicons/react/24/solid'
import { useEffect, useState, useMemo, useCallback } from 'react'
import { useParams, } from 'next/navigation';
import axios from 'axios'


// const mockData = [
//     {
//         "_id": "66593ddc5bea81d3fc22dcc6",
//         "name": "Bulgary Necklace",
//         "price": 2000,
//         "organization_owner": "unicef",
//         "description": "Accessory Necklace for fashion",
//         "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
//         "catergory": "Necklace",
//         "variation": [
//             "Small",
//             "Medium",
//             "Large"
//         ],
//         "quantity": 4,
//         "chosen_variant": "Small",
//         "__v": 0
//     },
// ]


// RECOMMENDATION CAALCULATE FUNCTIONS
import { RecommendationAlgorithm } from '../../../../public/assets/recommendKNN'

const Page = ({}) => {

    const params = useParams();
    const { items } = params;

    const [cartData, setCartData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const decodedItems = [JSON.parse(decodeURIComponent(items))];
        const itemsWithQuantity = decodedItems.map(item => ({
            ...item,
            quantity: 1,
            chosen_variant: item.variation[0],
        }));
        setCartData(itemsWithQuantity)
    },[items])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(`https://express-testing-api.vercel.app/api/filtered-products/all/all`);
                const recommendedProducts = RecommendationAlgorithm([JSON.parse(decodeURIComponent(items))], response.data, 20)
                setProducts(recommendedProducts);
                console.log("Products: ", response.data);
                console.log("Length: ", response.data.length);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        getProducts()

    },[items])
    
    const updateCartData = (data) => {
        setCartData((prevData) =>
            prevData.map((item) =>
                item._id === data._id ? data : item
            )
        );
    }

    const addItem = useCallback((item) => {
        setCartData((prevCartData) => [
            ...prevCartData,
            {
                ...item,
                quantity: 1,
                chosen_variant: item.variation[0],
            },
        ]);

        setProducts((prevProducts) => prevProducts.filter(product => product._id !== item._id));
    }, []);


    const computedSubTotal = useMemo(() => {
        return cartData.reduce((sum, item) => sum + item.subtotal, 0);
    }, [cartData]);


    console.log("to be checkout details: ", cartData);
    console.log("products", products)


    const createCheckout = async () => {

        try {
            const checkoutItems = cartData.map((item) => ({
                name: item.name,
                variation: item.chosen_variant,
                price: item.price * 100,
                quantity: item.quantity,
            }));

            const response = await axios.post('https://deploy-express-vercel-ashy.vercel.app/api/create-checkout-session', { items: checkoutItems });
            console.log("Checkout URL :", response.data);

            window.location.href = response.data.url;
        } catch (error) {
            console.error("Checkout Session Error", error.response ? error.response.data : error.message);
        }
    }

    // console.log(cartData)
    // const recommendedProducts = RecommendationAlgorithm([JSON.parse(decodeURIComponent(items))], products, 20)

    // console.log("recomended :", recommendedProducts)
    return (
        <>
            {cartData && (
                <div className='flex flex-col w-full relative h-[5600px] sm:h-auto bg-black '>
                    <div
                        className='flex flex-col relative items-center justify-center w-full h-auto min-h-[85vh] bg-lightGray mt-20 gap-8'
                    >
                            <h1 className='text-lg text-black'>Checkout</h1>
                            <div
                                className="flex lg:flex-row lg:w-[1120px] min-h-[642px] bg-lightGray justify-between lg:items-start sm:items-center sm:flex-col sm:w-full lg:gap-0 sm:gap-[100px]"
                            >   
                                <div
                                    className="lg:w-[643px] h-auto sm:w-full"
                                >
                                    <div
                                        className="flex flex-row h-[50px] justify-between w-full border-[#6C7275] border-b-2 font-medium lg:text-lsm sm:text-md"
                                    >
                                        <div>
                                            <p className='lg:ml-0 sm:ml-2 text-black'>Product</p>
                                        </div>
                                        <div
                                            className="lg:flex gap-12 sm:hidden"
                                        >
                                            <p>Quantity</p>
                                            <p>Price</p>
                                            <p>Subtotal</p>
                                        </div>
                                    </div>

                                    {cartData.map((item, index) => {
                                        return(
                                            <CartCard key={index} cartDetails={item} updatedCardData={updateCartData}/>
                                        )
                                    })}
                                </div>
                                
                                <div
                                    // className="flex flex-col justify-between w-[413px] h-[476px] bg-lightGray p-4 rounded-md border border-[#6C7275]"
                                    className="lg:w-[413px] h-auto sm:w-[320px] lg:px-0 sm:px-4"
                                >
                                    <div
                                        className="flex flex-col min-h-[476px] justify-between rounded-md p-4 border border-[#6C7275]"
                                    >
                                        <div
                                            className='flex flex-col'
                                        >
                                            <div>
                                                <h1 
                                                    className='text-lg text-black'
                                                >
                                                    Cart Summary
                                                </h1>
                                            </div>
                                            {cartData.map((items, index)=> (
                                                <div 
                                                    className='flex flex-row justify-between text-black lg:text-lsm sm:text-sm'
                                                    key={index}
                                                >
                                                        <p>{items.name}</p> 
                                                        <p>₱ {items.subtotal}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div
                                            className='flex flex-col justify-between'
                                        >
                                            <div
                                                className='flex flex-row justify-between items-center h-[52px] border-[#6C7275] border-b text-lsm font-medium text-black'
                                            >
                                                <p>Subtotal</p>
                                                <h1>₱ {computedSubTotal}</h1>
                                            </div>
                                            <div
                                                className='flex flex-row justify-between items-center h-[52px] text-md font-bold text-black'
                                            >
                                                <p>Total</p>
                                                <h1>₱ {computedSubTotal}</h1>
                                            </div>
                                            <button
                                                onClick={createCheckout}
                                                className='flex justify-center items-center h-[52px] w-full bg-black text-white rounded-md text-black'
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div
                        className='flex flex-col w-full items-center justify-center bg-lightGray lg:pb-[100px] sm:pb-[100px] '
                    >
                        <div
                            className='bg-lightGray'
                        >
                            <div
                                className='lg:w-[1200px] h-[50px] sm:w-full sm:mt-10'
                            >
                                <h1 className='lg:text-lg sm:text-md sm:font-medium text-black'>Items you would like</h1> 
                            </div>
                        </div>
                        <div
                            className='flex flex-row flex-wrap lg:w-[1200px] h-auto bg-lightGray lg:gap-2 sm:w-auto sm:gap-1 items-center justify-center'
                        >
                            {
                                products && (
                                    products.map((product, index) => {
                                    const item = product._id.includes(JSON.parse(decodeURIComponent(items))._id);
                                    
                                    if(!item){
                                        return(
                                            <ProductCard 
                                                productDetails={product} 
                                                addItemOnClick={() => addItem(product)}
                                                isCheckout={true}
                                                // likeOnClick={likeProduct}
                                                // addCartOnClick={addToCart}
                                                // isAlreadyLiked={isAlreadyLiked}
                                                key={index} 
                                            />
                                        )
                                    }
                                })
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Page