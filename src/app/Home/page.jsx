'use client'
import React from 'react'
import Payment from '../../../components/payment/Payment'

export default function page() {
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
                <p>Hello Click the button below to Buy Bracelets</p>
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
