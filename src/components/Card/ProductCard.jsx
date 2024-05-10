import DemoPicture from '../../../public/assets/Necklace.jpg'
import OrgImage from '../../../public/assets/Companies/unicef.png'
import Image from 'next/image'

import { ShoppingCartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'


export default function ProductCard() {
    return (
        <div className='flex flex-col h-[500px] w-[300px] bg-white rounded-md shadow-lg'>
            <div className='relative'>
                    <button className='flex absolute right-4 top-4  w-[44px] h-[42px] rounded-full items-center justify-center bg-transparent border border-cyan text-cyan ease-in duration-150 hover:bg-cyan hover:text-white'>
                        <ShoppingCartIcon className="size-6 text-blue-500" />
                    </button>
                <Image 
                    src={DemoPicture}
                    priority={true}
                    width="0"
                    height="0"
                    className='h-[250px] w-full rounded-lg'
                    alt='product image'
                />
            </div>
            <div className='flex flex-col p-4 gap-2'>
                <div className='flex flex-row justify-between text-md text-cyan font-bold'>
                    <p>
                        Necklace <br />
                    </p>
                    <p>
                        20 $
                    </p>
                </div>
                <div className='flex flex-col text-sm gap-2 text-black'>
                    <div className='flex justify-between'>
                        <p>Organization :</p>
                        <Image 
                            src={OrgImage}
                            width="0"
                            height="0"
                            className='h-[20px] w-[60px]'
                            alt='product image'
                        />
                    </div>
                    <div>
                        <h1>Description :</h1>
                        <p className='text-gray'>
                            Prickly pear is a drought-resistant and hardy
                            cactus that blooms with yellow-golden flowers in summer.
                        </p>
                    </div>
                </div>
                <footer className='flex flex-row gap-2'>
                    <button className='flex w-[44px] h-[42px] rounded items-center justify-center bg-transparent border border-cyan text-cyan ease-in duration-150 hover:bg-cyan hover:text-white'>
                        <BuildingStorefrontIcon className="size-6 text-blue-500" />
                    </button>
                    <button className='w-[237px] h-[42px] bg-transparent rounded border border-cyan text-cyan ease-in duration-150 hover:bg-cyan hover:text-white'>
                        Buy now
                    </button>
                </footer>
            </div>
        </div>
    )
}
