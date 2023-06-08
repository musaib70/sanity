import React from 'react'
import Image from 'next/image';
import  MantineSearchBar  from "../compnonents/MantineSearchBar";

import { ShoppingCart } from "lucide-react"







const Header = () => {
  return (

<header className=' flex bg-opacity-95 justify-between my-4 px-2 py-2 item-center  bg-white sticky top-0 '>


    <div className='flex justify-between w-full'>

<img src="/dine-market.png" alt="loading" height={100} width={200} />

<div className='flex items-center gap-12 font-semibold text-lg'>

<button>Female</button>
<button>Male</button>
<button>Kids</button>
<button>All Products</button>
</div>

<div className='flex  items-center '>
<MantineSearchBar/>
</div>

<div className='flex items-center'>
<div className='flex justify-center items-center h-12 w-12 rounded-full bg-rose-100'>
  <button >
<ShoppingCart />
</button>
</div>



</div>



    </div>
    
    </header>
  )
}

export default Header