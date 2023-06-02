import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";
import {  Image as Iimage } from "sanity";
import { urlForImage } from '../../sanity/lib/image';
import  ProductCard  from './productCard';

interface types {

  _id: number
  products: string
  description: string
  price: number
  image: Iimage,
  category: {
  name: string
  }
}


 export async function data () {

  const res = await client.fetch(`*[_type == "product"]{

  _id,
  products,
  price,
  image,
  category -> {
  name,
  },
description
}
`)
 
  return res
  
}

export default async function Home() {

  const data1:types[] = await data()

 return(

  <div className='grid grid-cols-3 max-w-screen-lg mx-auto m-4 '>
    {
      data1.map((item) => 
      (
        <div >
          
       
      <ProductCard item = {item}/>

        </div>
      ))
    }
  </div>
 ) 
 
}
