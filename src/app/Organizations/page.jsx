'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrgCard from '@/components/Card/OrganizationCard';

export default function Page() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        const getAllOrganization = async () => {
            try {
                const response = await axios.get('https://deploy-express-vercel-ashy.vercel.app/api/products/12');
                setOrganizations(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log("Fetch Data Error", error);
            }
        }

        getAllOrganization();
    }, []);

    return (
        <React.Fragment>
            {organizations && (
                <div className='flex flex-col w-full relative h-[6000px] bg-lightGray'>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row flex-wrap w-[1200px] justify-center items-center gap-10'>
                            {organizations.map((details, index) => (
                                <OrgCard 
                                    key={index}
                                    // name={details.name}
                                    // logo={details.images[0]}
                                    // desc={details.description}
                                    // paymentLink={details.metadata?.link} 
                                    product={details}
                                />
                            ))}
                        </div>
                    </div>



                </div>
            )}
        </React.Fragment>
    )
}
