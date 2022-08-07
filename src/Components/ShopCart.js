import React, { useContext } from "react";
import { Link  } from "react-router-dom";
import { cartContext } from "../Context/CartContextProvider";
import { ProductContext } from "../Context/ProductContextProvider";
import Cart from "../Shared/Cart";

import styles from "../Styles/ShopCart.module.css";
const ShopCart = () => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      <div className={styles.peyment}>
        total items : {state.itemsCounter}
        <span>total payments : {state.total} $</span>
        <div className={styles.buttons}>
          <button onClick={() => dispatch({ type: "CHECKOUT" })}>
            Check Out
          </button>
          <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
        </div>
        <div>
        {
                state.checkout && <div  className={styles.links} >
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div  className={styles.links}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
