'use client'
import React, { useState, useEffect } from 'react'
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs'

import { 
    Bars3Icon,
    ShoppingCartIcon,
    UserCircleIcon,
    ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline'

import { HomeModernIcon } from '@heroicons/react/24/solid'
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
    Drawer,
    Avatar,
    Menu,
    MenuItem,
    Paper,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material'






export default function Header() {

    const router = useRouter();
    const { isSignedIn, user } = useUser();

    const [headerColor, setHeaderColor] = useState({
        color: 'white',
        bgColor: '#0F111D',
        shadow: 'none'
    });

    const [open, setOpen] = React.useState(false);

    const [showMenu, setShowMenu] = React.useState(false);

    const openMenu = (event) => {
        setShowMenu(event.currentTarget);
    };

    const closeMenu = () => {
        setShowMenu(null);
    };

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
                <div className='flex flex-row gap-10 items-center'>
                    {HeaderRoutes.map((header, index) => (
                        <Link
                            key={index}
                            href={header.link}
                        >
                            <p>{header.name}</p>
                        </Link>
                    ))}
                    {isSignedIn ? (
                        <>
                        <Avatar 
                            alt="User Profile" 
                            src={user.imageUrl} 
                            onClick={openMenu}
                            sx={{
                                cursor: 'pointer'
                            }}
                        />
                            <Menu
                                anchorEl={showMenu}
                                open={showMenu}
                                onClose={closeMenu}
                            >   
                                <Box 
                                    sx={{
                                        display:'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width:'200px'
                                    }}
                                >
                                    <Link
                                        href={'/profile'}
                                        className='w-full'
                                    > 
                                        <MenuItem 
                                            sx={{
                                                display:'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}  
                                        >
                                            My Profile
                                        </MenuItem>
                                    </Link>
                                    <Link
                                        href={'/favorites'}
                                        className='w-full'
                                    > 
                                        <MenuItem
                                            sx={{
                                                display:'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }} 
                                        >
                                            Favorites & Cart
                                        </MenuItem>
                                    </Link>
                                    <SignOutButton>
                                        <MenuItem
                                            sx={{
                                                display:'flex',
                                                width: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }} 
                                        >
                                                Sign out
                                        </MenuItem>
                                    </SignOutButton>
                                </Box>
                            </Menu>
                        </>
                    ) : (
                        <SignInButton
                            className='bg-cyan text-white w-[100px] rounded-lg py-2'
                        >
                            Sign In
                        </SignInButton>
                    )}
                </div>
            </nav>

            <Box 
                className='lg:hidden'
                sx={{ flexGrow: 1,}}
            >
                <AppBar 
                    position="fixed"
                >
                    <Toolbar
                        className='bg-white text-cyan h-[80px]'
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
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px',
                                paddingTop: '10px',
                                paddingBottom: '20px'
                            }}  
                            className='bg-white'
                        >
                            <Accordion
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                    color: '#13ADB7',
                                    width: '100%',
                                    boxShadow: 'none'
                                }}
                            >
                                <AccordionSummary 
                                    sx={{
                                        fontWeight: '600', 
                                        fontSize: '16px'
                                    }}
                                >
                                    My Account
                                </AccordionSummary>
                                <Link
                                    href={'/profile'}
                                >
                                    <AccordionDetails
                                        sx={{
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            gap: '5px'
                                        }}
                                    >
                                        Profile 
                                        <UserCircleIcon className='size-6 text-cyan' />
                                    </AccordionDetails>
                                </Link>
                                <Link
                                    href={'/favorites'}
                                >
                                    <AccordionDetails
                                        sx={{
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            gap: '5px'
                                        }}
                                    >
                                        Favorites & Cart 
                                        <ShoppingCartIcon className='size-6 text-cyan'/>
                                    </AccordionDetails>
                                </Link>
                                <SignOutButton>
                                    <AccordionDetails
                                        sx={{
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                            gap: '5px'
                                        }}
                                    >
                                        Sign out 
                                        <ArrowRightStartOnRectangleIcon className='size-6 text-cyan'/>
                                    </AccordionDetails>
                                </SignOutButton>
                            </Accordion>
                            {HeaderRoutes.map((header, index) => (
                                    <Button 
                                        key={index}
                                        sx={{
                                            color: '#13ADB7',
                                            fontWeight: '600',
                                            textTransform: 'capitalize',
                                            fontSize: '16px'
                                        }}
                                        className='flex items-center justify-center w-full h-[60px]'
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