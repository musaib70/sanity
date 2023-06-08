import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";


const footer = () => {
  return (

    
    <section className='border-t border-gray-200 mx-8 mt-12'>
    
        

        
         <div>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[40%,20%,20%,20%] gap-x-10 mt-12 mb-6'>

<div>
    <img 
     src="dine-market.png" alt="loading"
     height={100}
         width= {150} />
         <p className='mt-6 text-gray-600 text-md '>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
        
        <div className='flex my-6 gap-4'>
            <span className='mr-2'> <BsFacebook/> </span>
            <span className='mr-2'> <IoLogoYoutube/> </span>
            <span className='mr-2'> <BsTwitter/> </span>
            <span className='mr-2'> <GoMarkGithub/> </span>
            </div> 


</div>

<div className=''>
    <h2 className='font-bold text-xl text-gray-600'>Company</h2>
    <ul className='my-4  text-gray-600'>
        <li className='my-2'>About</li>
        <li className='my-2'>Terms of Use</li> Company
        <li className='my-2'>Privacy Policy</li>
        <li className='my-2'>How it Works</li>
        <li className='my-2'>Contact Us</li>
    </ul>
</div>

   
<div>
    <h2 className='font-bold text-xl text-gray-600'>Support</h2>
    <ul className='my-4 text-gray-600'>
        <li>Home</li>
        <li className='my-2'> Support Carrer</li>
        <li className='my-2'>24h Service</li>
        <li className='my-2'>Quick Chat</li>
    </ul>
</div>


<div>
    <h2 className='font-bold text-xl text-gray-600'>Contact</h2>
    <ul className='my-4 text-gray-600'>
        <li>Home</li>
        <li className='my-2'>Whatsapp</li>
        <li className='my-2'>Support 24h</li>
    </ul>
</div>


   
   







</div>
         </div>
         
        
    </section>
    
   
  )
}

export default footer