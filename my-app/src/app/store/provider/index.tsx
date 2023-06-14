"use client"

import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import { store } from '../store'
import  {Provider}  from 'react-redux'



const Providers = ({children}: {children:React.ReactNode} )  => {

  return(


  <Provider store={store}> {children} </Provider>


  )
}

 
  


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

export default Providers;