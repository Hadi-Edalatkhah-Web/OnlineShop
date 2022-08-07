import React, { useContext } from "react";
import { useParams } from "react-router-dom";


import { ProductContext } from "../Context/ProductContextProvider";
import { Link } from "react-router-dom";

import  styles from '../Styles/ProductDetail.module.css'
const ProductDetails = (props) => {
  // in react router dom v5.2.0 we can get with this code ==> const id=props.match.params.id
  // But in react router dom v6  we have to use useParams like this

  const { id } = useParams();
 
  const products = useContext(ProductContext);
  const product = products[id - 1];

  return (
    <div className={styles.container}>
      <div className={styles.product}>
      <img src={product.image} className={styles.productImage}/>
      <div className={styles.productDetails}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p><span style={{color:"greenyellow"}}>Category :</span> {product.category}</p>

        <div>
        <h5>{product.price} $</h5>
          <Link to={"/store"}>Back to shop</Link>
        </div>
       
      </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
