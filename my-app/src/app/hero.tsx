import React from 'react'
import { ShoppingCart } from "lucide-react"
import { Button } from "../app/ui/button"




const hero = () => {
  return (
    <>
    <div className='grid grid-cols-[40%,60%]'>
    <div >
<div className=' rounded-md bg-rose-100 w-36 h-12  py-2.5 text-center text-xl text-gray-800 font-semibold mt-16 font-mono'>Sale  70%</div>

<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl mt-10 ">An Industrial Take on Streetwear</h1>

<p className='mt-10 text-gray-700 text-lg  font-normal'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>


<Button className='mt-12 h-12 w-44 font-semibold'><ShoppingCart className="mr-2 h-4 w-4 " /> Start Shopping</Button>

<div className=' mt-16 flex justify-between '>
<img src="logo1.png" alt="loading" />
<img src="logo2.png" alt="loading" />
<img src="logo3.png" alt="loading" />
<img src="logo4.png" alt="loading" />
</div>

    </div>

    <div className=''>

      <img src="model.jpg" alt="loading"  />
    </div>

    </div>
    </>
    
  )
}

export default hero