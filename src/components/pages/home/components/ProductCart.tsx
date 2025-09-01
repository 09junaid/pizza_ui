import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
export type Product = {
    id: string;
    name: string;
    description: string;
    image: string | StaticImageData;
    price: number;
}
type PropTypes = {
    product: Product
}
export default function ProductCart({
    product
}: PropTypes) {
    return (
        <div>
            <Card className='border-none rounded-xl'>
                <CardHeader className='pt-4 flex justify-center'>
                   <Image src={product.image} alt={product.name} width={200} height={200} />
                </CardHeader>
                <CardContent>
                    <h2 className='text-xl font-bold'>{product.name}</h2>
                    <p className='mt-2'>{product.description}</p>
                </CardContent>
                <CardFooter className='flex items-center justify-between'>
                    <p className='text-lg flex flex-row gap-1.5'>
                        <span>From</span>
                        <span className='font-bold'>Rs:{product.price}</span>
                    </p>
                    <Button className='bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'>Choose</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
