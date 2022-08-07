import React, { useReducer, createContext, Children } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  tottal: 0,
  checkOute: false,
};


const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total}
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false
      };
      case "REMOVE_ITEM":
        const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
        const indexR = state.selectedItems.findIndex(
            (item) => item.id === action.payload.id
          );
          state.selectedItems[indexR].quantity--;
        return {
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(state.selectedItems),
     

        }
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      
      return {
        ...state,
        
        ...sumItems(state.selectedItems)
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        tottal: 0,
        checkOute: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        tottal: 0,
        checkOute: false,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  // in dispatch we have to specify type and give it payload
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
