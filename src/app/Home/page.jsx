'use client'
import React from 'react'
import Payment from '../../../components/payment/Payment'

import { useAuth,  SignOutButton} from "@clerk/nextjs";

export default function Page() {


    const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();

    if (!isLoaded || !userId) {
        return null;
    }




    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '1000px',
                width: '100%',
                backgroundColor: 'white',
                gap: '50px'
            }}>
                <p>Hello {userId}  your current active session is {sessionId} Click the button below to Buy Bracelets</p>
                <SignOutButton />
                <img 
                    src='https://i.ebayimg.com/images/g/hy4AAOSwFDliROQL/s-l1200.webp'
                    height={'400px'} 
                    width={'400px'}
                    style={{borderRadius: '20px', border: 'black 1px solid'}}
                    >
                </img>
                <div>
                    <Payment />
                </div>
            </div>
        </>
        
    )
}
