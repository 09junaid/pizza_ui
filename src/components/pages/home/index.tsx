import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import pizzaImg from "../../../../public/images/pngs/pizza-main.png"
import ProductCart, { Product } from './components/ProductCart'
const products: Product[] = [
  {
    id: '1',
    name: 'Margarita Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '2',
    name: 'Cheese Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '3',
    name: 'Pepperoni Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '4',
    name: 'Veggie Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '5',
    name: 'BBQ Chicken Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
];

export default function HomePage() {
  return (
    <>
      <section className='bg-white pt-20'>
        <div className='container mx-auto px-4 py-8 lg:py-12'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            {/* left side */}
            <div className='text-center lg:text-left flex-1'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-sans leading-tight'>
                Super Delicious Pizza in <br />
                <span className='text-primary'>Only 45 Minutes!</span>
              </h1>
              <p className='text-lg sm:text-xl lg:text-2xl mt-6 lg:mt-8 max-w-lg mx-auto lg:mx-0 leading-snug'>
                Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
              </p>
              <Button className='mt-6 lg:mt-8 text-base lg:text-lg rounded-full py-6 lg:py-7 px-6 font-bold w-full sm:w-auto'>
                Get your pizza now
              </Button>
            </div>

            {/* right side */}
            <div className='flex-1 flex justify-center lg:justify-end'>
              <Image 
                src={pizzaImg} 
                alt="Pizza Image" 
                width={400} 
                height={400}
                className='w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-4 py-8 lg:py-16'>
          <Tabs defaultValue="pizza">
            <TabsList className='grid w-full grid-cols-2 max-w-md mx-auto lg:mx-0'>
              <TabsTrigger value="pizza" className='text-sm sm:text-md'>Pizza</TabsTrigger>
              <TabsTrigger value="beverages" className='text-sm sm:text-md'>Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6'>

                {products.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))}
              </div>

            </TabsContent>
            <TabsContent value="beverages">
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6'>

                {products.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
