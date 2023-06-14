"use client"

import React from 'react'
import Image from 'next/image';
import  MantineSearchBar  from "../compnonents/MantineSearchBar";
import Link from 'next/link';
import { ShoppingCart } from "lucide-react"
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../store/slice/cartSlice';
import type { PayloadAction } from '@reduxjs/toolkit'
import { counterSlice } from '../store/slice/cartSlice';


const Header = () => {

  const cartvalue = useSelector((state: RootState) => state.CounterSlice.totalQuantity)
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
<div className='flex justify-center items-center h-12 w-12 rounded-full bg-rose-100 relative'>

{/* <Link href="/store/counter/counter"> */}
  <button >
    <span className='absolute right-1 top-0 bg-red-400 text-center h-4 w-4 text-xs text-white rounded-full items-center'>{cartvalue}</span>
<ShoppingCart /> 
</button>
{/* </Link>  */}

</div>



</div>



    </div>
    
    </header>
  )
}

export default Header