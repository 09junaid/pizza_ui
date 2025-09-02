"use client"
import React from 'react'
import chicken from '../../../../../public/images/pngs/chicken.png'
import jelapeno from '../../../../../public/images/pngs/Jelapeno.png'
import cheese from '../../../../../public/images/pngs/cheese.png'
import ToppingCard, { Topping } from './ToppingCard';
const toppings = [
    { id: '1', name: 'Chicken', image: chicken, price: 50, isAvailable: true },
    { id: '2', name: 'jelapeno', image: jelapeno, price: 50, isAvailable: true },
    { id: '3', name: 'Cheese', image: cheese, price: 50, isAvailable: true },
];
export default function ToppingList() {
    const [selectedToppings, setSelectedToppings] = React.useState<Topping[]>([toppings[0]]);

    const handleCheckBoxCheck = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some((element) => element.id === topping.id);

        if (isAlreadyExists) {
            setSelectedToppings((prev) => prev.filter((elm) => elm.id !== topping.id));
            return;
        }

        setSelectedToppings((prev) => [...prev, topping]);
    };


    return (
        <section className='mt-4 sm:mt-6'>
            <h3 className='text-base sm:text-lg font-semibold'>Extra toppings</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 mt-2 gap-2 sm:gap-3 lg:gap-4'>
                {toppings.map((topping) => (
                    <ToppingCard topping={topping} key={topping.id} selectedToppings={selectedToppings}
                        handleCheckBoxCheck={handleCheckBoxCheck}
                    />
                ))}
            </div>
        </section>
    )
}
