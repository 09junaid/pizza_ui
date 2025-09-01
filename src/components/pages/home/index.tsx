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
    name: 'Margarita Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '3',
    name: 'Margarita Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '4',
    name: 'Margarita Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
  {
    id: '5',
    name: 'Margarita Pizza',
    description: 'This is a very tasty pizza',
    image: pizzaImg,
    price: 500,
  },
];

export default function HomePage() {
  return (
    <>
      <section className='bg-white'>
        <div className='container mx-auto flex items-center justify-between py-8'>
          {/* left side */}
          <div>
            <h1 className='text-7xl font-black font-sans'>
              Super Delicious Pizza in <br />
              <span className='text-primary'>Only 45 Minutes!</span>
            </h1>
            <p className='text-2xl mt-8 max-w-lg leading-snug'>
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className='mt-8 text-lg rounded-full py-7 px-6 font-bold'>Get your pizza now</Button>
          </div>

          {/* right side */}
          <div>
            <Image src={pizzaImg} alt="Pizza Image" width={400} height={400} />
          </div>

        </div>
      </section>

      <section>
        <div className='container mx-auto py-16'>
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className='text-md'>Pizza</TabsTrigger>
              <TabsTrigger value="beverages" className='text-md'>Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>

                {products.map((product) => (
                  <ProductCart key={product.id} product={product} />
                ))}
              </div>

            </TabsContent>
            <TabsContent value="beverages">
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>

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
