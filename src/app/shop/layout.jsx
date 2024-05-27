
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

import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 bg-black h-[365px] w-full lg:mt-0 sm:h-[350px] sm:mt-10">
                <h1 className="text-white text-lg font-bold">E-Commerce Shop</h1>
                <p className="text-white text-md font-medium text-center">
                    Shop now at RewFund and help us raise funds for charity by Organizations <br /> 
                    Your purchase makes a difference!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-[200px] w-full hidden">
                <div className="flex flex-row items-center justify-center w-[1280px] border-t border-b border-black py-8 gap-12">
                    {[
                        "Apparels", 
                        "Shoes", 
                        "Furnitures", 
                        "Accessories", 
                        "Pet Products", 
                        "Crafts", 
                        "Equipments"
                    ].map((types, index) => (
                        <Link 
                            key={index} 
                            href='/'
                            className='font-bold'
                        >
                            {types}
                        </Link>
                    ))
                    
                    }
                </div>
            </div>
            <main className='bg-lightGray'>
                {children}
            </main>
        </>   
    )
}