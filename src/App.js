import React from 'react'
import Layout from './Layout/Layout'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

export default function App() {

let Routers= createHashRouter([
  {path:"", element:<Layout/> , children :[
    {path:"", element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" ,element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<NotFound/>}
  ]}
])

  return (
    <>
  <RouterProvider router={Routers}/>
    </>
  )
}
