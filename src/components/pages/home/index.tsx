import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import pizzaImg from "../../../../public/images/pngs/pizza-main.png"

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
          <Tabs defaultValue="pizza" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="pizza" className='text-md'>Pizza</TabsTrigger>
              <TabsTrigger value="beverages" className='text-md'>Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">Pizza List</TabsContent>
            <TabsContent value="beverages">Beverages List</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
