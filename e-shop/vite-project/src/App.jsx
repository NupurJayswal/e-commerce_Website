import React,{useState} from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilterData from './pages/FilterData'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login'
import ProductDetail from './pages/ProductDetail'



function App() {
  const [order,setOrder] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/shop" element = {<Shop/>}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        <Route path = "/checkout" element = {<Checkout setOrder={setOrder}/>}></Route>
        <Route path = "/order-confirmation" element = {<Order order={order}/>}></Route>
        <Route path = "/filter-data" element = {<FilterData/>}></Route>
        <Route path = "/product/:id" element = {<ProductDetail/>}></Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <Footer/>
     
    </BrowserRouter>
      
    </>
  )
}

export default App
