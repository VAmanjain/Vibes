import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

const Landing = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Landing