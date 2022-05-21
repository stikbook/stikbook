import React, { useState } from 'react'
import { Button } from '@mui/material'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'cream donut',
    price: 3
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }  
]

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

const Deals = () => {
      const [cart,setCart] = useState([]);
      const [total,setTotal] = useState(0);

      function getTotal(total) {
          return total.toLocaleString(total, currencyOptions)
      }

      function add(product){
        setCart(current => [...current, product.name])
        setTotal(current => current+product.price)
      }

      return (
        <div className="wrapper">
          <div>
            Shopping Cart: {cart.length} total items.
          </div>

          <div>
            Total: {getTotal(total)}
          </div>
          <div>
                {products.map(product=>
                (
                  <div key={product.name}>
                  <div className="product"><span role="img" aria-label={product.name}>{product.emoji}</span></div>
                  <Button variant="contained" onClick={()=>add(product)}>Add</Button> 
                  <Button variant="contained">Remove</Button>
                  </div>))
                }
          </div>

        </div>
      )
}

export default Deals