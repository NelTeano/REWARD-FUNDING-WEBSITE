


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
    return (
        <div className='flex flex-col w-full lg:h-auto mb-[200px] sm:h-auto'>
            
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row gap-2 h-auto w-[1300px] mt-[100px] text-black">
                    <div className="flex flex-col w-[20%] min-h-[1300px] gap-4">
                        <div>
                            <h1 className='py-2 text-md font-medium'>Organization</h1>
                            <Divider />
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
                        <div>
                            <h1 className='py-2 text-md font-medium'>Categories</h1>
                            <Divider />
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
                        <div>
                            <h1 className='py-2 text-md font-medium'>Gender</h1>
                            <Divider />
                            <FormControl>
                                <FormGroup sx={{fontSize: '16px',}} column="true">
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
                    <div className="flex flex-col gap-4 w-[70%] min-h-[1300px]">
                        <h1 className='text-lg ml-6 font-bold uppercase'>accessories</h1>
                        <div className='flex flex-row items-center justify-center flex-wrap gap-4 w-full h-auto'>
                            {
                                [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((products, index)=>(
                                    <ProductCard key={index} />
                                ))
                            }
                        </div>
                        <div className='flex items-center justify-center w-full'>
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