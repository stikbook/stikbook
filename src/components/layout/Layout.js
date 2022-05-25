import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from '../about/About';
import Home from '../home/Home';
import Nav from '../navbar/Nav';
import Contact from '../contact/Contact';
import Stores from '../stores/Stores';
import Deals from '../deals/Deals';
import Products from '../products/Products';
import ProductDetails from '../products/ProductDetails';



const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="stores" element={<Stores />} />
          <Route path="deals" element={<Deals />} />
          <Route path="products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout