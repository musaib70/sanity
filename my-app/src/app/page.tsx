import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";
import {  Image as Iimage } from "sanity";
import { urlForImage } from '../../sanity/lib/image';
import  ProductCard  from './productCard';
import  Header  from "../app/Layout/Header";
import Hero from "./compnonents/hero";
import Specialization from "../app/compnonents/specialization"
import Footer from "../app/Layout/footer";
import  Letter  from "./compnonents/letter";
import counterView from './cart/cart';
import { Counter } from './store/counter/counter';



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

<div className='max-w-screen-xl mx-auto'>



       <Header/>

      <Hero/>

      <Specialization/>


      <div className=' mt-14 '>
         <div className="max-w-screen-2xl mx-auto  ">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-14  gap-y-14 ml-40">
     
    {
            
      data1.map((item) => 
      (
        <>
             <div>
       
      <ProductCard  item = {item}/>

        </div>

        </>
       
      ))

    }
      </div>
      </div>
      </div>



<Letter/>

<Footer/>


  </div>
 ) 
 
}
