import React, { useContext } from 'react';
import {cartContext} from '../Context/CartContextProvider';
import { ProductContext } from '../Context/ProductContextProvider';
import { shorter } from '../Helper/Functions';
import trashIcon from '../icons/trash.svg'

import styles from '../Styles/Cart.module.css'
const Cart = ({data}) => {
    const {dispatch}=useContext(cartContext)
    return (
        <div className={styles.container}>
            <img src={data.image} style={{width:"50px"}}/>
            <div>
               <h3>
               {shorter(data.title)}
               </h3>
                <span className={styles.productPrice}>{data.price} $</span>
            </div>
            {data.quantity}

            {
                    data.quantity > 1 ?
                    <button className={styles.buttons} onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button> :
                    <button className={styles.buttons} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trashIcon} alt="trash" style={{width: "20px"}} /></button>
                }
            {
                <button className={styles.buttons}  onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            }
        </div>
    );
};

export default Cart;