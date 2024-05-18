'use client'
import React, { useState, useEffect } from 'react'


import { HomeModernIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import Link from 'next/link';


// COMPONENTS
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer
} from '@mui/material'






export default function Header() {

    const router = useRouter()

    const [headerColor, setHeaderColor] = useState({
        color: 'white',
        bgColor: 'transparent',
        shadow: 'none'
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    

    useEffect(() => {
        const listenScrollEvent = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY < 73) {
                    setHeaderColor({
                        color: 'white',
                        bgColor: 'transparent',
                        fontWeight: '600',
                        shadow: 'none'
                    });
                } else if (window.scrollY > 70) {
                    setHeaderColor({
                        color: '#13ADB7',
                        bgColor: '#E9ECEB',
                        fontWeight: '600',
                        shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                    });
                }
            }
        };
    
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', listenScrollEvent);
        }
    
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', listenScrollEvent);
            }
        };
    }, []);
    

    const HeaderRoutes = [
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Charity',
            link: '/charity',
        },
        {
            name: 'Shop',
            link: '/shop',
        },
        {
            name: 'Organizations',
            link: '/organizations',
        },
    ]
    

    return (
        <React.Fragment>
            <nav 
                className='lg:flex flex-row fixed top-0 justify-around items-center h-20 w-full bg-transparent text-white z-50 ease-in duration-200 sm:hidden'
                style={{
                    backgroundColor: headerColor.bgColor,
                    color: headerColor.color,
                    boxShadow: headerColor.shadow
                }}
            >
                <Link
                    href={'/'}
                >
                    <div className='flex inline items-center gap-1'>
                        <HomeModernIcon className="size-7 text-blue-500"/>
                        <span>
                            Rew 
                            <span className='font-bold'>Fund</span>
                        </span>
                    </div>
                </Link>
                <div className='flex flex-row gap-10'>
                    {HeaderRoutes.map((header, index) => (
                        <Link
                            key={index}
                            href={header.link}
                        >
                            <p>{header.name}</p>
                        </Link>
                    ))}
                </div>
            </nav>

            <Box 
                className='lg:hidden'
                sx={{ flexGrow: 1 }}
            >
                <AppBar 
                    position="fixed"
                >
                    <Toolbar
                        className='bg-white text-cyan'
                    >
                        <Link
                            href={'/'}
                            className=' grow'
                        >
                            <div className='flex inline items-center gap-1'>
                                <HomeModernIcon className="size-7 text-blue-500"/>
                                <span>
                                    Rew 
                                    <span className='font-bold'>Fund</span>
                                </span>
                            </div>
                        </Link>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ 
                                mr: 2 ,
                                display: {sm: 'hidden',}
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <Bars3Icon className='size-6 text-blue-500'/>
                        </IconButton>
                    </Toolbar>
                    <Drawer open={open} anchor='top' onClose={toggleDrawer(false)}>
                        <Box
                            sx={{
                                height: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                            className='bg-white'
                        >
                            {HeaderRoutes.map((header, index) => (
                                    <Button 
                                        key={index}
                                        sx={{color: '#13ADB7'}}
                                        className='flex items-center justify-center text-md w-full h-[60px]'
                                        onClick={() => router.push(`${header.link}`)}
                                    >
                                        {header.name}
                                    </Button>
                            ))}
                        </Box>
                    </Drawer>
                </AppBar>
            </Box>
        </React.Fragment>
    )
}