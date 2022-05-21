import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/stores">Stores</Link>
        </li>
        <li>
          <Link to="/deals">Deals</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Nav