import React from 'react'

export default function Footer() {
    return (
        
            <div className='flex lg:flex-row lg:justify-around lg:items-center bg-black w-full lg:h-[309px] text-white lg:text-lsm sm:flex-col sm:h-full sm:flex-wrap sm:gap-4 sm:py-4 sm:px-2'>
                <div className='flex lg:flex-row lg:gap-[60px] sm:flex-col sm:gap-4'>
                    <div className='flex lg:flex-col lg:gap-7 lg:text-lsm sm:gap-4 sm:flex-row sm:text-sm sm:flex-wrap'>
                        <p className='mb-1 text-[#FFFFFF]'>ABOUT</p>
                        <p>Partners</p>
                        <p>How-to</p>
                        <p>Helpdesk</p>
                        <p>Community</p>
                    </div>
                    <div className='flex lg:flex-col lg:gap-7 lg:text-lsm sm:flex-row sm:text-sm sm:flex-wrap sm:gap-4'>
                        <p className='mb-1 text-[#FFFFFF]'>TERMS & CONDITIONS</p>
                        <p>Report violations</p>
                        <p>Policy</p>
                        <p>Disclaimer</p>
                        <p>Missionary</p>
                    </div>
                </div>
                <div className='flex flex-col lg:gap-[66px] lg:text-lsm lg:text-right sm:text-left sm:text-sm sm:gap-4'>
                    <div className='flex flex-col lg:gap-7 sm:gap-2'>
                        <p className='mb-1 text-[#FFFFFF]'>Our Office</p>
                        <p>
                            Tropical Village Brgy. San Francisco, <br />
                            General Trias, Cavite. <br />
                            ZIP: 4107
                        </p>
                    </div>
                    <p className='sm:text-center'>2024 © NelTeano Website Platform.</p>
                </div>
            </div>
    )
}
