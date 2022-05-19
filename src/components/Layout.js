import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Contact from './Contact';
import Stores from './Stores';
import Deals from './Deals';

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout