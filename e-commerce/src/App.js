import React from 'react'
import TopNav from './components/TopNav'
import Zitempage from './page/Zitempage'
import { Route, Routes } from 'react-router-dom'
import Cart from './page/Cart'
import NotFound from './page/NotFound'
import Delivery from './page/Delivery'
import Home from './page/Home'
import Shop from './page/Shop'
import Sell from './page/Sell'
import Catagory from './page/Catagory'
import Login  from './page/Login'
import Adminlogin  from './page/Adminlogin'
import Adminpage  from './page/Adminpage'
import Bought  from './page/Bought'
const App = () => {
  return (
    <div>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adminpage' element={<Adminpage/>}/>
        <Route path='/bought' element={<Bought/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/shop'element={<Shop/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/catagory'element={<Catagory/>}/>
        <Route path='/sell'element={<Sell/>}/>
        <Route path='/delivery'element={<Delivery/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<Zitempage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
  )
}

export default App