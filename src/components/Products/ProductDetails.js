import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  } from "../../redux/actions/productActions";

import '../../App.css'

const ProductDetails = () => {

  const { productId } = useParams();

  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
   
  }, [productId]);
  return (
    <div className="App">
              <div>
                <img src={image} style={{ height: 200, width: 200}} />
              </div>
              <div>
                <h1>{title}</h1>
                <h2>
                  <a>${price}</a>
                </h2>
                <h3>{category}</h3>
                <p>{description}</p>
               
              </div>
         
       
   
    </div>
  );
};

export default ProductDetails;
