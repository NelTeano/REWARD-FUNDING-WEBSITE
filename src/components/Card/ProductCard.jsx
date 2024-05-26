import DemoPicture from '../../../public/assets/Necklace.jpg'
import OrgImage from '../../../public/assets/Companies/unicef.png'
import Image from 'next/image'

import { ShoppingCartIcon, } from '@heroicons/react/24/outline'


export default function ProductCard() {
    return (
        <div className='flex flex-col lg:h-[290px] lg:w-[200px] bg-white rounded-md shadow-lg sm:w-[150px] sm:h-[255px] sm:mt-2'>
            <div className='relative'>
                <Image 
                    src={DemoPicture}
                    priority={true}
                    width="0"
                    height="0"
                    className='lg:h-[150px] w-full sm:h-[120px]'
                    alt='product image'
                />
            </div>
            <div className='flex flex-col p-4 gap-2'>
                <div className='flex flex-row justify-between lg:text-md text-cyan font-bold sm:text-sm'>
                    <p>
                        Necklace <br />
                    </p>
                    <p>
                        20 $
                    </p>
                </div>
                <div className='flex lg:flex-col text-sm gap-2 text-black'>
                    <div className='lg:flex lg:flex-row justify-between sm:flex-col'>
                        <p className='text-sm'>Organization :</p>
                        <Image 
                            src={OrgImage}
                            width="0"
                            height="0"
                            className='h-[20px] w-[60px]'
                            alt='product image'
                        />
                    </div>
                </div>
                <footer className='flex flex-row gap-2'>
                    <button className='flex lg:w-[44px] lg:h-[37px] rounded items-center justify-center bg-transparent border border-cyan text-cyan ease-in duration-150 sm:w-[44px] sm:h-[30px] hover:bg-cyan hover:text-white'>
                        <ShoppingCartIcon className="size-4 text-blue-500" />
                    </button>
                    <button className='lg:w-[170px] lg:h-[37px] bg-cyan rounded border border-cyan text-white ease-in duration-150 sm:w-[170px] sm:h-[30px] hover:bg-darkCyan hover:text-white'>
                        Buy now
                    </button>
                </footer>
            </div>
        </div>
    )
}
