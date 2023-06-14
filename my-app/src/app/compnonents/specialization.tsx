import React from 'react'

const specialization = () => {
  return (
    <>
     <div className=' mt-20'>
    <div className='flex justify-center items-center'>
        <h4 className='text-indigo-500 font-semibold '>PROMOTIONS</h4>
        </div>
        <div className='flex justify-center items-center mt-2'>
        <h1 className='text-4xl font-bold text'>Our Promotions Events</h1>
    </div>





    <div className=' grid grid-rows-2 gap-6 mt-6 '>


       <div className='border-slate-950 bg-zinc-300 '>
       <div className='grid grid-cols-[70%,30%]'>
        <div>
        <h1 className='text-4xl font-bold text font-sans text-gray-800 ml-10 mt-16'>GET UP TO 60%</h1>
        <p className='text-lg text-gray-800 ml-10 mt-2'>For the summer season</p>
        </div>
 

        <div className=' '>
            <img src="event3.png" alt="loading"  />
        </div>
        </div>
        </div>


        <div className='border-slate-950 bg-gray-800 text-center items-center py-8'>
        <h1 className='text-4xl font-bold text font-sans text-white ml-10'>GET 30% Off</h1>
        <p className='text-lg ml-10 text-white mt-4'>USE PROMO CODE</p>
    
        <button className='bg-neutral-700 text-white rounded-md h-12 w-52 mt-4 ml-12 font-bold'>DINEWEEKENDSALE</button>
   
        </div>
</div>

<div className='flex justify-center items-center mt-10'>
        <h4 className='text-indigo-500 font-semibold '>PRODUCTS</h4>
        </div>
        <div className='flex justify-center items-center mt-2'>
        <h1 className='text-4xl font-bold text'>Check What We Have</h1>
    </div>

</div>
    </>
  )
}

export default specialization