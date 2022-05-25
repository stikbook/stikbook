import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from '../about/about';
import Home from '../home/home';
import Nav from '../nav/nav';
import Contact from '../contact/contact';
import Stores from '../stores/stores';
import Deals from '../deals/deals';
import Products from '../products/products';
import ProductDetails from '../products/productDetails';


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