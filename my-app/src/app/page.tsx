import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";
import {  Image as Iimage } from "sanity";
import { urlForImage } from '../../sanity/lib/image';
import  ProductCard  from './productCard';
import  Header  from "../app/Layout/Header";
import Hero from "../app/hero";
import Specialization from "../app/specialization"


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

<div className='max-w-screen-2xl mx-auto'>

  <div className=''>

       <Header/>

      <Hero/>

      <Specialization/>
     
    {
      data1.map((item) => 
      (
        <div className=' '>

   
       
      {/* <ProductCard item = {item}/> */}

        </div>
       
      ))
    }
  </div>
  </div>
 ) 
 
}
