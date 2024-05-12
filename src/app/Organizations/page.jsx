"use client"
import React, { useState, useEffect} from 'react'
import axios from 'axios';

export default function Page() {

    const [organizations, setOrganizations] = useState(['']);

    useEffect(() => {
        
            const getAllOrganization = async () => {
                try {
                    const getUsers = await axios.get('https://deploy-express-vercel-ashy.vercel.app/api/products/12');
                    setOrganizations(getUsers.data);
                    console.log(getUsers.data);
                } catch (error) {
                    console.log("Fetch Data Error", error)
                }
            }

            getAllOrganization();
    }, [organizations]);

    return (
        <div>
        
        </div>
    )
}
