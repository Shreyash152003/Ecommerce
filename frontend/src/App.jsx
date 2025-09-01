import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBox from './components/searchBox'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer/>
        <Navbar/>
        <br />
        <SearchBox/>
        <br />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/place-order' element={<Placeorder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/verify' element={<Verify/>}/>


        </Routes>
        <Footer/>

      </div>
    </>
  )
}

export default App
