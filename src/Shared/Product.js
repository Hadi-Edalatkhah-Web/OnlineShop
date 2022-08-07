import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Functions
import { shorter, isInCart, quantityCounter } from "../Helper/Functions";

//Context
import { cartContext } from "../Context/CartContextProvider";

// Icon
import trashIcon from '../icons/trash.svg'
//Style
import styles from '../Styles/ProductStyle.module.css'

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <img className={styles.productImage}
        src={productData.image}
       
      />

      <h1>{shorter(productData.title)}</h1>
      <h3>{productData.category}</h3>
      <span className={styles.productPrice}>{productData.price}</span>
      <div>
     
        <div className={styles.links}>
        <Link to={`/store/${productData.id}`}>Details</Link>

        {isInCart(state, productData.id) ? 
        
        (
          <div className={styles.buttons}>
          
          {quantityCounter(state , productData.id) === 1  ? 
            <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })}>
            <img src={trashIcon} style={{width:"10px"}}/>
            </button>     : 
            
            <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}>
            -
            </button> } 

           <span>{quantityCounter(state , productData.id)}</span>

           <button
              onClick={() => dispatch({ type: "INCREASE", payload: productData })}> + 
            </button>
          
            
          </div>) 
        
        : 
        
        (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to cart
          </button>
        )}
        </div>
       
      </div>
     
    </div>
  );
};

export default Product;
