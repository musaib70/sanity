"use client"

export default async function counterView () {

const countervalue = 0 
const increment = () => {}
 return(
<>

<div> counter app {countervalue} </div>
<button onClick={increment}>increment</button>
<button>decrement</button>

</>
 )   
}