import React, { useContext } from "react";

//Context
import {ProductContext} from "../Context/ProductContextProvider";
//Componenets
import Product from "../Shared/Product";

//Style
// import  '../Styles/Scss/StoreStyle.css'
import styles from '../Styles/StoreStyle.module.css'
const Store = () => {
    const products = useContext(ProductContext);
    return (

        <div className={styles.container}> 
        {products.map((item) => (
          <Product key={item.id} productData={item} />
        ))}
     
       
       
      </div>
    );
  };
export default Store;