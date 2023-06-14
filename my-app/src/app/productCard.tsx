"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";
import {  Image as Iimage } from "sanity";
import { urlForImage } from '../../sanity/lib/image';
import { Button } from "../app/ui/button";
import 'tailwindcss/tailwind.css';
import { Dispatch } from '@reduxjs/toolkit';
import { AppDispatch } from './store/store';
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from './store/slice/cartSlice';
import  { FC } from 'react';

const ProductCard: FC <{ item: any }> = ({ item }) => {

async function handleAddToCart() {
    


    const res = await fetch ("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id
      })  
    })

    const result = await res.json()
    // return result
    console.log(result);
    

}

const dispatch = useDispatch()
const addItem = () => {dispatch(cartActions.AddToCart({quantity: 1}))
}

  return (
    <>
    
    <div className='mt-14'>
<div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
   
      <div>
        <Image className='max-h-[300px] max-w-[500px] object-center' src={urlForImage(item.image).url()} alt="Loading" height={300} width={200} />
        <h1 className='font-semibold text-lg font-sans mt-2'>{item.products}</h1>
        <p className='text-gray-500 font-bold'>{item.description}</p>
        <h5 className='text-slate-900 font-semibold text-xl mt-1 mb-2'> ${item.price}</h5>
        {/* <button onClick={ handleAddToCart} className='rounded-md bg-blue-500 mt-2 p-1.5 text-lg text-gray-50 font-bold'> Add to Cart</button> */}
    <span>
        <Button onClick={addItem}>Add To Cart</Button></span>
      </div>
      </div>
  </div>
</div>

 

    </>
  )

}

export default ProductCard