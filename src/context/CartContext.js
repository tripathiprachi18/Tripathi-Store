import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useAuth0 } from "@auth0/auth0-react";
// import { useAuth0 } from "@auth0/auth0-react";

const CartContext = createContext();

const localStorageCart=()=>{
 
  let localCartData = localStorage.getItem("tripathiCart");
  if (localCartData.length == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
}
const initialState = {
  cart: localStorageCart(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isAuthenticated}=useAuth0();
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
const removeItem=(id)=>{
  return (dispatch({type:"REMOVE_ITEM",payload:id}));
}
const setDecrease = (id) => {
  dispatch({ type: "SET_DECREMENT", payload: id });
};

const setIncrement = (id) => {
  dispatch({ type: "SET_INCREMENT", payload: id });
};
const clearCart=()=>{
  dispatch({type: "CLEAR_CART"});
}
useEffect(() => {
  // dispatch({ type: "CART_TOTAL_ITEM" });
  dispatch({ type: "CART_TOTAL_PRICE_ITEM" });

 localStorage.setItem("tripathiCart", JSON.stringify(state.cart)) ;
}, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart,removeItem,setDecrease,setIncrement,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };