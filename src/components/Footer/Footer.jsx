import React from 'react'

export default function Footer() {
    return (
        
            <div className='flex flex-row justify-around items-center bg-black w-full h-[309px] text-white text-lsm'>
                <div className='flex flex-row gap-[60px]'>
                    <div className='flex flex-col gap-7'>
                        <p className='mb-1 text-[#FFFFFF]'>ABOUT</p>
                        <p>Partners</p>
                        <p>How-to</p>
                        <p>Helpdesk</p>
                        <p>Community</p>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <p className='mb-1 text-[#FFFFFF]'>TERMS & CONDITIONS</p>
                        <p>Report violations</p>
                        <p>Policy</p>
                        <p>Disclaimer</p>
                        <p>Missionary</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[66px] text-right'>
                    <div className='flex flex-col gap-7'>
                        <p className='mb-1 text-[#FFFFFF]'>Our Office</p>
                        <p>
                            Tropical Village Brgy. San Francisco, <br />
                            General Trias, Cavite. <br />
                            ZIP: 4107
                        </p>
                    </div>
                    <p>2024 © NelTeano Website Platform.</p>
                </div>
            </div>
    )
}
