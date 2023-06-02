"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";
import {  Image as Iimage } from "sanity";
import { urlForImage } from '../../sanity/lib/image';

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

  return (
    <div>
           <Image className='max-h-[300px] max-w-[500px] object-center ' src = {urlForImage(item.image).url()} alt = "Loading" height = {300} width = {200}/>
          <h1 className='font-semibold text-lg font-sans mt-2'>{item.products}</h1>
          <p className='text-gray-500 font-bold'>{item.description}</p>
          <h5 className='text-slate-900 font-semibold text-xl mt-1'> ${item.price}</h5>
          <button onClick={ handleAddToCart} className='rounded-md bg-blue-500 mt-2 p-1.5 text-lg text-gray-50 font-bold'> Add to Cart</button>
    </div>
  )
}

export default ProductCard