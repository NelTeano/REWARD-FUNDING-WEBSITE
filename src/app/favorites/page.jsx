import Link from "next/link"
import ProductCard from "@/components/Card/ProductCard"
import { HeartIcon } from '@heroicons/react/24/solid'

const Page = ({}) => {



    return (
        <div className='flex flex-col w-full relative h-[5600px] bg-black sm:h-auto'>
            <div
                className='flex flex-col gap-12 relative w-full h-[2000px] gap-5 bg-lightGray mt-20 text-black'
            >
                <div
                    className="flex flex-col justify-center items-center w-full h-auto bg-lightGray py-[200px] gap-4"
                >   
                    <div
                        className="flex inline items-center gap-4 text-cyan"
                    >
                        <p className="text-lg">
                            Liked Products
                        </p>
                        <HeartIcon className="size-9 " /> 
                    </div>
                    <div
                        className='flex flex-row flex-wrap justify-center items-center lg:w-[90%] lg:gap-4 sm:gap-1 sm:items-center sm:justify-center sm:w-full ml-5'
                    >
                        {mockData.map((products, index) => (
                            <ProductCard 
                                productDetails={products} 
                                key={index} 
                            />
                        ))}
                    </div>
                </div>
                <div
                    className="flex flex-col w-full h-auto bg-white"
                >   
                    <div
                        className="flex ml-10"
                    >
                        <p>Supported Organizations</p>
                    </div>
                    <div
                        className="w-[1090px] h-[600px] bg-lightGray ml-10"
                    >
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page


const mockData = [
    {
        "_id": "66593ddc5bea81d3fc22dcc6",
        "name": "Bulgary Necklace",
        "price": 2000,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 4,
        "chosen_variant": "Small",
        "__v": 0
    },
    {
        "_id": "66594ae35bea81d3fc22dcc8",
        "name": "Diamond Solitaire Necklace",
        "price": 1000,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 2,
        "chosen_variant": "Medium",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
    {
        "_id": "66594af05bea81d3fc22dcca",
        "name": "Pearl Strand Necklace",
        "price": 500,
        "organization_owner": "unicef",
        "description": "Accessory Necklace for fashion",
        "image": "https://res-console.cloudinary.com/difziuyxq/thumbnails/v1/image/upload/v1717119639/aW1hZ2VzX2hlbmdxZQ==/drilldown",
        "catergory": "Necklace",
        "variation": [
            "Small",
            "Medium",
            "Large"
        ],
        "quantity": 1,
        "chosen_variant": "Large",
        "__v": 0
    },
]