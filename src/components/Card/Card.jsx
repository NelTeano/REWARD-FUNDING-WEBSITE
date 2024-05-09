import DemoPicture from '../../../public/assets/DemoPic.png'
import Image from 'next/image'

import { DM_Sans } from 'next/font/google'


// ICONS 
import { BookmarkIcon } from '@heroicons/react/24/outline'

const Card = ({}) => {
    return (
        <div className='flex flex-col border-black rounded-md h-[440px] w-[329px] bg-white shadow-lg' >
            <Image 
                src={DemoPicture}
                priority={true}
                width="0"
                height="0"
                className='h-200 w-full'
                alt='product image'
            />
            <main className='flex flex-col px-5 pt-1 gap-4'>
                <article className='flex flex-row justify-between'>
                    <p className='text-sm text-gray'>June 27, 2021</p>
                    <p className='text-sm text-cyan'>Food Crisis</p>
                </article>
                <article className='flex flex-col gap-2'>
                    <h1 className='text-md text-black'>Flood in Lamboa</h1>
                    <p className='text-sm leading-5 text-gray'>African children need your help to get <br /> proper food and water. Prolonged crisis is <br /> a real urgency.</p>
                </article>
                <footer className='flex flex-row gap-2'>
                    <button className='flex w-[44px] h-[42px] rounded items-center justify-center bg-transparent border border-cyan text-cyan ease-in duration-150 hover:bg-cyan hover:text-white'>
                        <BookmarkIcon className="size-6 text-blue-500" />
                    </button>
                    <button className='w-[237px] h-[42px] bg-transparent rounded border border-cyan text-cyan ease-in duration-150 hover:bg-cyan hover:text-white'>
                        Donate now
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default Card