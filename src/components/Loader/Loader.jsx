import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export default function Loader() {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-black flex items-center justify-center border-t-black rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                    <ShoppingBagIcon className="size-10 text-black"/> 
                </svg>
            </div>
        </div>
    )
}

