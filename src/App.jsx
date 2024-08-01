import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
// import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* //import font style */}
    <div className='josefin-sans-text'>

    <Nav/>
     <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
     </Routes>

     {/* <RouterProvider router={Router}/> */}
    </div>
    </>
  )
}

export default App
