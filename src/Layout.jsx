import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout