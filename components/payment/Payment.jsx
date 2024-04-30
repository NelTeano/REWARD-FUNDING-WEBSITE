import React from 'react'
import Link from 'next/link';


export default function Payment() {

    

    return (
        <>
            <Link href='https://buy.stripe.com/test_28o03G8ZV63XamQfYY'>
                <button
                    style={{width: '300px', height: '70px', padding: '20px', borderRadius: '10px', backgroundColor: '#0074d4', color: 'white'}}
                >
                    Buy 
                </button>
            </Link>
        </>
    )
}
