import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { client } from "./lib/client-fetch";

interface types {
  products: "string",
  id: "number",
  description: "string"
}

 export async function data () {

  const res = await client.fetch(`*[_type == "product" ] {
   id,
   products,
   description
  }`)
 
  return res
  
}

export default async function Home() {

  const data1:types[] = await data()

 return(

  <div>
    {
      data1.map((item) => 
      (
        <div>
          <h1>{item.id}</h1>
          <h1>{item.products}</h1>
          <p>{item.description}</p>
        </div>
      ))
    }
  </div>
 )
 
}
