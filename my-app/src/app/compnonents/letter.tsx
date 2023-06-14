import React from 'react'
import { Button } from "@/app/ui/button"
import { Input } from "@/app/ui/input"

const letter = () => {
  return (

    <>


    <div className='mt-16 '>

        <div className='relative'>
        
<div className=' flex justify-between absolute ml-80 mt-12'>
    <h1 className=' text-gray-200 -z-50 text-8xl font-extrabold  '>NEWSLETTER</h1>
    </div>
        <div className='flex justify-center '>
    <h1 className='text-6xl font-bold text text-gray-800'>Subscribe Our Newsletter</h1>
    </div>
    <div className='flex justify-center '>
    <p className='mt-6 text-lg text-gray-700'>Get the latest information and promo offers directly</p>
    </div>



    <div className="flex justify-center  items-center space-x-2  mt-10 ">
      <Input className='max-w-md' type="email" placeholder="Input Email Address" />
      <Button className='w-auto'  type="submit">Get Started</Button>

    </div>




    </div>
    </div>
    </>
  )
}

export default letter