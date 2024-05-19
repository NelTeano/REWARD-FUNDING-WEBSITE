import React from 'react'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Accordion ,
    AccordionSummary ,
    AccordionDetails 
} from '@mui/material'

import { 
    ChevronDownIcon

} from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Footer() {


    const FooterLinks = [
        {
            header: 'ABOUT',
            subs: [
                {
                    name: 'Partners',
                    link: '/',
                },
                {
                    name: 'How-to',
                    link: '/',
                },
                {
                    name: 'Helpdesk',
                    link: '/',
                },
                {
                    name: 'Community',
                    link: '/',
                },
            ]
        },
        {
            header: 'TERMS & CONDITIONS',
            subs: [
                {
                    name: 'Report violations',
                    link: '/',
                },
                {
                    name: 'Policy',
                    link: '/',
                },
                {
                    name: 'Disclaimer',
                    link: '/',
                },
                {
                    name: 'Missionary',
                    link: '/',
                },
            ]
        },
    ]

    return (
            <React.Fragment>
                <div className='lg:flex lg:flex-row lg:justify-around lg:items-center bg-black w-full lg:h-[309px] text-white lg:text-lsm sm:flex-col sm:h-full sm:flex-wrap sm:gap-4 sm:py-4 sm:px-2 sm:hidden'>
                    <div className='flex lg:flex-row lg:gap-[60px] sm:flex-col sm:gap-4'>
                        <div className='flex lg:flex-col lg:gap-7 lg:text-lsm sm:gap-4 sm:flex-row sm:text-sm sm:flex-wrap'>
                            <p className='mb-1 text-[#FFFFFF]'>ABOUT</p>
                            <p>Partners</p>
                            <p>How-to</p>
                            <p>Helpdesk</p>
                            <p>Community</p>
                        </div>
                        <div className='flex lg:flex-col lg:gap-7 lg:text-lsm sm:flex-row sm:text-sm sm:flex-wrap sm:gap-4'>
                            <p className='mb-1 text-[#FFFFFF]'>TERMS & CONDITIONS</p>
                            <p>Report violations</p>
                            <p>Policy</p>
                            <p>Disclaimer</p>
                            <p>Missionary</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:gap-[66px] lg:text-lsm lg:text-right sm:text-left sm:text-sm sm:gap-4'>
                        <div className='flex flex-col lg:gap-7 sm:gap-2'>
                            <p className='mb-1 text-[#FFFFFF]'>Our Office</p>
                            <p>
                                Tropical Village Brgy. San Francisco, <br />
                                General Trias, Cavite. <br />
                                ZIP: 4107
                            </p>
                        </div>
                        <p className='sm:text-center'>2024 © NelTeano Website Platform.</p>
                    </div>
                </div>
                <Box
                    sx={{
                        backgroundColor: '#0F111D',
                        color: '#E9ECEB'
                    }}
                    className='lg:hidden sm:normal'
                >
                    {FooterLinks.map((footer, index)=> (
                        <Accordion
                            key={index}
                            sx={{
                                backgroundColor: '#0F111D',
                                color: '#E9ECEB'
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ChevronDownIcon className='size-6 text-white   '/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className='bg-black text-white'
                            >
                            {footer.header}
                            </AccordionSummary>
                            {footer.subs.map((footer, index)=> (
                                <Link
                                    href={footer.link}
                                    key={index}
                                    className='text-sm'
                                >
                                    <AccordionDetails>
                                        {footer.name}
                                    </AccordionDetails>
                                </Link>
                            ))}
                        </Accordion>
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '180px',
                            gap: '20px'
                        }}
                    >
                        <Typography
                            ml={2}
                        >
                            Our Office : <br />
                            Tropical Village Brgy. San Francisco, <br />
                            General Trias, Cavite. <br />
                            ZIP: 4107
                        </Typography>
                        <Typography
                            sx={{textAlign: 'center', fontSize: '14px'}}
                        >
                            2024 © NelTeano Website Platform.
                        </Typography>
                    </Box>
                </Box>
                        


            </React.Fragment>
    )
}
