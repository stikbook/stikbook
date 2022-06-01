import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { calculateFinalPrice } from "../../../redux/actions/calculateFInalPrice";
//import FinalPrice from "../finalPrice/finalPrice";
import {addQuantity} from "../../../redux/actions/productActions"


const AddRemoveProductCellRenderer = (props) => {
  const dispatch=useDispatch();
  const Total= useSelector((state)=>state.countTotal.total);

  const[rowId, setrowId]= useState();

  useEffect(() => {
    setrowId(props.ID)

  })
  // let data = useSelector((state) => state.finalPrice);
  // const RowData = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  // const price = useEffect(() => {
  //   RowData.map(element => {
  //     console.log(element.price)
  //     return element.price;
  //   });
  // });

   function handelDecrement(id) 
   {
    console.log(id)
    // RowData.forEach((element, index) => {
    //   setCount(count - 1);
    //   const price = element[index].price;
    //   data = dispatch(calculateFinalPrice({ count: count - 1, price: price }));
    // });
  }
  function handelIncrement(id) {
    
    dispatch(addQuantity(id));

//console.log(Total)

    //RowData.map(item=>console.log(item.id))
    
    //console.log(RowData)
    // RowData.forEach((element, index) => {
    //   setCount(count + 1);
    //   const price = RowData[index].price;
    //   data = dispatch(calculateFinalPrice({ count: count + 1, price: price }));
    // });
  }

  // const updatePrice = async () => {
  //   dispatch(setData(response.data));
  // };

  return (
    <>
      <button onClick={()=>{handelDecrement({rowId})}}>-</button>
      {/* {count} */}
      <label key={rowId}>{Total}</label>

      <button onClick={()=>{handelIncrement({rowId})}}>+</button>
      {/* {RowData.forEach((element, index) => {
      setCount(count + 1);
      const price = RowData[index].price;
      data = dispatch(calculateFinalPrice({ count: count + 1, price: price }));
      <FinalPrice price = {price}/>
      })} */}
    </>
  );
};

export default AddRemoveProductCellRenderer;
