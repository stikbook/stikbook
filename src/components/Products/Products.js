import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { setProducts } from '../../redux/actions/productActions';

export const Products = () => {
    const dispatch=useDispatch();
  const fetchProducts=async()=>
  {
      const response =await axios.get("https://fakestoreapi.com/products");      
      dispatch(setProducts(response.data));
  };
useEffect(()=>
{
fetchProducts();
},[])
  return (
    <div>  
<ProductComponent>
    </ProductComponent>
            </div>
  )
}
export default Products;