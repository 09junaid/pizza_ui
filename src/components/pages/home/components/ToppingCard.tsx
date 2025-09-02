import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
export type Topping = {
    id: string;
    name: string;
    price: number;
    image: string | StaticImageData;
    isAvailable: boolean;
};
type PropType = {
    topping: Topping;
    selectedToppings: Topping[];
    handleCheckBoxCheck: (topping: Topping) => void;
};
export default function ToppingCard({ topping, selectedToppings, handleCheckBoxCheck }: PropType) {
    const isCurrentSelected = selectedToppings.some((element) => element.id === topping.id);
    return (
        <Button
            onClick={() => handleCheckBoxCheck(topping)}
            variant={'outline'}
            className={cn(
                'flex flex-col h-32 sm:h-36 lg:h-40 relative p-2 sm:p-3 transition-all duration-200 hover:shadow-md',
                isCurrentSelected ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
            )}>
            <Image 
                src={topping.image} 
                width={80} 
                height={80} 
                alt={topping.name}
                className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain'
            />
            <h4 className='text-xs sm:text-sm font-medium mt-1'>{topping.name}</h4>
            <p className='text-xs sm:text-sm font-bold text-primary'>&#8377;{topping.price}</p>
            {isCurrentSelected && <CircleCheck className="absolute top-1 right-1 text-primary w-4 h-4 sm:w-5 sm:h-5" />}
        </Button>
    )
}
