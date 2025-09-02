import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ToppingList from './ToppingList';
import { ShoppingCart } from 'lucide-react';
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
            <Card className='border-none rounded-xl hover:shadow-lg transition-shadow duration-300'>
                <CardHeader className='pt-4 flex justify-center'>
                    <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={200} 
                        height={200}
                        className='w-full max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] h-auto'
                    />
                </CardHeader>
                <CardContent className='px-4 pb-4'>
                    <h2 className='text-lg sm:text-xl font-bold text-center lg:text-left'>{product.name}</h2>
                    <p className='mt-2 text-sm sm:text-base text-center lg:text-left text-gray-600'>{product.description}</p>
                </CardContent>
                <CardFooter className='flex flex-col sm:flex-row items-center justify-between gap-3 px-4 pb-4'>
                    <p className='text-base sm:text-lg flex flex-row gap-1.5'>
                        <span>From</span>
                        <span className='font-bold'>Rs:{product.price}</span>
                    </p>
                    <Dialog>
                        <DialogTrigger className='bg-orange-200 hover:bg-orange-300 text-orange-500 px-4 sm:px-6 py-2 rounded-full cursor-pointer shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 text-sm sm:text-base w-full sm:w-auto'>
                            Choose
                        </DialogTrigger>
                        <DialogContent className='sm:max-w-4xl max-w-[95vw] max-h-[90vh] overflow-y-auto p-0'>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='w-full lg:w-1/3 bg-white rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none p-4 sm:p-6 lg:p-8 flex items-center justify-center'>
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={400} 
                                        height={400}
                                        className='w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] h-auto'
                                    />
                                </div>
                                <div className='w-full lg:w-2/3 p-4 sm:p-6 lg:p-8'>
                                    <h3 className='text-lg sm:text-xl font-bold'>{product.name}</h3>
                                    <p className='mt-1 text-sm sm:text-base text-gray-600'>{product.description}</p>

                                    <div>
                                        <h4 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">Choose the size</h4>
                                        <RadioGroup
                                            defaultValue="small"
                                            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-2">
                                            <div>
                                                <RadioGroupItem
                                                    value="small"
                                                    id="small"
                                                    className="peer sr-only"
                                                    aria-label="Small"
                                                />
                                                <Label
                                                    htmlFor="small"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-sm sm:text-base">
                                                    Small
                                                </Label>
                                            </div>

                                            <div>
                                                <RadioGroupItem
                                                    value="medium"
                                                    id="medium"
                                                    className="peer sr-only"
                                                    aria-label="Medium"
                                                />
                                                <Label
                                                    htmlFor="medium"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-sm sm:text-base">
                                                    Medium
                                                </Label>
                                            </div>

                                            <div>
                                                <RadioGroupItem
                                                    value="large"
                                                    id="large"
                                                    className="peer sr-only"
                                                    aria-label="Large"
                                                />
                                                <Label
                                                    htmlFor="large"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-sm sm:text-base">
                                                    Large
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div>
                                        <h4 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold">Choose the crust</h4>
                                        <RadioGroup
                                            defaultValue="thin"
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-2">
                                            <div>
                                                <RadioGroupItem
                                                    value="thin"
                                                    id="thin"
                                                    className="peer sr-only"
                                                    aria-label="Thin"
                                                />
                                                <Label
                                                    htmlFor="thin"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-sm sm:text-base">
                                                    Thin
                                                </Label>
                                            </div>

                                            <div>
                                                <RadioGroupItem
                                                    value="thick"
                                                    id="thick"
                                                    className="peer sr-only"
                                                    aria-label="Thick"
                                                />
                                                <Label
                                                    htmlFor="thick"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary text-sm sm:text-base">
                                                    Thick
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <ToppingList />
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-12">
                                        <span className="font-bold text-lg sm:text-xl">Rs:400</span>
                                        <Button className="w-full sm:w-auto">
                                            <ShoppingCart size={20} />
                                            <span className="ml-2">Add to cart</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div>
    )
}
