import React,{useState} from 'react'
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { useProductContext } from '../context/ProductsContext';
import {FaTrash} from 'react-icons/fa'
import { useCartContext } from '../context/CartContext';
const CartItem = ({id,name,image,color,price,amount}) => {
    const {...state}=useProductContext();
    const {removeItem,setDecrease,setIncrement}=useCartContext();
    // const [amountNo, setAmountNo] = useState(1);
    // const {  stock } = product;
    // const setDecrement =() => {
    //   // amountNo > 1 ? setAmountNo(amountNo - 1) : setAmountNo(1);
    // };
  
    // const setIncrement = () => {
    //   // amountNo < stock ? setAmountNo(amountNo + 1) : setAmountNo(stock);
    // };
  return (
    <div className="cart_heading grid grid-five-column">
    <div className="cart-image--name">
      <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}></div>
        </div>
      </div>
    </div>
    {/* price   */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price} />
      </p>
    </div>

    {/* Quantity  */}
    <CartAmountToggle
      amount={amount}
      setDecrease={()=>setDecrease(id)}
      setIncrease={()=>setIncrement(id)}
    />

    {/* //Subtotal */}
    <div className="cart-hide">
      <p>
        <FormatPrice price={price * amount} />
      </p>
    </div>

    <div>
      <FaTrash className="remove_icon" onClick={()=>removeItem(id)} />
    </div>
  </div>
);
};

export default CartItem;