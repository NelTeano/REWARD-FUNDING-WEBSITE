import { SignIn } from "@clerk/nextjs";
import {
    Container, 
    Box
} from '@mui/material';

import Image from "next/image";

// IMAGES
import RewFundBanner from '../../../../public/assets/RewFundLoginBanner.png'

export default function Page() {
    return (
        <>
            <Container 
                disableGutters={true} 
                maxWidth='100%' 
                sx={{
                        height: '800px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor:'#E5E5E5'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 'auto',
                        height: 'auto',
                        backgroundColor: {xs: 'transparent'}
                    }}
                    className="lg:shadow-lg"
                >
                    <Box
                        sx={{
                            display: {xs: 'none', md: 'flex'},
                            height: '500px',
                            width: '500px',
                        }}
                    >
                        <Image 
                            src={RewFundBanner}
                            priority={true}
                            width="0"
                            height="0"
                            className='h-full w-full relative'
                            alt='product image'
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '500px',
                            width: {xs: 'auto' , md: '500px'},
                            backgroundColor: {xs: 'transparent', md:'white'},
                            padding: '15px'
                        }}
                    >
                        <SignIn path="/sign-in" />
                    </Box>
                </Box>
            </Container>
        </>

    );
}