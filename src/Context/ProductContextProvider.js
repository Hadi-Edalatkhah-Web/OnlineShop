import React, { useState, useEffect, createContext } from "react";

//API
import { getProducts } from "../Services/Api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  //////////////////////////////////////// States ////////////////////////////
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
      //    console.log("ProductContextProvider")
    };
    fetchAPI();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
