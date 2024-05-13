import { SignUp } from "@clerk/nextjs";
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
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#0F111D',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '80%',
                        height: '800px',
                        backgroundColor: '#0F111D',
                        mt: '5rem'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '800px',
                            backgroundColor: 'white'
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
                            width: '100%',
                            height: '800px',
                            backgroundColor: 'white'
                        }}
                    >
                        <SignUp path="/sign-up" />
                    </Box>      
                </Box>
            </Container>
        </>
        

    );
}