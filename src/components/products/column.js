
import AddRemoveProductCellRenderer from "./productCount/addRemoveProduct";
//import FinalPriceRenderer from "./finalPrice/finalPrice"
import { Link } from "react-router-dom";

const imageFormatter = ({ value }) => {
  return <img src={value} width="50px" height="50px" />;
};
const idLink = ({ value }) => {
  return <Link to={`/product/${value}`}> {value} </Link>;
};

const AddRemoveProduct = ({ value }) => {
  return <AddRemoveProductCellRenderer ID={value}></AddRemoveProductCellRenderer>
};

export const Column = {
  columnDefs: [
    {
      field: "id",
      headerName: "ID",
      cellRenderer: idLink,
      filter: "agTextColumnFilter",
    },
    {
      field: "title",
      headerName: "Title",
      filter: "agTextColumnFilter",
    },

    {
      field: "image",
      headerName: "Image",
      cellRenderer: imageFormatter,
      filter: "agTextColumnFilter",
    },

    {
      field: "price",
      headerName: "Price",
      
      filter: "agTextColumnFilter",
    },
    {
      field: "category",
      headerName: "Category",
      
      filter: "agTextColumnFilter",
    },
    {
      //field: "count",
      field: "id",
      headerName: "Count",
      cellRenderer: AddRemoveProduct,
      filter: "agTextColumnFilter",
    },
    // {
    //   field: "finalPrice",
    //   headerName: "Final Price",
    //   cellRenderer: FinalPriceRenderer,
    //   filter: "agTextColumnFilter",
    // },
  ],
   frameworkComponents: {
     //addRemoveProductCellRenderer: AddRemoveProductCellRenderer,
  //   FinalPriceRenderer: FinalPriceRenderer,
  },
};

