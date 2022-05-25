import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Column } from './Column';

const ProductComponent = () => {

  const RowData= useSelector((state)=>state.allProducts.products);
  const[rowData, setrowData]= useState();
  const[columnDefs, setcolumnDefs]= useState();

  useEffect(() => {
    setcolumnDefs(Column)
    setrowData(RowData)
  });

  
   return(
      <div className="ag-theme-alpine" style={{height: 1000, width: 1000}}>
        <AgGridReact
          rowData={rowData} 
          columnDefs={columnDefs}>
         </AgGridReact>
      </div>

   );
}
export default ProductComponent;