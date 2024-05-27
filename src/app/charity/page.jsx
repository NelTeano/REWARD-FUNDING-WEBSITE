

// COMPONENTS
import DonationCard from '@/components/Card/DonationCard';
import Link from 'next/link';
import { Button } from '@mui/material'

// ICONS 
import { 
    ChevronRightIcon,
    BanknotesIcon
} from '@heroicons/react/24/solid'

const Page = ({}) => {
    return (
        <div className='flex flex-col w-full lg:h-auto bg-lightGray sm:h-auto'>
            <div className="flex flex-col items-center justify-center gap-4 bg-black lg:h-[365px] w-full lg:mt-0 text-center sm:h-[350px] sm:mt-10">
                <h1 className="text-white text-lg font-bold">Support Various Causes</h1>
                <p className="text-white text-md font-medium text-center">
                    Help us raise funds for different types of charitable causes <br /> 
                    including disaster relief, education, healthcare, and more!
                </p>
            </div>
            <div className='flex flex-col w-full h-auto bg-lightGray justify-center items-center px-[187px] py-[80px] gap-8 sm:px-2 '>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <div className='flex inline gap-2 text-[32px]'>
                                <h1 className='text-black'>
                                    Open
                                </h1>
                                <h1 className='text-cyan '>
                                    donations
                                </h1>
                            </div>
                            <div className='flex lg:flex-row lg:w-[500px] gap-2 sm:flex-wrap sm:w-[300px] sm:items-center sm:justify-center'>
                                <button className='border text-[16px] text-white border-cyan rounded-lg w-[50px] h-[38px] bg-cyan'>
                                    All
                                </button>

                                {["Homeless", "Food Crisis", "Disaster", "Education"].map((categories, index) => (
                                    <button 
                                        className='border text-[16px] text-cyan border-cyan rounded-lg w-[93px] h-[38px] hover:text-white hover:bg-cyan'
                                        key={index}
                                    >
                                        {categories}
                                    </button>
                                ))}
                            </div>
                            <div className='flex lg:flex-row flex-wrap lg:w-[1067px] gap-10 sm:flex-col sm:items-center sm:justify-center sm:w-full'>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((card, index) => (
                                    <DonationCard key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <Button sx={{
                                backgroundColor: '#13ADB7',
                                width: '371px',
                                height: '51px',
                                color: '#E9ECEB',
                                '&:hover': {
                                    backgroundColor: '#079fa9',
                                },
                            }}>
                                    View More Charities Available
                            </Button> 
                        </div>
                    </div> 
        </div>
    )
}

export default Page