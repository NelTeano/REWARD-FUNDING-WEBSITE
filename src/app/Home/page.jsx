'use client'
import React, { useState, useEffect} from 'react'
import Payment from '../../../components/payment/Payment'


import { useAuth,  SignOutButton} from "@clerk/nextjs";
import { redirect, useRouter} from 'next/navigation';
import axios from 'axios';



export default function Page() {

    const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();
    const router = useRouter()

    if (!isLoaded || !userId) {
        redirect('/');
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const GetAllUsers = async () => {
            try {
                const getUsers = await axios.get('https://deploy-express-vercel-ashy.vercel.app/api/users');
                setUsers(getUsers.data);
                console.log(getUsers.data);
            } catch (error) {
                console.log("Fetch Data Error", error)
            }
        }

        GetAllUsers();
    }, [])
    

    

    // console.log("user: ", users[0].name);
    // console.log("user: ", users[0].email)

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
                <SignOutButton redirectUrl='/'>
                    <button>Sign out</button>
                </SignOutButton>
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

