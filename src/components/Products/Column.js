import React from "react";
import { Link } from "react-router-dom";

const imageFormatter = ({ value }) => {
  return <img src={value} width="50px" height="50px" />;
};
const idLink = ({ value }) => {
  return <Link to={`/product/${value}`}> {value} </Link>;
};

export const Column = [
  {
    field: "id",
    headerName: "ID",
    cellRendererFramework: idLink,
    filter: "agTextColumnFilter",
  },
  {
    field: "title",
    headerName: "Title",
    cellRenderer: undefined,
    filter: "agTextColumnFilter",
  },

  {
    field: "image",
    headerName: "Image",
    cellRendererFramework: imageFormatter,
    filter: "agTextColumnFilter",
  },

  {
    field: "price",
    headerName: "Price",
    cellRenderer: undefined,
    filter: "agTextColumnFilter",
  },
  {
    field: "category",
    headerName: "Category",
    cellRenderer: undefined,
    filter: "agTextColumnFilter",
  },
];
