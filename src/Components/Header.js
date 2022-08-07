import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContextProvider';

import { quantityCounter } from '../Helper/Functions';
import shopIcon from '../icons/shop.svg'

import styles from '../Styles/Header.module.css'
const Header = () => {
    const {state}=useContext(cartContext);
    
    return (
        <div className={styles.container}>
            <Link to={'/store'}>Products</Link>
            <Link to={'/shopCart'}>
                <img src={shopIcon} width={{with:"15px"}}/>
                {
                    state.itemsCounter
                }
            </Link>
        </div>
    );
};

export default Header;